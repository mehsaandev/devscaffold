export default (state = [], action) => {
    switch (action.type) {
        case "ADD_PROJECT":
            console.log(action.payload)
            return {...state, projects: [...state.projects,  action.payload ]}
        case "FETCH_ALL_PROJECTS":
            return {...state, projects:  action.payload} 
        case "FETCH_ONE_PROJECT":
            return { ...state, projects: [...state.projects, action.payload] }
        case 'PROJECT_TRASHED':
            return state.map(project =>
                project.id === action.payload ? { ...project, isDeleted: true } : project
            );
            return state;
        default:
            return state

    }
}