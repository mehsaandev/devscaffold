export default (state = [], action) =>{
    switch (action.type){
        case "ADD_PROJECT":
            console.log(action.payload)
            return {...state, projects: [...state.projects,  action.payload ]}
        case "FETCH_ALL_PROJECTS":
            return {...state, projects:  action.payload} 
        case "FETCH_ONE_PROJECT":
            console.log(action.payload)
            return {...state, project: action.payload} 
        default: 
        return state
    }
}