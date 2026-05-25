const fs = require('fs');
const path = require('path');
const walk = (dir) => {
  fs.readdirSync(dir).forEach(file => {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      walk(p);
    } else if (p.endsWith('route.js')) {
      let content = fs.readFileSync(p, 'utf8');
      
      // Clean up previous bad replaces
      content = content.replace(/const prisma = getPrisma\(\);\`n   try \{\`n    const prisma = getPrisma\(\);/g, '');
      content = content.replace(/import \{ getPrisma \} from "@\/lib\/prisma";/g, '');
      content = content.replace(/const prisma = getPrisma\(\);/g, '');
      
      // Add standard imports back if missing, we'll just replace the original
      content = content.replace(/import \{ prisma \} from "@\/lib\/prisma";/g, '');
      
      // Insert getPrisma import at the top (after use server/dynamic)
      content = content.replace(/(export const dynamic = 'force-dynamic';\r?\n)/, '$1import { getPrisma } from "@/lib/prisma";\n');
      
      // Insert const prisma = getPrisma(); at the top of the exported function block
      content = content.replace(/(export async function (GET|POST|PUT|DELETE)\([^\)]*\)\s*\{)/g, '$1\n  const prisma = getPrisma();');
      
      fs.writeFileSync(p, content);
    }
  });
};
walk('./src/app/api');
