import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Default from './Default';

const PersistConfig = {
  key: 'Default',
  storage,
  whitelist: [''], // only navigation will be persisted
};

export default combineReducers({
  Default: persistReducer(PersistConfig, Default),
});
