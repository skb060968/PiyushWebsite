const fs = require("fs")
const path = require("path")

const src = path.join(process.cwd(), "public/images")
const dest = path.join(process.cwd(), "out/images")

function copyRecursiveSync(srcDir, destDir) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true })
  }

  for (const item of fs.readdirSync(srcDir)) {
    const srcPath = path.join(srcDir, item)
    const destPath = path.join(destDir, item)

    if (fs.statSync(srcPath).isDirectory()) {
      copyRecursiveSync(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

copyRecursiveSync(src, dest)
console.log("✅ Portfolio images copied to out/")
