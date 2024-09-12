import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState, useEffect } from "react";
import { posts } from "../data";
import Link from 'next/link';
import BlogComponent from '../components/BlogComponent';
import UnderHeader from './UnderHeader';

export default function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <div>
          <nav className="navBarTab">
            <a href="#About" id="navBtn">About</a>
            <a href="#Contact" id="navBtn">Contact</a>
            <a href="/blog" id="navBtn">Blog</a>
          </nav>
          <UnderHeader />
        </div>
      </header>
      <div id='FirstThingOnPage'>
        <div className='leftColumn'>
          <p>
            My name is Jacob Johnson. I have a degree in computer science from the University of Missouri -
            Kansas City and I am a software engineer
            for an insurance company.
            <br></br><br></br>
            Saying you are a minimalist or you believe in any sort of 
            minimalism invites eye rolls these days. But, in a world of
            over engineered and difficult to maintain websites and applications
            I am trying to keep this site stripped to bare-bones necessities. 
            <br></br><br></br>
            This site has been created from scratch by me, so please
            feel free to read about the projects I have worked on, books read,
            and anything else on here.
          </p>
        </div>
        <section id="Blog">
          <BlogComponent />
        </section>
      </div>
    </div>
  )
}
