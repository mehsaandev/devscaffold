import * as api from "../api";


export const updatePage = (formData,pageId) => async (dispatch) => {
    // setLoading(true)
    try {

        // const {data} = await api.updatePageAPI(pageId,formData);
        dispatch({type:"UPDATE_PAGE",payload:formData})
            // console.log(data)
    } catch (error) {
        console.log(error.message);
    }
};

export const createPage = (formData) => async (dispatch) => {
    // setLoading(true)
    try {

        const {data} = await api.createPageAPI(formData);
            console.log(data)
    } catch (error) {
        console.log(error.message);
    }
};

export const renamePage = (formData,pageId) => async (dispatch) => {
    // setLoading(true)
    try {

        const {data} = await api.renamePageAPI(pageId,formData);
            console.log(data)
    } catch (error) {
        console.log(error.message);
    }
};

export const deletePage = (pageId) => async (dispatch) => {
    // setLoading(true)
    try {

        await api.deletePageAPI(pageId);
            console.log("Deleted Permanently")
    } catch (error) {
        console.log(error.message);
    }
};

export const getPage = (pageId) => async (dispatch) => {
    // setLoading(true)
    try {

        const {data} = await api.getPageAPI(pageId);
            console.log(data)
    } catch (error) {
        console.log(error.message);
    }
};

export const getPagesOfProject = (projectId) => async (dispatch) => {
    // setLoading(true)
    try {

        const {data} = await api.getPagesOfProjectAPI(projectId);
            console.log(data)
    } catch (error) {
        console.log(error.message);
    }
};