// Actions for the HomePage Reducer
export const ADD_FETCHED_SONGS_ROCK = "ADD_FETCHED_SONGS_ROCK";
export const ADD_FETCHED_SONGS_DEEPHOUSE = "ADD_FETCHED_SONGS_DEEPHOUSE";
export const ADD_FETCHED_SONGS_HIPHOP = "ADD_FETCHED_SONGS_HIPHOP";
export const SET_LOAD_ON_HOME = "SET_LOAD_ON_HOME";
export const SET_LOAD_OFF_HOME = "SET_LOAD_OFF_HOME";
export const ERROR_ENCOUNTER_HOME = "ERROR_ENCOUNTER_HOME";

export const SongsFetcherAction = (genre) => {
  //   e.preventDefault();
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_LOAD_ON_HOME,
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
          type: ERROR_ENCOUNTER_HOME,
          payload: "Homepage response wasn't ok",
        });
      }
    } catch (error) {
      dispatch({
        type: ERROR_ENCOUNTER_HOME,
        payload: error.message,
      });
    } finally {
      setTimeout(() => {
        dispatch({
          type: SET_LOAD_OFF_HOME,
        });
      }, 1000);
    }
  };
};

// Actions for the AlbumPage Reducer
export const SET_LOAD_ON_ALBUM = "SET_LOAD_ON_ALBUM";
export const SET_LOAD_OFF_ALBUM = "SET_LOAD_OFF_ALBUM";
export const ERROR_ENCOUNTER_ALBUM = "ERROR_ENCOUNTER_ALBUM";
export const SET_ALBUM_FOCUS = "SET_ALBUM_FOCUS";
export const SET_ALBUM_SONGS = "SET_ALBUM_SONGS";

export const setAlbumFocusAction = (value) => ({
  type: SET_ALBUM_FOCUS,
  payload: value,
});

export const AlbumSongsFetcher = (albumId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_LOAD_ON_ALBUM,
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
          type: ERROR_ENCOUNTER_ALBUM,
          payload: "Album response wasn't ok",
        });
      }
    } catch (error) {
      dispatch({
        type: ERROR_ENCOUNTER_ALBUM,
        payload: error.message,
      });
    } finally {
      setTimeout(() => {
        dispatch({
          type: SET_LOAD_OFF_ALBUM,
        });
      }, 1000);
    }
  };
};

// Actions for the SearchPage Reducer
export const SET_LOAD_ON_SEARCH = "SET_LOAD_ON_SEARCH";
export const SET_LOAD_OFF_SEARCH = "SET_LOAD_OFF_SEARCH";
export const ERROR_ENCOUNTER_SEARCH = "ERROR_ENCOUNTER_SEARCH";
export const SET_QUERY_STRING = "SET_QUERY_STRING";
export const SET_QUERY_RESULT = "SET_QUERY_RESULT";

export const setQuerySearchAction = (value) => ({
  type: SET_QUERY_STRING,
  payload: value,
});

export const QueryFetcher = (query) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_LOAD_ON_SEARCH,
      });

      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query);

      if (response.ok) {
        const data = await response.json();

        dispatch({
          type: SET_QUERY_RESULT,
          payload: data,
        });
      } else {
        dispatch({
          type: ERROR_ENCOUNTER_SEARCH,
          payload: "Search fetch response wasn't ok",
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: ERROR_ENCOUNTER_SEARCH,
        payload: error.message,
      });
    } finally {
      setTimeout(() => {
        dispatch({
          type: SET_LOAD_OFF_SEARCH,
        });
      }, 1000);
    }
  };
};

// Action for the ArtistPage Reducer
export const SET_LOAD_ON_ARTIST = "SET_LOAD_ON_ARTIST";
export const SET_LOAD_OFF_ARTIST = "SET_LOAD_OFF_ARTIST";
export const ERROR_ENCOUNTER_ARTIST = "ERROR_ENCOUNTER_ARTIST";
export const SET_ARTIST_QUERY = "SET_ARTIST_QUERY";
export const SET_ARTIST_RESULT = "SET_ARTIST_RESULT";
export const SET_ARTIST_TRACKS = "SET_ARTIST_TRACKS";

export const setArtistQueryAction = (artist) => ({
  type: SET_ARTIST_QUERY,
  payload: artist,
});

export const ArtistFetcher = (artistId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_LOAD_ON_ARTIST,
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
          type: ERROR_ENCOUNTER_ARTIST,
          payload: "Artist response wasn't ok",
        });
      }
    } catch (error) {
      dispatch({
        type: ERROR_ENCOUNTER_ARTIST,
        payload: error.message,
      });
    } finally {
      setTimeout(() => {
        dispatch({
          type: SET_LOAD_OFF_ARTIST,
        });
      }, 1000);
    }
  };
};

export const ArtistSongsFetcher = (artistName) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_LOAD_ON_ARTIST,
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
          type: ERROR_ENCOUNTER_ARTIST,
          payload: "Artist response wasn't ok",
        });
      }
    } catch (error) {
      dispatch({
        type: ERROR_ENCOUNTER_ARTIST,
        payload: error.message,
      });
    } finally {
      setTimeout(() => {
        dispatch({
          type: SET_LOAD_OFF_ARTIST,
        });
      }, 1000);
    }
  };
};

// Actions for the MyLibrary Reducer
export const SET_AS_FAVOURITE = "SET_AS_FAVOURITE";
export const DELETE_FROM_FAVOURITES = "DELETE_FROM_FAVOURITES";

export const favouritesAction = (type, payload) => ({
  type: type,
  payload: payload,
});

// Actions for the Player Reducer
export const SET_LOAD_ON_PLAYER = "SET_LOAD_ON_PLAYER";
export const SET_LOAD_OFF_PLAYER = "SET_LOAD_OFF_PLAYER";
export const ERROR_ENCOUNTER_PLAYER = "ERROR_ENCOUNTER_PLAYER";
export const SET_ALBUM_PLAYING = "SET_SONG_PLAYING";
export const SET_PLAYER_QUEUE = "SET_PLAYER_QUEUE";

export const setCurrentlyAction = (album) => ({
  type: SET_ALBUM_PLAYING,
  payload: album,
});

export const getAllTracks = (albumId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SET_LOAD_ON_PLAYER,
      });

      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId);

      if (response.ok) {
        const data = await response.json();
        const queue = data.tracks.data;

        dispatch({
          type: SET_PLAYER_QUEUE,
          payload: queue,
        });
      } else {
        dispatch({
          type: ERROR_ENCOUNTER_PLAYER,
          payload: "Album response wasn't ok",
        });
      }
    } catch (error) {
      dispatch({
        type: ERROR_ENCOUNTER_PLAYER,
        payload: error.message,
      });
    } finally {
      setTimeout(() => {
        dispatch({
          type: SET_LOAD_OFF_PLAYER,
        });
      }, 1000);
    }
  };
};
