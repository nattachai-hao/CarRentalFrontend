"use client"
import { useRef, useEffect, useState } from "react"
import { useWindowListetner } from "@/hooks/useWindowListener"

export function VlogPlayer({vdoSrc , isPlaying} : {vdoSrc:string , isPlaying:boolean}) {

    const vdoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        //alert('width is ' + vdoRef.current?.videoWidth)
        if(isPlaying) {
            //alert("Play video")
            if(vdoRef.current != null) vdoRef.current.play()
         }else {
            //alert("Pause video")
            if(vdoRef.current != null) vdoRef.current.pause()
        }
    },[isPlaying])

    //useWindowListetner("resize",(e) => {alert('Window Width is ' + (e.target as Window).innerWidth)});

    return (
        <video className="w-[40%]" src={vdoSrc} controls loop muted ref={vdoRef}/>
    )
}