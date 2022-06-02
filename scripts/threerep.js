import * as fs from "fs/promises";

const inp = process.argv.slice(2)[0];
const outp = process.argv.slice(2)[1];

(async function() {
    let d = await fs.readFile(inp, "utf8");
    d = d.replaceAll("three.", "");
    await fs.writeFile(outp, d, "utf8");
})().then(() => {
    process.exit(0);
}).catch(e => {
    console.error(e);
    process.exit(1);
});
