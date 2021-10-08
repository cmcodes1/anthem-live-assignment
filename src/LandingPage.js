import React, { useState, useEffect } from 'react'
import { View, Text, Image, ScrollView, ToastAndroid } from 'react-native'

export default function LandingPage({ navigation }) {

    const [data, setData] = useState([])

    const [itemsAddedToCart, setItemsAddedToCart] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch('https://fakestoreapi.com/products', {
            method: 'GET',
        }).then((response) => {
            return response.json()
        }).then(json => {
            console.log(`Response from getData API: `, json)
            setData(json)
        }).catch(e => {
            console.log(`Catch in getData API: `, e)
        })
    }

    return (
        <View>

            <Text
                style={{ textAlign: 'center' }}
                onPress={() => navigation.navigate('Cart', { itemsAddedToCart: itemsAddedToCart })}
            >View your cart</Text>

            <ScrollView>

                {
                    data && data.map((item, index) => (
                        <View key={item.id}
                            style={{
                                minHeight: 200,
                                borderWidth: 0.5,
                                borderRadius: 10,
                                margin: 10,
                                padding: 10,
                            }}
                        >
                            <Text>{item.title}</Text>
                            <Image
                                style={{ height: 100, width: 100 }}
                                source={{ uri: item.image }}
                            />
                            <Text>{item.category}</Text>
                            <Text>{item.price}</Text>
                            <Text>{item.rating.count}</Text>
                            <Text>{item.rating.rate}</Text>

                            <Text
                                style={{ textAlign: 'right' }}
                                onPress={() => {
                                    setItemsAddedToCart([...itemsAddedToCart, data.filter((dataItem) => dataItem.id == item.id)]);
                                    ToastAndroid.show('Item has been added to cart', ToastAndroid.SHORT)
                                }}
                            >Add to cart</Text>

                        </View>
                    ))
                }

            </ScrollView>

        </View>
    )
}
