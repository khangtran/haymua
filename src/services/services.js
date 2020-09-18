const Host = "http://103.153.73.118:4110/api";

const API = {
  get_profile: () => {
    return `${Host}/product/get`;
  }
};

export default class Services {
  async get_product() {
    let req = await fetch(API.get_profile);
    let result = await req.json();
    return result;
  }
}
