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
	},

	extraReducers(builder) {
		builder.addCase("movie/reset", (state, action) => {
			return [];
		});
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
		},

		reset(state, action) {
			return [];
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
export const { addMovie, removeMovie, reset } = moviesSlice.actions;
