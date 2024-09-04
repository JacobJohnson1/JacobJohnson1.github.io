import React, { useState, useEffect } from "react";
import Link from 'next/link';
import UnderHeader from './UnderHeader';
import * as d3 from "d3";



const lastUpdateDate = '9/4/24';

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
                    <h1>Job Prep</h1>
                    <h5>Last updated: {lastUpdateDate}</h5>
                    
                    <h3>LeetCode</h3>
                    <p>
                        7/9/24 - 2,052,986<br></br>
                        7/11/24 - 1,984,073<br></br>
                        7/12/24 - 1,789,118<br></br>
                        7/13/24 - 1,694,891<br></br>
                        7/15/24 - 1,698,136<br></br>
                        7/17/24 - 1,701,834<br></br><br></br>
                        I am trying to track and gamify my progress and rank  
                        on Leetcode. For those not familiar with the site, it is
                        a giant collection of computer science problems. Students, professionals,
                        and hobbyists alike use the problems for practice and advancement in their skills.
                        Most of the questions are not for the faint of heart.
                    </p>

                </div>

            </div>

        </div>
    )
}

