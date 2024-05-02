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
            <div className='blogText'>
                <p>
                    My wife has a semi-irrational fear that she has burdened me with the past few years & until recently I did not know how to handle it.
                    She is afraid of my untimely & gruesome death.
                    <br></br><br></br>
                    There has not been much to say to ease her anxiety until she mentioned that a lot of the anxiety comes from the fact that I
                    handle a lot of the household chores, repairs, etc. & she feels she would not know how to do any of it.
                    Being the problem solver that I am, I came up with an idea on how to ease our anxieties: create something she can reference
                    if she ever needs to do Jake stuff.
                    <br></br><br></br>
                    At first, I was thinking this could be a physical book that she could look at if I am ever out of town
                </p>
            </div>
        </div>
    )
}

