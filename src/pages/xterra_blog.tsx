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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
}

