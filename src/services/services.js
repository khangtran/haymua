import { NetRequest, URLRequest } from "./URLRequest";

const public_domain = "http://103.153.73.118:4110/api";
const private_domain = "http://localhost:4110/api"

const API = {
  get_product: (start, max) => {
    let url = `${private_domain}/product/get?start=${start}&max=${max}`;
    return new URLRequest(url, 'get', null, null)
  },
  create: (body) => {
    let url = `${private_domain}/product/add`
    return new URLRequest(url, 'post', body, null)
  }
};

export default class Services {
  static async get_product() {
    let req = await fetch(API.get_product(0, 20).url);
    let result = await req.json();
    console.log('>> api_get_product', result)
    return result;
  }

  static async create(body) {
    let url = API.create(body)
    let req = new NetRequest(url)
    let result = await req.excute()
    console.log('>> api_create', result)
    return result
  }
}
