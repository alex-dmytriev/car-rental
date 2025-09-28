import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import CarPage from './pages/CarPage/CarPage';
import Sprite from './components/Sprite/Sprite';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <DefaultLayout>
        <div>
          <Toaster />
        </div>
        <Sprite />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<CarPage />} />
        </Routes>
      </DefaultLayout>
    </>
  );
};

export default App;
