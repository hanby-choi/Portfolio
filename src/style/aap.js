import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style/common.css';

import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import RunningPage from './pages/RunningPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* 메인 페이지 */}
          <Route exact path="/" element={<MainPage />} />
          {/* 프로그램 상세 페이지 */}
          <Route exact path="/detail/:id" element={<DetailPage />} />
          {/* 프로그램 실행 페이지 */}
          <Route exact path="/detail/:id/running" element={<RunningPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
