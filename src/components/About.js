import React from 'react';
import './style.css';
import me from "../img/me.jpg"; 
const resume = "/resume.pdf";

const About = () => {
    return (
        <section id="about" className="about">
            <h2>About Me</h2>
            <div className="about-content">
                <p>
                    My name is Dante Mienie, and I am set to graduate from the University of Arizona in May 2025 with a Bachelor's degree in Computer Science and a Minor in Statistics and Data Science.
                    I have a deep passion for developing innovative software solutions, tackling complex problems, and creating efficient systems.
                    With a solid foundation in computer science principles and hands-on experience in software development, I am excited to apply my knowledge and skills in real-world applications.
                </p>

                <img src={me} alt="Dante Mienie" className="about-image" />
            </div>
            <a href={resume} target="_blank" download className="btn btn-primary resume-btn">
                Download Resume
            </a>
        </section>
    );
};

export default About;
