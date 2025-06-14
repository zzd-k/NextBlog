import React from 'react';
import Hero from "@/components/hero";
import performanceSrc from "@/assets/performance.jpg";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'performance',
}
export default function Performance() {
  return (
      <Hero imgurl={performanceSrc} altTxt="performance" content={"欢迎来到performance！"}/>
  )
}