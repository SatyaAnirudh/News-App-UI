import axios from "axios";

const NEWS_REST_API_URL = "https://localhost:8080/getAllNews";

class NewsService {
    
  getNews(siteTitle) {
    axios.get(NEWS_REST_API_URL + "/" + siteTitle);
  }

  

}

export default NewsService;
