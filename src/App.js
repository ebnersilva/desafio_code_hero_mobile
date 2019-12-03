import React from 'react';

import createNavigator from './routes';
import NavigationService from './services/navigation';

export default function App() {
  // Registro do arquivo de rotas
  function registerService(ref) {
    NavigationService.setTopLevelNavigator(ref);
  }

  const initialRoute = 'ListCharacters';

  const Routes = createNavigator(initialRoute);

  return <Routes ref={registerService} />;
}
