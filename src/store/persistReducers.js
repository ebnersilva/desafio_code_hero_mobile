import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'marvel',
      storage: AsyncStorage,
      whitelist: [],
    },
    reducers,
  );

  return persistedReducer;
};
