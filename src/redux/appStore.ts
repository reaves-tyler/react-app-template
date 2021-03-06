export enum AppKEYS {
    user_id = 'user_id',
}

export type AppKV = {
    [AppKEYS.user_id]: string;
};

const initialState = {
    [AppKEYS.user_id]: undefined,
};

export enum AppACTIONS {
    UPDATE_APP = 'UPDATE_APP',
    RESET_STORE = 'RESET_STORE',
}

export const appReducer = (state = initialState, { type, value }) => {
    switch (type) {
        case AppACTIONS.UPDATE_APP:
            return {
                ...state,
                ...value,
            };
        case AppACTIONS.RESET_STORE:
            return initialState;
        default:
            return state;
    }
};
