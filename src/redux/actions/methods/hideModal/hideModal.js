/* eslint-disable import/no-anonymous-default-export */
export default (type) => (dispatch) => {
  dispatch({
    type: type,
    payload: {
      visibleModal: "none",
    }
  })
}