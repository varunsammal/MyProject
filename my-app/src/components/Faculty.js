import React from 'react';

const Faculty = () => {
    // Static data for faculty members
    const facultyData = [
        {
            name: 'Dr. John Smith',
            qualification: 'Ph.D. in Computer Science',
            subject: 'Computer Science',
            experience: '10 years',
            age: '45',
        },
        {
            name: 'Prof. Sarah Johnson',
            qualification: 'M.Sc. in Mathematics',
            subject: 'Mathematics',
            experience: '15 years',
            age: '50',
        },
        {
            name: 'Mr. Alan Brown',
            qualification: 'M.A. in History',
            subject: 'History',
            experience: '8 years',
            age: '38',
        },
        {
            name: 'Dr. Emma Williams',
            qualification: 'Ph.D. in Physics',
            subject: 'Physics',
            experience: '12 years',
            age: '42',
        },
        {
            name: 'Prof. David Lee',
            qualification: 'M.Ed. in Educational Leadership',
            subject: 'Education',
            experience: '20 years',
            age: '55',
        },
    ];

    return (
        <div className="faculty-table-container">
            <h2 className="faculty-table-title">Faculty Details</h2>
            <table className="faculty-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Qualification</th>
                        <th>Subject</th>
                        <th>Experience</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {facultyData.map((faculty, index) => (
                        <tr key={index}>
                            <td>{faculty.name}</td>
                            <td>{faculty.qualification}</td>
                            <td>{faculty.subject}</td>
                            <td>{faculty.experience}</td>
                            <td>{faculty.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Faculty;
