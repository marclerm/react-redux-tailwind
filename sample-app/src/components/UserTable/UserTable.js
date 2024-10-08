// src/UserTable.js
import React from 'react';

const UserTable = ({ users, columnName }) => {
  return (
    <table className="min-w-full border border-gray-300 rounded-lg shadow-lg overflow-hidden">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-4 text-left capitalize">{columnName}</th> {/* Dynamically set column header */}
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map(user => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="border p-4">
                {columnName === 'website' ? (
                  <a
                    href={`http://${user[columnName]}`} // Create a clickable link
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {user[columnName]}
                  </a>
                ) : (
                  user[columnName]
                )}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="text-center p-4">No users found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;


