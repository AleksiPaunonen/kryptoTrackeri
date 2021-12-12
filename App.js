import React, {useRef, useMemo, useState, useEffect} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ListItem from './components/ListItem';
import CoinInfo from './components/CoinInfo';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { getMarketData } from './services/CryptoService';


export default function App() {

  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['50%'], []);
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      const marketData = await getMarketData();
      setData(marketData);
    }

    fetchMarketData();
  }, [])

  const openModal = (item) => {
    setSelectedData(item);
    bottomSheetModalRef.current.present();
  }

  return (
    <BottomSheetModalProvider>
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.mainTitle}>Kryptovaluutta-seuranta</Text>
      </View>
      <View style={styles.divider} />

      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <ListItem 
            name={item.name} 
            symbol={item.symbol}
            currentPrice={item.current_price}
            priceChangePercentage={item.price_change_percentage_7d_in_currency}
            logoUrl={item.image}
            onPress={() => openModal(item)}
          />
        )}
      />

    </View>
    <BottomSheetModal 
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          >
          { selectedData ? (
          <CoinInfo 
            currentPrice={selectedData.current_price}
            logoUrl={selectedData.image}
            name={selectedData.name}
            priceChangePercentage={selectedData.price_change_percentage_7d_in_currency}
            symbol={selectedData.symbol}
          />
          )
          : null}
    </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ffffff"
  },
  titleWrapper: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#ffffff",
    marginHorizontal: 16,
    marginTop: 16,
  },
});
