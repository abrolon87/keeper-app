import React from 'react';

const Footer = () => {
    let year = new Date();

    return(<footer><p>Copyright © {year.getFullYear()}</p></footer>);
}

export default Footer;