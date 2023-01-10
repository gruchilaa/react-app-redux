import { GET_CHARACTERS_SUCCESS,GET_EPISODES_SUCCESS } from "./types";

const initialState = {
    characters: [],
    episodes: [],
    questions: []
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case GET_CHARACTERS_SUCCESS:
            return {
                ...state,
                characters: action.payload
            }
        case GET_EPISODES_SUCCESS:
            return {
                ...state,
                episodes: action.payload
            }
        default:
            return state;
    }


}

export default reducer;
