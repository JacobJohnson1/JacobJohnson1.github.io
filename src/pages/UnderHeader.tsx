import React from "react";

export default function UnderHeader() {
    return (
        <div className="underHeader">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div className="insideFooter">
                <a href="https://www.linkedin.com/in/jacob-johnson-05bb79169/" target="blank" className="fa fa-linkedin fa-xs" id="socialIcons" />
                <a href="https://github.com/JacobJohnson1" target="blank" className="fa fa-github fa-xs" id="socialIcons" />
                <a href="https://www.youtube.com/@jacob-johnson2" target="blank" className="fa fa-youtube-play fa-xs" id="socialIcons" />
                <a href="mailto: therealjakejohnson@gmail.com" className="fa fa-envelope-o fa-xs" id="socialIcons" />
                <a href="https://www.goodreads.com/user/show/108357320-jacob-johnson" id="socialIcons" target="blank" className="fa fa-book fa-xs" />
            </div>
        </div>
    )
}