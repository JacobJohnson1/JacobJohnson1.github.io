import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState, useEffect } from "react";
import { posts } from "../data";
import Link from 'next/link';

export default function BlogComponent() {
    return (
        <div className='postContainer'>
            <div className='posts'>
                <Link href={'/blog1'}>
                    <p>Emergency Book?</p>
                    <img src="/organizedBinder.jpg" className='postPic' />
                </Link>
            </div>
            <div className='posts'>
                <Link href={'/blog2'}>
                    <p>Sound Bored</p>
                    <img src="/sound-board.jpg" className='postPic' />
                </Link>
            </div>
            <div className='posts'>
                <Link href={'/blog3'}>
                    <p>Poker Simulation</p>
                    <img src="" className='postPic' />
                </Link>
            </div>
            <div className='posts'>
                <Link href={'/blog4'}>
                    <p>Cat Stats</p>
                    <img src="" className='postPic' />
                </Link>
            </div>
            <div className='posts'>
                <Link href={'/blog5'}>
                    <p>Simulated Annealing</p>
                    <img src="" className='postPic' />
                </Link>
            </div>
        </div>
    )
}