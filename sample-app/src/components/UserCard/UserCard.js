import React from 'react';
import UserTable from '../UserTable/UserTable';

const UserCard = ({ users, filterKey, title, onFilterChange }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <input
        type="text"
        className="border p-2 mb-4 w-full"
        placeholder={`Filter by ${filterKey}`}
        onChange={(e) => onFilterChange(e.target.value)} // Trigger the onFilterChange passed from UserDashboard
      />
      <UserTable users={users} columnName={filterKey} />
    </div>
  );
};

export default UserCard;
