## Denomp3

Play audio mp3 from the Command-line

> deno run --allow-read --allow-run example.ts

### Example

```ts
import { play } from "./mod.ts";
//async
play("./assets/coin.mp3");
//sync
const result = await play("./assets/coin.mp3");
```

### Credits

This Proyect was wrote over

- [Jim Lawless](https://jimlawless.net/blog/posts/cmdmp3/)
