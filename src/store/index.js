import {createStore, createSlice, configureStore} from '@reduxjs/toolkit';

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
      addSongs(state, action){
        state.push(action.payload);
      },

      removeSons(state, action) {

      } 
    }
});

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer
    }
});

console.log('store => ', store);
