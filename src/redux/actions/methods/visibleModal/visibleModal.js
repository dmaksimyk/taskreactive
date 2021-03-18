/* eslint-disable import/no-anonymous-default-export */
export default (type, options) => (dispatch, get) => {
  let visible = get().app.visibleModal;
  if (visible === "none") {
    dispatch({
      type: type,
      payload: {
        visibleModal: "block",
      }
    })
  } else {
    dispatch({
      type: type,
      payload: {
        visibleModal: "none",
      }
    })
  }
}