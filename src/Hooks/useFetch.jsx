import axios from "axios";

function useFetch() {
  async function get(url) {
    try {
      console.log("hello im running");
      const res = await axios.get(url);
      return res.data.results;
    } catch (err) {
      console.log(err);
    }
  }

  return { get };
}

export default useFetch;
