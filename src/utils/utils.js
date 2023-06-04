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
        const res = await mainApi.get(`/reviews/${id}/comments`)
            return res.data;
    } catch (err) {
        console.log(err);
    }
}
async function getCategories (){
    try {
        const res = await mainApi.get(`/categories`)
            return res.data;
    } catch (err) {
        console.log(err);
    }
}
async function patchReview (id, object){
        const res = await mainApi.patch(`/reviews/${id}`, object)
            return res;

}

async function postComment (id, object){
    const res = await mainApi.post(`/reviews/${id}/comments`, object)
    return res;
}

async function deleteComment (id){
    const res = await mainApi.delete(`/comments/${id}`)
    return res;
}


// app.post('/api/reviews/:review_id/comments', postCommentController)
export {getReviews, getReviewById, getComments, patchReview, postComment, getCategories, deleteComment};