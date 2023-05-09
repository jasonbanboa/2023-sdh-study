import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './main/index';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
      </Routes>
    </BrowserRouter>
  );
}