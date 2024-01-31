import React from 'react'
import Button from 'react-bootstrap/Button';

import {CopyToClipboard} from 'react-copy-to-clipboard';

export const CopyButton = () => {

    let email = "aleeeexmiao@gmail.com";

    return (

        <CopyToClipboard text={email} onCopy={(text, result) => console.log(result)}>
            <Button variant="outline-info" size="sm">Copy</Button>{' '}
        </CopyToClipboard>
    )
}
