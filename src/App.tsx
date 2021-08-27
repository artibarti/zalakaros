import { AppNavbar } from './components/nav-bar';
import { Home } from './components/home/home';
import { i18nInstance } from './i18n';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { useState } from 'react';

function App() {

  const [currentLanguage, setCurrentLanguage] = useState(i18nInstance.language)

  const changeLanguage = (countryCode: string) => {
    i18nInstance.changeLanguage(countryCode);
    setCurrentLanguage(countryCode);
  }
  
  return (
    <div className="p-0 m-0">
      <AppNavbar onChangeLanguage={changeLanguage}/>
      <Home />
    </div>
  );
}

export default App;
