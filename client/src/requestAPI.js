import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGI2Y2Y4MzBlMWU4YWNkNjYzMzFmYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Nzk4NjI5NiwiZXhwIjoxNjQ4MjQ1NDk2fQ.x43Uk-Kn1D5DSur_VoLde6tfFPBXFmn6tJS-WEO2KZM";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token: `Bearer ${TOKEN}`}
});