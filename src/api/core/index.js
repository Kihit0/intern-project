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
      const result = Object.assign({ total: data.length }, { data });

      return result;
    } catch (err) {
      console.log("Err: " + err.message);
    }
  }
}

export default Api;
