;; From https://opensource.com/article/21/3/hello-world-webassembly
;; Lisense: (CC BY-SA 4.0) https://creativecommons.org/licenses/by-sa/4.0/

(module
    ;; Imports from JavaScript namespace
    (import "console" "log" (func $log (param i32 i32)))
    (import "js" "mem" (memory 1))  ;; Import 1 page of memory (54kb)

    ;; Data section of our module
    (data (i32.const 0) "Hello, World! From WebAssembly")

    ;; Function declaration: Exported as helloWorld(), no arguments
    (func (export "helloWorld")
        i32.const 0   ;; pass offset 0 to log
        i32.const 30  ;; pass length 30 to log (strlen of the sample text)
        call $log
    )
)