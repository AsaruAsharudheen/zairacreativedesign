const ffmpeg = require('@ffmpeg-installer/ffmpeg');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const desktopOutDir = path.join(__dirname, '../public/frames/desktop');
const mobileOutDir = path.join(__dirname, '../public/frames/mobile');

fs.mkdirSync(desktopOutDir, { recursive: true });
fs.mkdirSync(mobileOutDir, { recursive: true });

console.log('Extracting Desktop frames...');
// 1280x720, around 150-192 frames (e.g. 18 fps for 10 sec = 180 frames)
// Using jpg with q:v 4 for crisp high quality yet lightweight frames (~40KB each)
const cmdDesktop = `"${ffmpeg.path}" -i public/desktop.mp4 -vf "fps=18,scale=1280:720" -q:v 4 "${desktopOutDir}/frame_%03d.jpg" -y`;
execSync(cmdDesktop, { stdio: 'inherit' });

console.log('Extracting Mobile frames...');
// 720x1280 for mobile (sharp on retina phones, fast load)
// 7.8 sec at 20 fps = ~156 frames
const cmdMobile = `"${ffmpeg.path}" -i public/mobile.mp4 -vf "fps=20,scale=720:1280" -q:v 4 "${mobileOutDir}/frame_%03d.jpg" -y`;
execSync(cmdMobile, { stdio: 'inherit' });

const desktopFrames = fs.readdirSync(desktopOutDir).filter(f => f.endsWith('.jpg'));
const mobileFrames = fs.readdirSync(mobileOutDir).filter(f => f.endsWith('.jpg'));

console.log(`Extracted ${desktopFrames.length} desktop frames`);
console.log(`Extracted ${mobileFrames.length} mobile frames`);
