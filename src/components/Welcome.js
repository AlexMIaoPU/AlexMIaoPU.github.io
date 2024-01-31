import React from 'react'
import Stack from 'react-bootstrap/Stack';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import {textOvertlay} from './Overlay';
import {CopyToClipboard} from 'react-copy-to-clipboard';


export const Welcome = () => {

  let email = "aleeeexmiao@gmail.com";

  return (
    <div className="Welcome">
        <div className="Welcome-box">
            <div className="Welcome-text">This is</div>
            <Stack direction="horizontal" gap={1} className="Welcome-horiz-stack">
                <div className="Welcome-name">Alex</div>
                <div className="Welcome-text-small">'s personal website</div>
            </Stack>
            <div className="Welcome-links">
                <a href="https://www.linkedin.com/in/alex-y-miao/" className="link">LinkedIn</a>
                <div className="divider"></div>
                <a href="https://github.com/AlexMIaoPU" className="link">GitHub</a>
                <div className="divider"></div>
                {/* The Tooltip that will showup on Hover*/}
                
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 3000 }}
                    overlay={textOvertlay (email)}
                  >
                    <CopyToClipboard text={email} onCopy={(text, result) => console.log(result)}>
                      {/* <div id="Email-Overlay">Email</div> */}
                      <a href="mailto:aleeeexmiao@gmail.com" className="link">Email</a>
                    </CopyToClipboard>
                  </OverlayTrigger>
            </div>
        </div>
    </div>
  )
}
