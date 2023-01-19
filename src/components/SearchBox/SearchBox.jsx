import { useState } from 'react';

export function SearchBox({ onSubmit, onChange }) {
  const [input, setInput] = useState('');

  const handleChangeOnInput = event => {
    const fixedUpInput = event.target.value.trim().toLowerCase();
    setInput(fixedUpInput);
    onChange(fixedUpInput);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(input);
  };

  return (
    <form action="#" className="input-group mb-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Type to search..."
        value={input}
        onChange={handleChangeOnInput}
      />

      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
}
