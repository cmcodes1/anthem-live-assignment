import React, { useState } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'

export default function Cart({ navigation, route }) {

    const [cartItems, setCartItems] = useState(route.params.itemsAddedToCart || [])

    console.log(`cartItems`, cartItems)

    return (
        <View>

            <ScrollView>

                {
                    cartItems && cartItems.map((item, index) => (
                        <View key={index}
                            style={{
                                minHeight: 200,
                                borderWidth: 0.5,
                                borderRadius: 10,
                                margin: 10,
                                padding: 10,
                            }}
                        >
                            <Text>{item[0].title}</Text>
                            <Image
                                style={{ height: 100, width: 100 }}
                                source={{ uri: item[0].image }}
                            />
                            <Text>{item[0].category}</Text>
                            <Text>{item[0].price}</Text>
                            {/* <Text>{item.rating.count}</Text> */}
                            {/* <Text>{item.rating.rate}</Text> */}
                        </View>
                    ))
                }

            </ScrollView>

        </View>
    )
}
