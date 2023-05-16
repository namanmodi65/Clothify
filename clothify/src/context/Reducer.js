const Reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                userType:null,
                isFetching: true,
                error: false
            }
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                userType:action.payload.type,
                isFetching: false,
                error: false
            }
        case "LOGIN_FAILURE":
            return {
                user: null,
                userType:null,
                isFetching: false,
                error: true
            }
        case "LOGOUT":
            return {
                user: null,
                userType:null,
                isFetching: false,
                error: false
            }
        default:
            return state;
    }
}

export default Reducer