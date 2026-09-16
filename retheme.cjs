const fs = require('fs');
const path = require('path');

const directory = './src/components';
const appFile = './src/App.tsx';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace dark backgrounds
  content = content.replace(/bg-\[#faf7f2\]/g, 'bg-slate-50');
  content = content.replace(/dark:bg-\[#120a06\]/g, 'dark:bg-slate-950');
  content = content.replace(/dark:bg-\[#160c07\]/g, 'dark:bg-slate-950');
  content = content.replace(/dark:bg-\[#140b07\]/g, 'dark:bg-slate-950');
  
  content = content.replace(/dark:bg-\[#1f120a\]/g, 'dark:bg-slate-900');
  content = content.replace(/dark:bg-\[#1c100a\]/g, 'dark:bg-slate-900');
  
  content = content.replace(/dark:bg-\[#20120b\]/g, 'dark:bg-slate-800');
  content = content.replace(/dark:bg-\[#25150d\]/g, 'dark:bg-slate-800');
  
  // Replace amber/orange heavy text
  content = content.replace(/text-\[#e05a2b\]/g, 'text-indigo-600');
  content = content.replace(/dark:text-\[#e5aa4b\]/g, 'dark:text-indigo-400');
  content = content.replace(/text-\[#e5aa4b\]/g, 'text-indigo-500');
  
  // Replace specific background colors
  content = content.replace(/bg-\[#e05a2b\]/g, 'bg-indigo-600');
  
  // Replace brown text
  content = content.replace(/text-\[#4e2d1d\]/g, 'text-slate-900');
  content = content.replace(/dark:text-\[#f8ede2\]/g, 'dark:text-white');
  
  // Update orange borders to slate
  content = content.replace(/border-amber-900\/10/g, 'border-slate-200');
  content = content.replace(/dark:border-amber-950\/60/g, 'dark:border-slate-800');
  content = content.replace(/dark:border-amber-900\/30/g, 'dark:border-slate-800');
  content = content.replace(/dark:border-amber-900\/40/g, 'dark:border-slate-800');
  
  // Make button orange to primary
  content = content.replace(/btn-primary-orange/g, 'btn-primary');
  
  fs.writeFileSync(filePath, content);
}

// Process App.tsx
if (fs.existsSync(appFile)) {
  processFile(appFile);
}

// Process all components
const files = fs.readdirSync(directory);
for (const file of files) {
  if (file.endsWith('.tsx') || file.endsWith('.ts')) {
    processFile(path.join(directory, file));
  }
}

console.log('Retheming complete.');
