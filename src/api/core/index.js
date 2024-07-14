const API_URL = "http://localhost/api/";

class Api {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  async fetchData(props) {
    try {
      const url = API_URL + this.endpoint;
      const idUrl = props?.id ? `/${id}` : "";

      const response = await fetch(url + idUrl);

      if (!response.ok) {
        console.log("Err: " + response.statusText);
      }

      const data = await response.json();

      return Object.assign({ total: data.length }, { data });
    } catch (err) {
      console.error("Err: " + err.message);
    }
  }
}

export default Api;
