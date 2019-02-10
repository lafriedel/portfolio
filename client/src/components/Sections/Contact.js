import React from 'react';
import { SocialLink } from '../Contact';
import social from '../../social-data';

const Contact = props => {
    return (
        <>
        <h2>Contact</h2>
        <p>Let's connect. <a href="mailto:leigh.ann.friedel@gmail.com">leigh.ann.friedel@gmail.com</a></p>
        {social.map(account => (
            <SocialLink account={account} key={account.account} />
        ))}
        </>
    )
}

export default Contact;