import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import orangegradient from '../orangegradient.png'

var backgroundGradient = {
    width: '100vw',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${orangegradient})`,
}

var centered = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  }

function LandingPage() {
    return (
        <div style={backgroundGradient}>
        </div>
    );
}

export default LandingPage;
