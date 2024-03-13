import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState, useEffect } from "react";
import { posts } from "../data";
import Link from 'next/link';
import BlogComponent from './blogComponent';
import UnderHeader from './UnderHeader';

export default function Home() {
    return (
        <div className="Home">
            <header className="Home-header">
                <header>
                    <div>
                        <nav className="navBarTab">
                            <Link className="fa fa-home" href='/'></Link>
                            <p>Blog</p>
                        </nav>
                        <UnderHeader />
                    </div>
                </header>
            </header>
            <div id='About'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <section id="Blog">
                <BlogComponent />
            </section>
        </div>
    )
}