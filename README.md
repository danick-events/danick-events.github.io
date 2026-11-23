# Christmas Eve 2026 — Daniel, Victoria & Sherlock

A single-page invitation + RSVP site for the family Christmas Eve party
(24 December 2026, 18:00, Saltsjö-Boo).

- Static site, no build step — plain HTML/CSS/JS
- Bilingual: English / Portuguese (toggle in the header)
- Built-in Christmas music ("Jingly Bells" by Scott Holmes, Free Music Archive, CC BY-NC — `assets/jinglebells.mp3`)
- RSVPs are collected through **Google Forms** (responses land in a Google Sheet)
- Hosted on **GitHub Pages**

## Preview locally

```bash
cd danick-events
python3 -m http.server 8000
# open http://localhost:8000
```

Until the Google Form is connected (see below), the page shows an
"RSVP opening soon" notice — that's expected.

## Connect the RSVP form (Google Forms, ~10 minutes)

The site submits the form directly to a Google Form behind the scenes, so
guests never leave the page and every answer lands in a spreadsheet you own.

### 1. Create the Google Form

1. Go to <https://forms.google.com> and create a blank form, e.g. "Christmas Eve 2026 RSVP".
2. Add these questions with these **exact** types and options:

   | Question | Type | Options | Required |
   |---|---|---|---|
   | Your name | Short answer | — | Yes |
   | Will you join us on Christmas Eve? | Multiple choice | `Yes`, `No` | Yes |
   | Number of guests (including you) | Dropdown | `1` `2` `3` `4` `5` `6` | No |
   | Dietary restrictions or allergies | Paragraph | — | No |
   | Message or Christmas song request | Paragraph | — | No |

   > The multiple-choice option texts must match the values the site sends
   > (the English ones above), otherwise Google silently drops the answer.
3. In **Settings**: turn OFF "Collect email addresses". Keep "Limit to 1
   response" off unless you want guests to need a Google account.
4. In the **Responses** tab, click **Link to Sheets** so all answers are
   collected in a Google Sheet you can watch.

### 2. Get the form ID and field IDs

1. In the form editor, click the **⋮ (three dots) menu → Get pre-filled link**.
2. Fill in dummy answers for every question and click **Get link → Copy link**.
3. The link looks like:

   ```
   https://docs.google.com/forms/d/e/1FAIpQLSeAbC...XYZ/viewform?usp=pp_url
     &entry.111111111=Test+Name
     &entry.222222222=Yes
     &entry.333333333=2
     ...
   ```

4. Copy the long ID between `/d/e/` and `/viewform` — that's your `formId`.
5. Each `entry.XXXXXXXXX` corresponds to one question, in the order the
   dummy values appear. Match them to the fields.

### 3. Paste the IDs into `js/config.js`

```js
const RSVP_CONFIG = {
  formId: "1FAIpQLSeAbC...XYZ",
  fields: {
    name:      "entry.111111111",
    attending: "entry.222222222",
    guests:    "entry.333333333",
    dietary:   "entry.444444444",
    message:   "entry.555555555",
  },
};
```

### 4. Test it

1. Serve the page locally, fill in the RSVP form and submit.
2. Check the Google Form's **Responses** tab (or the linked Sheet) — the test
   answer should appear within seconds.
3. Commit and push `js/config.js` so the live site gets it too.

> Note: the form ID and entry IDs are not secrets — they're visible to anyone
> who knows the form link anyway. Committing them is fine.

## Deploy to GitHub Pages

If the repo was created with the `gh` CLI, this is already done. Otherwise:

```bash
git init -b main
git add .
git commit -m "Christmas Eve 2026 invitation"
gh repo create danick-events --public --source=. --push
# enable Pages on the main branch (root):
gh api repos/{owner}/danick-events/pages -X POST -f "source[branch]=main" -f "source[path]=/"
```

Or via the web: create the repo on github.com, push, then
**Settings → Pages → Build and deployment → Deploy from a branch → main / (root)**.

The site will be live at `https://<your-username>.github.io/danick-events/`
within a minute or two.

## File overview

| File | Purpose |
|---|---|
| `index.html` | The whole page (hero, party details, RSVP form) |
| `css/style.css` | Christmas theme, responsive layout, snow animation |
| `js/main.js` | Language toggle (EN/PT), countdown, snow, music player, form submission |
| `js/config.js` | **You edit this**: Google Form ID + entry IDs |
