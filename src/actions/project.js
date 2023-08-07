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

