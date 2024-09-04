import React from 'react';
// import '../App.css';

// const knob = document.querySelector('knob');

// calculateDegree(e) {
//     const x1 = window.innerwidth / 2;
//     const y1 = window.innerwidth / 2;
//     const x2 = e.clientX;
//     const y2 = e.clientY;

//     const deltaX = x1-x2;
//     const deltaY = y1-y2;

//     const rad = Math.atan2(deltaY, deltaX);
// }

function Navbar() {

    return (
        <div class='navbar'>
            <img src='/React-icon.svg.png' class='topLeftCorner' />
            <div class='adjustments'>
                <div class='slider'>
                    <div class="knob"></div>
                </div>
            </div>
        </div >
    );
}

export default Navbar;
