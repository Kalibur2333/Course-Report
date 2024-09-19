import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [enrolments, setEnrolments] = useState([]);// Store all enrolments
  const [searchTerm, setSearchTerm] = useState('');// Store the search term
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' }); // Store the sorting configuration

  useEffect(() => {
    // Fetch data from the PHP API
    axios.get('http://localhost:8000/enrolments.php')
      .then(response => {
        setEnrolments(response.data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  // Filter enrolments based on the search term
  const filteredEnrolments = enrolments.filter((enrolment) => {
    return (
      enrolment.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enrolment.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enrolment.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enrolment.status_description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Sort the filtered enrolments
  const sortedEnrolments = [...filteredEnrolments].sort((a, b) => {
    if (sortConfig.key) {
      let aValue = a[sortConfig.key].toLowerCase();
      let bValue = b[sortConfig.key].toLowerCase();

      if (aValue < bValue) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
    }
    return 0;
  });

  // Function to handle sorting
  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="min-h-screen bg-customGreen flex items-center justify-center">
      <div className="container mx-auto p-6 shadow-lg bg-white">
        <h1 className="text-2xl mb-4 text-center text-customGreen">Course Enrolment Report</h1>
        
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name, course, or status..."
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}   // Update search term on input change
        />

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-customGreen text-white">
              <th className="p-3 border border-gray-300 cursor-pointer" onClick={() => handleSort('first_name')}>
                  First Name
                  <span className="ml-2">{sortConfig.key === 'first_name' ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : '⇅'}</span>
                </th>
                <th className="p-3 border border-gray-300 cursor-pointer" onClick={() => handleSort('last_name')}>
                  Last Name
                  <span className="ml-2">{sortConfig.key === 'last_name' ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : '⇅'}</span>
                </th>
                <th className="p-3 border border-gray-300 cursor-pointer" onClick={() => handleSort('description')}>
                  Course
                  <span className="ml-2">{sortConfig.key === 'description' ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : '⇅'}</span>
                </th>
                <th className="p-3 border border-gray-300 cursor-pointer" onClick={() => handleSort('status_description')}>
                  Status
                  <span className="ml-2">{sortConfig.key === 'status_description' ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : '⇅'}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedEnrolments.map((enrolment, index) => (
                <tr key={index} className="text-gray-700 hover:bg-gray-100">
                  <td className="p-3 border border-gray-300">{enrolment.first_name}</td>
                  <td className="p-3 border border-gray-300">{enrolment.last_name}</td>
                  <td className="p-3 border border-gray-300">{enrolment.description}</td>
                  <td className="p-3 border border-gray-300">{enrolment.status_description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;

