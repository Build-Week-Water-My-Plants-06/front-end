import { axiosWithAuth } from '../../utils/axiosWithAuth';

// LOGIN ACTIONS 
export const LOGIN_START = "LOGIN_START";
export const loginStart = () => {
  return { type: LOGIN_START }
};


export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const loginSuccess = (userObj) => {
  return { type: USER_LOGIN_SUCCESS, payload: userObj };
}


export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const loginFailure = (errorObj) => {
  return { type: LOGIN_FAILURE, payload: errorObj };
}

// LOGOUT ACTION
export const LOGOUT = "LOGOUT";
export const Logout = () => {
  window.localStorage.removeItem('token');
  return { type: LOGOUT }
};

// EDIT USER ACTIONS
export const EDIT_USER_START = "EDIT_USER_START";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_FAILURE = "EDIT_USER_FAILURE";

export const editUser = (URL, user) => dispatch => {
  dispatch({ type: EDIT_USER_START });
  axiosWithAuth()
    .put(URL, user)
    .then( res => {
      dispatch({ type: EDIT_USER_SUCCESS, payload: res.data});
    })
    .catch( err => {
      console.log(err);
      dispatch({ type: EDIT_USER_FAILURE, payload: err});
    })
};

// PLANT ACTIONS
export const GET_PLANTS_START = "GET_PLANTS_START";
export const GET_PLANTS_SUCCESS = "GET_PLANTS_SUCCESS";
export const GET_PLANTS_FAILURE = "GET_PLANTS_FAILURE";

export const getPlants = (URL) => dispatch => {
  dispatch({ type: GET_PLANTS_START });
  axiosWithAuth()
    .get(URL)
    .then( res => {
      console.log(res.data);
      dispatch({ type: GET_PLANTS_SUCCESS, payload: res.data});
    })
    .catch( err => {
      console.log(err);
      dispatch({ type: GET_PLANTS_FAILURE, payload: err});
    })
};

export const SET_CURRENT_PLANT_START = "SET_CURRENT_PLANT_START";
export const SET_CURRENT_PLANT_SUCCESS = "SET_CURRENT_PLANT_SUCCESS";
export const SET_CURRENT_PLANT_FAILURE = "SET_CURRENT_PLANT_FAILURE";

export const setCurrentPlant = (URL) => dispatch => {
  dispatch({ type: SET_CURRENT_PLANT_START });
  axiosWithAuth()
    .get(URL)
    .then( res => {
      console.log(res.data);
      dispatch({ type: SET_CURRENT_PLANT_SUCCESS, payload: res.data});
    })
    .catch( err => {
      console.log(err);
      dispatch({ type: SET_CURRENT_PLANT_FAILURE, payload: err});
    })
};

// ADD PLANT ACTIONS
export const ADD_PLANT_START = "ADD_PLANT_START";
export const ADD_PLANT_SUCCESS = "ADD_PLANT_SUCCESS";
export const ADD_PLANT_FAILURE = "ADD_PLANT_FAILURE";

export const addPlant = (URL, plant) => dispatch => {
  
  dispatch({ type: ADD_PLANT_START });
  axiosWithAuth()
    .post(URL, plant)
    .then( res => {
      console.log(res.data);
      dispatch({ type: ADD_PLANT_SUCCESS, payload: res.data});
    })
    .catch( err => {
      console.log(err);
      dispatch({ type: ADD_PLANT_FAILURE, payload: err});
    })
};

// EDIT PLANT ACTIONS
export const EDIT_PLANT_START = "EDIT_PLANT_START";
export const EDIT_PLANT_SUCCESS = "EDIT_PLANT_SUCCESS";
export const EDIT_PLANT_FAILURE = "EDIT_PLANT_FAILURE";

export const editPlant = (URL, plant) => dispatch => {
  dispatch({ type: EDIT_PLANT_START });
  axiosWithAuth()
    .put(URL, plant)
    .then( res => {
      console.log(res.data);
      dispatch({ type: EDIT_PLANT_SUCCESS, payload: res.data});
    })
    .catch( err => {
      console.log(err);
      dispatch({ type: EDIT_PLANT_FAILURE, payload: err});
    })
};

// DELETE PLANT ACTIONS
export const DELETE_PLANT_START = "DELETE_PLANT_START";
export const DELETE_PLANT_SUCCESS = "DELETE_PLANT_SUCCESS";
export const DELETE_PLANT_FAILURE = "DELETE_PLANT_FAILURE";
export const deletePlant = (URL) => dispatch => {
  dispatch({ type: DELETE_PLANT_START });
  axiosWithAuth()
    .delete(URL)
    .then( res => {
      console.log(res.data);
      dispatch({ type: DELETE_PLANT_SUCCESS, payload: res.data});
    })
    .catch( err => {
      console.log(err);
      dispatch({ type: DELETE_PLANT_FAILURE, payload: err});
    })
};