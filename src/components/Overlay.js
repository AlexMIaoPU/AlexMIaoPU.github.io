import React from 'react'
import Tooltip from 'react-bootstrap/Tooltip';

export const textOvertlay = (props) => {
  return (
    <Tooltip className="Overlay-tooltip" {...props}>
      {props}
    </Tooltip>
  )
}
