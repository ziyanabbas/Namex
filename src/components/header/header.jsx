import React from "react";
import './header.css';

const Header = ({headTitle, headerExpanded})=>{
    return(
        <div className="head-container">
            <img src="https://png.pngtree.com/png-vector/20190319/ourlarge/pngtree-vector-web-search-icon-png-image_847735.jpg" 
            className={`head-image ${
                headerExpanded ? 'head-image-expanded' : 'head-image-contracted'
            }`}
            alt="headerImage"
            />
            <h1 
            className={`head-text ${
                headerExpanded ? 'head-text-expanded' : 'head-text-contracted'
            }`}>
                {headTitle}
            </h1>
        </div>
    )
}

export default Header