import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'

const Screen01 = () => {

    const data = [
        { id: '1', name: 'Sản phẩm 1', supplier: 'Shop 1', image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-1.png' },
        { id: '2', name: 'Sản phẩm 2', supplier: 'Shop 2', image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-1.png' },
        { id: '3', name: 'Sản phẩm 3', supplier: 'Shop 3', image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-1.png' },
        { id: '4', name: 'Sản phẩm 4', supplier: 'Shop 4', image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-1.png' },
        { id: '5', name: 'Sản phẩm 5', supplier: 'Shop 4', image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-1.png' },
        { id: '6', name: 'Sản phẩm 6', supplier: 'Shop 6', image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-1.png' },
        { id: '6', name: 'Sản phẩm 7', supplier: 'Shop 7', image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:0/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-1.png' },
    ];

    const renderItem = ({ item }) => (
        // <View style={{ flex: 11, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', width: '100%', height: 100, marginBottom: 10 }}>

                {/* Image - Product */}
                <View style={{ width: '30%' }}>
                    <Image source={{ uri: item.image }} style={{ width: '100%', height: '100%' }} resizeMode='contain'></Image>
                </View>

                {/* Thông tin sản phẩm */}
                <View style={{ width: '40%', height: '100%',  marginLeft: 20 }}>
                    <Text style={{ fontSize: 20 }}>{item.name}</Text>
                    <Text style={{ fontSize: 20, color: 'red' }}>{item.supplier}</Text>
                </View>
                <View style={{ width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center', }}>
                    <View style={{ width: '90%', height: '30%', backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginRight: 40 }}>
                        <Text style={{ fontSize: 20, color: 'white' }}>Chat</Text>
                    </View>
                </View>
            </View>
        // </View>
    )

    return (
        <SafeAreaView style={{ flex: 1 }}>

            {/* View - 1 */}
            <View style={{ flex: 1, backgroundColor: '#1BA9FF', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Image source={require('../assets/icons/Vector.png')} style={{ marginLeft: 10 }}></Image>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Chat</Text>
                <Image source={require('../assets/icons/bi_cart-check.png')} style={{ marginRight: 10 }}></Image>
            </View>

            {/* View - 2 - Text*/}
            <View style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
                <Text style={{ fontSize: 18, marginLeft: 10, marginRight: 10, justifyContent: 'center', alignItems: 'center' }}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
            </View>


            {/* View - 3 - Product*/}
            <View style={{ flex: 8, backgroundColor: 'white' }}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>

            {/* View - 4 */}
            <View style={{ flex: 1, backgroundColor: '#1BA9FF', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Image source={require('../assets/icons/Group 10.png')} style={{ marginLeft: 10 }}></Image>
                <Image source={require('../assets/icons/Vector (Stroke).png')}></Image>
                <Image source={require('../assets/icons/Vector 1 (Stroke).png')} style={{ marginRight: 10 }}></Image>
            </View>
        </SafeAreaView>
    )
}

export default Screen01

const styles = StyleSheet.create({})