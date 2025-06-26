import { glob } from "glob"
import { relative, extname } from "path"
import { fileURLToPath } from "url"

const a = glob.sync('lib/**/*.{ts,tsx}', { ignore: ["lib/**/*.d.ts"] }).map(file => {
  console.log("🚀 ~ a ~ file:", file)

  
  return [
    // The name of the entry point
    // lib/nested/foo.ts becomes nested/foo
    relative(
      'lib',
      file.slice(0, file.length - extname(file).length)
    ),
    // The absolute path to the entry file
    // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
    fileURLToPath(new URL(file, import.meta.url))
  ]
})

console.log(a);