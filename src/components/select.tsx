'use client'
import React from "react";
import {Select, SelectItem} from "@nextui-org/select";
import { getMember } from "@/app/member";
import {animals} from "../data";
import { animate } from "framer-motion";


export default async function Selector() {
  const data = await getMember()
  JSON.stringify(data)
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      
      {/* {props.data.map((member:any) => {
          return(
            <p>
              {member.Nickname}
            </p>
          )
      })} */}
    <Select
      items={data}
      label="Favorite Animal"
      placeholder="Select an animal"
      className="max-w-xs"
    >
      {data.map((member:any) => (
          (
            <SelectItem key={member.Nickname} value={member}>
              {member.Nickname}
            </SelectItem>
          )
        ))}
    </Select>

    </div>
  );
}
