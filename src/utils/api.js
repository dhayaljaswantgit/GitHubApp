import axios from 'axios';

export class API {
  baseURL = 'https://api.github.com/users/';

  call({apiEndPoints, type = 'get', params = undefined}) {
    return axios[type](this.baseURL + apiEndPoints, params);
  }
}
