import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGI2Y2Y4MzBlMWU4YWNkNjYzMzFmYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODExMDg3NCwiZXhwIjoxNjQ4MzcwMDc0fQ.rTmx25-KpwRVK7vTHt7o6gFafja3pS5k_F-2rkoKN3U";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{ token: `Bearer ${TOKEN}`}
});