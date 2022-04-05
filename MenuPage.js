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
              image:require("../image/f.jpeg"),
              name :"Partyvigar",
              price : "---- 100 $ ----"
              },
              {
                image:require("../image/o.jpeg"),
                name :"Kryddmarinerade",
                price : "---- 350 $ ----"
              },
              {
                image:require("../image/uu.jpeg"),
                name :"Kycklinglar",
                price : "---- 200 $ ----"
              },
              {
                image:require("../image/kkk.jpeg"),
                name :"Partyvigar",
                price : "---- 150 $ ----"
              },
              {
                image:require("../image/food.jpeg"),
                name :"pucklinglar",
                price : "---- 450 $ ----"
              },
              {
                image:require("../image/ppp.jpeg"),
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
                    
                    <ImageBackground source={require("../image/oo.jpeg")}
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








                                {/* <View style={{ height: 150, width: 150, backgroundColor: "#f4f1de", marginLeft: 10 }}>
                                    <Image
                                        source={require("../image/f.jpeg")}
                                        style={{ height: 100, width: 140, alignSelf: 'center', marginTop: 5 }}
                                    />
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 2, textAlign: 'center' }}>Partyvigar</Text>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', textAlign: 'center' }}>---- 100 $ ----</Text>

                                </View>
                                <View style={{ height: 150, width: 150, backgroundColor: "#f4f1de", marginLeft: 10, }}>
                                    <Image
                                        source={require("../image/o.jpeg")}
                                        style={{ height: 100, width: 140, alignSelf: 'center', marginTop: 5 }}
                                    />
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 2, textAlign: 'center' }}>Kryddmarinerade</Text>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', textAlign: 'center' }}>---- 350 $ ----</Text>

                                </View>
                                <View style={{ height: 150, width: 150, backgroundColor: "#f4f1de", marginLeft: 10, marginTop: 10 }}>
                                    <Image
                                        source={require("../image/uu.jpeg")}
                                        style={{ height: 100, width: 140, alignSelf: 'center', marginTop: 5 }}
                                    />
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 2, textAlign: 'center' }}>Kycklinglar</Text>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', textAlign: 'center' }}>---- 200 $ ----</Text>

                                </View>
                                <View style={{ height: 150, width: 150, backgroundColor: "#f4f1de", marginLeft: 10, marginTop: 10 }}>
                                    <Image
                                        source={require("../image/kkk.jpeg")}
                                        style={{ height: 100, width: 140, alignSelf: 'center', marginTop: 5 }}
                                    />
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 2, textAlign: 'center' }}>Kycklinglar</Text>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', textAlign: 'center' }}>---- 150 $ ----</Text>

                                </View>
                                <View style={{ height: 150, width: 150, backgroundColor: "#f4f1de", marginLeft: 10, marginTop: 10 }}>
                                    <Image
                                        source={require("../image/food.jpeg")}
                                        style={{ height: 100, width: 140, alignSelf: 'center', marginTop: 5 }}
                                    />
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 2, textAlign: 'center' }}>pucklinglar</Text>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', textAlign: 'center' }}>---- 430 $ ----</Text>

                                </View>
                                <View style={{ height: 150, width: 150, backgroundColor: "#f4f1de", marginLeft: 10, marginTop: 10 }}>
                                    <Image
                                        source={require("../image/ppp.jpeg")}
                                        style={{ height: 100, width: 140, alignSelf: 'center', marginTop: 5 }}
                                    />
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 2, textAlign: 'center' }}>hotklinglar</Text>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', textAlign: 'center' }}>---- 3100 $ ----</Text> */}

                                {/* </View> */}
                            </View>

                        </ScrollView>


                    </View>

                </View>
            </>
        )
    }
}








{/* <View style={{ flex: 1, justifyContent: "center", alignSelf: "center" }}>
<View style={{ flexDirection: 'column' }}>

    <TouchableOpacity
        onPress={() => {
            increment5()
        }}
        style={{ height: 100, margin: 20, width: 100, backgroundColor: "red", borderRadius: 20 }}
    >
        <Text style={{ fontSize: 30, textAlign: "center" }}>
            +5
        </Text>
    </TouchableOpacity>

    <TouchableOpacity
        onPress={() => {
            setCount(counnt - 1)
        }}
        style={{ height: 100, margin: 20, width: 100, backgroundColor: "red", borderRadius: 20 }}
    >
        <Text style={{ fontSize: 30, textAlign: "center" }}>
            --
        </Text>
    </TouchableOpacity>

    <Text style={{ fontSize: 30, margin: 15 }}>
        count :  {counnt}
    </Text>
    <TouchableOpacity
        onPress={() => {
            setCount(initialCount)
        }}
        style={{ height: 100, margin: 20, width: 100, backgroundColor: "red", borderRadius: 20 }}
    >
        <Text style={{ fontSize: 30, textAlign: "center" }}>
            Recet
        </Text>
    </TouchableOpacity>
</View>
</View> */}