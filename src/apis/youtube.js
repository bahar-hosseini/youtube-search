import axios from "axios"

const KEY="AIzaSyCFCNSNYunfdgPmactjXByvkY8lJU6qWgg";

export default axios.create({
baseURL:"https://www.googleapis.com/youtube/v3",
params:{
    part:"snippet",
    type: 'video',
    maxResults: 5,
    key:KEY
}
});