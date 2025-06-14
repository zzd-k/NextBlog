import React from "react";
import { Button } from 'antd';
import homeSrc from '../../assets/home.jpg'
import Hero from "@/components/hero";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Home',
}
export default function Page() {
  return(
      <Hero imgurl={homeSrc} altTxt="home" content={"欢迎来到首页"}/>

  )

} 




 