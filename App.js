
import { View } from 'react-native';
import React from 'react';
import MenuPage from './MenuPage'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <>
                <View>
                    <MenuPage />
                </View>


            </>
        )
    }
}



