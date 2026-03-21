import React from "react";
import Link from 'next/link';
import BlogComponent from '../components/BlogComponent';
import UnderHeader from './UnderHeader';

export default function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <div>
          <nav className="navBarTab">
            <a href="/about" id="navBtn">About</a>
            {/* <Link href="/blog" id="navBtn">Blog</Link> */}
            {/* <Link href="/rssFeeds" id="navBtn">Rss Feeds</Link> */}
          </nav>
          <UnderHeader />
        </div>
      </header>
      <div id='FirstThingOnPage'>
        <div className='homePageContent'>
          <p className='blogParagraph'>
            My name is Jacob Johnson. I have a degree in computer science from the University of Missouri -
            Kansas City and I am a software engineer
            for an insurance company.
            <br></br><br></br>
            I don't really like social media. It seems that they're
            out to capture our attention & waste our time. I'd like to think
            this site is a great way to combat that a bit & to
            still have friends/family/anyone else still see what I'm up to.
            <br></br><br></br>
            Everything here has been created from scratch by me with the
            intent to share. So, please feel free to read what I've written,
            look at the pictures I've taken, and kick your digital feet up &
            stay a while.
          </p>
        </div>
        <section id="Blog">
          <BlogComponent />
        </section>
      </div>
    </div>
  )
}
