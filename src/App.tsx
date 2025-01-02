import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages';
import { DashBoardView } from './layouts';

function App() {
  return (
    <Routes>
      <Route path='/' element={<DashBoardView />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/pacientes' element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
