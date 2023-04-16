import "../src/style.css";
// @ts-ignore
import HelloWorldWASM from "./helloworld.wasm?url";

// Set initial size of the WebAssembly Memory to one WebAssembly pages.
var memory = new WebAssembly.Memory({ initial: 1 });

// JavaScript function that will be called from caWebAssembly
function consoleLogString(offset: number, length: number) {
    var bytes = new Uint8Array(memory.buffer, offset, length);
    var string = new TextDecoder("utf8").decode(bytes);
    console.log(string);
}

// Compile and instantiate our WebAssembly module from a streamed source
WebAssembly.instantiateStreaming(fetch(HelloWorldWASM), {
    console: {
        log: consoleLogString,
    },
    js: {
        mem: memory,
    },
}).then((obj) => {
    (obj.instance.exports as any).helloWorld();
});
