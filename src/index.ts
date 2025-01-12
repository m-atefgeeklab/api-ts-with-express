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

// const fs = require('fs');
// const path = require('path');
// const { exec } = require("child_process");

// // Playlist URL
// const playlistUrl = 'https://www.youtube.com/playlist?list=PLEe8jzHjtRiRQWZugdORFlqCGh18fwnSz';

// // Output directory for videos
// const outputDir = path.join(__dirname, 'downloads');

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

// // Function to get the list of video URLs in the playlist
// async function getPlaylistVideoUrls(playlistUrl) {
//   try {
//     console.log('Fetching video URLs from the playlist...');

//     // Construct the yt-dlp command to extract video URLs
//     const command = `yt-dlp --flat-playlist --get-url "${playlistUrl}"`;

//     console.log(`Executing command: ${command}`);

//     // Execute the command and get the list of video URLs
//     const stdout = await execPromise(command);
//     const videoUrls = stdout.trim().split('\n');

//     console.log(`Found ${videoUrls.length} videos in the playlist.`);
//     return videoUrls;
//   } catch (error) {
//     console.error('An error occurred while fetching video URLs:', error);
//     throw error;
//   }
// }

// // Function to download a single video
// async function downloadVideo(videoUrl) {
//   try {
//     console.log(`Starting download for video: ${videoUrl}`);

//     // Construct the yt-dlp command to download the video
//     const command = `yt-dlp -o "${path.join(outputDir, '%(title)s.%(ext)s')}" -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best" --merge-output-format mp4 --no-continue "${videoUrl}"`;

//     console.log(`Executing command: ${command}`);

//     // Execute the command
//     await execPromise(command);

//     console.log(`Download completed for video: ${videoUrl}`);
//   } catch (error) {
//     console.error(`An error occurred while downloading video: ${videoUrl}`, error);
//     throw error;
//   }
// }

// // Download playlist
// async function downloadPlaylist(playlistUrl) {
//   try {
//     console.log('Starting playlist download...');

//     // Get the list of video URLs in the playlist
//     const videoUrls = await getPlaylistVideoUrls(playlistUrl);

//     // Download each video one by one
//     for (const videoUrl of videoUrls) {
//       await downloadVideo(videoUrl);
//     }

//     console.log('All videos downloaded and processed successfully!');
//   } catch (error) {
//     console.error('An error occurred during playlist download:', error);
//   }
// }

// // Start downloading
// downloadPlaylist(playlistUrl);


// "youtube-dl-exec": "^3.0.12",
//     "ytdl-core": "^4.11.5",
//     "ytpl": "^2.3.0"
