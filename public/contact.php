<?php
// Flat Six Media — consultation form handler.
// Receives a JSON POST from the booking dialog and emails the submission.

header('Content-Type: application/json');

// --- Config ---
$TO   = 'schedule@flatsix.media';                 // where submissions are sent
$FROM = 'Flat Six Media <noreply@flatsix.media>'; // domain From (SPF-aligned)

// --- Only accept POST ---
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed.']);
    exit;
}

// --- Parse body (JSON, falling back to form-encoded) ---
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

// Strip CR/LF to prevent email header injection.
function clean($v) {
    return trim(str_replace(["\r", "\n", "%0a", "%0d"], '', (string) $v));
}

$name    = clean($data['name'] ?? '');
$email   = clean($data['email'] ?? '');
$company = clean($data['company'] ?? '');
$notes   = trim((string) ($data['notes'] ?? ''));        // notes can keep line breaks
$notes   = str_replace(["\r\n", "\r"], "\n", $notes);
$hp      = clean($data['company_website'] ?? '');         // honeypot (should be empty)

// --- Honeypot: silently succeed for bots ---
if ($hp !== '') {
    echo json_encode(['ok' => true]);
    exit;
}

// --- Validate ---
if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Please provide your name and a valid email.']);
    exit;
}

// --- Compose ---
$subject = 'Consultation Request for Flat Six Media';
$body    = "New consultation request from flatsix.media\n\n"
         . "Name:    {$name}\n"
         . "Email:   {$email}\n"
         . "Company: " . ($company !== '' ? $company : '—') . "\n\n"
         . "Notes:\n" . ($notes !== '' ? $notes : '—') . "\n";

$headers  = "From: {$FROM}\r\n";
$headers .= "Reply-To: {$name} <{$email}>\r\n";
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
