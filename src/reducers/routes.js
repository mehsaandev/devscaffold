


// export default (state = {page:elementsTree}, action) =>{
export default (state = [], action) => {
  switch (action.type) {
    case "GET_ROUTES_OF_PROJECT":
      console.log(action.payload)
      return { ...state, routes: action.payload }

    case "GET_ALL_ROUTES":
      console.log(action.payload)
      return { ...state, routes: action.payload }

    case "GET_SINGLE_ROUTES":
      console.log(action.payload)
      return { ...state, route: action.payload }

    default:
      return state
  }
}