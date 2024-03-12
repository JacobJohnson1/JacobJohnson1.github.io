import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState, useEffect } from "react";
import { posts } from "../data";
import Link from 'next/link';

export default function Home() {

    return (
        <div className="Home">
            <header className="Home-header">
                <header>
                    <div>
                        <nav className="navBarTab">
                            <Link className="fa fa-home" href='/'></Link>
                        </nav>
                        <div className="underHeader">
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                            <div className="insideFooter">
                                <a href="https://www.linkedin.com/in/jacob-johnson-05bb79169/" target="blank" className="fa fa-linkedin fa-xs" id="socialIcons" />
                                <a href="hhttps://github.com/JacobJohnson1" target="blank" className="fa fa-github fa-xs" id="socialIcons" />
                                <a href="https://stackoverflow.com/users/15369768/jake-johnson" target="blank" className="fa fa-stack-overflow fa-xs" id="socialIcons" />
                                <a href="mailto: therealjakejohnson@gmail.com" className="fa fa-envelope-o fa-xs" id="socialIcons" />
                            </div>
                        </div>
                    </div>
                </header>
            </header>
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
}
