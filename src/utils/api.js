import axios from "axios";
export async function getStore() {
  try {
    const res = await axios.get(
      "https://api.rawg.io/api/games?key=e649c0c67eef49f1899478e6c52ef992&page_size=6"
    );
    return res.data.results;
  } catch (err) {
    console.log(err);
  }
}
