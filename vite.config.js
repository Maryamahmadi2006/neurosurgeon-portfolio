import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' makes all asset URLs relative so the build works when hosted
// from any sub-path (e.g. GitHub Pages project sites) as well as the root.
export default defineConfig({ base: './', plugins: [react()] });
