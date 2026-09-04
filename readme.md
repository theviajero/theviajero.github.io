# theviajero.github.io — CV of Victor Hernandez

**Live site:** https://theviajero.github.io/ (English) · https://theviajero.github.io/index_es.html (Spanish)
**PDFs:** https://theviajero.github.io/CVVic.pdf · https://theviajero.github.io/CVVices.pdf

## What is where

| Path | Purpose |
|---|---|
| `index.html` | English CV. One self-contained page; the CSS is inline in `<style>`. |
| `index_es.html` | Spanish CV. **Keep both pages in sync** — every content change goes in both. |
| `CVVic.pdf`, `CVVices.pdf` | Print exports of the two pages. Generated files: never edit by hand. |
| `make-pdfs.sh` | Regenerates both PDFs with headless Chrome. |
| `css/`, `js/`, `img/`, `blog/`, `calculator/`, `pomodoro/`, `quotes/`, `weather/` | Legacy content from 2015, not linked from the CV. Safe to ignore. |

## How to update the CV

1. Edit `index.html` and `index_es.html`. The content lives inside `<div id="content">`; contact links appear twice (the `print-only` header used by the PDF, and "About me"), so change them in both places. The PDF layout is the `@media print` block at the end of `<style>`.
2. Preview locally: `open index.html`, or `python3 -m http.server` and browse to http://localhost:8000/.
3. Regenerate the PDFs: `./make-pdfs.sh` (needs Google Chrome; ~10 s). Each PDF should stay at 2 pages — the script prints the page count.
4. Commit and push to `master` (see Deploy).

## Deploy

GitHub Pages publishes the **`master` branch, root folder** (repository Settings → Pages). Anything pushed to `master` is live about a minute later:

```bash
git add -A
git commit -m "Update CV"
git push origin master
```

Verify: `curl -s https://theviajero.github.io/ | grep -o '<title>[^<]*'` should show the new title, and the build appears under https://github.com/theviajero/theviajero.github.io/deployments.

`gh-pages` is an old branch that is **not** published; work on `master`.

## Notes

- "Enforce HTTPS" is off in the Pages settings. Turning it on is recommended; the site already answers on https.
- Working notes, the achievements bank and the change history live outside this public repo.
