import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../../shared/api/auth';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.getRegister(data);
      console.log(response)
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.getLogin(data);
      console.log(response)
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
