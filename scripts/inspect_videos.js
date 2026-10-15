const ffmpeg = require('@ffmpeg-installer/ffmpeg');
const { execSync } = require('child_process');

console.log('FFmpeg:', ffmpeg.path);

try {
  execSync(`"${ffmpeg.path}" -i public/desktop.mp4`, { stdio: 'pipe' });
} catch (e) {
  const lines = e.stderr.toString().split('\n').filter(l => l.includes('Duration') || l.includes('Stream #'));
  console.log('Desktop video:', lines.join('\n'));
}

try {
  execSync(`"${ffmpeg.path}" -i public/mobile.mp4`, { stdio: 'pipe' });
} catch (e) {
  const lines = e.stderr.toString().split('\n').filter(l => l.includes('Duration') || l.includes('Stream #'));
  console.log('Mobile video:', lines.join('\n'));
}
