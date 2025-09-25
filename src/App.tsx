import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';

const App = () => {
  return (
    <>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </DefaultLayout>
    </>
  );
};

export default App;
