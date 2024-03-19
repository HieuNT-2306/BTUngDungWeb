import React, { useState, useEffect } from 'react';
import './App.css'; 

function App() {
  const [users, setUsers] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0); 

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchData();
  }, []);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < users.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentUser = users[currentIndex];

  return (
    <div className="App">
      <h1 className='title'>User Information</h1>
      <div className='tag'>
      {currentUser && (
        <>
          <h3>{currentUser.name}</h3>
          <div><span className='infoname'>Address:</span> {currentUser.address.suite}, {currentUser.address.street}, {currentUser.address.city}</div>
          <div><span className='infoname'>Zip code: </span> {currentUser.address.zipcode}</div>
          <div><span className='infoname'>Email: </span> {currentUser.email}</div>
          <div><span className='infoname'>Username: </span>{currentUser.username}</div>
          <div><span className='infoname'>Phone: </span> {currentUser.phone}</div>
          <div><span className='infoname'>Company: </span>
            <ul>
              <li>Bs: {currentUser.company.bs}</li>
              <li>Catch phrase: {currentUser.company.catchPhrase}</li>
              <li>Name: {currentUser.company.name}</li>
            </ul>

          </div>

          <div><span className='infoname'>Website:</span> <span><a href={currentUser.website}>{currentUser.website}</a></span></div>
        </>
      )}
      </div>

      <div className="navigation">
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          Prev
        </button>
        <button onClick={handleNext} disabled={currentIndex === users.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;