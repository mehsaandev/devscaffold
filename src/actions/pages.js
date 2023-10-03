export const updatePage = (pageJson) => async (dispatch) => {
    // setLoading(true)
    try {

        // const { data } = await api.getAllProjectsAPI();
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
            console.log(pageJson)
            
            dispatch({ type: "UPDATE_PAGE", payload: pageJson });
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