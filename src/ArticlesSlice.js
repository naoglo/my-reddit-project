import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  articles: [],
  status: "idle",
  error: null,
};

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async () => {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c18e89f93021422e8cb28ee5e157580f"
    );
    return response.data.articles;
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchArticles.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = state.articles.concat(action.payload);
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addArticle, articleUpdated } = articlesSlice.actions;

export default articlesSlice.reducer;

export const selectAllArticles = (state) => state.articles.articles;

export const selectArticleById = (state, articleId) =>
  state.articles.articles.find((article) => article.id === articleId);
