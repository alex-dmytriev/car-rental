import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';

import Test from './components/Test/Test';
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
          <Route path="/test" element={<Test />} />
        </Routes>
      </DefaultLayout>
    </>
  );
};

export default App;
