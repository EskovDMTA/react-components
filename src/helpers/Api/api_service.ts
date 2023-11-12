import axios from 'axios';

export default class ApiService {
  static url = 'https://swapi.dev/api/';
  static async response(pageQuery: string) {
    const queryParams = pageQuery.toLowerCase();
    const response = await axios.get(`${this.url + queryParams}`);
    return response;
  }

  static async getPage(pageQuery: string, limit: number, page: number) {
    const queryParams = pageQuery.toLowerCase();
    const response = await axios.get(`${this.url + queryParams}`, {
      params: {
        limit,
        page,
      },
    });
    return response;
  }
}
