# Personal Portfolio Website

**A bilingual portfolio and data-services website built with HTML, CSS, and JavaScript.**

This repository contains the frontend for [dpasternak.com](https://dpasternak.com/), the professional website of Ing. Dempsey Pasternak, a Prague-based data analyst and automation consultant. It presents my background, technical projects, and services in data collection, quality improvement, entity resolution, statistical analysis, and workflow automation.

The website is a **static, multi-page frontend** with English and Czech versions. It does not require a JavaScript framework, a build process, or a custom application backend.

## Features

- **English and Czech content:** Corresponding pages and navigation in both languages, with Czech pages under `/cs/`.
- **Five service areas:** Dedicated pages explaining the problems addressed, methods used, and potential outcomes.
- **Selected projects:** Case studies showing end-to-end analytical work, including housing-listing deduplication and residential market analysis.
- **Responsive interface:** Desktop and mobile navigation, dropdown menus, and a service-card carousel on the homepage.
- **Project enquiry form:** Contact forms in both languages, submitted to **Formspree**, plus a direct email link.
- **Search visibility:** Page-specific metadata, canonical URLs, English/Czech `hreflang` links, structured data, `sitemap.xml`, `robots.txt`, and `llms.txt`.
- **Analytics:** Google Analytics via `gtag.js`.

## Pages and content

| Section | English | Czech |
| --- | --- | --- |
| Homepage | `/` (`index.html`) | `/cs/index.html` |
| Services overview | `/services.html` | `/cs/sluzby.html` |
| Selected projects | `/selected-work.html` | `/cs/projekty.html` |
| About | `/about.html` | `/cs/o-mne.html` |
| Contact | `/contact.html` | `/cs/kontakt.html` |

Each language also has five individual service pages:

1. **Data Collection & Mining** — web scraping, APIs, and structured data extraction.
2. **Data Cleaning & Quality** — validation, standardization, and preparation of imperfect datasets.
3. **Entity Resolution & Matching** — record linkage, duplicate detection, and reconciliation of entity-level records.
4. **Data Analysis & Insights** — statistical modelling, exploratory analysis, and interpretation.
5. **Data & Reporting Automation** — repeatable data-processing and reporting workflows.

The **Selected Work** section currently features a browser-based entity-resolution demonstration for SReality listings, the underlying study of duplicate housing advertisements, and a Lisbon residential market analysis.

## Technologies

| Technology | Use |
| --- | --- |
| HTML5 | Page structure, content, forms, and metadata |
| CSS3 | Styling, responsive layouts, and page-specific components |
| Vanilla JavaScript | Navigation, language-state highlighting, and interactive UI elements |
| Formspree | Contact-form submissions |
| Google Analytics | Website traffic measurement |
| Google Fonts | DM Sans and Manrope typography |

The uploaded frontend contains **no `package.json` or application build tooling**. The site's public pages can be served directly as static files.

## Project structure

```text
frontend/
├── index.html                 # English homepage
├── services.html              # Services overview
├── selected-work.html         # Featured projects
├── about.html                 # Background and approach
├── contact.html               # Project enquiry form
├── services/                  # Five English service pages
│   ├── data-collection.html
│   ├── data-cleaning.html
│   ├── entity-resolution.html
│   ├── data-analysis.html
│   └── data-automation.html
├── cs/                        # Czech-language pages
│   ├── index.html
│   ├── sluzby.html
│   ├── projekty.html
│   ├── o-mne.html
│   ├── kontakt.html
│   └── sluzby/                 # Five Czech service pages
├── assets/
│   ├── css/                   # Shared and page-specific stylesheets
│   ├── services/              # Service-page stylesheets
│   └── js/                    # Language and navigation scripts
├── favicon.png
├── sitemap.xml
├── robots.txt
├── llms.txt
└── 404.html
```

Some navigation and carousel behavior is also implemented in inline JavaScript within the HTML pages.

## Run locally

No package installation is necessary to preview the static website. **Serve the `frontend` directory as the website root**, because the HTML uses root-relative paths such as `/assets/css/styles.css`.

From the repository root (assuming it contains the `frontend/` folder):

```bash
python -m http.server 8000 --directory frontend
```

Open [http://localhost:8000](http://localhost:8000) for the English homepage, or [http://localhost:8000/cs/index.html](http://localhost:8000/cs/index.html) for the Czech homepage.

If your repository root **is** the frontend folder, run `python -m http.server 8000` from that directory instead.

## Deployment

The frontend is compatible with static hosting services such as **Firebase Hosting**. The supplied `frontend/` archive does **not** include `firebase.json` or `.firebaserc`, so Firebase project configuration must be provided separately.

For a new Firebase Hosting setup, install the Firebase CLI, authenticate, and initialize Hosting:

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

When prompted, set the public directory to **`frontend`** if it is a subdirectory of the repository root (or `.` if the repository root contains the site files). Configure the site as a **multi-page website**, not a single-page app, and avoid overwriting the existing `index.html`.

Deploy with:

```bash
firebase deploy --only hosting
```

The production domain shown in the source is [dpasternak.com](https://dpasternak.com/).

## Configuration and external services

Before reusing the frontend for another site, update the following values in the HTML and supporting files:

- **Domain and SEO URLs:** Canonical links, `hreflang` references, structured data, `sitemap.xml`, `robots.txt`, and `llms.txt`.
- **Contact endpoint:** The Formspree form action in both contact pages. Submission depends on that external service and an appropriately configured form.
- **Analytics:** The Google Analytics measurement ID (`G-TYFGZDTXVV`) embedded in the page headers.
- **Identity and outbound links:** Contact email, GitHub, LinkedIn, and external project links.

The site is frontend-only; the contact form is handled by Formspree rather than by a backend contained in this repository. A local static server can preview the form but does not itself process submissions.

## Status

**Personal portfolio — 2026.** The repository contains the site's frontend source, including both language versions, service descriptions, project case studies, and contact pages. The site is intended to communicate technical work in an accessible, business-facing format.
