import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmExMzIwYWM1NGQ0YWZjMmJlYWEwOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDU1NjA4MSwiZXhwIjoxNjYwNzI4ODgxfQ.E_7c4SSqLYs00_sdp_NjkrP6rVIeqn9p3hHzARC4A1w";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
