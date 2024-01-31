import React from 'react'

export const Info = () => {
  return (
    <div className="info">
        <div className="info-box">
          <div style={{"display": "flex", "align-items": "center", "justify-content": "center", "flex-direction": "row"}}>
            <p style={{"font-size": "36px"}}>Hello There 👋, my name is </p>
            <p style={{"marginLeft": "16px", "font-size": "56px"}} className="Welcome-name"> Alex Miao </p>
            <p style={{"font-size": "36px"}}>.</p>
          </div>
          <div style={{"display": "flex", "align-items": "center", "justify-content": "center", "flex-direction": "row"}}>
            <p style={{"font-size": "36px"}}>I'm a student of </p>
            <p style={{"marginLeft": "16px", "marginRight": "16px", "font-size": "56px"}} className="Welcome-name"> EE/CS </p>
            <p style={{"font-size": "36px"}}> at </p>
            <p style={{"marginLeft": "16px", "marginRight": "16px", "font-size": "56px"}} className="Welcome-name"> UNSW </p>
          </div>
        </div>
    </div>
  )
}
