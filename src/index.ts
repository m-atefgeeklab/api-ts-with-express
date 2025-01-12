import express, { urlencoded, json, Request, Response } from "express";
import authRoutes from "./Routes/auth.routes";
import config from "./config/env_file";
import connectDB from "./config/connect_db";

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

// Ensure authRoutes is properly mounted
app.use("/auth", authRoutes);

app.listen(config.port, async () => {
  await connectDB();
  console.log(`Server is running on http://localhost:${config.port}`);
});

// const fs = require("fs");
// const path = require("path");
// const { exec } = require("child_process");

// // Playlist URL
// const playlistUrl =
//   "https://www.youtube.com/playlist?list=PLEe8jzHjtRiRQWZugdORFlqCGh18fwnSz";

// // Output directory for videos
// const outputDir = path.join(__dirname, "downloads");

// // Ensure the output directory exists
// if (!fs.existsSync(outputDir)) {
//   fs.mkdirSync(outputDir);
// }

// const execPromise = (command) => {
//   return new Promise((resolve, reject) => {
//     exec(command, { shell: true }, (error, stdout, stderr) => {
//       if (error) {
//         console.error(
//           `Command failed with exit code ${error.code}: ${
//             stderr || error.message
//           }`
//         );
//         return reject(new Error(stderr || error.message));
//       }
//       resolve(stdout);
//     });
//   });
// };

// // Download playlist
// async function downloadPlaylist(playlistUrl) {
//   try {
//     console.log("Starting playlist download...");

//     // Construct the yt-dlp command
//     const command = `yt-dlp -o "${path.join(
//       outputDir,
//       "%(title)s.%(ext)s"
//     )}" -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best" --merge-output-format mp4 --no-continue "${playlistUrl}"`;

//     console.log(`Executing command: ${command}`);

//     // Execute the command
//     await execPromise(command);

//     console.log("All videos downloaded!");
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// }

// // Start downloading
// downloadPlaylist(playlistUrl);


// "youtube-dl-exec": "^3.0.12",
//     "ytdl-core": "^4.11.5",
//     "ytpl": "^2.3.0"
