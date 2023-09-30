import { configureStore } from '@reduxjs/toolkit';

import articlesReducer from './ArticlesSlice'

export default configureStore({
  reducer: {
    articles: articlesReducer,
  },
}) 

