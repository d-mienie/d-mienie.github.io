import React from 'react';
import { FaReact, FaJs, FaPython, FaDatabase, FaJava, FaHtml5, FaCss3Alt, FaCogs, FaCode} from 'react-icons/fa';
import { GoGraph } from 'react-icons/go';
import { SiRust } from 'react-icons/si'; 
import './style.css';

const Skills = () => {
    const skills = [
        {
            name: 'Java, HTML, CSS',
            icon: <FaHtml5 />,
            description: 'Proficient in web development, combining HTML for structure, CSS for styling, and Java for backend logic.',
            example: 'Built a full-stack web application, Explore AZ (demo in Projects) using Java for backend and HTML/CSS for frontend.'
        },
        {
            name: 'React',
            icon: <FaReact />,
            description: 'Intermediate in building dynamic user interfaces with React.',
            example: 'This personal portfolio was built using React.'
        },
        {
            name: 'JavaScript',
            icon: <FaJs />,
            description: 'Proficient understanding of JavaScript.',
            example: 'Used JavaScript in Website Development, such as the Explore AZ website and this portfolio.'
        },
        {
            name: 'Python',
            icon: <FaPython />,
            description: 'Skilled in Python, including libraries such as NumPy, pandas, and its usage in LLMs',
            example: 'Various programming project and used Python to research and develop a 2D animated chatbot for Integrative Medicine with the ASTEC research lab at the University of Arizona'
        },
        {
            name: 'Rust', 
            icon: <SiRust />, 
            description: 'Intermediate in Rust, focusing on systems programming and building efficient applications with a focus on performance and memory safety.',
            example: 'Built a to-do list application with Rust(demo in Projects)'
        },
        {
            name: 'C',
            icon: <FaCogs />,
            description: 'Experienced in low-level programming with C, memory management, and implementing algorithms.',
            example: 'Programming expieriece from Operating Systems and Unix college course'
        },
        {
            name: 'MIPS Assembly',
            icon: <FaCode />,
            description: 'Worked with MIPS assembly for low-level programming.',
            example: 'Implemented sorting algorithms and simulated hardware in MIPS assembly language.'
        },
        {
            name: 'SQL',
            icon: <FaDatabase />,
            description: 'Proficient in SQL, creating and managing databases, writing queries, and using joins.',
            example: 'Completed an Intro to SQL course'
        },
        {
            name: 'R',
            icon: < GoGraph />,
            description: 'Knowledgeable in R for data analysis, statistical modeling, and data visualization.',
            example: 'Performed data analysis on large datasets using R and used R for statisical calculations.'
        },
    ];

    return (
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <div className="icon">{skill.icon}</div>
                        <h3>{skill.name}</h3>
                        <p>{skill.description}</p>
                        <p><strong>Example:</strong> {skill.example}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
