import React from 'react';
const year = new Date().getFullYear();

function Footer(){
    return (
        <footer>
            <p>copyright ©{year}</p>
        </footer>
    )
}

// copyright message in a <p> with a dynamically updated year.

export default Footer;