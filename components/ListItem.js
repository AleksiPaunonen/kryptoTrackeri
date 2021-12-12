import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';

const ListItem = ({ name, symbol, currentPrice, priceChangePercentage, logoUrl, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.itemWrapper}>

            <View style={styles.leftWrapper}>
                <Image source={{ uri: logoUrl }} style={styles.image} />
                <View style={styles.titlesWrapper}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
                </View>
            </View>

            <View style={styles.rightWrapper}>
                <Text style={styles.title}>€ {currentPrice.toFixed(2)}</Text>
                <Text style={styles.subtitle}>{priceChangePercentage.toFixed(2)}%</Text>
            </View>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemWrapper: {
        paddingHorizontal: 16,
        marginTop: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    leftWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        height: 48,
        width: 48,
    },
    titlesWrapper: {
        marginLeft: 8,
    },
    title: {
        fontSize: 18,
        color: "#ffffff",
    },
    subtitle: {
        marginTop: 4,
        fontSize: 14,
        color: "#ffffff",
    },
    rightWrapper: {
        alignItems: "flex-end",
    },
    price: {
        fontWeight: "bold",
        fontSize: 18,
    },
})

export default ListItem