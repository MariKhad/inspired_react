import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GOODS_URL } from "../assets/const";

export const fetchProduct = createAsyncThunk(
	"product/fetchProduct",
	async (id) => {
		const responce = await fetch(`${GOODS_URL}/${id}`);
		const data = await responce.json();
		return data;
	}
)

const productSlice = createSlice({
	name: 'product',
	initialState: {
		status: 'idle',
		product: '',
		error: null,
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProduct.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchProduct.fulfilled, (state, action) => {
				state.status = 'success';
				state.product = action.payload;
			})
			.addCase(fetchProduct.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
	}
});

export default productSlice.reducer;