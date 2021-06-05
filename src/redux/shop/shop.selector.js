import {createSelector} from 'reselect'


const selectShop = state => state.shop

export const selectCollections = createSelector (
    [selectShop],
    shop => shop.collections
)

export const selectCollectionForPreview = createSelector(  //Hàm chuyển object thành array
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key]) //Lấy tất cả các key và lọc qua các key đó để lấy ra giá trị của collection object tương ứng với key đó
)

export const selectCollection = collectionUrlParam => createSelector( //Tìm collection ID khớp với tham số Url của collection id map
    [selectCollections],
    collections => collections[collectionUrlParam]
) //Trong collections tìm ra collection với id trùng với COLLECTION_ID_MAP url param