import { createSelector } from "reselect";
import memoize from "lodash.memoize";

export const selectShopData=state=>state.shopData;

export const selectShopDataItems=createSelector(
    [selectShopData],
    shop=>shop.items
);

export const selectShopDataItemsAsArray=createSelector(
    [selectShopDataItems],
    items=>Object.keys(items).map(key=>items[key])
);

export const selectCategory=memoize(categoryUrlParam=>createSelector(
    [selectShopDataItems],
    items=>items[categoryUrlParam]
));