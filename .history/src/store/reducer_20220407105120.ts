const rootReducer = combineReducers({userSlice.reducer,})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;