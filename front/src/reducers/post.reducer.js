/* import { GET_POSTS } from "../actions/post.actions";

const initialState = [];

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            console.log(action.payload)
          return action.payload;
          
          default:
            return state;
}
} */
const initialState = {
  posts: [], // Initialisez le tableau des posts avec un tableau vide
  loading: true,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload, // Utilisez les données renvoyées par l'API
        loading: false,
      };
    //...
    default:
      return state;
  }
};