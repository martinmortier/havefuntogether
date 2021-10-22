const initialState = {
  user: {},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      }
    default:
      throw new Error()
  }
}
