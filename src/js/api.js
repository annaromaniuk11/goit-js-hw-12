import axios from "axios";

export async function fetchImage(keyWord, page) {
    const BASE_URL = 'https://pixabay.com/';
    const END_POINT = 'api/';
    const PARAMS = new URLSearchParams({
        key: '42208232-118910d8102453b47e924ae6c',
        q: keyWord,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page,
    });

    const URL = `${BASE_URL}${END_POINT}?${PARAMS}`;
    const { data } = await axios(URL)

    return data;
}