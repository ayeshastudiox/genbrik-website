import { access, copyFile, mkdir } from 'node:fs/promises'
import path from 'node:path'

/**
 * One-time bootstrap for the supplied images.
 *
 * The supplied artwork arrives outside the project. On the first server render
 * we copy the exact bytes into
 * `/public` so the site serves the original files — no re-encoding, no
 * reconstruction. If the sources are absent (CI, a clean clone, production),
 * this is a no-op and the committed files under /public are used.
 *
 * Delete this module (and its call in app/layout.tsx) once the files are
 * committed and you no longer need the bootstrap.
 */
const SUPPLIED_ASSETS: Array<{ source: string; destination: string }> = [
  {
    source:
      'C:/Users/MULTILINE LAPTOP/AppData/Roaming/dsh-desktop/harness/attachments/v1/objects/82/82c278ec4e3d8c5f2bb20d2ce480a8d377a4912594c573bdf2bcb58d0c200be3',
    destination: 'public/brand/genbrik-logo.jpg',
  },
  {
    source:
      'C:/Users/MULTILINE LAPTOP/AppData/Roaming/dsh-desktop/harness/attachments/v1/objects/f0/f071d39a9c116db12c71955e0e5059ae38eeb18d7664afb9d20417aac0eb7917',
    destination: 'public/brand/genbrik-logo.png',
  },
  {
    source: 'C:/Users/MULTILINE LAPTOP/Downloads/akah gill.png',
    destination: 'public/images/ceo-akash-gill.png',
  },
  {
    source: 'C:/Users/MULTILINE LAPTOP/Downloads/ayesha-genbrik.png',
    destination: 'public/images/ayesha-adnan.png',
  },
]

let attempted = false

export async function ensureSuppliedAssets(): Promise<void> {
  if (attempted) return
  attempted = true

  await Promise.all(
    SUPPLIED_ASSETS.map(async ({ source, destination }) => {
      const target = path.join(process.cwd(), destination)

      try {
        await access(target)
        return
      } catch {
        // Not copied yet — fall through to the copy.
      }

      try {
        await mkdir(path.dirname(target), { recursive: true })
        await copyFile(source, target)
        console.info(`[assets] copied supplied file to ${destination}`)
      } catch (error) {
        console.warn(`[assets] supplied file unavailable: ${source}`, error)
      }
    }),
  )
}
