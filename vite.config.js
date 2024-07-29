import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// // import { defineConfig } from 'vite';

// export default defineConfig({
//   server: {
//     middlewareMode: true,
//     configureServer: (server) => {
//       server.middlewares.use((req, res, next) => {
//         try {
//           console.log("Incoming request URL:", req.url);
//           decodeURI(req.url); // Check if the URI is malformed
//         } catch (e) {
//           console.error("Malformed URI:", req.url);
//         }
//         next();
//       });
//     },
//   },
// });
