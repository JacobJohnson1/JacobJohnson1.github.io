import React from "react";
import Link from 'next/link';

export default function BlogComponent() {
    return (
        <div>
            <div className='posts'>
                <Link href={'/xterra_blog'}>
                    <div className="postTitle">Xterra</div>
                    <img src="xterra/2004xterra_darkened.png" className='postPic' />
                </Link>
            </div>
            <div className='posts'>
                <Link href={'/bs_jobs'}>
                    <div className="postTitle">BS Jobs</div>
                    <img src="bsJobs.jpg" className='postPic' />
                </Link>
            </div>
            <div className='posts'>
                <Link href={'/9_16_24'}>
                    <div className="postTitle">It's the little things</div>
                    <img src="happyHarold.jpg" className='postPic' />
                </Link>
            </div>
            {/* <div className='posts'>
                <Link href={'/blog6'}>
                    <div>Salon Website</div>
                    <img src="" className='postPic' />
                </Link>
            </div> */}
            <div className='posts'>
                <Link href={'/blog1'}>
                    <div className="postTitle">Emergency Book?</div>
                    <img src="/emergencyBook.png" className='postPic' />
                </Link>
            </div>
            {/* <div className='posts'>
                <Link href={'/blog2'}>
                    <div className="postTitle">Sound Bored</div>
                    <img src="/sound-board.jpg" className='postPic' />
                </Link>
            </div> */}
            {/* <div className='posts'>
                <Link href={'/blog3'}>
                    <div className="postTitle">Poker Simulation</div>
                    <img src="/robotPoker.jpeg" className='postPic' />
                </Link>
            </div> */}
        </div>
    )
}