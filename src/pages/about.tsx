import React, { useState, useEffect } from "react";
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
            <div id='FirstThingOnPage'>
             
            <h1>About me</h1>
            <h1>Hire me!</h1>

            </div>
            <iframe
                src="/Jacob-Johnson-Resume.pdf"
                width="75%"
                height="55rem"
                style={{ minHeight: '55rem' }}
            ></iframe>
            <h1>Contact me</h1>

        </div >
    )
}

