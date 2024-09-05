import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from "react";
import { posts } from "../data";
import Link from 'next/link';
import UnderHeader from './UnderHeader';
import CatStatGraph from '@/components/CatStatGraph';

const lastUpdateDate = '5/6/24';

export default function Home() {

    return (
        <div>
            <div className="Home">
                <header className="Home-header">
                    <div>
                        <nav className="navBarTab">
                            <Link id="navBtn" href='/'>Home</Link>
                        </nav>
                        <UnderHeader />
                    </div>
                </header>
            </div>
            <div className='blogFrame'>
                <div className='blogText'>
                    <h1>Cat Stats</h1>
                    <h5>Last updated: {lastUpdateDate}</h5>
                    <p>
                        This Spring/Summer, my wife & I are fostering some kittens for the
                        <a href='https://kcpetproject.org/'> local shelter. </a>
                        This mostly just entails feeding them so they can get up to weight (a massive 2.0LB),
                        scheduling their appointment to get fixed, and then finding some folks to adopt them.
                        <br></br><br></br>
                        This is a great way to help out your local pet shelter and to hang out with some kittens.
                        This is our second batch of kittens and both experiences have been vastly different.
                        Last year, we bit off more than we could chew and picked up four kittens that were in
                        pretty rough shape. They were severely under weight and taking care of them was very involved
                        (e.g. syringe feeding, keeping them warm at night, diarrhea protocol, etc.).
                        <br></br><br></br>
                        <img src='catStatPic.jpg' className='blogPic'></img><br></br><br></br>
                        These two kitties are super easy, though. Just filling their bellies with food and
                        making sure they have a good time.
                        <br></br><br></br>
                        Below, is the graph of their growth created using Chart.js.
                        <br></br><br></br>
                        I am not a big fan of Chart.js. It doesn't look good on a mobile, it isn't 
                        very customizable, and it seems to have a mind of its own when it comes to how 
                        it displays the data. All graphs and charts I have on this site will eventually be written 
                        with D3.js. Until then, we'll have to do with this. 
                    </p>
                </div>

            </div>
            <CatStatGraph />
        </div>
    )
}

