import { join } from "jsr:@std/path";
import { isURL } from "https://deno.land/x/is_url@v1.0.1/mod.ts";
import { exists } from "jsr:@std/fs";

function exe(file: string) {
        if (Deno.build.os === "windows") {
                const currentpath = import.meta.dirname || "";
                const exe = join(
                        currentpath,
                        "./exe/cmdmp3.exe",
                );

                return new Deno.Command(exe, { args: [file] }).output();
        }
}
/**
 *  Acept file path or url
 */
export async function play(
        file: string,
): Promise<Deno.CommandOutput | undefined> {
        let error = 0;
        if (isURL(file)) return exe(file);
        else error++;

        if (await exists(file)) return exe(join(file));
        else error++;
        if (error === 2) {
                throw new Error("The file or url no found");
        }
}
