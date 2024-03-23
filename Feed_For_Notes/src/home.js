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
            <button style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }} onClick={() => {/* Logout logic */}}>
              <span className="material-symbols-outlined">chevron_left</span> <h5>Logout</h5>
            </button>
            <h1 className="logo">Feed</h1>
          </nav>
        </header>
      </section>

      <section style={{ padding: '1rem' }}>
        <div style={{ padding: '2rem', backgroundColor: 'rgb(0, 0, 0)', marginBottom: '0' }}>
          <h1 style={{ fontSize: '5vh', fontWeight: 'bolder', color: 'white' }}>Welcome, {username}</h1>
        </div>
        <hr style={{ padding: '0', margin: '0', height: '2.5rem', width: '100%' }} className="gradient" />

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
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
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
