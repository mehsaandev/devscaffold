import * as api from "../api";

export const getAllComponents = () => async (dispatch) => {
    // setLoading(true)
    try {

        const { data } = await api.getAllComponentsAPI();
        console.log(data)
            // dispatch({ type: "FETCH_ALL", payload: data });
    } catch (error) {
        console.log(error.message);
    }
};


export const getSingleComponent = (id,setCompObj) => async (dispatch) => {
    // setLoading(true)
    try {
        const { data } = await api.getSingleComponentAPI(id);
            setCompObj(data)
    } catch (error) {
        console.log(error.message);
    }
};

export const createComponent = (formData,setOpenAddModal) => async (dispatch) => {
    // setLoading(true)
    try {

        const { data } = await api.createComponentAPI(formData);
            console.log(data)
            setOpenAddModal(false)
    } catch (error) {
        console.log(error.message);
    }
};

export const updateComponent = (formData,compId) => async (dispatch) => {
    // setLoading(true)
    try {

        const {data} = await api.updateComponentAPI(compId,formData);
            console.log(data)
    } catch (error) {
        console.log(error.message);
    }
};

// export const exportComponents = (components) => async (dispatch) => {
//     // setLoading(true)
//     try {

//         const { data } = await api.exportComponentsAPI(components);
//             console.log(data)
//             setOpenAddModal(false)
//     } catch (error) {
//         console.log(error.message);
//     }
// };

export const deleteComponent = (compId) => async (dispatch) => {
    // setLoading(true)
    try {

        await api.deleteComponentAPI(compId);
            console.log("Deleted Permanently")
    } catch (error) {
        console.log(error.message);
    }
};

export const trashComponent = (compId) => async (dispatch) => {
    // setLoading(true)
    try {

        await api.trashComponentAPI(compId);
            console.log("Trashed Successfully")
    } catch (error) {
        console.log(error.message);
    }
};

export const restoreComponent = (compId) => async (dispatch) => {
    // setLoading(true)
    try {

        await api.restoreComponentAPI(compId);
            console.log("Restored Successfully")
    } catch (error) {
        console.log(error.message);
    }
};

export const publishComponent = (compId) => async (dispatch) => {
    // setLoading(true)
    try {

        await api.publishComponentAPI(compId);
            console.log("Published Successfully")
    } catch (error) {
        console.log(error.message);
    }
};

export const unPublishComponent = (compId) => async (dispatch) => {
    // setLoading(true)
    try {

        await api.unPublishComponentAPI(compId);
            console.log("Unpublished Successfully")
    } catch (error) {
        console.log(error.message);
    }
};

