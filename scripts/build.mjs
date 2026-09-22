// Monta dist/ para deploy no Cloudflare: HTML principal vira index.html + pasta assets.
import { rmSync, mkdirSync, copyFileSync, cpSync } from "node:fs";

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist");
copyFileSync("Honey Island Compliance.html", "dist/index.html");
cpSync("assets", "dist/assets", { recursive: true });
console.log("dist/ pronto");
