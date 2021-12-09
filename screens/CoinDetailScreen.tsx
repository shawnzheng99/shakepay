import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

import { moneyFormatter } from '../components/helpers/moneyHelpers';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function CoinDetailScreen({ navigation }: RootTabScreenProps<'TabOne'>) {


  return (
    <View style={styles.container}>
      <Text style={styles.title}>COINT DETAIL SCREEN</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
