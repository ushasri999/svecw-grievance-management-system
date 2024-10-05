import React, { useState, useEffect } from 'react';

const AdminMessComplaints = () => {
    const [complaints, setComplaints] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchComplaints = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/getAllMessComplaints');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setComplaints(data);
                console.log(data);
            } catch (error) {
                setError(error);
            }
        };

        fetchComplaints();
    }, []);

    if (error) {
        return <div className="text-red-500">Error: {error.message}</div>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center text-indigo-600">Student Opinions</h1>
                {complaints.length === 0 ? (
                    <p className="text-gray-500 text-center">No complaints found</p>
                ) : (
                    <ul className="list-disc pl-5 space-y-2">
                        {complaints.map((complaint) => (
                            <li key={complaint.usn} className="bg-indigo-50 p-2 rounded shadow">
                                <span className="font-semibold text-indigo-700">{complaint.usn}:</span> {complaint.comment}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default AdminMessComplaints;
