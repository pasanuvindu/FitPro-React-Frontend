import axios from "axios";

// const API = axios.create({ baseURL: "http://localhost:5000" });
// const API = axios.create({
//     // baseURL: "https://ceylonmydream-backend-5e6306c87670.herokuapp.com/"
//     baseURL: "https://ceylonexperiences-backend-dedc38e1c05f.herokuapp.com/"
//   });

// Add a request interceptor to include the token in the headers for authenticated requests
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

// // Export API functions
// export const fetchPosts = () => API.get("/posts");
// export const createPost = (newPost) => API.post("/posts", newPost);
// export const updatePost = (id, updatedPost) =>
//   API.patch(`/posts/${id}`, updatedPost);
// export const deletePost = (id) => API.delete(`/posts/${id}`);
// export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

// Auth APIs
export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const addUser = (formData) => API.post("/users", formData);
export const updateUser = (id, user) => API.patch(`/users/${id}`, user);

// //Users APIs
// export const getUsers = () => API.get("/users");

// Cities APIs
export const fetchCities = () => API.get(`/city`);
export const createCity = (newCity) => API.post("/city", newCity);
export const updateCity = (id, updatedCity) =>
  API.patch(`/city/${id}`, updatedCity);
export const deleteCity = (id) => API.delete(`/city/${id}`);

// // Common APIs
// export const calculateDistance = (longLat) =>
//   API.post("/common/calculateDistance", longLat);
// export const getCommon = () => API.get("/common");
