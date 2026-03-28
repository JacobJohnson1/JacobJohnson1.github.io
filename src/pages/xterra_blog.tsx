import React, { useState, useEffect } from "react";
import Link from 'next/link';
import UnderHeader from './UnderHeader';


var xterraImages = [
  "xterra_empty.jpg",
  "xterra_shootout.jpg",
  "xterra_steering_wheel.jpg",
  "xterra_steering_bolt.jpg",
  "xterra_bad_spark.jpg",
  "xterra_spark_plugs.jpg",
  "xterra_brake_in.jpg",
  "xterra_engine_bay.jpg",
  "xterra_plug_wires.jpg",
  "xterra_frozen.JPG",
  "xterra_manual.jpg"
];

function XterraPhotoGallery() {
  return (
    <div className="xterra-photo-gallery" >
      {xterraImages.map((img) => (
        <img
          className="xterra-photo"
          key={img}
          src={`/xterra/${img}`}
          alt={img}
        />
      ))}
    </div>
  );
}

export default function Home() {
    return (
        <div className="Home">
            <header className="Home-header">
                <div>
                    <nav className="navBarTab">
                        <Link id="navBtn" href='/'>Home</Link>
                    </nav>
                    <UnderHeader />
                </div>
            </header>
            <div className='blogText'>
                <XterraPhotoGallery />
                <p>
                    Dear Xterra,
                    <br></br><br></br>
                    I've owned you since 2013 - my sophomore year of highschool. It's been a a bit of a love-hate
                    relationship (mostly love), but you've caused me to learn a tremendous amount about car maintenance and repair.
                    My parents & I went together to buy you off of Craigslist from a college student a few towns over. She was
                    an equestrian, so of course there were large, girly horse girl stickers on your back glass that I took way too long
                    to take off & was made fun of by all my friends for. But, I was enamoured by the smell of saddle leather for
                    our first couple years. 
                    <br></br>
                    You were no spring chicken when we met; nine years old and 80k miles! You were well taken care of, though.
                    As a dumb highschooler & first time car owner, I knew virtually nothing about car maintenance. 
                    I thought all I had to do was give you a rinse & put gas in you. So, I'm sorry I let your radiator blow up (twice).
                    I'm sorry it took six years and twenty thousand miles to fix your broken cylinder-six spark plug. And for 
                    screwing up your throttle position sensor for the same amount of time. Sorry for breaking
                    all of your hub caps because I thought they were too pesky to put back on correctly. Sorry for the solid
                    steel mailbox I hit and for all of the fender benders.
                    <br></br>
                    We had some good times, though. And I stood up for you everytime a friend made fun of you or called you a 
                    hoopty. You never left me stranded (except for when we ran out of gas in negative degree weather). You got
                    me to every single day of work and school. You got me to every job interview and every date. 
                    <br></br>
                    I have a kid, now. I have a family & we just needed something a little safer and better on gas.
                    We had to replace you and now it's time to say goodbye. I won't ever forget you and the lessons 
                    you taught me. I hope you find a good home and that your next owner loves you as much as I do.
                    <br></br><br></br>
                    Love,
                    <br></br>
                    Jacob
                    
                    
                </p>
                <img src={`/xterra/xterraListing.jpg`}/>
            </div>
        </div>
    )
}

