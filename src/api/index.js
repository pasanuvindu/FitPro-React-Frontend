import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Change this URL to your API's base URL
});

// Add a request interceptor to include the token in the headers for authenticated requests
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

// Export API functions
export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

// Workout APIs
export const fetchWorkouts = () => API.get("/workouts");

// Diet APIs
export const fetchDiets = () => API.get("/diets");

// // Common APIs
// export const calculateDistance = (longLat) =>
//   API.post("/common/calculateDistance", longLat);
// export const getCommon = () => API.get("/common");

// Export API functions
export const calculateBMI = (data) => API.post("/calculate-bmi", data); // Adjust the endpoint

// Add other API functions as needed

export default API;
