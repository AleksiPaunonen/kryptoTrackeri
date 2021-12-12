import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const CoinInfo = ({ currentPrice, logoUrl, name, priceChangePercentage, symbol }) => {

    return (
        <View style={styles.infoWrapper}>
            <View style={styles.titleWrapper}>
                <View style={styles.upperTitle}>
                    <View style={styles.upperLeftTitle}>
                        <Image source={{ uri: logoUrl }} style={styles.image} />
                        <Text style={styles.subtitle}>{name} ({symbol})</Text>
                    </View>
                    <Text style={styles.subtitle}>7 days</Text>
                </View>

                <View style={styles.lowerTitle}>
                    <Text style={styles.title}>€ {currentPrice.toFixed(2)}</Text>
                    <Text style={styles.subtitle}>{priceChangePercentage.toFixed(2)}%</Text>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    infoWrapper: {
        marginVertical: 16
    },
    titleWrapper: {
        marginHorizontal: 16
    },
    upperTitle: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    upperLeftTitle: {
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: 24,
        height: 24,
        marginRight: 4,
    },
    subtitle: {
        fontSize: 14,
        color: "#000000",
    },
    lowerTitle: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    title: {
        fontSize: 18
    },
});

export default CoinInfo
