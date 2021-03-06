import { Router} from "https://deno.land/x/oak@v6.4.1/mod.ts"
import {Book} from "./types.ts"
import { v4 } from "https://deno.land/std@0.83.0/uuid/mod.ts";

const router = new Router();

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
}).get('/books',(context)=>{
    context.response.body = books;
}).post('/book',async (context:any)=>{
    // await context.request.body(); ==> async (context)=> 없이 이렇게 작성하면 오류 발생
    // 그 이유는 Top Level이 아니므로 async로 감싸주어야 한다.
    const body:any = await context.request.body(); 

    // 정보를 제공받지 못한 경우
    if(!context.request.hasBody){
        context.response.status = 400;
        context.response.body = "데이터가 없습니다.";
    }else{
        //정보를 제공 받았다면
        //우선 임의로 id를 생성하고 제공받은 정보로 book objects를 만들어 준다.
        console.log(body.value);
        const book :Book = body.value;
        console.log(book);
        book.id = v4.generate();
        books.push(book);
        context.response.status = 201;
        context.response.body = book;
    }
}).get("/book/:id",async (context:any)=>{
    //books안에 있는 책들중에 param의 값과 같은 id를 가진 책 찾기
    const book: Book|undefined = books.find((b)=> b.id === context.params.id)
    if(book){
        context.response.body = book;
        context.response.status = 200;
    }else{
        context.response.body = "책을 찾지 못했습니다.";
        context.response.status = 404;
    }
})

export default router;