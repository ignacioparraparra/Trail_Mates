import {useState} from 'react'
import './styles/sidebar.css'

function Sidebar() {
    return(
        <div className="sidebar">
            <a class="active">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
    );
}

export default Sidebar