import {Application} from "https://deno.land/x/oak@v6.4.1/mod.ts"
import router from "./routes.ts"

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server is listening on port 5000");
await app.listen({port:5000});
