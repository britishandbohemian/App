import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = ({ viewsData }) => {
  const location = useLocation();
  const username = location.state ? location.state.username : "User"; // Fallback to "User" if no username is provided

  return (
    <div id="content">
      <section className="navTop" style={{ marginBottom: '5rem' }}>
        <header>
          <nav>
            <Link style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color:"black" }} to={"/signin"}>
              <span className="material-symbols-outlined">chevron_left</span> <h5>Logout</h5>
            </Link>
            <h1 className="logo">Feed</h1>
          </nav>
        </header>
      </section>

      <section style={{ padding: '1rem',margin:' 3rem auto' }}>
        <div style={{ margin:'3rem auto',padding: '2rem', backgroundColor: 'rgb(0, 0, 0)', marginBottom: '0' }}>
          <h1 style={{ fontSize: '5vh', fontWeight: 'bolder', color: 'white' }}>Welcome, {username}</h1>

          <hr style={{ padding: '0', margin: '0', height: '2.5rem', width: '100%' }} className="gradient" />
        </div>


        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' ,flexDirection: 'column',margin:'3rem auto'}}>
          {viewsData.map((view, index) => (
            <Link
              to={`/view/${view.id}`}
              state={{ item: view }}
              key={view.id}
              style={{ color: 'black', textDecoration: 'none', width: 'calc(50% - 20px)' }}
            >
              <div style={{
                backgroundColor: 'black',
                padding: '20px',
                margin: index % 2 === 0 ? '0 auto 0 0' : '0 0 0 auto', // Alternating alignment
                display: 'flex',
                flexDirection: 'column',
                alignItems: index % 2 === 0 ? 'flex-start' : 'flex-end',
              }}>
                <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>{view.name}</h1>
                <h2 style={{ color: 'white', fontSize: '1rem', fontWeight: '100' }}>{view.whyImportant}</h2>
              </div>
              <hr style={{ padding: '0', margin: '0', height: '2.5rem', width: '100%' }} className="gradient" />
            </Link>
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
