import React from 'react'

import { SocialIcon } from 'react-social-icons'
import { KumaPopUp } from './KumaPopUp'

export const Footer = () => {
  return (
    <div className="footer">
        <div className="icon-container">
            <SocialIcon url="https://linkedin.com/in/alex-y-miao/" bgColor="#1A1C23" className="icon"/>
            <SocialIcon url="https://github.com/AlexMIaoPU" bgColor="#1A1C23" className="icon"/>
            <SocialIcon url="mailto:aleeeexmiao@gmail.com" bgColor="#1A1C23" className="icon"/>
        </div>
    </div>
  )
}
