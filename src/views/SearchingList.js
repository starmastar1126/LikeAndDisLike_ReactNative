import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image, 
  FlatList
} 
from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// temporary data
users = [
    {
        id: "1",
        location: "1 km",
        image: require("../assets/img/Girl1.jpg"),
        sentence: "I would like to meet someone now. :)"
    },
    {
        id: "2",
        location: "0.5 km",
        image: require("../assets/img/Girl2.jpg"),
        sentence: "I'm looking for someone really nice and kind"
    },
    {
        id: "3",
        location: "2 km",
        image: require("../assets/img/Girl3.jpg"),
        sentence: "I would like to meet someone now. :)"
    },
    {
        id: "4",
        location: "0.1 km",
        image: require("../assets/img/Girl4.jpg"),
        sentence: "I'm looking for someone really nice and kind"
    },
    {
        id: "5",
        location: "10 km",
        image: require("../assets/img/Girl5.jpg"),
        sentence: "I would like to meet someone now. :)"
    },
    {
        id: "6",
        location: "15 km",
        image: require("../assets/img/Girl6.jpg"),
        sentence: "I'm looking for someone really nice and kind"
    },
    {
        id: "7",
        location: "1 km",
        image: require("../assets/img/Girl7.jpg"),
        sentence: "I would like to meet someone now. :)"
    },
]


export default class SearchingList extends Component {
    renderUser = user => {
        return(

            <View style={styles.feedItem}>

                <View style={styles.imageContainer}>
                    <Image source={user.image} style={styles.image} />
                </View>

                <View style={styles.buttonsContainer}>

                    <View style={styles.dislikeButtonContainer}>
                        <TouchableOpacity style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                            <Icon 
                                name='md-close'
                                size={50}
                                color={'black'}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.loveButtonContainer}>
                        <TouchableOpacity style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                            <Icon 
                                name='md-heart'
                                size={70}
                                color={'red'}
                                style={{top: 3}}
                            />
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        );
    };

    render() {
        return(

            <View style={styles.container}>

                <FlatList
                    style={styles.feed}
                    data={users}
                    renderItem={({ item }) => this.renderUser(item)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                ></FlatList>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingBottom: 50,
        flex: 1,
        backgroundColor: 'white'
    },
    feed: {
        marginHorizontal: 30
    }, 
    feedItem: {
        height: 371, 
        alignContent: 'flex-start', 
        borderRadius: 10,
        backgroundColor: 'transparent',
        marginVertical: 15
    },
    imageContainer: {
        height: 351, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 10
    },
    image: {
        width: '100%', 
        height: '100%', 
        borderRadius: 10
    },
    buttonsContainer: {
        position: 'absolute', 
        alignSelf: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        bottom: 0,
        height: '24%', 
        width: '87%',  
        backgroundColor: 'transparent', 
    },
    dislikeButtonContainer: {
        position: 'absolute',
        bottom: 0,
        height: 60, 
        width: 60, 
        borderRadius: 30, 
        backgroundColor: 'white', 
        justifyContent: 'center', 
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 19,
        shadowOpacity: 0.5,
        elevation: 5
    },
    loveButtonContainer: {
        position: 'absolute',
        right: 0,
        height: 90, 
        width: 90, 
        borderRadius: 45, 
        backgroundColor: 'white', 
        justifyContent: 'center', 
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.5,
        elevation: 5
    }
})