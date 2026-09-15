#!/usr/bin/env node

/**
 * VTV Brass & Bronze — Autonomous Google Flow Video Generator
 * Connects to Google Flow via Chrome DevTools Protocol (CDP port 9222)
 * using the google-flow-director runner from the veo video creation workflow.
 */

const { spawn } = require('child_process');
const http = require('http');
const path = require('path');
const fs = require('fs');

const FLOW_RUNNER_SCRIPT = '/home/gk-pc/.gemini/config/plugins/google-flow-director/skills/google-flow-director/scripts/flow_runner.js';
const TARGET_ASSETS_DIR = path.resolve(__dirname, 'assets');
const CDP_PORT = 9222;

const MASTER_PROMPT = `
Horizontal (16:9) aspect ratio, 360p fast render, warm cinematic metal foundry lighting.
Generate 3 separate 10-second cinematic video scenes on the canvas with continuous narrative flow:
Part 1 (Crucible Pour): Master metal craftsman in Tirunelveli pouring glowing golden liquid bell-metal bronze from a red-hot clay crucible into a stone sand mold, bright sparks and rising heat haze.
Part 2 (Rhythmic Hammering): Three blacksmiths in rhythmically synchronized cadence hammering the glowing bronze bowl on an iron anvil, camera slowly pushing in on the dense crystalline grain texture.
Part 3 (Final Mirror Buffing): Lathe craftsman burnishing the flared rim of a finished 5-kg bronze Uruli to a brilliant golden shine, examining the authentic acoustic bell ring with pride.
`.trim().replace(/\n/g, ' ');

function checkCdpAlive(port) {
  return new Promise((resolve) => {
    const req = http.get(`http://127.0.0.1:${port}/json/version`, (res) => {
      resolve(res.statusCode === 200);
    });
    req.on('error', () => resolve(false));
    req.setTimeout(2000, () => {
      req.destroy();
      resolve(false);
    });
  });
}

async function main() {
  console.log('========================================================');
  console.log(' VTV Brass & Bronze — Google Flow Video Pipeline');
  console.log(' 11 Anna Street, Tirunelveli Town');
  console.log('========================================================\n');

  const isAlive = await checkCdpAlive(CDP_PORT);

  if (!isAlive) {
    console.log(`[!] Chrome CDP is NOT currently active on port ${CDP_PORT}.`);
    console.log('\nTo generate new AI videos autonomously using Veo 2 / Google Flow:');
    console.log('1. Launch Google Chrome with remote debugging:');
    console.log('   google-chrome \\');
    console.log('     --remote-debugging-port=9222 \\');
    console.log('     --user-data-dir="/home/gk-pc/.config/google-chrome-remote" \\');
    console.log('     --disable-background-timer-throttling \\');
    console.log('     --disable-backgrounding-occluded-windows \\');
    console.log('     --disable-renderer-backgrounding \\');
    console.log('     "https://flow.google.com/?pli=1" &\n');
    console.log('2. Ensure you are signed into your Google Flow account.');
    console.log('3. Re-run this generator:');
    console.log('   node video_generator_flow.js\n');
    console.log('[✓] Note: The storefront already has an integrated high-definition foundry reel ready in assets/vtv_foundry_reel.mp4.\n');
    return;
  }

  console.log(`[✓] Detected active Chrome CDP session on port ${CDP_PORT}.`);
  console.log(`[+] Executing flow_runner.js with master prompt...\n`);
  console.log(`Prompt: "${MASTER_PROMPT}"\n`);

  const args = [
    FLOW_RUNNER_SCRIPT,
    '--master-prompt', MASTER_PROMPT,
    '--outDir', TARGET_ASSETS_DIR,
    '--prefix', 'vtv_foundry_flow',
    '--aspect-ratio', '16:9',
    '--resolution', '360p',
    '--port', String(CDP_PORT)
  ];

  const runner = spawn('node', args, { stdio: 'inherit' });

  runner.on('close', (code) => {
    if (code === 0) {
      console.log('\n[✓] Autonomous foundry video generation and extraction completed successfully!');
      console.log(`[✓] Output saved to: ${TARGET_ASSETS_DIR}`);
    } else {
      console.error(`\n[!] flow_runner exited with status code: ${code}`);
    }
  });
}

main();
