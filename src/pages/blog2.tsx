import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState, useEffect } from "react";
import { posts } from "../data";
import Link from 'next/link';
import UnderHeader from './UnderHeader';
import AudioButton from '@/components/AudioButton';

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
            <div className='blogFrame'>
                <div className='blogText'>
                    <h1>Sound Board</h1>
                    <h5>Last updated:</h5>
                    <p>
                        lorem ipsum
                    </p>
                    <AudioButton />

                


                </div>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
            </div>
        </div>
    )
}

