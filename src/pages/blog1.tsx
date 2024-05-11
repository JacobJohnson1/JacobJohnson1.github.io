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
            <div className='blogContainer'>
                <div className='blogText'>
                    <p>
                        My wife has a semi-irrational fear that she has burdened me with the past few years & until recently I didn&rsquo;t know how to handle it.
                        She is afraid of my untimely & gruesome death.
                        <br></br><br></br>
                        There hasn&rsquo;t been much to say to ease her anxiety until she mentioned that a lot of the anxiety comes from the fact that I
                        handle a lot of the household chores, repairs, etc. & she feels she wouldn&rsquo;t know how to do any of it.
                        Being the problem solver that I am, I came up with an idea on how to ease our anxieties: create something she can reference
                        if she ever needs to do Jake stuff.
                        <br></br><br></br>
                        At first, I was thinking this could be a physical book that she could look at if I am ever out of town or unfortunately dead. Now, I
                        think it may be more useful to put it here. I don&rsquo;t have to try to print a copy for every person I want to give it to and I can
                        continually make edits.
                        <br></br><br></br>
                        As far as displaying the information, I think I will have a central place where all the genres/subjects will be stored in little clickable
                        folders similar to the one to the right.
                        <br></br><br></br>
                        Another reason I think this could be useful is that it could be a great catalog for me to reference things I&rsquo;ve done to streamline
                        repeat work.
                    </p>
                </div>
                <img className='folder' src="/folderImg.png" loading="lazy" alt=""></img>
            </div>
        </div >
    )
}

