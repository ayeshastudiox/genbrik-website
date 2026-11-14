# Brand assets

## The official mark

`genbrik-logo.png` is the supplied logo with a transparent background, copied
byte-for-byte (588×600). `components/logo.tsx` renders that file directly — no
plate, box, background or blend, and the artwork is never redrawn.

The wrapper crops to the artwork's band so the transparent margin does not
affect layout. On dark surfaces the black artwork is inverted to platinum so it
stays visible; the footer (paper) shows the original colours.

`genbrik-logo.jpg` is the earlier white-background version and is no longer
referenced. `genbrik-logo.svg` / `genbrik-logo-inverse.svg` are legacy vector
reconstructions kept only for print; the site does not use them.

## Clear space

Keep at least the height of the icon's dot clear on every side of the mark.

## Favicon

`app/icon.svg` uses the icon alone (dot + bar) at 64×64, because the full
wordmark is illegible at favicon size.
