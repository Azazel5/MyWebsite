export const initialState = {
    error: null,
    loading: false,
    items: {
        blogs: [],
        projects: [],
        technologies: []
    },
    finished: false 
}

export const GeneralReducer = (state, action) => {
    switch (action.type) {
        case 'error':
            return { ...state, loading: false, error: action.payload }
        case 'loading':
            return { ...state, loading: true }
        case 'success':
            return {
                ...state, loading: false,
                items: action.payload, finished: true 
            }
        default:
            return state
    }
}

