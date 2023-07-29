import React from 'react';
import TextSphere from './TextSphere';
import './about.css';


function About() {

  return (
    <div className='about-container' id='About'>
        <div className='about-container1 child-box'>
            <h2>About Me</h2>
            <p>I am a passionate individual who was born and raised in the charming town of Perambalur. I recently completed my Bachelor's degree in Electronics and Communication Engineering from K. Ramakrishnan College of Engineering, Trichy.

            Driven by my curiosity and fascination for web development, I have acquired expertise in HTML, CSS, JS, and React.js. As a quick learner, I take pride in my ability to self-learn, allowing me to adapt and grow in this ever-changing field.

            Through my portfolio, I aim to showcase my progress and the projects that reflect my dedication and creativity. Join me on this exciting journey as we explore the endless possibilities of web development together!
            </p>
        </div>
        <TextSphere/>
    </div>
  )
}

export default About