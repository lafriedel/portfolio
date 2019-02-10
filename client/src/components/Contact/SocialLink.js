import React from 'react';

const SocialLink = props => {
    return (
        <>
            <a href={props.account.profileURL} target="_blank"><p>{props.account.account}</p></a>
        </>
    )
}

export default SocialLink;