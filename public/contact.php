<?php
// Flat Six Media — consultation form handler.
// Receives a JSON POST from the consultation dialog and emails the submission.

header('Content-Type: application/json; charset=UTF-8');
header('Cache-Control: no-store, max-age=0');
header('X-Content-Type-Options: nosniff');

// --- Config ---
$TO   = 'schedule@flatsix.media';                 // where submissions are sent
$FROM = 'Flat Six Media <noreply@flatsix.media>'; // domain From (SPF-aligned)

// --- Only accept POST ---
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed.']);
    exit;
}

// --- Accept the JSON request made by the site only ---
// Requiring JSON blocks ordinary cross-site form posts; rate limiting below also
// protects the mail handler from direct automated requests.
$contentType = strtolower(trim(explode(';', $_SERVER['CONTENT_TYPE'] ?? '')[0]));
if ($contentType !== 'application/json') {
    http_response_code(415);
    echo json_encode(['ok' => false, 'error' => 'Unsupported media type.']);
    exit;
}

$raw = file_get_contents('php://input', false, null, 0, 16385);
if ($raw === false || strlen($raw) > 16384) {
    http_response_code(413);
    echo json_encode(['ok' => false, 'error' => 'Request is too large.']);
    exit;
}

try {
    $data = json_decode($raw, true, 8, JSON_THROW_ON_ERROR);
} catch (JsonException $exception) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid request.']);
    exit;
}

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid request.']);
    exit;
}

// Strip CR/LF to prevent email header injection.
function clean($v) {
    return trim(str_replace(["\r", "\n", "\0", "%0a", "%0d"], '', (string) $v));
}

// Allow five valid submissions per IP address per hour. State is capped at
// 1,000 active IPs and expired entries are removed on every valid request.
function contactRateLimitExceeded() {
    $ip = $_SERVER['REMOTE_ADDR'] ?? '';
    $directory = __DIR__ . DIRECTORY_SEPARATOR . '.contact-rate-limit';
    if (!is_dir($directory) || !is_writable($directory)) {
        return true;
    }

    $file = $directory . DIRECTORY_SEPARATOR . 'rate-limits.json';
    $handle = @fopen($file, 'c+');

    if ($handle === false || !flock($handle, LOCK_EX)) {
        if (is_resource($handle)) {
            fclose($handle);
        }
        return true;
    }

    $now = time();
    $state = json_decode(stream_get_contents($handle), true);
    $rates = is_array($state['rates'] ?? null) ? $state['rates'] : [];
    foreach ($rates as $key => $rate) {
        if (!is_array($rate) || (int) ($rate['expires_at'] ?? 0) <= $now) {
            unset($rates[$key]);
        }
    }

    $ipKey = hash('sha256', $ip);
    $limited = false;
    if (!isset($rates[$ipKey]) && count($rates) >= 1000) {
        $limited = true;
    } else {
        $rate = $rates[$ipKey] ?? ['count' => 0, 'expires_at' => $now + 3600];
        $rate['count'] = (int) ($rate['count'] ?? 0) + 1;
        $rates[$ipKey] = $rate;
        $limited = $rate['count'] > 5;
    }

    $encoded = json_encode(['rates' => $rates]);
    $saved = $encoded !== false
        && rewind($handle)
        && ftruncate($handle, 0);
    $written = $saved ? fwrite($handle, $encoded) : false;
    $saved = $saved && $written === strlen($encoded) && fflush($handle);
    flock($handle, LOCK_UN);
    fclose($handle);

    return !$saved || $limited;
}

$name    = clean($data['name'] ?? '');
$email   = clean($data['email'] ?? '');
$company = clean($data['company'] ?? '');
$service = clean($data['service'] ?? '');
$decision = trim(str_replace("\0", '', (string) ($data['decision'] ?? ''))); // decision can keep line breaks
$decision = str_replace(["\r\n", "\r"], "\n", $decision);
$hp      = clean($data['company_website'] ?? '');         // honeypot (should be empty)

// --- Honeypot: silently succeed for bots ---
if ($hp !== '') {
    echo json_encode(['ok' => true]);
    exit;
}

// --- Validate ---
if (
    $name === '' ||
    strlen($name) > 120 ||
    !filter_var($email, FILTER_VALIDATE_EMAIL) ||
    strlen($email) > 254 ||
    strlen($company) > 160 ||
    strlen($service) > 120 ||
    $decision === '' ||
    strlen($decision) > 8000
) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Please provide your name, a valid work email, and a brief description of the decision or issue.']);
    exit;
}

if (contactRateLimitExceeded()) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'error' => 'Too many requests. Please try again later.']);
    exit;
}

// --- Compose ---
$subject = 'Website Inquiry: ' . ($service !== '' ? $service : 'General');
$body    = "New consultation request from flatsix.media\n\n"
         . "Name:    {$name}\n"
         . "Email:   {$email}\n"
         . "Company: " . ($company !== '' ? $company : '—') . "\n"
         . "Area:    " . ($service !== '' ? $service : 'Not specified') . "\n\n"
         . "Decision / opportunity / issue:\n{$decision}\n";

$headers  = "From: {$FROM}\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// --- Send ---
$ok = @mail($TO, $subject, $body, $headers);

if ($ok) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Could not send. Please email us directly.']);
}
