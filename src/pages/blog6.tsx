import React, { useState, useEffect } from "react";
import Link from 'next/link';
import UnderHeader from './UnderHeader';

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
                    <h1>Salon website</h1>
                    <h5>Last updated: {lastUpdateDate}</h5>
                    <p>
                        lorem ipsum
                    </p>
                </div>

            </div>

        </div>
    )
}

