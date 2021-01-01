const encoder = new TextEncoder();
const helloText = encoder.encode("Hello World");

(async ()=>{
    await Deno.writeFile("hello.txt",helloText);
})
Deno.writeFile("hello.txt",helloText);
