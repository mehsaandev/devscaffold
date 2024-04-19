import * as api from "../api";



export const signIn = (formData,navigate,setLoading) => async (dispatch) => {
    setLoading(true)
    try {

        const { data } = await api.signInAPI(formData);
        // if (data?.message) {
            // setSnackbar(true);
            // setLoading(false)
            // setSnackbarSeverity("error");
            // setAlertText(data?.message);
        // } else {
            // setSnackbar(true);
            // setSnackbarSeverity("success");
            // setAlertText(data?.response);
            setLoading(false)
            console.log(data)
            dispatch({ type: "AUTH", payload: data });
            navigate("/home")
            // setTimeout(function () {
            //   history("/home");
            // }, 500);
            // setOpenAddModal(false)
        // }
    } catch (error) {
        //   setSnackbar(true);
          setLoading(false)
        //   setSnackbarSeverity("error");
        //   setAlertText("Something went wrong");
        console.log(error.message);
    }
};
export const signUp = (formData) => async (dispatch) => {
    // setLoading(true)
    try {

        const { data } = await api.signUpAPI(formData);
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
            dispatch({ type: "AUTH", payload:data });
            // setTimeout(function () {
            //   history("/home");
            // }, 500);
            // setOpenAddModal(false)
        // }
    } catch (error) {
        //   setSnackbar(true);
        //   setLoading(false)
        //   setSnackbarSeverity("error");
        //   setAlertText("Something went wrong");
        console.log(error.message);
    }
};
