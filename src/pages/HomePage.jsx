import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ChatContext } from '../contexts/ChatContext';
import GroupList from '../components/chat/GroupList';
import Loading from '../components/chat/Loading';

const HomePage = () => {
  const { groups, loading } = useContext(ChatContext);
  const [search, setSearch] = useState('');

  if (loading) return <Loading />;

  const filteredGroups = groups.filter((group) =>
    group.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-gray-800 p-1 pl-14 border border-gray-400 rounded w-full"
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-12">
          <FontAwesomeIcon icon={faSearch} className="text-gray-800" />
        </span>
      </div>
      <GroupList groups={filteredGroups} />
    </div>
  );
};

export default HomePage;
