import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, setNameFilter, setEmailFilter, setWebsiteFilter } from '../../redux/features/userSlice';
import UserCard from '../UserCard/UserCard';
import GeoMap from '../GeoMap/GeoMap';

const UserDashboard = () => {
  const dispatch = useDispatch();
  const { users, loading, nameFilter, emailFilter, websiteFilter } = useSelector((state) => state.user);

  useEffect(() => {
    // Fetch users when the component mounts
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredByName = users
    .filter(user => user.name.toLowerCase().includes(nameFilter.toLowerCase()))
    .slice(0, 3);

  const filteredByEmail = users
    .filter(user => user.email.toLowerCase().includes(emailFilter.toLowerCase()))
    .slice(0, 3);

  const filteredByWebsite = users
    .filter(user => user.website.toLowerCase().includes(websiteFilter.toLowerCase()))
    .slice(0, 3);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* User cards */}
      <UserCard
        users={filteredByName}
        filterKey="name"
        title="Users by Name"
        onFilterChange={(filterValue) => dispatch(setNameFilter(filterValue))}
      />
      <UserCard
        users={filteredByEmail}
        filterKey="email"
        title="Users by Email"
        onFilterChange={(filterValue) => dispatch(setEmailFilter(filterValue))}
      />
      <UserCard
        users={filteredByWebsite}
        filterKey="website"
        title="Users by Website"
        onFilterChange={(filterValue) => dispatch(setWebsiteFilter(filterValue))}
      />

      {/* GeoMap */}
      <div className="md:col-span-3">
        <GeoMap users={users} />
      </div>
    </div>
  );
};

export default UserDashboard;
