## Denomp3

Play audio mp3 from the Command-line

> deno run --allow-net --allow-write --allow-read --allow-run example.ts

### Example

```ts
import { Audio } from "jsr:@onlyd/denomp3";
//async
new Audio.play("https://straypointers.com/sp.mp3");
//sync
await new Audio.play("https://straypointers.com/sp.mp3");
```

### Credits

This Proyect was wrote over

- [Jim Lawless](https://jimlawless.net/blog/posts/cmdmp3/)
