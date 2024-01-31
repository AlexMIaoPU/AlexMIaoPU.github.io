import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import chaos from '../images/chaos.png'

export const Projects = () => {
  return (
    <div className="projects">
      <img src={chaos} className="project-bg-img" alt=''/>
      <div id="project-header">My Projects</div>
      <div id="project-container">
        <Card
          style={{ width: '20rem' }}
          className="project-card"
          bg="dark"
        >
          <Card.Img variant="top" src={chaos}/>
          <Card.Body>
            <Card.Title className="card-title">Chaos</Card.Title>
            <Card.Text className="card-text">
              A platform for uni society recruitment managements.
            </Card.Text>
            <Button variant="primary" href="https://github.com/devsoc-unsw/chaos" className="card-button">GitHub</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
