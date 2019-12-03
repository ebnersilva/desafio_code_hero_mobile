import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import ListCharacters from './pages/ListCharacters';

export default function createNavigator(initialRoute = 'ListCharacters') {
  return createAppContainer(
    createSwitchNavigator(
      {
        ListCharacters,
      },
      {
        initialRoutename: initialRoute,
      },
    ),
  );
}
