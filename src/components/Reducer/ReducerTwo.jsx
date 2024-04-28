import { useReducer } from "react";

const initialState = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.value };
    case "decrement":
      return { ...state, counter: state.counter - action.value };

    default:
      return state;
  }
};

const Reducer = () => {
  //use React State UseReducer............................!
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div className="">
      <div style={{ border: "2px solid gray", padding: "30px" }}>
        <div className="" style={{ marginBottom: "20px" }}>
          Count - {count.counter}
        </div>
        <button
          type="button"
          style={{ marginRight: "10px" }}
          onClick={() => {
            dispatch({
              type: "increment",
              value: 1,
            });
          }}
        >
          Increment By 1
        </button>

        <button
          type="button"
          onClick={() => {
            dispatch({
              type: "decrement",
              value: 1,
            });
          }}
        >
          Decrement By 1
        </button>
      </div>

      <div style={{ border: "2px solid gray", padding: "30px" }}>
        <div className="" style={{ marginBottom: "20px" }}>
          Count2 - {count2.counter}
        </div>
        <button
          type="button"
          style={{ marginRight: "10px" }}
          onClick={() => {
            dispatch2({
              type: "increment",
              value: 1,
            });
          }}
        >
          Increment By 1
        </button>

        <button
          type="button"
          onClick={() => {
            dispatch2({
              type: "decrement",
              value: 1,
            });
          }}
        >
          Decrement By 1
        </button>
      </div>
    </div>
  );
};

export default Reducer;
