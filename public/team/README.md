# Team assets

The leadership portraits belong in `public/images/`:

```
public/images/ceo-akash-gill.png   — new CEO photograph
public/images/ayesha-adnan.png     — Head of AI & Technology
```

They are the supplied photographs, copied byte-for-byte and used by
`components/leadership.tsx` on the home page and the About page. Run
`npm run sync:assets` once to place them from the local source files, then
commit them. The older `ceo-akash-gill.jpg` is no longer referenced.

Images are displayed with `object-fit: cover` in a 4:5 frame, so the crop is
responsive and keeps the face centred.

The `public/team` folder is unused and can be deleted.
