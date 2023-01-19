import { useEffect, useMemo, useState } from 'react';
import { CandidateCard } from './CandidateCard';

import people from './people.json';

export function CandidateList() {
  const [search, setSearch] = useState('');
  const [candidates, setCandidates] = useState(() => {
    return JSON.parse(localStorage.getItem('candidates-list')) ?? people;
  });

  const handleDelete = id => {
    setCandidates(prev => prev.filter(candidate => candidate.id !== id));
  };
  const handleSearch = event => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem('candidates-list', JSON.stringify(candidates));
  }, [candidates]);

  const filteredCandidates = useMemo(() => {
    return candidates.filter(candidate => candidate.name.toLowerCase().includes(search.toLowerCase()));
  }, [candidates, search]);

  return (
    <>
      <div className="input-group mb-3">
        <input
          value={search}
          onChange={handleSearch}
          type="search"
          className="form-control"
          placeholder="Search user by name..."
        />
      </div>

      <div className="mb-5">
        {filteredCandidates.length > 0 ? (
          filteredCandidates.map(candidate => (
            <CandidateCard key={candidate.id} candidate={candidate} onDelete={handleDelete} />
          ))
        ) : (
          <p>Nothing were found</p>
        )}
      </div>
    </>
  );
}
