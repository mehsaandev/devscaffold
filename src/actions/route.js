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


export const getRoutesOfProject = (projectId,setLoading) => async (dispatch) => {
    setLoading(true)
    try {

        const { data } = await api.getRoutesOfProjectAPI(projectId);
        console.log(data)
        setLoading(false)
        dispatch({ type: "GET_ROUTES_OF_PROJECT", payload: data });
    } catch (error) {
        setLoading(false)
        console.log(error.message);
    }
};


export const getSingleRoute = (id, setRouteObj) => async (dispatch) => {
    // setLoading(true)
    try {
        const { data } = await api.getSingleRouteAPI(id);
        setRouteObj(data)
    } catch (error) {
        console.log(error.message);
    }
};

export const createRoute = (formData, handleClose, setProperties) => async (dispatch) => {
    setProperties((previous) => { return { ...previous, loading: true } })
    try {

        const { data } = await api.createRouteAPI(formData);
        console.log(data)
        setProperties((previous) => { return { ...previous, loading: false } })
        handleClose()
    } catch (error) {
        setProperties((previous) => { return { ...previous, loading: false } })
        handleClose()

        console.log(error.message);
    }
};

export const updateRoute = (formData, routeId) => async (dispatch) => {
    setLoading(true)
    try {

        const { data } = await api.updateRouteAPI(routeId, formData);
        console.log(data)
    } catch (error) {
        console.log(error.message);
    }
};


export const deleteRouteAPIHandler = (routeId,handleClose) => async (dispatch) => {
    // setLoading(true)
    try {

        await api.deleteRouteAPI(routeId);
        handleClose()
        console.log("Deleted Permanently")
    } catch (error) {
        console.log(error.message);
    }
};