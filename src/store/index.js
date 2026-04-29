import { createStore, createSlice, configureStore } from '@reduxjs/toolkit';

const songsSlice = createSlice({
	name: 'song',
	initialState: [],
	reducers: {
		addSongs(state, action) {
			state.push(action.payload);
		},

		removeSongs(state, action) {}
	}
});

const store = configureStore({
	reducer: {
		songs: songsSlice.reducer
	}
});

export { store }
