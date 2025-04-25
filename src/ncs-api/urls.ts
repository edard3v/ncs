export class NcsUrls {
  static base_url = "https://ncs-api.deno.dev";
  static get_songs = `${this.base_url}/get_songs`;
  static read_songs = `${this.base_url}/read_songs`;
  static login = `${this.base_url}/login`;
  static refresh_login = `${this.base_url}/refresh_login`;
}
