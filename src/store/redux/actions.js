import {
  getUsers,
  registerUser,
  updateUser as apiUpdateUser,
  deleteUser as apiDeleteUser,
} from '../../services/api';

// Action Creators
export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: 'FETCH_USERS_REQUEST' });
  try {
    const users = await getUsers();
    dispatch({ type: 'FETCH_USERS_SUCCESS', payload: users });
  } catch (error) {
    dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
  }
};

export const addUser = (userData) => async (dispatch) => {
  try {
    const newUser = await registerUser(userData);
    dispatch({ type: 'ADD_USER', payload: newUser });
  } catch (error) {
    // Optional: handle error
    alert(error.message);
  }
};

export const updateUser = (id, userData) => async (dispatch) => {
  try {
    const updatedUser = await apiUpdateUser(id, userData);
    dispatch({ type: 'UPDATE_USER', payload: updatedUser });
  } catch (error) {
    // Optional: handle error
    alert(error.message);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await apiDeleteUser(id);
    dispatch({ type: 'DELETE_USER', payload: id });
  } catch (error) {
    // Optional: handle error
    alert(error.message);
  }
}; 