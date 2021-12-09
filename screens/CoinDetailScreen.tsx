import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';

import { increamentPercentage, moneyFormatter } from '../components/helpers/moneyHelpers';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function CoinDetailScreen({ navigation }: RootTabScreenProps<'CoinDetail'>) {
  const isUp = true;

  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 10, color: '#ccc'}} >Current Price</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
        <Text style={{marginRight: 5, fontSize: 18}}>{moneyFormatter(5432.91)}</Text>
        <Feather name={isUp ? "chevron-up" : 'chevron-down'} size={18} color={isUp ? '#70cf77' : '#cf7070'} />
        <Text style={{color: isUp ? '#70cf77' : '#cf7070', fontSize: 18}}>{increamentPercentage(0.0797)}</Text>
      </View>
      <View style={{width: "100%", backgroundColor: '#fafa', height: Dimensions.get('window').height / 2}} />
      <View>
        <Text>1H ...</Text>
      </View>
      <View style={styles.divider} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 18}}>Balance</Text>
        <Text>{moneyFormatter(12.45)}</Text>
      </View>
      <View style={styles.divider} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  divider: {
    marginVertical: 10,
    height: 1,
    width: '100%',
    backgroundColor: '#ccc'
  },
});
