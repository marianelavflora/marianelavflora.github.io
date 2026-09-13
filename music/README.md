# Music folder

Drop your own legally-obtained audio files here to make the retro cassette
player on the site actually play sound. I can't ship copyrighted tracks
(like Hannah Montana songs) in the repo myself, but the player is fully
wired up and ready for them.

1. Add your files here, e.g.:
   - `track1.mp3`
   - `track2.mp3`
2. Open `js/main.js` and update the `playlist` array (near the top) with the
   real filenames and display titles:

```js
const playlist = [
  { title: 'Track 1 of 2 — Best of Both Worlds', src: 'music/track1.mp3' },
  { title: 'Track 2 of 2 — Nobody\'s Perfect', src: 'music/track2.mp3' },
];
```

That's it — the play/pause/next/prev/mute buttons and spinning reels already
work against whatever is in this array.
