import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './style.css'

function Nav() {

    const [about, setAbout ] = useState(true);
    const [portfolio, setPortfolio ] = useState(false);
    const [contact, setContact ] = useState(false);

    const handleActive = (event) => {
        console.log(event.target.value);
    }
    return (
        <nav className='navbar navbar-expand-lg navbar-dark cloud'>
            <a className='navbar-brand' href="/">
                Home Page
            </a>
            <ul className="row navbar-nav">
                <li className={`nav-item p-2 ${about ? 'active' : ''}`}>
                    <a className="nav-link" onClick={handleActive} href="/">About-me <span className="sr-only">(current)</span></a>
                </li>
                <li className={`nav-item p-2 ${portfolio ? 'active' : ''}`}>
                    <a className="nav-link" href="/portfolio">Portfolio</a>
                </li>
                <li className={`nav-item p-2 ${contact ? 'active' : ''}`}>
                    <a className="nav-link" href="/contact">Contact</a>
                </li>
                <li className="nav-item p-2">
                    <>
                        <DropdownButton
                            // as={ButtonGroup}
                            key={'right'}
                            id={'dropdown-button-drop-right'}
                            drop={'right'}
                            variant='info'
                            title={'Professional Links'}
                        >
                            <Dropdown.Item href="https://www.linkedin.com/in/james-lovejoy-b414307a/">Linkedin</Dropdown.Item>
                            <Dropdown.Item href="https://github.com/jlovejo2/">Github Profile</Dropdown.Item>
                            <Dropdown.Item href="assets/James_Lovejoy_Resume_overall.pdf">Resume</Dropdown.Item>
                        </DropdownButton>
                    </>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;