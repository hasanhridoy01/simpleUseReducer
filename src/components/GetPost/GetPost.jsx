import { useEffect, useReducer } from "react";

//set initial value for reducer.............!
const initialState = {
  loading: true,
  error: "",
  post: {},
};

//set reducer methods customize............!
const reducer = (state, action) => {
  switch (action.type) {
    case "success":
      return {
        loading: false,
        post: action.result,
        error: "",
      };
    case "error":
      return {
        loading: false,
        post: {},
        error: "There was a problem!",
      };

    default:
      return state;
  }
};

const GetPost = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //use the side effect on my website.................!
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        dispatch({ type: "success", result: data });
      })
      .catch(() => {
        dispatch({ type: "error" });
      });
  }, []);
  return (
    <div>
      {state.loading ? "loading................" : state.post.title}
      {state.error || null}
    </div>
  );
};

export default GetPost;
