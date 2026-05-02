Redux store:

`store/index.js`

```
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

const startingState = store.getState();
console.log('initial store => ', JSON.stringify(startingState));

store.dispatch({
	type: 'song/addSongs',
	payload: 'Closer - Chainsmoker'
});

const finalState = store.getState();
console.log('song store => ', JSON.stringify(finalState));
```


<img width="1199" height="717" alt="image" src="https://github.com/user-attachments/assets/7e18f258-3ee2-4785-8e8c-33b4d1afb067" />

Slice: 
<img width="961" height="576" alt="image" src="https://github.com/user-attachments/assets/c46cbc81-48b6-43d3-9016-1dbaea80bd4d" />

Slice:
step 1: 
<img width="1283" height="655" alt="image" src="https://github.com/user-attachments/assets/cb555a97-07a5-4dfd-9c7a-882c80491e15" />

step 3: action creator functions - 
<img width="1333" height="613" alt="image" src="https://github.com/user-attachments/assets/75b56510-849c-455c-a401-c80d28904181" />

Connecting React to Redux:

<img width="909" height="654" alt="image" src="https://github.com/user-attachments/assets/ee74f05b-e152-449d-8dcb-66df0b0a23cd" />


Changing a state:

<img width="948" height="762" alt="image" src="https://github.com/user-attachments/assets/1ee6a884-9c23-41e2-9dbb-78b3e78c2786" />
<img width="874" height="129" alt="image" src="https://github.com/user-attachments/assets/69f45c85-dd3f-4dd7-a21c-6a945b863582" />


**Step 1: Add reducers to one of your slices that changes state in some perticular way.**

store/index.js

```
const songsSlice = createSlice({
	name: 'song',
	initialState: [],
	reducers: {
		addSongs(state, action) {
			state.push(action.payload);
		}
	}
});
```

**Step 2: Export the action creator that the slice automatically creates**

store/index.js

```
import { createStore, createSlice, configureStore } from '@reduxjs/toolkit';

const songsSlice = createSlice({
	name: 'song',
	initialState: [],
	reducers: {
		**addSongs(state, action) {
			state.push(action.payload);
		}**
	}
});

const store = configureStore({
	reducer: {
		songs: songsSlice.reducer
	}
});

export { store }
**export const { addSongs } = songsSlice.actions;**
```

**Step 3: Find the component that we want to dispatch from**

**Step 4: Import the action creator function and `useDispatch` from react-redux**

`SongsPlaylist.jsx`

```
import { useDispatch } from "react-redux";
import { addSongs } from '../store';
```

**Step 5: Call `useDispatch` hook to get access to the dispatch function**

`components/SongPlaylist.js`

```
function SongPlaylist() {
 
  const dispatch = useDispatch();
.
..
...
```

Step 6: Whenever user does something, call the action creator to get the action then dispatch it.

`components/SongPlaylist.js`

```
const handleSongAdd = (song) => {
    dispatch(addSongs(song));
  };
```


Accessing a State:

<img width="973" height="658" alt="image" src="https://github.com/user-attachments/assets/744f4004-4515-478e-aa29-484c7264c0ee" />

Step 1:  Find the component that needs to access some state

`SongPlaylists.js`

Step 2: Import the useSelector hook from react-redux

`import { useDispatch, useSelector } from "react-redux";`

Step 3: call a hook, passing a selector function

```
function SongPlaylist() {
  const songPlaylist = useSelector((state) => {
    return state.songs;
  });
```

**Files and folder structure:**

organize by **function**:
<img width="917" height="651" alt="image" src="https://github.com/user-attachments/assets/deca8bea-10b4-4d41-a74a-759a508d981e" />

organize by **feature**:
<img width="1114" height="725" alt="image" src="https://github.com/user-attachments/assets/43c57f43-629f-4039-bdd3-17a920eb1d2a" />

recommendations: 
<img width="848" height="625" alt="image" src="https://github.com/user-attachments/assets/36fba7aa-27b2-4ac4-995a-8f0a84e87368" />
