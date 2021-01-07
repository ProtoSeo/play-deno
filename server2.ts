import {Application, Router} from "https://deno.land/x/oak@v6.4.1/mod.ts"

const app = new Application();

const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

interface Book{
    id:string,
    title:string,
    author:string,
}
let books :Book[] = [
    {
        id:"1",
        title:"Book One",
        author:"One"
    },{
        id:"2",
        title:"Book Two",
        author:"Two"
    },{
        id:"3",
        title:"Book Three",
        author:"Three"
    }
]
router.get('/',(context)=>{ //context에 response와 request가 담겨져 있다.
    context.response.body = "Hello World!";
})
console.log("Server is listening on port 5000");
await app.listen({port:5000});
