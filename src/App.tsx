import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';

import Test from './components/Test/Test';

const App = () => {
  return (
    <>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </DefaultLayout>
    </>
  );
};

export default App;
