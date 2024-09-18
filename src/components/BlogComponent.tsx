import React from "react";
import Link from 'next/link';

export default function BlogComponent() {
    return (
        <div>
            <div className='posts'>
                <Link href={'/9_16_24'}>
                    <div className="postTitle">9/16/24</div>
                    <img src="" className='postPic' />
                </Link>
            </div>
            <div className='posts'>
                <a href={'/blog7'} className="jobPrepPost">
                    <div className="postTitle">Job Prep</div>
                    <img src="businessStressMan.jpg" className='postPic' />
                </a>
            </div>
            {/* <div className='posts'>
                <Link href={'/blog6'}>
                    <div>Salon Website</div>
                    <img src="" className='postPic' />
                </Link>
            </div> */}
            <div className='posts'>
                <Link href={'/blog4'}>
                    <div className="postTitle">Cat Stats</div>
                    <img src="nerdCat.jpg" className='postPic' />
                </Link>
            </div>
            <div className='posts'>
                <Link href={'/blog1'}>
                    <div className="postTitle">Emergency Book?</div>
                    <img src="/folderImg.png" className='postPic' />
                </Link>
            </div>
            <div className='posts'>
                <Link href={'/blog2'}>
                    <div className="postTitle">Sound Bored</div>
                    <img src="/sound-board.jpg" className='postPic' />
                </Link>
            </div>
            <div className='posts'>
                <Link href={'/blog3'}>
                    <div className="postTitle">Poker Simulation</div>
                    <img src="" className='postPic' />
                </Link>
            </div>
            <div className='posts'>
                <Link href={'/blog5'}>
                    <div className="postTitle">Simulated Annealing</div>
                    <img src="simAnnealing.jpg" className='postPic' />
                </Link>
            </div>
        </div>
    )
}