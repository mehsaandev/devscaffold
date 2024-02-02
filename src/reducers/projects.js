export default (state = [], action) =>{
    switch (action.type){
        case "ADD_PROJECT":
            console.log(action.payload)
            return {...state, projects: [...state.projects,  action.payload ]}
        case "FETCH_ALL":
            return {...state, projects:  action.payload} 
        case "FETCH_ONE":
            console.log(action.payload)
            return {...state, project: action.payload} 
        default: 
        return state
    }
}