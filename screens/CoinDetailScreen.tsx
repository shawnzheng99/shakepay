import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity, FlatList, Dimensions, Pressable, Button } from 'react-native';

import { increamentPercentage, moneyFormatter } from '../components/helpers/moneyHelpers';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'

const chartData = [
  { x: -2, y: 15 },
  { x: -1, y: 10 },
  { x: 0, y: 12 },
  { x: 1, y: 7 },
  { x: 2, y: 6 },
  { x: 3, y: 8 },
  { x: 4, y: 10 },
  { x: 5, y: 8 },
  { x: 6, y: 12 },
  { x: 7, y: 14 },
  { x: 8, y: 12 },
  { x: 9, y: 13.5 },
  { x: 10, y: 18 },
]


export default function CoinDetailScreen({ navigation }: RootTabScreenProps<'CoinDetail'>) {
  const isUp = true;
  const timePriodSlots = ['1H', '1D', '1W', '1M', '1Y']
  const [pressedTimePeriodIdx, setPressedTimePeriodIdx] = React.useState<number>(0);
  const [priceTrende, setPriceTrende] = React.useState<{x: number, y: number}[]>(chartData)

  React.useEffect(() => {
    const rdm = Array.from({length: 20}, (_, idex) => ({x: idex, y: Math.floor(Math.random() * 20)}))
    setPriceTrende(rdm)
  },[])

  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 10, color: '#ccc'}} >Current Price</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
        <Text style={{marginRight: 5, fontSize: 18}}>{moneyFormatter(5432.91)}</Text>
        <Feather name={isUp ? "chevron-up" : 'chevron-down'} size={18} color={isUp ? '#70cf77' : '#cf7070'} />
        <Text style={{color: isUp ? '#70cf77' : '#cf7070', fontSize: 18}}>{increamentPercentage(0.0797)}</Text>
      </View>

      <Chart
        style={{ height: Dimensions.get('window').height / 2, width: "100%" }}
        data={priceTrende}
        xDomain={{ min: 0, max: 20 }}
        yDomain={{ min: 0, max: 20 }}
      >

        <Line theme={{ stroke: { color: '#129FFF', width: 3 },  }} />
      </Chart>

      <View style={{flexDirection: 'row'}}>
        {
          timePriodSlots.map((time, idx) => {
            return (
              <View 
                style={styles.timePeriodSlotsCtnr}
              >
                <TouchableOpacity 
                  onPress={() => setPressedTimePeriodIdx(idx)}
                >
                  <Text style={{color: idx === pressedTimePeriodIdx? '#129FFF': '#fff'}}>{time}</Text>
                </TouchableOpacity>
              </View>
            )
          })
        }
      </View>
      <View style={styles.divider} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 18}}>Balance</Text>
        <Text>{moneyFormatter(12.45)}</Text>
      </View>
      <View style={styles.divider} />
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>Nothing here...</Text>
        <Text style={styles.subTitle}>Start by adding some funds.</Text>
        <TouchableOpacity
          style={styles.bigBlueBtn}
        >
          <Text style={{color: "#fff", fontSize: 20, fontWeight: 'bold'}}>Add funds</Text>
        </TouchableOpacity>
      </View>

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
  subTitle: {
    fontSize: 15,
    color: '#ccc',
    marginVertical: 10,
  },
  divider: {
    marginVertical: 10,
    height: 1,
    width: '100%',
    backgroundColor: '#ccc'
  },
  timePeriodSlotsCtnr: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  bigBlueBtn: {
    width: 355, 
    height: 50, 
    borderRadius: 10,
    backgroundColor: '#129fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
