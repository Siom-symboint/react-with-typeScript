/**
 * @author  symboint
 * @type   fetch
 * @description 封装fetch方法
 */

class Fetch {
  public async get(url: string) {
    let result: any;
    await fetch(url, {
      method: "GET"
    })
      .then(res => res.json())
      .then(r => {
        result = r;
      });
    return result;
  }
  public async post(url: string, requestData?: object,requestType = 'payLoad') {
    let result: any;
    // formData格式传参
    const formData = new FormData();
    if (requestData) {
      Object.keys(requestData).map(key => {
        formData.append(key, requestData[key]);
      });
    }
    await fetch(url, {
      method: "POST",
      body: requestType ==='payLoad'? JSON.stringify(requestData):formData
    })
      .then(res => res.json())
      .then(r => {
        result = r;
      });
    return result;
  }
}

const commonFetcdh = new Fetch();

export default commonFetcdh;
