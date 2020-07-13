import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Animated,
    ScrollView,
    Dimensions,
    FlatList
} from 'react-native';

const { width } = Dimensions.get('window');

export default class HomeScreen extends Component {
    state = {
        active: 0,
        xTabOne: 0,
        xTabTwo: 0,
        translateX: new Animated.Value(0),
        translateXTabOne: new Animated.Value(0),
        translateXTabTwo: new Animated.Value(width),
        translateY: -1000
    };

    handleSlide = type => {
        let {
            active,
            xTabOne,
            xTabTwo,
            translateX,
            translateXTabOne,
            translateXTabTwo,
        } = this.state;

        Animated.spring(translateX, {
            toValue: type,
            duration: 100
        }).start();
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: 0,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: width,
                    duration: 100
                }).start()
            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -width,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: 0,
                    duration: 100
                }).start()
            ]);
        }
    };

    render() {

        let {
            xTabOne,
            xTabTwo,
            translateX,
            active,
            translateXTabOne,
            translateXTabTwo,
            translateY
        } = this.state;

        return (
            <View style={styles.container}>

                <View
                    style={{
                        marginHorizontal: 30,
                        marginTop: 20
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            height: 45,
                            marginBottom: 20,
                            borderRadius: 0,
                            backgroundColor: 'gray'
                        }}>
                        <Animated.View
                            style={{
                                position: 'absolute',
                                width: '50%',
                                height: '100%',
                                top: 0,
                                left: 0,
                                backgroundColor: 'black',
                                borderRadius: 5,
                                transform: [
                                    {
                                        translateX
                                    }
                                ]
                            }}
                        />
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',

                                
                                borderRadius: 0,
                                borderRightWidth: 0,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0
                            }}
                            onLayout={event =>
                                this.setState({ xTabOne: event.nativeEvent.layout.x })
                            }
                            onPress={() =>
                                this.setState({ active: 0 }, () => this.handleSlide(xTabOne))
                            }>
                            <Text
                                style={{ 
                                    color: active === 0 ? 'white' : 'black', 
                                    fontSize: 20,
                                    lineHeight: 25,
                                  
                                    textTransform: 'uppercase'}}
                                >
                                Tab One
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',


                                borderRadius: 0,
                                borderLeftWidth: 0,
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0
                            }}
                            onLayout={event =>
                                this.setState({ xTabTwo: event.nativeEvent.layout.x })
                            }
                            onPress={() =>
                                this.setState({ active: 1 }, () => this.handleSlide(xTabTwo))
                            }>
                            <Text
                                style={{ 
                                    color: active === 1 ? 'white' : 'black',
                                    fontSize: 20,
                                    lineHeight: 25,
                                    
                                    textTransform: 'uppercase'
                                }}>
                                Tab Two
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView
                        showsHorizontalScrollIndicator= {false}
                        showsVerticalScrollIndicator= {false}
                        scrollEnabled
                        nestedScrollEnabled
                    >

                        <Animated.View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                transform: [
                                    {
                                        translateX: translateXTabOne
                                    }
                                ]
                            }}
                            onLayout={event =>
                                this.setState({ translateY: event.nativeEvent.layout.height })
                            }>

                           
                            <Text style={{ fontSize: 25 }}>Here is the second Tab.
                            Here is the first Tab.
                            </Text>
                        </Animated.View>

                        <Animated.View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                transform: [
                                    {
                                        translateX: translateXTabTwo
                                    },
                                    {
                                        translateY: -translateY
                                    }
                                ]
                            }}>
                            <Text style={{ fontSize: 25 }}>Here is the second Tab.
                            Here is the second Tab.
                            </Text>
                        </Animated.View>

                    </ScrollView>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})