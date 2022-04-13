import { combineReducers } from 'redux';

const rootReducer = combineReducers(reducers: 
  {user: userSlice.reducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;