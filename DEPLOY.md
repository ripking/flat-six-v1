# Deployment

This site auto-deploys to **Hostinger** on every push to `main`.

```
edit code → git commit → git push → GitHub Actions → next build (out/) → rsync over SSH → https://flatsix.media
```

Typical time from push to live: **~40 seconds**.

## How it works

- **Build:** `next build` with `output: 'export'` (see `next.config.ts`) produces a
  static `out/` folder — plain HTML/CSS/JS, no Node server needed.
- **Deploy:** the workflow `.github/workflows/deploy.yml` rsyncs `out/` to the
  server over SSH and mirrors it with `--delete` (stale files are pruned).
- **Why SSH, not FTP:** Hostinger blocks FTP/FTPS from cloud/CI IP ranges
  (connections time out), so deploys go over SSH instead.

## Server details

| Setting | Value |
| --- | --- |
| Host | `82.198.236.7` (origin IP — the domain resolves to Hostinger's CDN, which does not pass FTP/SSH-by-name reliably) |
| SSH port | `65002` |
| SSH user | `u128742652` |
| Web root | `/home/u128742652/domains/flatsix.media/public_html` |

## Secrets (GitHub → Settings → Secrets and variables → Actions)

| Secret | Purpose |
| --- | --- |
| `SSH_PRIVATE_KEY` | Private half of the deploy keypair. The matching public key is registered in hPanel → Advanced → SSH Access. |

## Common tasks

- **Make a content change:** edit files in `src/` (or copy in `content.json`),
  then `git commit` and `git push`. That's it.
- **Manual redeploy:** GitHub → Actions → "Build and Deploy to Hostinger" →
  Run workflow.
- **Local preview:** `npm install` then `npm run dev` (http://localhost:3000),
  or `npm run build && npx serve out` to preview the exact static output.

## Rotating the deploy key

1. Generate a new keypair: `ssh-keygen -t ed25519 -f deploykey -N ""`
2. Add `deploykey.pub` in hPanel → Advanced → SSH Access → Manage SSH keys (activate it).
3. Update the secret: `gh secret set SSH_PRIVATE_KEY < deploykey`
4. Remove the old public key from hPanel and delete the local files.
