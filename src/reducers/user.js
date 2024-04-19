
export default (state = [], action) =>{
    switch (action.type){
        case "AUTH":
            console.log(action.payload)
            localStorage.setItem("devscaffold_profile", JSON.stringify({
              firstName: action.payload?.result?.firstName,
              lastName: action.payload?.result?.lastName,
              email: action.payload?.result?.email,
            }))
            localStorage.setItem("devscaffold_token", JSON.stringify(action.payload?.result?.token))
            return {auth : action.payload}

        default: 
        return state
    }
}