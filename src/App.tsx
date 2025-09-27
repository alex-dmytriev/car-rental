import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';

import Test from './components/Test/Test';
import CarDetails from './pages/CarDetails/CarDetails';
import Sprite from './components/Sprite/Sprite';

const App = () => {
  return (
    <>
      <DefaultLayout>
        <Sprite />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<CarDetails />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </DefaultLayout>
    </>
  );
};

export default App;
