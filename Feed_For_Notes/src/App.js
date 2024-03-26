import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './views/Home'; // Adjust the path if necessary
import SignIn from './views/SignIn'; // Adjust the path if necessary
import ViewComponent from './views/ViewComponent'; // Adjust the path if necessary
import EditComponent from './views/EditComponent'; // Adjust the path if necessary
import AddComponent from './views/AddComponent'; // Adjust the path if necessary

export const ViewsDataContext = createContext(null);

const initialData = [
  { id: 1, name: "Learn React", whyImportant: "It's crucial for front-end development." },
  { id: 2, name: "Contribute to Open Source", whyImportant: "It helps the community." },
  { id: 3, name: "Achieve AWS Certification", whyImportant: "It validates your cloud skills." },
];

const App = () => {
  const [viewsData, setViewsData] = useState(initialData);

  const updateViewsData = (updatedItem) => {
    if (viewsData.some(item => item.id === updatedItem.id)) {
      // Update existing note
      const updatedViewsData = viewsData.map(item => 
        item.id === updatedItem.id ? updatedItem : item
      );
      setViewsData(updatedViewsData);
    } else {
      // Add new note
      setViewsData([...viewsData, updatedItem]);
    }
  };
  

  return (
    <Router basename="/Feed_App">
    <ViewsDataContext.Provider value={{ viewsData, updateViewsData }}>
      <Routes>
        {/* Set SignIn as the index route */}
        <Route index element={<SignIn />} />
        <Route path="home" element={<Home viewsData={viewsData} />} />
        <Route path="view/:id" element={<ViewComponent />} />
        <Route path="edit/:id" element={<EditComponent />} />
        <Route path="create" element={<AddComponent />} />
        {/* Optionally, redirect from /signin to / */}
        <Route path="signin" element={<Navigate replace to="/" />} />
      </Routes>
    </ViewsDataContext.Provider>
  </Router>
  );
};

export default App;
