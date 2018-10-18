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
  public async post(
    url: string,
    requestData?: object,
    requestType = "payLoad"
  ) {
    let result: any;
    // formData格式传参
    const formData = new FormData();
    if (requestData) {
      Object.keys(requestData).map(key => {
        formData.append(key, requestData[key]);
      });
    }
    try {
      await fetch(url, {
        method: "POST",
        body:
          requestType === "payLoad" ? JSON.stringify(requestData) : formData,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"
          // "Content-Type": "application/x-www-form-urlencoded",
        }
      })
        .then(res => {
          let r:any;
          if(url.includes('.md')){
            r = res.text()
          }else{
            r = res.json();
          }
          return r
        })
        .then(r => {
          result = r;
        });
    } catch (error) {
      console.log(error);
      result = { data: "network error" };
    }
    return result;
  }
}

const commonFetcdh = new Fetch();

export default commonFetcdh;
