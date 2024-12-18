import React, { useState } from 'react';
import './forms.css';
import { useNavigate } from 'react-router-dom';

function Form() {
    const navigate=useNavigate();
    const [domain, setDomain] = useState('');
    const [numQuestions, setNumQuestions] = useState('');

    // List of domains
    const domains = [
        "Algorithms", "Data Structures", "DBMS/SQL", "Networking", 
        "Machine Learning", "Web Development", "Mobile Development", 
        "DevOps", "Cloud Computing", "Cyber Security", 
        "Software Engineering", "Artificial Intelligence"
    ];

    // List of available number of questions
    const numQuestionOptions = [5, 7, 10];

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (domain && numQuestions) {
            console.log(`Domain: ${domain}, Number of Questions: ${numQuestions}`);
            // Add navigation or form submission logic here
        } else {
            alert('Please fill out both fields.');
        }
    };

    return (
        <div className="i-form">
            <h1>Start Interview</h1>

            <label htmlFor="domain">Select Domain</label>
            <select 
                id="domain" 
                value={domain} 
                onChange={(e) => setDomain(e.target.value)}
                required
            >
                <option value="" disabled>Select Domain</option>
                {domains.map((domain, index) => (
                    <option key={index} value={domain}>{domain}</option>
                ))}
            </select>

            <label htmlFor="questions">Number of Questions</label>
            <select 
                id="numQuestion" 
                value={numQuestions} 
                onChange={(e) => setNumQuestions(e.target.value)}
                required
            >
                <option value="" disabled>---</option>
                {numQuestionOptions.map((num, index) => (
                    <option key={index} value={num}>{num}</option>
                ))}
            </select>

            <button type="submit" className='f-button' onClick={handleSubmit}>Submit</button>
            <button className='c-button' onClick={() =>navigate('/')}>Back Home</button>
        </div>
    );
}

export default Form;
