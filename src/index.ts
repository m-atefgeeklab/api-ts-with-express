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
// const notifier = require("node-notifier");
// require("dotenv").config();

// // Load configuration from environment variables or default values
// const playlistFile = process.env.PLAYLIST_FILE || "playlists.txt";
// const outputDir = path.join(__dirname, process.env.OUTPUT_DIR || "download");
// const tempDir = path.join(outputDir, "temp");

// // Ensure required directories exist
// [outputDir, tempDir].forEach((dir) => {
//   if (!fs.existsSync(dir)) {
//     fs.mkdirSync(dir, { recursive: true });
//   }
// });

// const execPromise = (command) => {
//   return new Promise((resolve, reject) => {
//     exec(
//       command,
//       { shell: true, maxBuffer: 1024 * 1024 * 10 },
//       (error, stdout, stderr) => {
//         if (error) {
//           console.error(
//             `Command failed with exit code ${error.code}: ${
//               stderr || error.message
//             }`
//           );
//           return reject(new Error(stderr || error.message));
//         }
//         resolve(stdout);
//       }
//     );
//   });
// };

// const trackProgress = (command) => {
//   const process = exec(command, { shell: true });

//   process.stdout.on("data", (data) => {
//     console.log(data.toString());
//   });

//   process.stderr.on("data", (data) => {
//     console.error(data.toString());
//   });

//   return new Promise((resolve, reject) => {
//     process.on("close", (code) => {
//       if (code === 0) resolve();
//       else reject(new Error(`Process exited with code ${code}`));
//     });
//   });
// };

// const readPlaylists = () => {
//   if (!fs.existsSync(playlistFile)) {
//     console.error(`Playlist file not found: ${playlistFile}`);
//     process.exit(1);
//   }
//   return fs.readFileSync(playlistFile, "utf-8").split("\n").filter(Boolean);
// };

// const notifyCompletion = () => {
//   notifier.notify({
//     title: "Download Complete",
//     message: "All playlists have been downloaded successfully!",
//   });
// };

// async function downloadPlaylist(playlistUrl) {
//   try {
//     console.log(`Starting download for playlist: ${playlistUrl}`);

//     const command = `yt-dlp --newline --no-part -o "${path.join(
//       outputDir,
//       "%(title)s.%(ext)s"
//     )}" --paths temp:"${tempDir}" -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best" --merge-output-format mp4 --no-continue --no-warnings "${playlistUrl}"`;

//     console.log(`Executing command: ${command}`);

//     await trackProgress(command);

//     console.log(`Playlist downloaded successfully: ${playlistUrl}`);
//   } catch (error) {
//     console.error(`Failed to download playlist ${playlistUrl}:`, error.message);

//     if (error.message.includes("nsig extraction failed")) {
//       console.warn(
//         "Warning: Some formats may be missing due to YouTube player script changes."
//       );
//     }

//     if (error.message.includes("WinError 32")) {
//       console.warn(
//         "Warning: File locking issue detected. Ensure no other process is accessing the files."
//       );
//     }
//   }
// }

// async function downloadAllPlaylists() {
//   const playlists = readPlaylists();

//   for (const playlist of playlists) {
//     await downloadPlaylist(playlist);
//   }

//   notifyCompletion();
// }

// downloadAllPlaylists();


// const fs = require("fs");
// const path = require("path");
// const { exec } = require("child_process");

// // Playlist URL
// const playlistUrl =
//   "https://www.youtube.com/playlist?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb";

// // Output directory for videos
// const outputDir = path.join(__dirname, "downloads");

// // Ensure the output directory exists
// if (!fs.existsSync(outputDir)) {
//   fs.mkdirSync(outputDir);
// }

// const execPromise = (command) => {
//   return new Promise((resolve, reject) => {
//     exec(
//       command,
//       { shell: true, maxBuffer: 1024 * 1024 * 10 },
//       (error, stdout, stderr) => {
//         if (error) {
//           console.error(
//             `Command failed with exit code ${error.code}: ${
//               stderr || error.message
//             }`
//           );
//           return reject(new Error(stderr || error.message));
//         }
//         resolve(stdout);
//       }
//     );
//   });
// };

// // Download playlist
// async function downloadPlaylist(playlistUrl) {
//   try {
//     console.log("Starting playlist download...");

//     // Construct the yt-dlp command
//     const command = `yt-dlp --no-part -o "${path.join(
//       outputDir,
//       "%(title)s.%(ext)s"
//     )}" -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best" --merge-output-format mp4 --no-continue "${playlistUrl}"`;

//     console.log(`Executing command: ${command}`);

//     // Execute the command
//     await execPromise(command);

//     console.log("All videos downloaded!");
//   } catch (error) {
//     console.error("An error occurred:", error.message);
//   }
// }

// downloadPlaylist(playlistUrl);



// "youtube-dl-exec": "^3.0.12",
//     "ytdl-core": "^4.11.5",
//     "ytpl": "^2.3.0"
