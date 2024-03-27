import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const ViewComponent = () => {
  const location = useLocation();
  const { item } = location.state; // Accessing the passed item

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div id="content">
      <section className="navTop">
        <header>
          <nav>
          <Link style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: "black" }} to={"/home"}>
              <span className="material-symbols-outlined">chevron_left</span> <h5 style={{fontWeight:'bold'}}>Home</h5>
            </Link>
            <h1 className="logo">Feed</h1>
          </nav>
        </header>
      </section>

      <section style={{ display: 'grid', flexDirection: 'column', alignItems: 'center' ,height:'100vh',}}>
        <div style={{ height: '60vh', width: '100%', backgroundImage: "url('/bg.jpg')", backgroundSize: 'cover', padding: '0rem' }}></div>
        <div style={{ backgroundColor: 'white', width: '100%', position: 'relative',border:'#6c6c6c3b 1px solid' }}>
          <Link to={`/edit/${item.id}`} state={{ item }} style={{
            borderRadius: '100%',
            width: '50px',
            height: '50px',
            position: 'absolute',
            top: '-25px',
            right: '5%',
            backgroundColor: 'white',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            textDecoration: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <span className="material-symbols-outlined" style={{ color: 'black', fontSize: '24px' }}>edit</span>
          </Link>
          <div className="text" style={{ padding: '1rem' }}>
            <h1>{item.name}</h1>
            <h2 style={{ fontWeight: '100', fontSize: '16px' }}>{item.whyImportant}</h2>
          </div>
          <div style={{ backgroundColor: 'red', padding: '9px', margin: '0' }}></div>
        </div>
      </section>
    </div>
  );
};

export default ViewComponent;
