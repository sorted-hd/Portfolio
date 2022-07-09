import { useEffect, useState } from 'react';

import SplashScreen from './components/SplashScreen/SplashScreen';

function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => setShowSplashScreen(false), 4000);

    return () => clearTimeout(timer);
  });

  return <>{showSplashScreen && <SplashScreen />}</>;
}

export default App;
