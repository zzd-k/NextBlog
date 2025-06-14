import React from 'react';
import Hero from "@/components/hero";
import reliabilitySrc from "@/assets/reliability.jpg";
import {Metadata} from "next";
export const metadata: Metadata = {
    title: 'reliability',
}
export default function Performance() {
    return (
        <Hero imgurl={reliabilitySrc} altTxt="Reliability" content={"欢迎来到Reliability！"}/>
    )
}