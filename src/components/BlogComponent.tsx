import React from "react";
import Link from 'next/link';

export default function BlogComponent() {
    return (
        <div className='postContainer'>
            <div className='posts'>
                <Link href={'/blog7'}>
                    <p>Job Prep</p>
                    <img src="businessStressMan.jpg" className='postPic' />
                </Link>
            </div>
            {/* <div className='posts'>
                <Link href={'/blog6'}>
                    <p>Salon Website</p>
                    <img src="" className='postPic' />
                </Link>
            </div> */}
            <div className='posts'>
                <Link href={'/blog4'}>
                    <p>Cat Stats</p>
                    <img src="nerdCat.jpg" className='postPic' />
                </Link>
            </div>
            <div className='posts'>
                <Link href={'/blog1'}>
                    <p>Emergency Book?</p>
                    <img src="/folderImg.png" className='postPic' />
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
                <Link href={'/blog5'}>
                    <p>Simulated Annealing</p>
                    <img src="simAnnealing.jpg" className='postPic' />
                </Link>
            </div>
        </div>
    )
}