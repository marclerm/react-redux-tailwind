// src/UserDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from '../UserCard/UserCard';
import GeoMap from '../GeoMap/GeoMap';


const UserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [emailFilter, setEmailFilter] = useState('');
  const [websiteFilter, setWebsiteFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching the users', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (

    <div class="flex flex-col">
        <div className='block h-40rem'>
            <div class="flex mb-4">
                <div class="w-1/3 bg-gray-400 h-12">
                    {/* Card 1: Filter by Name */}
                    <div className="bg-white shadow-md p-6">
                            <input
                            type="text"
                            placeholder="Filter by name..."
                            className="border p-2 mb-4 w-full border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={nameFilter}
                            onChange={(e) => setNameFilter(e.target.value)}
                            />
                            <UserCard users={users} filter={nameFilter} filterKey="name" />
                    </div>
                </div>
                <div class="w-1/3 bg-gray-500 h-12">
                    {/* Card 2: Filter by Email */}
                    <div className="bg-white shadow-md p-6">
                            <input
                            type="text"
                            placeholder="Filter by email..."
                            className="border p-2 mb-4 w-full border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={emailFilter}
                            onChange={(e) => setEmailFilter(e.target.value)}
                            />
                            <UserCard users={users} filter={emailFilter} filterKey="email" />
                    </div>
                </div>
                <div class="w-1/3 bg-gray-400 h-12">
                    {/* Card 3: Filter by Website */}
                     <div className="bg-white shadow-md  p-6">
                            <input
                            type="text"
                            placeholder="Filter by website..."
                            className="border p-2 mb-4 w-full border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={websiteFilter}
                            onChange={(e) => setWebsiteFilter(e.target.value)}
                            />
                            <UserCard users={users} filter={websiteFilter} filterKey="website" />
                    </div>
                </div>
             </div>
        </div>
        <div>
            {/* GeoMap component to visualize users' geo data */}
            <div>
                    <h2 className="text-2xl font-bold text-center text-indigo-600 mb-3rem">Users' Geographical Distribution</h2>
                    <GeoMap users={users} />
                </div>
        </div>
    </div>
  );
};

export default UserDashboard;
