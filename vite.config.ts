import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                "001-hello-world": resolve(
                    __dirname,
                    "001-hello-world/index.html"
                ),
            },
        },
    },
});
