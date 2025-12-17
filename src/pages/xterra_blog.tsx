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
    <div className="xterra-photo-gallery" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', margin: '0 0 0 0' }}>
      {xterraImages.map((img) => (
        <img
          key={img}
          src={`/xterra/${img}`}
          alt={img}
          style={{ maxWidth: '250px', maxHeight: '250px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 2px 8px #0002' }}
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
                    
                    I've owned my 2004 Nissan Xterra since ___ - my sophomore year of highschool. It's beena a bit of a love-hate
                    relationship (mostly love), but it's caused me to learn a tremendous amount about car maintenance and repair.
                    My parents & I went together to buy it off of Craigslist from a college student a few towns over. She was
                    an equestrian,so of course there were large, girly horse girl stickers on the back glass that I took way too long
                    to take off & was made fun of by all my friends for. On the plus side, though, it smelt like saddle leather for
                    a couple year after I bought it. 
                    <br></br>
                    The xterra had about 80k miles on it & had been well taken care of. As a young highschooler & first time car owner,
                    I knew virtually nothing about car maintenance; I thought all I had to do was get it rinsed & put gas in it.
                    <br></br><br></br>
                    Some work I had to do on it over the years: 
                    <ul>
                        <li>Changed the spark plugs & plug wires</li>
                        <li>Numerous battery replacements</li>
                        <li>Changed the oil every 3-5k miles (I started doing this way too late)</li>
                        <li>Full brake jobs</li>
                        <li>2 radiator replacements</li>
                        <li>She's on her second starter</li>
                        <li>Whole steering wheel has been replaced</li>
                        <li>New horn</li>
                        <li>Belts</li>
                        <li>Half a dozen tie rods and sway bar stabilizers</li>
                    </ul>
                    
                    
                </p>
            </div>
        </div>
    )
}

