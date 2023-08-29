import React, {useContext} from 'react';
import {KeyboardAwareFlatList} from "react-native-keyboard-aware-scroll-view";
import ImportListItem from "../components/ImportListItem/ImportListItem";
import {CartItem} from "../../../interfaces/interfaces";
import Product from "../components/Product/Product";
import {useWindowDimensions} from "react-native";
import {GlobalContext} from "../../../context/GlobalContextProvider";

function ItemList() {
    const { height, width } = useWindowDimensions();
    const {cartProducts} = useContext(GlobalContext)

    return (
        <KeyboardAwareFlatList
            style={{height: height - 260}}
            ListEmptyComponent={<ImportListItem/>}
            extraScrollHeight={130}
            enableOnAndroid={true}
            keyboardShouldPersistTaps={'always'}
            data={cartProducts}
            keyExtractor={(product) =>  String(product.id)}
            renderItem={({item}: {item: CartItem}) => (
                <Product key={item.id} data={item}/>
            )}>
        </KeyboardAwareFlatList>
    );
}

export default ItemList;