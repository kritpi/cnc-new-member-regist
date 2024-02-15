'use client'

import { get } from "http";

import { promises } from "dns";

import { useState } from "react";
import { log } from "console";
import Selector from "@/components/select";
import { getMember } from "./member";
import { Select, SelectItem } from "@nextui-org/react";



// async function getMember() {
//   const res = await fetch('https://script.google.com/macros/s/AKfycbyw7ok4ek555zickoc1gYvhVbL6tHxzwCaK9Vt0e9jFYWvze4xqOYIjRXuy3tx1EbG7/exec?action=getUsers');
//   if(!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
//   return res.json()
// }



export default async function Home() {
  const data = await getMember()
  console.log(typeof(data));
  JSON.stringify(data)
  
  return (
    <div>
      <h1>Home</h1>
      {data.map((member:any) => {
        return (
            <p>{member.Nickname}</p>
        )
      })}

    </div>
  );
}
