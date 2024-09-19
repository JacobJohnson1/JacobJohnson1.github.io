import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState, useEffect } from "react";
import { posts } from "../data";
import Link from 'next/link';
import UnderHeader from './UnderHeader';

export default function Home() {

    return (
        <div className="Home">
            <header className="Home-header">
                <div>
                    <nav className="navBarTab">
                        <Link id="navBtn" href='/'>Home</Link>
                    </nav>
                    <UnderHeader />
                </div>
            </header>
            <div className='parentBlogDiv'>
                <div className='blogText'>
                    <p>
                        A walk in the park, a good cup of coffee in the morning, a smile from the cashier at the store; It is the small things in life.
                        Big events are over-hyped in my opinion. After all the gifts are unwrapped and the toys have been played
                        with on Christmas morning everyone is bored and a little sad. The fun is over. But, the little things keep on giving for some 
                        reason. Every good small encounter, neat fix, or cool little thrift store find gives me more satisfaction and joy
                        than large, built-up items/events/etc.
                        <br></br><br></br>
                        &emsp;A word that goes hand in hand with this feeling of joy and excitement is <i>fizz</i>. This is a relatively new word to me (I heard it 
                        from a guy I follow on Youtube). It is used as such: &quot;Awesome! This new gadget gives me the <i>fizz</i>!&quot; 
                        We have all felt this feeling. The jittery, bubbly, butterflies from something that is surprisingly exciting. Here is me 
                        giving you permission to remember back to the last thing that made you feel this way...
                        <br></br><br></br>
                        &emsp;I find that some of the most satisfying and joyful things for me are when I find a clever solution to a problem I have. 
                        If the fix is cheap, aesthetically pleasing, and/or over-engineered, then I am all the more stoked about it. 
                        <br></br>
                        &emsp; The problem that I aimed to fix is a problem with my keyboard. It is always on. Unless I unplug it (annoying) or I lock my
                        computer (not always possible). Here are two common scenarios I find myself in that will explain my plight. (1) I
                        am in a meeting and my cat wants to join. She hops on my desk and walks around. Her brain is small and she does not 
                        understand what a keyboard is or that she really should not walk on one. She walks on it and now I am looking at a 
                        different screen and I have left the meeting. I am now having a bad time. 
                        Or (2) I walk away from my desk for a moment to get another cup of coffee. Again the cat thing happens. Now the files
                        I was working on are all deleted and I am having a really bad time.   
                        <br></br><br></br>
                        &emsp;My issue is a simple one. I want the cat on my desk to not be able to type on my computer. My first thought towards
                        a solution was to buy a new keyboard that comes with a detachable usb-c cable. This does not
                        check the cheap or over-engineered boxes of my want list, so this would be non fizz-producing.
                        <br></br>
                        &emsp;My next (and final) idea was to add a button to my keboard. A kill-switch, if you will. When I want my keyboard
                        to stop typing, I just press the button. 
                        <br></br><br></br>
                        &emsp;I think things that give you the fizz can make your day. Enough of those days can make a pretty good week. And soon enough you have
                        a pretty good life built on the enjoyment of small things.
                        <br></br><br></br>
                        &emsp;Hopefully this entire site is a way for me to preserve events, projects, and items that give me the fizz. 
                    </p>
                </div>
                <div className='imageSideBar'>
                        <img className="sideBarPhoto" src='/usbPinout.jpg'></img>
                </div>
            </div>
        </div>
    )
}

