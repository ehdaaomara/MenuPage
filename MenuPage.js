import * as React from 'react'
import { Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity, Button, ScrollView, TextInput, Dimensions } from 'react-native'
const width = Dimensions.get("screen").width
const height = Dimensions.get("screen").height

export default class Task2 extends React.Component {
    constructor() {
        super()
        this.state = {
          arr :[
              {
              image:require("./images/f.jpeg"),
              name :"Partyvigar",
              price : "---- 100 $ ----"
              },
              {
                image:require("./images/o.jpeg"),
                name :"Kryddmarinerade",
                price : "---- 350 $ ----"
              },
              {
                image:require("./images/uu.jpeg"),
                name :"Kycklinglar",
                price : "---- 200 $ ----"
              },
              {
                image:require("./images/kkk.jpeg"),
                name :"Partyvigar",
                price : "---- 150 $ ----"
              },
              {
                image:require("./images/food.jpeg"),
                name :"pucklinglar",
                price : "---- 450 $ ----"
              },
              {
                image:require("./images/ppp.jpeg"),
                name :"hotklinglar",
                price : "---- 420 $ ----"
              }
          ]
        }
    }
    render() {
        return (
            <>

                <View style={{ backgroundColor: '#ffffff', height: height*1 }} >
                    
                    <ImageBackground source={require("./images/oo.jpeg")}
                        style={{ height: height*0.185, width: '100%' }}
                        resizeMode={'cover'}


                    >
                        <Text style={{
                            fontSize: 25, fontWeight: 'bold'
                            , textAlign: "center", color: '#ffffff', marginTop: height*0.07
                        }}>KRYDDAT & SMAKSATT</Text>
                    </ImageBackground>
                    <View style={{ height: height*0.11, marginTop: height*0.03, backgroundColor: '#ffffff' }}>

                        <Text style={{ textAlign: 'center' }}>var fadigkryddade kyckling ar perfekt for den</Text>
                        <Text style={{ textAlign: 'center' }}>som vill ha en god marinad utan att behove</Text>
                        <Text style={{ textAlign: 'center' }}>vanta, for den inte riktigt kan bestamma </Text>
                        <Text style={{ textAlign: 'center' }}>sig, och for den som hittat sin favorit.</Text>

                    </View>
                    <View style={{ height: height * 0.045, width: width*0.3, borderColor: "#7f4f24", borderBottomWidth: 1, alignSelf: 'center' }}>
                        <Text style={{ textAlign: 'center', marginTop: height*0.014, fontWeight: 'bold' }}>PRODUKTER</Text>
                    </View>



                    <View style={{ backgroundColor: "#ffff", width: width*0.89, height: height*0.45, alignSelf: "center", marginTop: 20 }}>

                        <ScrollView >

                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: "100%", height: "100%" ,alignSelf:'center'}}>



                                {this.state.arr.map((concat, index) => (
                                    <TouchableOpacity

                                    >
                                        <View style={{ height: height*0.19, width: width*0.417, backgroundColor: "#f4f1de", marginLeft: width*0.02,marginTop:height*0.01}}>
                                            <Image
                                                source={concat.image}
                                                style={{ height: height*0.13, width: width*0.38, alignSelf: 'center', marginTop: 5 }}
                                            />
                                            <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 2, textAlign: 'center' }}> {concat.name} </Text>
                                            <Text style={{ fontSize: 12, fontWeight: 'bold', textAlign: 'center' }}> {concat.price} </Text>

                                        </View>



                                    </TouchableOpacity>



                                ))}

                            </View>

                        </ScrollView>


                    </View>

                </View>
            </>
        )
    }
}








