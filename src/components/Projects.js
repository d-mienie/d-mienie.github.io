import React from 'react';
import './style.css';

const Projects = () => {
    const projects = [
        {
            title: 'The 2048 Game',
            demo: 'https://www.youtube.com/embed/Jyj3C8Cr3r4?mute=1',
            description: 'The 2048 game coded with Java, using an object oriented approach and a GUI based off of the original game. There is the "normal" game mode as well as a time trial and move limit mode.',
        },
        {
            title: 'Explore Arizona Website',
            demo: 'https://www.youtube.com/embed/T-84dj6MuM0?mute=1',
            description: 'A website made for travelers that want to visit Arizona. It contains various things to do, places to stay, restaurants to try out and featured stories from past travelers.',
        },
        {
            title: 'To-Do List with Rust',
            demo: 'https://www.youtube.com/embed/h308bYDqhDQ?mute=1',
            description: 'A simple and effective To-Do list application developed in Rust. This app allows users to add, edit, and remove tasks, providing a minimalist yet effective tool for managing daily activities. As tasks get completed, the user gains points which makes a seed grow into a forest.',
        },
    ];

    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project">
                        <iframe
                            src={project.demo}
                            title={project.title}
                            allow="fullscreen"
                            className="project-iframe"
                        ></iframe>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
