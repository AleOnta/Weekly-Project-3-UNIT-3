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
export const SET_ARTIST_QUERY = "SET_ARTIST_QUERY";
export const SET_ARTIST_RESULT = "SET_ARTIST_RESULT";
export const SET_ARTIST_TRACKS = "SET_ARTIST_TRACKS";
export const SET_AS_FAVOURITE = "SET_AS_FAVOURITE";
export const DELETE_FROM_FAVOURITES = "DELETE_FROM_FAVOURITES";

// Actions for the HomePage Reducer

export const SongsFetcherAction = (genre) => {
  //   e.preventDefault();
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_LOAD_ON,
      });

      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + genre);

      if (response.ok) {
        const data = await response.json();
        if (genre === "Rock&Roll") {
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
          payload: "Homepage response wasn't ok",
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
      dispatch({
        type: SET_LOAD_ON,
      });

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
          payload: "Album response wasn't ok",
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
      dispatch({
        type: SET_LOAD_ON,
      });

      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch({
          type: SET_QUERY_RESULT,
          payload: data,
        });
      } else {
        dispatch({
          type: ERROR_ENCOUNTER,
          payload: "Search fetch response wasn't ok",
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

// Action for the ArtistPage Reducer
export const setArtistQueryAction = (artist) => ({
  type: SET_ARTIST_QUERY,
  payload: artist,
});

export const ArtistFetcher = (artistId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_LOAD_ON,
      });

      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + artistId);

      if (response.ok) {
        const data = await response.json();

        dispatch({
          type: SET_ARTIST_RESULT,
          payload: {
            name: data.name,
            followers: data.nb_fan,
          },
        });
      } else {
        dispatch({
          type: ERROR_ENCOUNTER,
          payload: "Artist response wasn't ok",
        });
      }
    } catch (error) {
      dispatch({
        type: ERROR_ENCOUNTER,
        payload: error.message,
      });
    }
  };
};

export const ArtistSongsFetcher = (artistName) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_LOAD_ON,
      });

      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);

      if (response.ok) {
        const data = await response.json();

        dispatch({
          type: SET_ARTIST_TRACKS,
          payload: data.data,
        });
      } else {
        dispatch({
          type: ERROR_ENCOUNTER,
          payload: "Artist response wasn't ok",
        });
      }
    } catch (error) {
      dispatch({
        type: ERROR_ENCOUNTER,
        payload: error.message,
      });
    }
  };
};

// Actions for the MyLibrary Reducer

export const favouritesAction = (type, payload) => ({
  type: type,
  payload: payload,
});
