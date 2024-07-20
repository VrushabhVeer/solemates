import axios from "axios";
import { BASE_URL } from "./constants";

const api = axios.create({
  baseURL: BASE_URL,
});

export const signupApi = (payload) => api.post("/users/signup", payload);
export const loginApi = (payload) => api.post("/users/login", payload);

export const getAllProducts = () => api.get("/products/shoes");
export const getProductById = (productId) =>
  api.get(`/products/shoe/${productId}`);

export const addToCart = (data, config) =>
  api.post("/cart/create", data, config);
export const getCartItems = (userId) => api.get(`/cart/${userId}`);
export const deleteCartItem = (itemId) => api.delete(`/cart/delete/${itemId}`);

export const addToWishlist = (data) => api.post("/wishlist/create", data);
export const getWishlistItems = (userId) => api.get(`/wishlist/${userId}`);
export const deleteWishlistItem = (itemId) =>
  api.delete(`/wishlist/delete/${itemId}`);

export const addAddress = (data) => api.post("/address/create", data);
export const getAddress = (userId) => api.get(`/address/${userId}`);
export const deleteAddress = (itemId) =>
  api.delete(`/address/delete/${itemId}`);
export const updateAddress = (itemId) => api.put(`/address/update/${itemId}`);

export const makePaymant = (amount) =>
  api.post("/payment/checkout", { amount });
export const getPayment = () => api.get("/getKey");
export const paymentverification = () =>
  api.post("/payment/paymentverification");
export const CALLBACK_URL = `${BASE_URL}/payment/paymentverification`;
