# Dr. Khalid Khan Zadran — Neurosurgeon Portfolio

Responsive React + Vite portfolio with English, Dari, and Pashto language switching.

## Requirements
- Node.js 18 or newer
- npm

## Run locally
1. Extract this ZIP archive.
2. Open the extracted `neurosurgeon-portfolio` folder in VS Code.
3. Open a terminal in that folder and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL shown by Vite.

## Main routes
- `/` — Home
- `/about` — Professional profile, photos, credentials
- `/services` — Service overview
- `/appointment` — Demonstration appointment form (no backend; does not send or store information)
- `/contact` — Clinic contact information

## Notes
- The home hero uses `public/images/doctor-cutout.png`, cropped to the visible portrait so the transparent margins do not make the image appear tiny.
- The brain/anatomy section is a full, large feature section directly after the service strip.
- The About page includes professional profile details, a photo gallery, credentials placeholders, and an appointment call-to-action.
- Credentials and memberships are intentionally marked for confirmation rather than presented as verified facts.
- Appointment submissions are a front-end demonstration only.

## Build
Run `npm run build` after dependencies are installed.
