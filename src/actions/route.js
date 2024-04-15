import * as api from "../api";

export const getAllRoutes = () => async (dispatch) => {
    // setLoading(true)
    try {

        const { data } = await api.getAllRoutesAPI();
        console.log(data)
            // dispatch({ type: "FETCH_ALL", payload: data });
    } catch (error) {
        console.log(error.message);
    }
};


export const getSingleRoute = (id,setRouteObj) => async (dispatch) => {
    // setLoading(true)
    try {
        const { data } = await api.getSingleRouteAPI(id);
            setRouteObj(data)
    } catch (error) {
        console.log(error.message);
    }
};

export const createRoute = (formData,handleClose) => async (dispatch) => {
    // setLoading(true)
    try {

        const { data } = await api.createRouteAPI(formData);
            console.log(data)
            handleClose()
    } catch (error) {
        handleClose()

        console.log(error.message);
    }
};

export const updateRoute = (formData,routeId) => async (dispatch) => {
    // setLoading(true)
    try {

        const {data} = await api.updateRouteAPI(routeId,formData);
            console.log(data)
    } catch (error) {
        console.log(error.message);
    }
};


export const deleteRoute = (routeId) => async (dispatch) => {
    // setLoading(true)
    try {

        await api.deleteRouteAPI(routeId);
            console.log("Deleted Permanently")
    } catch (error) {
        console.log(error.message);
    }
};