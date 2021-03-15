/* eslint-disable import/no-anonymous-default-export */
export default (type, options) => (dispatch, get) => {
    if(options.page === "Home") {
        dispatch({
            type: "UNVISIT",
            payload: {
                visit: null
            }
        })
    }
    dispatch({
        type: type,
        payload: {
            page: options.page
        }
    })
}