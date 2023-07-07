import React, { useState } from 'react'

import logo from './images/starbucks-logo.png';
import './Navigation.scss';


function Navigation() {
    const clickHandler = () => {
        const btn = document.getElementById('menu-btn')
        const nav = document.getElementById('menu')

        btn.classList.toggle('open')
        nav.classList.toggle('hidden')
        document.body.classList.toggle('no-scroll')

    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-brand">
                        <a href="#">
                            <img src={logo}></img>
                        </a>
                    </div>
                    <ul className="navbar-nav-left">
                        <li>
                            <a href="#">Menu</a>
                        </li>
                        <li>
                            <a href="./rewards_page.html">Rewards</a>
                        </li>
                        <li>
                            <a href="#">Gift Cards</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav-right">
                        <li>
                            <a href="#">
                                <svg
                                    fill="#000000"
                                    version="1.1"
                                    id="Capa_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="800px"
                                    height="800px"
                                    viewBox="0 0 395.71 395.71"
                                    xmlSpace="preserve"
                                >
                                    <g>
                                        <path
                                            d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
            c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
            C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
            c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
                                        />
                                    </g>
                                </svg>
                                <span>Find a store</span>
                            </a>
                        </li>
                        <li>
                            <button className="btn btn-dark-outline">Sign In</button>
                        </li>
                        <li>
                            <button className="btn btn-dark">Join Now</button>
                        </li>
                    </ul>
                    {/*
              Hamburger Menu
          */}
                    <button onClick={clickHandler} type="button" className="hamburger" id="menu-btn">
                        <span className="hamburger--top" />
                        <span className="hamburger--middle" />
                        <span className="hamburger--bottom" />
                    </button>
                </div>
            </nav>
            {/* Mobile menu */}
            <div className="mobile-menu hidden" id="menu">
                <ul className="navbar-head">
                    <li>
                        <a href="#">Menu</a>
                    </li>
                    <li>
                        <a href="#">Rewards</a>
                    </li>
                    <li>
                        <a href="#">Gift Cards</a>
                    </li>
                </ul>
                <div className="mobile-menu-bottom">
                    <botton className="btn btn-dark-outline">Sign In</botton>
                    <botton className="btn btn-dark">Join Now</botton>
                    <div>
                        <a href="#">
                            <img src="./location.svg" alt="" />
                            Find a Store
                        </a>
                    </div>
                </div>
            </div>


        </>
    )
}



export default Navigation