import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LandingPage from './LandingPage'
import Cart from './Cart'

const NavStack = createStackNavigator()

export default function Stack() {
    return (
        <NavStack.Navigator>
            <NavStack.Screen name="Home" component={LandingPage} />
            <NavStack.Screen name="Cart" component={Cart} />
        </NavStack.Navigator>
    )
}
