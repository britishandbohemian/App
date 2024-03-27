import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ViewsDataContext } from '../App';

const AddComponent = () => {
  const { viewsData, updateViewsData } = useContext(ViewsDataContext);
  const navigate = useNavigate();
  // State for the new note's name and importance
  const [newName, setNewName] = useState('');
  const [newImportance, setNewImportance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: Math.max(0, ...viewsData.map(item => item.id)) + 1, // Correctly handle empty array case
      name: newName,
      whyImportant: newImportance,
    };

    // Use updateViewsData correctly to add the new note
    updateViewsData(newNote); 
    navigate('/home'); // Navigate back to the home page
};

  return (
    <div id="content">
      {/* Navigation and Header */}
      <section className="navTop">
        <div style={{ marginBottom: '5rem' }}>
          <header>
            <nav>
              <button onClick={() => navigate('/home')} style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold',color:'black' }}>
                <span className="material-symbols-outlined">chevron_left</span> <h5 style={{fontWeight:'bold'}}>Home </h5>
              </button>
              <h1 className="logo">Feed</h1>
            </nav>
          </header>
        </div>
      </section>

      {/* Form for adding a new note */}
      <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center'}}>
          <div style={{ margin: '10px', width: '100%' }}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={newName} onChange={(e) => setNewName(e.target.value)} required style={{ backgroundColor: 'black', color: 'white', border: 'none', height: '28px', width: '100%' }} />
          </div>
          <div style={{ margin: '10px', width: '100%' }}>
            <label htmlFor="whyImportant">Why is it important:</label>
            <textarea id="whyImportant" name="whyImportant" value={newImportance} onChange={(e) => setNewImportance(e.target.value)} required style={{ backgroundColor: 'black', color: 'white', border: 'none', height: '20vh', width: '100%', resize: 'none' }} />
          </div>

          <button type="submit" style={{ height: '50px', width: '50px', backgroundColor: 'black', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            <span className="material-symbols-outlined" style={{color:'white'}}>check</span>
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddComponent;
