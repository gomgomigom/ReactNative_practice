import { combineReducers } from 'redux';
import userSlice from '../slices/user'

const rootReducer = combineReducers( reducers: {userSlice.reducer
  });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;