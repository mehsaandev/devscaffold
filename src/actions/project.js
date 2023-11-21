import * as api from "../api";

export const getAllProjects = () => async (dispatch) => {
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
            dispatch({ type: "FETCH_ALL", payload: data });
            // setTimeout(function () {
            //   history("/home");
            // }, 500);
        // }
    } catch (error) {
        //   setSnackbar(true);
        //   setLoading(false)
        //   setSnackbarSeverity("error");
        //   setAlertText("Something went wrong");
        console.log(error.message);
    }
};

export const getSingleProject = (id,setProjectObj) => async (dispatch) => {
    // setLoading(true)
    try {

        const { data } = await api.getSingleProjectsAPI(id);

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
            setProjectObj(data)
            // dispatch({ type: "FETCH_ONE", payload: data });
            // setTimeout(function () {
            //   history("/home");
            // }, 500);
        // }
    } catch (error) {
        //   setSnackbar(true);
        //   setLoading(false)
        //   setSnackbarSeverity("error");
        //   setAlertText("Something went wrong");
        console.log(error.message);
    }
};

export const createProject = (formData,setOpenAddModal) => async (dispatch) => {
    // setLoading(true)
    try {

        const { data } = await api.createProjectAPI(formData);
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
            console.log(data)
            // dispatch({ type: "AUTH", data });
            // setTimeout(function () {
            //   history("/home");
            // }, 500);
            setOpenAddModal(false)
        // }
    } catch (error) {
        //   setSnackbar(true);
        //   setLoading(false)
        //   setSnackbarSeverity("error");
        //   setAlertText("Something went wrong");
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
            console.log(data)
            // dispatch({ type: "AUTH", data });
            // setTimeout(function () {
            //   history("/home");
            // }, 500);
            setOpenAddModal(false)
        // }
    } catch (error) {
        //   setSnackbar(true);
        //   setLoading(false)
        //   setSnackbarSeverity("error");
        //   setAlertText("Something went wrong");
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

