"use client";
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

function Join() {
  const [applicants, setApplicants] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newApplicant = { name, email };
    setApplicants([...applicants, newApplicant]);
    setName('');
    setEmail('');
  };

  const handleDelete = (index) => {
    const updatedApplicants = [...applicants];
    updatedApplicants.splice(index, 1);
    setApplicants(updatedApplicants);
  };

  return (
    <div className={styles.joinContainer}>
      <h1 className={styles.joinTitle}>Join Our Group</h1>
      <p className={styles.joinDescription}>Connect with like-minded people!</p>
      <form className={styles.joinForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputField}
        />
        <button type="submit" className={styles.joinButton}>
          Send Your CV
        </button>
      </form>
      <ul className={styles.applicantList}>
        {applicants.map((applicant, index) => (
          <li key={index}>
            {applicant.name} - {applicant.email}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Join;