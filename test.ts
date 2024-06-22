import { Audio } from "./mod.ts";
//async
new Audio().play("https://straypointers.com/sp.mp3");
//sync
await new Audio().play("https://straypointers.com/sp.mp3");
