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
export const addToCart = (data) => api.post("/cart", data);
export const addToWishlist = (data) => api.post("/wishlist", data);
