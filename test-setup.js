import fs from 'fs';
import path from 'path';

console.log('🔍 Checking Wassel Application Setup...\n');

const checks = [
  { name: 'index.html exists', path: './index.html' },
  { name: 'main.tsx exists', path: './src/main.tsx' },
  { name: 'App.tsx exists', path: './src/App.tsx' },
  { name: 'package.json exists', path: './package.json' },
  { name: 'vite.config.js exists', path: './vite.config.js' },
  { name: 'backend/server.js exists', path: './backend/server.js' },
  { name: 'backend/package.json exists', path: './backend/package.json' },
];

let allPassed = true;

checks.forEach(check => {
  const exists = fs.existsSync(check.path);
  console.log(`${exists ? '✅' : '❌'} ${check.name}`);
  if (!exists) allPassed = false;
});

console.log('\n🔍 Checking for duplicate files...\n');

const duplicates = [
  { name: 'index.tsx (should be removed)', path: './src/index.tsx' },
  { name: 'index.jsx (should be removed)', path: './src/index.jsx' },
  { name: 'App.jsx (should be removed)', path: './src/App.jsx' },
];

duplicates.forEach(dup => {
  const exists = fs.existsSync(dup.path);
  console.log(`${!exists ? '✅' : '⚠️'} ${dup.name} - ${exists ? 'FOUND (should remove)' : 'Not found (good)'}`);
  if (exists) allPassed = false;
});

console.log('\n' + (allPassed ? '✅ All checks passed!' : '⚠️ Some issues found'));
