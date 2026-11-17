import { access, copyFile, mkdir, readFile, stat } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import path from 'node:path'

/**
 * Copies the newly supplied leadership photographs into /public.
 *
 * The site itself also bootstraps these files from the local attachment/Downloads
 * paths on first render (lib/setup-assets.ts). This command is the explicit,
 * verifiable sync step for a local checkout before those files are committed.
 *
 * Usage: npm run sync:assets
 */
const assets = [
  {
    label: 'CEO portrait',
    sources: [
      'C:/Users/MULTILINE LAPTOP/Downloads/akah gill.png',
      'C:/Users/MULTILINE LAPTOP/Downloads/akash gill.png',
      'C:/Users/MULTILINE LAPTOP/Downloads/akah-gill.png',
      'C:/Users/MULTILINE LAPTOP/Downloads/akash-gill.png',
    ],
    destination: 'public/images/ceo-akash-gill.png',
  },
  {
    label: 'Ayesha Adnan portrait',
    sources: [
      'C:/Users/MULTILINE LAPTOP/Downloads/ayesha-genbrik.png',
      'C:/Users/MULTILINE LAPTOP/Downloads/ayesha 180180.png',
      'C:/Users/MULTILINE LAPTOP/Downloads/ayesha.png',
    ],
    destination: 'public/images/ayesha-adnan.png',
  },
]

let missing = false

for (const asset of assets) {
  const target = path.join(process.cwd(), asset.destination)

  try {
    await access(target)
    console.log(`[exists] ${asset.destination}`)
    continue
  } catch {
    // Copy it below.
  }

  let copied = false

  for (const source of asset.sources) {
    try {
      await access(source)
      await mkdir(path.dirname(target), { recursive: true })
      await copyFile(source, target)

      const [file, bytes] = await Promise.all([readFile(target), stat(target)])
      const digest = createHash('sha256').update(file).digest('hex').slice(0, 16)

      console.log(
        `[copied] ${asset.label}: ${asset.destination} (${bytes.size} bytes, sha256 ${digest}…)`,
      )
      copied = true
      break
    } catch {
      // Try the next source.
    }
  }

  if (!copied) {
    missing = true
    console.error(
      `[missing] ${asset.label}: none of the source files were available. ` +
        `Place the image at ${asset.destination} manually, then rebuild.`,
    )
  }
}

if (missing) process.exitCode = 1
