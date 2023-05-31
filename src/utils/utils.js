import axios from 'axios'

const mainApi = axios.create({
    baseURL: "https://bojosgameshop.onrender.com/api"
})

async function getReviews (){
    try {
        const res = await mainApi.get(`./reviews`)
            return res.data.reviews;
    } catch (err) {
        console.log(err);
    }
}
async function getReviewById (id){
    try {
        const res = await mainApi.get(`./reviews/${id}`)
            return res.data;
    } catch (err) {
        console.log(err);
    }
}

async function getComments (id){
    try {
        const res = await mainApi.get(`./reviews/${id}/comments`)
            return res.data;
    } catch (err) {
        console.log(err);
    }
}



export {getReviews, getReviewById, getComments};