import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { moneyFormatter, increamentPercentage } from '../components/helpers/moneyHelpers';
// https://icons.expo.fyi/

type CryptoType = {
    id: number,
    iconName: string,
    title: string,
    balance: number,
    marketPrice: number,
    differences: number,
    holdingAmount: number,
};

const cyptoData: CryptoType[] = [
    {
        id: 1,
        iconName: 'bitcoin',
        title: 'Bitcoin',
        balance: 0,
        marketPrice: 6496.4,
        differences: 0.0288,
        holdingAmount: 0.02,
    },
    {
        id: 2,
        iconName: 'ethereum',
        title: 'Ethereum',
        balance: 0,
        marketPrice: 64926.4,
        differences: 0.0308,
        holdingAmount: 5,
    },
    {
        id: 3,
        iconName: 'dog',
        title: 'Shibu',
        balance: 0,
        marketPrice: 0.45,
        differences: -0.0308,
        holdingAmount: 2361,
    },
];
export default function TabOneScreen({ navigation }: RootTabScreenProps<'BottomTabOne'>) {
    const [balance, setBalance] = React.useState<number>(10284.94);


    const renderListItem = ({ item }: { item: CryptoType }) => {
        const { iconName, differences, title, marketPrice, holdingAmount } = item
        const diffInPercentage = increamentPercentage(differences);
        const isUp = differences > 0

        return (
            <TouchableOpacity style={styles.lstItemContainer} onPress={() => navigation.navigate('CoinDetail')} >
                <View style={styles.listItemIconContainer}>
                    <FontAwesome5 name={iconName} color={'#3e78ff'} size={32} />
                </View>
                <View style={styles.listItemTitleContainer}>
                    <Text style={{ fontSize: 20 }}>{title}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>{moneyFormatter(marketPrice) + ' '}</Text>
                        <Feather name={isUp ? "chevron-up" : 'chevron-down'} size={18} color={isUp ? '#70cf77' : '#cf7070'} />
                        <Text style={{ color: isUp ? '#70cf77' : '#cf7070' }}>{diffInPercentage}</Text>
                    </View>
                </View>
                <View style={styles.listItemBalanceContainer}>
                    <Text style={{ fontSize: 18 }}>{holdingAmount.toFixed(2)}</Text>
                    <Text darkColor={'#ccc'} >{moneyFormatter(holdingAmount * marketPrice)}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/logo.png')} style={{ width: 75, height: 75, marginTop: 80 }} />
            <Text style={styles.title}>{moneyFormatter(balance)}</Text>
            <View style={styles.btnGrp}>
                <TouchableOpacity style={styles.btnXl}>
                    <Feather name="arrow-down" size={24} color="#fff" style={{ marginRight: 10 }} />
                    <Text>Add funds</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnXl}>
                    <Feather name="arrow-up" size={24} color="#fff" style={{ marginRight: 10 }} />
                    <Text>Send</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

            <FlatList
                data={cyptoData}
                renderItem={renderListItem}
                keyExtractor={item => '_renderCryptoLst' + item.id}
                style={{ width: '100%', paddingHorizontal: 8 }}
            />


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
    btnGrp: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 18,
        marginTop: 40,
    },
    btnXl: {
        width: 150,
        height: 50,
        backgroundColor: '#222c42',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        paddingHorizontal: 20,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '100%',
    },
    lstItemContainer: {
        height: 60,
        flexDirection: 'row',
        width: '100%',
        marginBottom: 20,
    },
    listItemIconContainer: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listItemTitleContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-around'
    },
    listItemBalanceContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'space-around'
    },
});
