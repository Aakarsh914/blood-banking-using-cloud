import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Vercel clones the full repo but builds from blood-bank-nextjs — keep tracing roots aligned.
const projectRoot = path.join(__dirname, "..");

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot
  }
};

export default nextConfig;
