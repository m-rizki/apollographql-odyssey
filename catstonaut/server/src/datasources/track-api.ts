import { RESTDataSource } from "@apollo/datasource-rest";

export class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracksForHome() {
    return this.get("tracks");
  }

  getAuthor(authorId: string) {
    // To prevent malicious clients from accessing or manipulating data they shouldn't be, we recommend using the encodeURIComponent function for any HTTP path that accepts dynamic input
    return this.get(`author/${encodeURIComponent(authorId)}`);
  }
}
