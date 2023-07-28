import axios from 'axios'

export default {
  //post
  async getNewsList(callBack) {
    try {
      let resData = await this.api().get("dummy/NewsList.json");
      return callBack(resData.data)
    } catch (error) {
      console.log(error)
    }
  },
  //api()
  api() {
    return axios.create({
      // baseURL: `https://api.stoz.co.kr/`,
      baseURL: "http://localhost:3000/",
      withCredentials: false,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  },

}