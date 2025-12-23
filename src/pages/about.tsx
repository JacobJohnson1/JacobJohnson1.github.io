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
                <p>As you may have read on the home page, my name is Jacob & I am a software engineer. Of course
                    that is not all I do. I am a new dad, reader, shade tree mechanic, tinkerer, terrible electrician, etc.
                    I am trying to use social media less - about all of them are irredeemable at this point (including linkedIn). 
                    So this site is to function as a way for folks to see what I am up to & to chronicle some of the things 
                    I have done, both professionally & personally. 
                </p>
                <h1>Hire me!</h1>
                <p>I am currently employed, but would love to do something a little more exciting than insurance 
                    & be compensated a little better. So, if you see this website & think "Jeez, what a cool guy," then 
                    <i><b> PLEASE</b></i> reach out to me!</p>
                    <br></br>

            </div>
            <iframe
                src="/Jacob-Johnson-Resume.pdf"
                width="75%"
                height="55rem"
                style={{ minHeight: '55rem' }}
            ></iframe>
        </div >
    )
}

