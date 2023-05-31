import axios from 'axios'

const mainApi = axios.create({
    baseURL: "https://bojosgameshop.onrender.com/api"
})

function getReviews (){
    return mainApi
    .get(`./reviews`)
    .then((res) =>{
        return res.data.reviews;
    })
    .catch((err) =>{
        console.log(err);
    })
}
function getReviewById (id){
    return mainApi
    .get(`./reviews/${id}`)
    .then((res) =>{
        return res.data;
    })
    .catch((err) =>{
        console.log(err);
    })
}

function getComments (id){
    return mainApi
    .get(`./reviews/${id}/comments`)
    .then((res) =>{
        return res.data;
    })
    .catch((err) =>{
        console.log(err);
    })
}

export {getReviews, getReviewById, getComments};