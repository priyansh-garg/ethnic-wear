import ShopData from "../../collection.data";

const INITIAL_STATE={
    items:ShopData
};

const shopDataReducer=(state=INITIAL_STATE,action)=>{
    switch (action.key) {
        
        default:
            return state;
    }
};

export default shopDataReducer;