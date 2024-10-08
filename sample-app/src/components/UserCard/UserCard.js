// src/UserCard.js
import React from 'react';
import UserTable from '../UserTable/UserTable';

const UserCard = ({ users, filter, filterKey }) => {
  // Dynamically filter based on the passed key
  const filteredUsers = users
    .filter(user => user[filterKey].toLowerCase().includes(filter.toLowerCase()))
    .slice(0, 3);  // Limit to top 5 users

  return (
    <div className="flex justify-center">
      <div className="w-full">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Top 3 {filterKey}</div>
                <p class="text-gray-700 text-base">
                <UserTable users={filteredUsers} columnName={filterKey} />
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#user</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{filterKey}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#list</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
