import * as api from "../api";

export const getAllProjects = () => async (dispatch) => {
    // setLoading(true)
    try {

        const { data } = await api.getAllProjectsAPI();
            dispatch({ type: "FETCH_ALL", payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const getSingleProject = (id,setProjectObj) => async (dispatch) => {
    // setLoading(true)
    try {
        const { data } = await api.getSingleProjectsAPI(id);
            setProjectObj(data)
    } catch (error) {
        console.log(error.message);
    }
};

export const createProject = (formData,setOpenAddModal) => async (dispatch) => {
    // setLoading(true)
    try {

        const { data } = await api.createProjectAPI(formData);
            console.log(data)
            setOpenAddModal(false)
    } catch (error) {
        console.log(error.message);
    }
};

export const updateProject = (formData,projectId) => async (dispatch) => {
    // setLoading(true)
    try {

        const {data} = await api.updateProjectAPI(projectId,formData);
            console.log(data)
    } catch (error) {
        console.log(error.message);
    }
};

export const exportComponents = (components) => async (dispatch) => {
    // setLoading(true)
    try {

        const { data } = await api.exportComponentsAPI(components);
            console.log(data)
            setOpenAddModal(false)
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteProject = (projectId) => async (dispatch) => {
    // setLoading(true)
    try {

        await api.deleteProjectAPI(projectId);
            console.log("Deleted Permanently")
    } catch (error) {
        console.log(error.message);
    }
};

export const trashProject = (projectId) => async (dispatch) => {
    // setLoading(true)
    try {

        await api.trashProjectAPI(projectId);
            console.log("Trashed Successfully")
    } catch (error) {
        console.log(error.message);
    }
};

export const restoreProject = (projectId) => async (dispatch) => {
    // setLoading(true)
    try {

        await api.restoreProjectAPI(projectId);
            console.log("Restored Successfully")
    } catch (error) {
        console.log(error.message);
    }
};

export const publishProject = (projectId) => async (dispatch) => {
    // setLoading(true)
    try {

        await api.publishProjectAPI(projectId);
            console.log("Published Successfully")
    } catch (error) {
        console.log(error.message);
    }
};

export const unpublishProject = (projectId) => async (dispatch) => {
    // setLoading(true)
    try {

        await api.unPublishProjectAPI(projectId);
            console.log("Unpublished Successfully")
    } catch (error) {
        console.log(error.message);
    }
};

