import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ViewsDataContext } from '../App';

const Home = () => {
  const { viewsData, deleteCard } = useContext(ViewsDataContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { username } = location.state || {};

  const handleLogout = () => {
    navigate('/signin');
  };

  // Adjusted to use the deleteCard function from context
  const handleDelete = async (id) => {
    try {
      await deleteCard(id);
      console.log(`Component with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting component: ", error);
    }
  };



  return (
    <div id="content">
      <section className="navTop" style={{ marginBottom: '5rem' }}>
        <header>
          <nav>
<button>
<span onClick={handleLogout} style={{ cursor: 'pointer',display:'flex',alignItems:'center' }}>
  <span className="material-symbols-outlined">chevron_left</span> <h5 style={{ fontWeight: 'bold' }}>Logout</h5>
</span>
</button>
            <h1 className="logo">Feed</h1>
          </nav>
        </header>
      </section>

      <section style={{ padding: '1rem', margin: ' auto 0rem' }}>
        <div style={{ margin: '3rem auto', padding: '0rem', backgroundColor: 'rgb(0, 0, 0)', marginBottom: '0' }}>

          <div style={{ padding: '2rem' }}>
            <h1 style={{ fontSize: '5vh', fontWeight: 'bold', color: 'white' }}>Welcome</h1>

            <h5 style={{ fontSize: '15px', color: 'white' }}>{username}</h5>
          </div>

          <hr style={{ padding: '0', margin: '0', height: '2.5rem', width: '100%' }} className="gradient" />
        </div>

        <div className="container">
          {viewsData.map((view, index) => (
            <div key={view.id} className={`card-container`}>


              <Link
                to={`/view/${view.id}`}
                state={{ item: view }}
                className="card"
                style={{ textDecoration: 'none' }}
              >
                <h1 style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>{view.name}</h1>
                <h4 style={{ fontWeight: '100', fontSize: '1rem' }}>{view.whyImportant}</h4>
                <h5>Priority</h5>
                <hr style={{ margin: '1rem 0 0 0', height: '10px', border: 'none', backgroundColor: 'red' }} />
              </Link>
              <span
                className="material-symbols-outlined"
                style={{
                  cursor: 'pointer',
                  color: 'black',
                }}
                onClick={() => handleDelete(view.id)}
              >
                close
              </span>
            </div>
          ))}
        </div>







      </section>
      {/* Floating Action Button for Adding a New Note */}
      <Link to="/create" style={{
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        backgroundColor: 'black', // Example blue color
        color: 'white',
        padding: '15px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        fontSize: '24px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        zIndex: '1000', // Ensure it floats above other content
      }}>
        <span className="material-symbols-outlined">add</span>
      </Link>
    </div>
  );
};

export default Home;
