import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const allCocktails = createAsyncThunk("cocktails/getAllCocktails", async () => {
    const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`);
    console.log(data)
    return data;
})

export const detailCocktail = createAsyncThunk("cocktail/getOneCocktail", async ({ id }) => {
    const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    console.log(data)
    return data;
})

export const searchCocktail = createAsyncThunk("cocktail/searchCocktail", async ({ input }) => {
    const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`);
    console.log(data)
    return data;
})
export const listCategories = createAsyncThunk("cocktail/listCategories", async () => {
    const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`);
    console.log(data)
    return data;
})

export const filterCategories = createAsyncThunk("cocktail/filterCategories", async ({ category }) => {
    const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
    console.log(data)
    return data;
})

const cocktailSlice = createSlice({
    name: 'cocktail',
    initialState: {
        cocktails: [],
        cocktail: {},
        loading: true,
        error: '',
        categories: []
    },
    extraReducers: {

        [allCocktails.pending]: (state, action) => {
            state.loading = true;
        },
        [allCocktails.fulfilled]: (state, action) => {
            state.loading = false;
            state.cocktails = action.payload.drinks
        },
        [allCocktails.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        [detailCocktail.pending]: (state, action) => {
            state.loading = true;
        },
        [detailCocktail.fulfilled]: (state, action) => {
            state.loading = false;
            state.cocktail = action.payload.drinks[0]
        },
        [detailCocktail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        [searchCocktail.pending]: (state, action) => {
            state.loading = true;
        },
        [searchCocktail.fulfilled]: (state, action) => {
            state.loading = false;
            state.cocktail = action.payload.drinks;
        },
        [searchCocktail.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        [listCategories.pending]: (state, action) => {
            state.loading = true;
        },
        [listCategories.fulfilled]: (state, action) => {
            state.loading = false;
            state.categories = action.payload.drinks
        },
        [listCategories.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        [filterCategories.pending]: (state, action) => {
            state.loading = true;
        },
        [filterCategories.fulfilled]: (state, action) => {
            state.loading = false;
            state.cocktails = action.payload.drinks
        },
        [filterCategories.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        }
    }


})

export default cocktailSlice.reducer