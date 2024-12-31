import axios from "axios";
// posts
export const GET_POSTS = "GET_POSTS";

export const getPosts = () => {
    return (dispatch) => {
      return axios
        .get(`${process.env.REACT_APP_API_URL}api/post/`)
        .then((res) => {
          const array = res.data;
        
          console.log(array);
          dispatch({ type: GET_POSTS, payload: array.posts });
          
        })
        .catch((err) => console.log(err));
    };
  };