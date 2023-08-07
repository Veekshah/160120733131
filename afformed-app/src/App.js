import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [urls, setUrls] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(urls);
      setResult(response.data.numbers.join(', '));
    } catch (error) {
      console.error('Error fetching data:', error);
      setResult('Error fetching data from server.');
    }
  };

  return (
    <div className="App">
      <h1>afformed App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter URLs (separated by "&url="):
          <input
            type="text"
            value={urls}
            onChange={(e) => setUrls(e.target.value)}
          />
        </label>
        <button type="submit">button</button>
      </form>
      {result && (
        <div>
          <h2>output Integers:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default App;
