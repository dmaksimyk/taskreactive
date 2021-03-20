/* eslint-disable import/no-anonymous-default-export */
export default (type, options) => (dispatch) => {
  if (options.page === "Home") {
    return dispatch({
      type: type,
      payload: {
        page: options.page,
        visit: null
      }
    })
  }

  dispatch({
    type: type,
    payload: {
      page: options.page,
      visit: options.visit
    }
  })
}