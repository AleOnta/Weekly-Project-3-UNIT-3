export const ADD_FETCHED_SONGS_ROCK = "ADD_FETCHED_SONGS_ROCK";
export const ADD_FETCHED_SONGS_DEEPHOUSE = "ADD_FETCHED_SONGS_DEEPHOUSE";
export const ADD_FETCHED_SONGS_HIPHOP = "ADD_FETCHED_SONGS_HIPHOP";
export const SET_LOAD_ON = "SET_LOAD_ON";
export const SET_LOAD_OFF = "SET_LOAD_OFF";
export const ERROR_ENCOUNTER = "ERROR_ENCOUNTER";
export const SET_ALBUM_FOCUS = "SET_ALBUM_FOCUS";
export const SET_ALBUM_SONGS = "SET_ALBUM_SONGS";
export const SET_QUERY_STRING = "SET_QUERY_STRING";
export const SET_QUERY_RESULT = "SET_QUERY_RESULT";

// Actions for the HomePage Reducer

export const SongsFetcherAction = (genre, endpoint) => {
  //   e.preventDefault();
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_LOAD_ON,
      });

      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + genre);

      if (response.ok) {
        const data = await response.json();
        if (genre === "Rock") {
          dispatch({
            type: ADD_FETCHED_SONGS_ROCK,
            payload: data.data,
          });
        } else if (genre === "Deep-house") {
          dispatch({
            type: ADD_FETCHED_SONGS_DEEPHOUSE,
            payload: data.data,
          });
        } else {
          dispatch({
            type: ADD_FETCHED_SONGS_HIPHOP,
            payload: data.data,
          });
        }
      } else {
        dispatch({
          type: ERROR_ENCOUNTER,
          payload: "response wasn't ok",
        });
      }
    } catch (error) {
      dispatch({
        type: ERROR_ENCOUNTER,
        payload: error.message,
      });
    } finally {
      setTimeout(() => {
        dispatch({
          type: SET_LOAD_OFF,
        });
      }, 1000);
    }
  };
};

// Actions for the AlbumPage Reducer

export const setAlbumFocusAction = (value) => ({
  type: SET_ALBUM_FOCUS,
  payload: value,
});

export const AlbumSongsFetcher = (albumId) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId);

      if (response.ok) {
        const data = await response.json();

        dispatch({
          type: SET_ALBUM_SONGS,
          payload: {
            songs: data.tracks.data,
            cover: data.cover_medium,
          },
        });
      } else {
        dispatch({
          type: ERROR_ENCOUNTER,
          payload: "response wasn't ok",
        });
      }
    } catch (error) {
      dispatch({
        type: ERROR_ENCOUNTER,
        payload: error.message,
      });
    } finally {
      setTimeout(() => {
        dispatch({
          type: SET_LOAD_OFF,
        });
      }, 1000);
    }
  };
};

// Actions for the SearchPage Reducer

export const setQuerySearchAction = (value) => ({
  type: SET_QUERY_STRING,
  payload: value,
});

export const QueryFetcher = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch({
          type: SET_QUERY_RESULT,
          payload: data,
        });
      } else {
        console.log("errore nell'else");
        dispatch({
          type: ERROR_ENCOUNTER,
          payload: "response wasn't ok",
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: ERROR_ENCOUNTER,
        payload: error.message,
      });
    } finally {
      setTimeout(() => {
        dispatch({
          type: SET_LOAD_OFF,
        });
      }, 1000);
    }
  };
};
