import axios from 'axios'

const mainApi = axios.create({
    baseURL: "https://bojosgameshop.onrender.com/api"
})

function getReviews (){
    return mainApi
    .get('./reviews')
    .then((res) =>{
        return res.data.reviews;
    })
    .catch((err) =>{
        console.log(err);
    })
}

export {getReviews};