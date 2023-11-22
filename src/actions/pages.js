import * as api from '../api/index.js';


export const getPagesOfProject = (projectId) => async (dispatch) => {
    // setLoading(true)
    try {

        const { data } = await api.getAllProjectsAPI(projectId);
        
       
            console.log(data)
            
          
    } catch (error) {
       
        console.log(error.message);
    }
};