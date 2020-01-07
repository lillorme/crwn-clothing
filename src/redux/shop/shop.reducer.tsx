import SHOP_DATA from './ShopData';

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (state:any = INITIAL_STATE, action:any) => {
    switch (action.type){

        default: return state;

    }
};

export default shopReducer;