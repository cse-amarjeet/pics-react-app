import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID _dFi1kTlbub0Mo1l0rFH9rCd6-JEj5nR_-XweKzsJrI",
    },
    params: {
      query: term,
    },
  });
  //   console.log("this is response", response.data.results);
  return response.data.results;
};
export default searchImages;
