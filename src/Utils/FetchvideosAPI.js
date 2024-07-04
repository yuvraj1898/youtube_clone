import axios from 'axios';

const BASE_URL='https://youtube-v31.p.rapidapi.com'
const options = {
  method: 'GET',
 
  params: {
 
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': 'af21bdfabcmsheecc09718f1feabp1b7b36jsn4da0801df071',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};
export const FetchvideosAPI= async(url)=>{
    
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
       return data;
}