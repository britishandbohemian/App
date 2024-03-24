import React, { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ViewsDataContext } from './App'; // Adjust the import path as necessary

const EditComponent = () => {
  const { viewsData, updateViewsData } = useContext(ViewsDataContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const item = viewsData.find(item => item.id === parseInt(id));

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedItem = {
      id: item.id,
      name: e.target.name.value,
      whyImportant: e.target.whyImportant.value,
    };
  
    updateViewsData(updatedItem);
    navigate(`/view/${updatedItem.id}`, { state: { item: updatedItem } });
  };

  const handleBack = () => {
    navigate(`/view/${item.id}`, { state: { item } });
  };

  if (!item) {
    return <div>Item not found</div>;
  }
  return (
    <div id="content" >
   <section className="navTop">
        <div style={{ marginBottom: '5rem' }}>
          <header>
            <nav>
              <button style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold',color:'black' }} onClick={handleBack}>
                <span className="material-symbols-outlined">chevron_left</span> 
              </button>
              <h1 className="logo">Feed</h1>
            </nav>
          </header>
        </div>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', width: '50%' }}>
          <div style={{ margin: '10px', width: '100%' }}>
            <label htmlFor="name" style={{ display: 'block', margin: '10px 0', fontWeight: '400', fontSize: '15px' }}>Name:</label>
            <input type="text" id="name" name="name" defaultValue={item.name} required style={{ backgroundColor: 'black', color: 'white', border: 'none', height: '28px', width: '100%' }} />
            <hr style={{ border: '1px solid black', marginTop: '7px' }} />
          </div>
          <div style={{ margin: '10px', width: '100%' }}>
            <label htmlFor="whyImportant" style={{ display: 'block', margin: '10px 0', fontWeight: '400', fontSize: '15px' }}>Why Important:</label>
            <textarea id="whyImportant" name="whyImportant" defaultValue={item.whyImportant} required style={{ backgroundColor: 'black', color: 'white', border: 'none', height: '20vh', width: '100%', resize: 'none' }} />
            <hr style={{ border: '1px solid black', marginTop: '7px' }} />
          </div>

          <button type="submit" style={{ height: '50px', width: '50px', backgroundColor: 'black', borderRadius: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            <span className="material-symbols-outlined" style={{ color: 'white', fontSize: '24px' }}>check</span>
          </button>
        </form>
      </section>
    </div>
  );
};

export default EditComponent;
