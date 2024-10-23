const initialState = {
    name: 'John Doe',
    email: 'john@example.com',
};

const userSlice = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export const updateUser = (user) => ({
    type: 'UPDATE_USER',
    payload: user,
});

export default userSlice;
