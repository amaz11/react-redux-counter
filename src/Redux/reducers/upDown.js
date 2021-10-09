const initialState = {
  count: 0
};

const changeTheNumber = (state = initialState.count, action) => {
  switch (action.type) {
    case "INCREMENT":
      state++;
      return state;
    case "DECREMENT":
      if (state <= 0) return (state = 0);
      state--;
      return state;
    default:
      return state;
  }
};

export default changeTheNumber;
