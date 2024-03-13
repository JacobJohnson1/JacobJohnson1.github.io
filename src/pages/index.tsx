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
              <a href="#About" id="navBtn">About</a>
              <a href="#Blog" id="navBtn">Blog</a>
              <a href="#Contact" id="navBtn">Contact</a>
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
      <div id='About'>
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
        <p>Blog</p>
        <div className='postContainer'>
          <Link href="/blogHome" className='smallBody'>see all</Link>
          <div className='posts'>
            <Link href={'/blog1'}>
              <p>Emergency Book?</p>
              <img src="/organizedBinder.jpg" className='postPic' />
            </Link>
          </div>
          <div className='posts'>
            <Link href={'/blog2'}>
              <p>Sound Bored</p>
              {/* <img src="/organizedBinder.jpg" className='postPic' /> */}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
