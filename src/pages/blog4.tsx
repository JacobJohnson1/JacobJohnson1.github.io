import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState, useEffect } from "react";
import { posts } from "../data";
import Link from 'next/link';
import UnderHeader from './UnderHeader';
import CatStatGraph from '@/components/CatStatGraph';

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
                    <p>
                        This Spring/Summer, my wife & I are fostering some kittens for the local shelter.
                        This mostly just entails feeding them so they can get up to weight (a massive 2.0LB),
                        scheduling their appointment to get fixed, and then finding some folks to adopt them.
                        <br></br><br></br>
                        Below, is the graph of their growth.
                    </p>
                    <CatStatGraph />
                </div>
            </div>
        </div>
    )
}

