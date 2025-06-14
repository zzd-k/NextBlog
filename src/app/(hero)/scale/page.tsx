import React from 'react';
import Hero from "@/components/hero";
import scaleSrc from "@/assets/scale.jpg";
import {Metadata} from "next";
export const metadata: Metadata = {
    title: 'scale',
}
export default function Performance() {
    return (
        <Hero imgurl={scaleSrc} altTxt="scale" content={"欢迎来到scale！"}/>
    )
}