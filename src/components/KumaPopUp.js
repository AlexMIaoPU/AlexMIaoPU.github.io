import React, { useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

export const KumaPopUp = () => {

  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);
  return (
    <Container style={{ paddingTop: '20rem' }}>
      {showButton && (
        <Button
          onClick={() => setShowMessage(true)}
          size="lg"
        >
          Show Message
        </Button>
      )}
      <CSSTransition
        in={showMessage}
        nodeRef={nodeRef}
        timeout={700}
        classNames="k"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <Alert
          ref={nodeRef}
          variant="primary"
          dismissible
          onClose={() => setShowMessage(false)}
        >
          <Alert.Heading>
            Animated alert message
          </Alert.Heading>
          <p>
            This alert message is being transitioned in and
            out of the DOM.
          </p>
          <Button
            variant="primary"
            onClick={() => setShowMessage(false)}
          >
            Close
          </Button>
        </Alert>
      </CSSTransition>
    </Container>
  );
}

