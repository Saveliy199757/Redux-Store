const initialState = {
    data: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA_LOADED':
            return {
                data: action.payload
            };
        default:
            return state;
    }
}

export default reducer;