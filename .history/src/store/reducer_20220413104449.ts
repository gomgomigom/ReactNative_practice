import { combineReducers } from 'redux';
import userSlice from '../slices/user'

const rootReducer = combineReducers({userSlice.reducer
  });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;