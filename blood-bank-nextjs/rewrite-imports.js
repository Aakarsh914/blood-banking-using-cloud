const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  content = content.replace(/from "\.\.\/components/g, 'from "@/components');
  content = content.replace(/from "\.\.\/contexts/g, 'from "@/contexts');
  content = content.replace(/from "\.\.\/services/g, 'from "@/services');
  content = content.replace(/from "\.\.\/utils/g, 'from "@/utils');
  
  content = content.replace(/from "\.\/components/g, 'from "@/components');
  content = content.replace(/from "\.\/contexts/g, 'from "@/contexts');
  content = content.replace(/from "\.\/services/g, 'from "@/services');
  content = content.replace(/from "\.\/utils/g, 'from "@/utils');
  
  fs.writeFileSync(filePath, content, 'utf-8');
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      replaceInFile(fullPath);
    }
  }
}

walkDir('src/components');
walkDir('src/app');
