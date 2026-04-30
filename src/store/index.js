import { createStore, createSlice, configureStore } from '@reduxjs/toolkit';

const songsSlice = createSlice({
	name: 'song',
	initialState: [],
	reducers: {
		addSongs(state, action) {
			state.push(action.payload);
		},

		removeSong(state, action) {
			const index = state.indexOf(action.payload);
			state.splice(index, 1);
		}
	}
});

const moviesSlice = createSlice({
	name: 'movie',
	initialState: [],
	reducers: {
		addMovie(state, action) {
			state.push(action.payload)
		},

		removeMovie(state, action) {
			const index = state.indexOf(action.payload);
			state.splice(index, 1);
		}
	}
})

const store = configureStore({
	reducer: {
		songs: songsSlice.reducer,
		movies: moviesSlice.reducer
	}
});

export { store }
export const { addSongs, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;
