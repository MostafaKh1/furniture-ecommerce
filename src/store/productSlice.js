import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  isLoading: false,
  error: null,
};

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        "https://api.jsonbin.io/v3/b/63a5f76015ab31599e237ed4"
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    [getProduct.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.product = action.payload.record.products;
    },
    [getProduct.rejected]: () => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
