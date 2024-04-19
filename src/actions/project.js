import * as api from "../api";

export const getAllProjects = async (dispatch) => {
    // setLoading(true)
    try {

        const { data } = await api.getAllProjectsAPI();
        // if (data?.message) {
        // setSnackbar(true);
        // setLoading(false)
        // setSnackbarSeverity("error");
        // setAlertText(data?.message);
        // } else {
        // setSnackbar(true);
        // setLoading(false)
        // setSnackbarSeverity("success");
        // setAlertText(data?.response);
        // console.log(data)
        // dispatch({ type: "FETCH_ALL", payload: data });
        // setSnackbar(true);
        // setLoading(false)
        // setSnackbarSeverity("success");
        // setAlertText(data?.response);
        console.log(data)
        dispatch({ type: "FETCH_ALL_PROJECTS", payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const getAllPublishedProjects = async () => {
    // setLoading(true)
    try {

        const { data } = await api.getPublishedProjectsAPI();
        // if (data?.message) {
        // setSnackbar(true);
        // setLoading(false)
        // setSnackbarSeverity("error");
        // setAlertText(data?.message);
        // } else {
        // setSnackbar(true);
        // setLoading(false)
        // setSnackbarSeverity("success");
        // setAlertText(data?.response);
        // console.log(data)
        // dispatch({ type: "FETCH_ALL", payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const getSingleProject = (id) => async (dispatch) => {
    // setLoading(true)
    try {
        const { data } = await api.getSingleProjectsAPI(id);
        console.log(data)
        dispatch({ type: "FETCH_ONE_PROJECT", payload: data })
        // setProjectObj(data)
    } catch (error) {
        console.log(error.message);
    }
};

export const createProject = (formData, setOpenAddModal) => async (dispatch) => {
    // setLoading(true)
    try {

        const { data } = await api.createProjectAPI(formData);
        console.log(data)
        setOpenAddModal(false)
    } catch (error) {
        console.log(error.message);
    }
};




export const updateProject = (formData, projectId) => async (dispatch) => {
    // setLoading(true)
    try {
        const { data } = await api.updateProjectAPI(projectId, formData);
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
        console.log("Deleting",projectId)
        await api.deleteProjectAPI(projectId);
        console.log("Deleted Permanently")
    } catch (error) {
        console.log(error.message);
    }
};

export const trashProject = (projectId,handleCloseDel) => async (dispatch) => {
    // setLoading(true)
    try {
        console.log("Trashing",projectId)
        await api.trashProjectAPI(projectId);
        // dispatch({ type: 'PROJECT_TRASHED', payload: projectId });
        handleCloseDel()
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

export const getTrashProjects = async() => {
    // setLoading(true)
    try {

        const  {data}  = await api.getTrashProjectsAPI();
        // if (data?.message) {
            // setSnackbar(true);
            // setLoading(false)
            // setSnackbarSeverity("error");
            // setAlertText(data?.message);
        // } else {
            // setSnackbar(true);
            // setLoading(false)
            // setSnackbarSeverity("success");
            // setAlertText(data?.response);
            // console.log(data)
            // dispatch({ type: "FETCH_ALL", payload: data });
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

