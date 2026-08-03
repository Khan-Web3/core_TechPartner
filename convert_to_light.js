const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, 'views', 'sections');
const componentsDir = path.join(__dirname, 'app', 'components');

function processFile(filePath) {
    if (!filePath.endsWith('.tsx')) return;
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace backgrounds and borders
    content = content.replace(/bg-neutral-950/g, 'bg-white');
    content = content.replace(/bg-neutral-900/g, 'bg-slate-50');
    content = content.replace(/bg-neutral-800/g, 'bg-white shadow-sm');
    content = content.replace(/border-neutral-800/g, 'border-slate-200');
    content = content.replace(/border-white\/20/g, 'border-slate-200');
    
    // Replace text colors
    content = content.replace(/text-neutral-400/g, 'text-slate-600');
    content = content.replace(/text-neutral-300/g, 'text-slate-700');
    content = content.replace(/text-neutral-600/g, 'text-slate-500');
    
    // Carefully replace text-white
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        // If line has gradient or specific buttons, don't replace text-white
        if (!line.includes('bg-gradient') && !line.includes('bg-blue') && !line.includes('bg-indigo') && !line.includes('hover:bg-blue') && !line.includes('bg-black')) {
            line = line.replace(/text-white/g, 'text-slate-900');
        }
        lines[i] = line;
    }
    content = lines.join('\n');
    
    // Other fixes for light mode
    content = content.replace(/bg-white\/10/g, 'bg-slate-100');
    content = content.replace(/bg-white\/5/g, 'bg-slate-50');
    content = content.replace(/from-neutral-900/g, 'from-slate-50');
    
    fs.writeFileSync(filePath, content);
    console.log('Processed', filePath);
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else {
            processFile(fullPath);
        }
    }
}

walkDir(sectionsDir);
walkDir(componentsDir);
