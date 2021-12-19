const initState = {
  loading: false,
  loaded: true,
  ui_error: false,
};
export default function order(state = { ...initState }, action) {
  const { type, payload = {} } = action;
  switch (type) {
    case "SAMPLE_ACTION_PENDING":
      return { ...state, loaded: false, loading: true };

    case "SAMPLE_ACTION_FULFILLED":
      return { ...state, refresh: true, loaded: false, loading: true };

    case "SAMPLE_ACTION_REJECTED":
      return {
        ...state,
        loaded: true,
        loading: false,
        ui_error: true,
        ui_error_msg: payload.message,
      };
    default:
      return { ...state };
  }
}
