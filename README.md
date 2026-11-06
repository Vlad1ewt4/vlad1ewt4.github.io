# Vladislav Kurmanaev — portfolio

Static portfolio for GitHub Pages. No build step or third-party runtime dependencies.

## Pages

- `index.html`: bilingual portfolio; product projects appear first.
- `case.html?id=manager`: original CRM interface prototype with public design rationale and proposed validation.
- `case.html?id=mirem`: existing e-commerce work with decision rationale and a measurement plan.
- `catalog-case.html`: English case study for Catalog Desk.
- `catalog-app.html`: working Catalog Desk concept, with a seven-product synthetic dataset.

## Preview

Serve this directory with any static HTTP server, for example `python -m http.server 8000`.

## Catalog Desk scope

Catalog Desk is a self-initiated, AI-assisted portfolio exploration, not commissioned work or a released merchant product. Suggestions are predetermined, product data is synthetic, and all changes remain in memory for the current page session. No model, store, account, supplier or analytics service is connected. Reload or Reset demo restores the dataset.

The prototype demonstrates:

1. Product search, review-state filters, an empty result and filter reset.
2. Source facts alongside an editable proposed correction.
3. Required fields and explicit source-check confirmation.
4. Simulated save failure, retained edits and retry.
5. Information requests as a separate waiting state; no messages are sent.
6. Activity history, undo, keyboard dismissal and focus restoration.

Case-study research and pilot metrics are proposals. Do not describe them as completed research or measured business results. CSS tokens and reusable coded patterns are inspectable, but are not evidence of a Figma component library or a production design system.

Original project dates and titles remain in the CV. Confidential client metrics are omitted. Review all materials personally before using them in interviews.

## Verification performed

JavaScript syntax and local-resource checks; interactive browser checks for invalid input, draft application, save failure/retry, undo, missing source information, filters, empty results, activity, Escape and returned keyboard focus. Home, case and prototype were visually checked at desktop and 390px mobile width, including EN/RU switching on the home page. This is implementation QA, not a usability study or accessibility certification.
