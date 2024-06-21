// src/redux/slices/articlesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchArticles } from '../../ services/    newsService';

export const getArticles = createAsyncThunk(
    'articles/getArticles',
    async({ category, page, query }) => {
        const response = await fetchArticles(category, page, query);
        return response.articles;
    }
);

const articlesSlice = createSlice({
    name: 'articles',
    initialState: {
        articles: [],
        status: null,
        category: 'general',
        page: 1,
        query: '',
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setQuery: (state, action) => {
            state.query = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getArticles.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getArticles.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.articles = action.payload;
            })
            .addCase(getArticles.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { setCategory, setPage, setQuery } = articlesSlice.actions;

export default articlesSlice.reducer;