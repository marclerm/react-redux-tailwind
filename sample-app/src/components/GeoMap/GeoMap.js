import React, { useState } from 'react';

const GeoMap = ({ users }) => {
  const [hoveredUser, setHoveredUser] = useState(null);

  // Normalize the latitude and longitude to fit into a 0-100 range
  const normalizeLatLng = (lat, lng) => {
    const normalizedLat = ((parseFloat(lat) + 90) / 180) * 100;  // lat between -90 to 90
    const normalizedLng = ((parseFloat(lng) + 180) / 360) * 100; // lng between -180 to 180
    return { normalizedLat, normalizedLng };
  };

  return (
    <div>
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-3rem">Users' Geographical Distribution</h1>
        <div className="relative w-full h-96 bg-gray-100 border border-gray-300 rounded-md">
        {/* Background grid */}
        <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-1">
            {Array.from({ length: 100 }).map((_, idx) => (
            <div key={idx} className="bg-gray-200 h-full"></div>
            ))}
        </div>

        {/* Dots for each user */}
        {users.map((user) => {
            const { normalizedLat, normalizedLng } = normalizeLatLng(user.address.geo.lat, user.address.geo.lng);

            return (
            <div
                key={user.id}
                className="absolute bg-blue-600 rounded-full w-4 h-4"
                style={{
                top: `${normalizedLat}%`,
                left: `${normalizedLng}%`,
                transform: 'translate(-50%, -50%)',
                }}
                onMouseEnter={() => setHoveredUser(user)} // Set hovered user name
                onMouseLeave={() => setHoveredUser(null)} // Clear hovered user
                title={user.name} // Optional: show name as tooltip on hover
            >
            </div>
            );
        })}

        {/* Tooltip for the hovered user */}
        {hoveredUser && (
            <div className="absolute bg-gray-800 text-white text-sm p-2 rounded-md" style={{
            top: '-11%', // Adjust according to your design
            left: '45%', // Adjust according to your design
            }}>
                <p className="text-sm text-white">
                    <strong>{hoveredUser.name}</strong> <br />
                    Lat: {hoveredUser.address.geo.lat} <br />
                    Lng: {hoveredUser.address.geo.lng}
                </p>
            </div>
        )}
        </div>
    </div>
  );
};

export default GeoMap;
