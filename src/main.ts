import { isURL } from "./isUrl.ts";
import { exists } from "jsr:@std/fs@0.229.3";
const uri = "https://github.com/LaviejaD/denomp3/raw/main/src/exe/";
//cmdmp3.exe
//const res = await fetch(uri);
//const data = await res.arrayBuffer();
//await Deno.writeFile(tempfile, new Uint8Array(data));

export class Audio {
        Temp = "";
        ready = false;
        constructor() {
                this.#setup();
        }

        async #setup() {
                try {
                        let uri1 = "";
                        this.Temp = await Deno.makeTempFile({ suffix: ".exe" });
                        if (Deno.build.os === "windows") {
                                uri1 = uri + "cmdmp3.exe";
                        } else throw new Error(`only windows is support`);
                        const res = await fetch(uri1);
                        const data = await res.arrayBuffer();
                        await Deno.writeFile(this.Temp, new Uint8Array(data));
                        this.ready = true;
                } catch (error) {
                        throw new Error(error);
                }
        }
        /**
         *  play audio local or url
         *  @param file
         */
        async #ok(file: string | URL): Promise<boolean> {
                if (isURL(file)) return true;

                if (await exists(file)) return true;
                return false;
        }

        async play(
                file: string | URL,
                tr: number = 4,
        ): Promise<Deno.CommandOutput | undefined> {
                const f = typeof file === "string" ? file : file.toString();
                if (tr === 0) {
                        throw new Error(
                                "Error to play audio",
                        );
                }
                if (!await this.#ok(file)) {
                        throw new Error("The file path or url is not correct");
                }
                if (this.ready) {
                        console.log(this.Temp);
                        return new Deno.Command(this.Temp, {
                                args: [f],
                        })
                                .output();
                } else {setTimeout(() => {
                                this.play(file);
                        }, 100);}
        }
}
