import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState, useEffect } from "react";
import { posts } from "../data";
import Link from 'next/link';
import BlogComponent from './BlogComponent';
import UnderHeader from './UnderHeader';

export default function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <header>
          <div>
            <nav className="navBarTab">
              <a href="#About" id="navBtn">About</a>
              <a href="#Blog" id="navBtn">Blog</a>
              <a href="#Contact" id="navBtn">Contact</a>
            </nav>
            <UnderHeader />
          </div>
        </header>
      </header>
      <div id='FirstThingOnPage'>
        <p>
          My name is Jacob Johnson. I have a degree in computer science from the University of Missouri -
          Kansas City and I am a software engineer
          for an insurance company.
          <br></br>
          <br></br>
          This site has been created from scratch by me, so please
          feel free to read about the projects I have worked on, books read,
          and anything else on here.
        </p>
      </div>
      <section id="Blog">
        <p>
          Blog
          <br></br>
          <Link href="/blogHome" className='smallBody'>see all</Link>
        </p>
        <BlogComponent />
      </section>
    </div>
  )
}
