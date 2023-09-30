import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  articles: [],
  status: "idle",
  error: null,
};

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async ({ search, category }) => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?q=${search}&country=gb&category=${category}&apiKey=2026562cc60b4d8eb329c84ecb26b9b3`
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
        state.articles = action.payload;
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
