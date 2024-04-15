import * as api from "../api";


export const updatePage = (formData, pageId) => async (dispatch) => {
    // setLoading(true)
    try {

        // const {data} = await api.updatePageAPI(pageId,formData);
        dispatch({ type: "UPDATE_PAGE", payload: formData })
        // console.log(data)
    } catch (error) {
        console.log(error.message);
    }
};

export const createPageAPIHandler = (formData, setFormSubmissionProperties,handleClose) => async (dispatch) => {
    // setLoading(true)
    setFormSubmissionProperties({ loading: true, error: null, success: null })
    try {

        const { data } = await api.createPageAPI(formData);
        console.log(data)
        setFormSubmissionProperties({ loading: false, error: null, success: true })
        handleClose()
    } catch (error) {
        setFormSubmissionProperties({ loading: false, error: error.message, success: false })
        handleClose()
        console.log(error.message);
    }
};

export const renamePage = (formData, pageId) => async (dispatch) => {
    // setLoading(true)
    try {

        const { data } = await api.renamePageAPI(pageId, formData);
        console.log(data)
    } catch (error) {
        console.log(error.message);
    }
};

export const deletePage = (pageId,handleClose) => async (dispatch) => {
    // setLoading(true)
    try {

        await api.deletePageAPI(pageId);
        handleClose()
        console.log("Deleted Permanently")
    } catch (error) {
        handleClose()
        console.log(error.message);
    }
};

export const getPage = (pageId,setLoading) => async (dispatch) => {
    setLoading(true)
    try {

        const { data } = await api.getPageAPI(pageId);
        console.log(data)
        setLoading(false)
        dispatch({ type: "FETCH_ONE_PAGE", payload: data?.content })
    } catch (error) {
        setLoading(false)
        console.log(error.message);
    }
};

export const getPagesOfProjectAPIHandler = (projectId) => async (dispatch) => {
    // setLoading(true)
    try {

        const { data } = await api.getPagesOfProjectAPI(projectId);
        dispatch({ type: "FETCH_ALL_PAGES", payload: data })
        console.log(data)
    } catch (error) {
        console.log(error.message);
    }
};