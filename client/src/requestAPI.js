import axios from "axios";

const BASE_URL = "http://locahost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGI2Y2Y4MzBlMWU4YWNkNjYzMzFmYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzU0MjkxMSwiZXhwIjoxNjQ3ODAyMTExfQ.z5HKj0jGyRDlJfhx0pb256Nr079G4XgWw1BB-BrSunA";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token: `Bearer ${TOKEN}`}
});