import {dayOfYear, toIMF} from "https://deno.land/std@0.83.0/datetime/mod.ts";

console.log(dayOfYear(new Date("2020-12-31")));
console.log(toIMF(new Date(0)));

