import SHOP_DATA from "./shop.data";

const IINITAL_STATE = {
    collections: SHOP_DATA
};

const shopReducer = (state = IINITAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default shopReducer;