import React from 'react';
import { isMobile } from 'react-device-detect';

function App() {
  return <>{isMobile ? <>모바일</> : <>pc</>}</>;
}

export default App;
