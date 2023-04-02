

import MyApp from './pages';
import { Route, Routes } from 'react-router-dom';
import Overview from './pages/overview';
import Transactions from './pages/transactions';
import ErrorPage from './error404';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MyApp />}>
        <Route index element={<Overview />} />
        <Route path='transactions' element={<Transactions />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
