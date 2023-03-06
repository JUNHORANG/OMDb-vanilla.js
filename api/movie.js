import fetch from "node-fetch";

//환경 변수
const { APIKEY } = process.env;

export default async function handler(request, response) {
  const { title, page, id } = JSON.parse(request.body);

  const url = id
    ? `https://omdbapi.com?${APIKEY}&i=${id}&plot=full`
    : `https://omdbapi.com?${APIKEY}&s=${title}&page=${page}`;
  const res = await fetch(url);
  const json = await res.json();

  response.status(200).json(json);
}
