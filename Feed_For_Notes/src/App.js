import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home'; // Adjust the path if necessary
import SignIn from './signin'; // Adjust the path if necessary
import ViewComponent from './viewComponent'; // Adjust the path if necessary
import EditComponent from './EditComponent'; // Adjust the path if necessary

export const ViewsDataContext = createContext(null);

const initialData = [
  { id: 1, name: "Learn React", whyImportant: "It's crucial for front-end development." },
  { id: 2, name: "Contribute to Open Source", whyImportant: "It helps the community." },
  { id: 3, name: "Achieve AWS Certification", whyImportant: "It validates your cloud skills." },
];

const App = () => {
  const [viewsData, setViewsData] = useState(initialData);

  const updateViewsData = (updatedItem) => {
    const updatedViewsData = viewsData.map(item => 
      item.id === updatedItem.id ? updatedItem : item
    );
    setViewsData(updatedViewsData);
  };

  return (
    <Router>
      <ViewsDataContext.Provider value={{ viewsData, updateViewsData }}>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Home viewsData={viewsData} />} />
          <Route path="/view/:id" element={<ViewComponent />} />
          <Route path="/edit/:id" element={<EditComponent />} />
        </Routes>
      </ViewsDataContext.Provider>
    </Router>
  );
};

export default App;
