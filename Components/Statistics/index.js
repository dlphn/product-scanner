import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
} from 'react-native';
import Bar from './Charts/Bar';
import AxesLine from './Charts/AxesLine';
import Pie from './Charts/Pie';
import StackedBar from './Charts/StackedBar';
import Theme from './Theme';
import data from '../../Helpers/chartsData';
import {groupByCategories, groupAllByCategories, quantityInCategory} from "./Functions";

class Statistics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            activeKey: 'snacks',
        };
    }

    _onPieItemSelected(newIndex, newKey){
        this.setState({
            activeIndex: newIndex,
            activeKey: newKey,
        });
    }

    render() {
        const height = 200;
        const width = 500;
        const { activeIndex, activeKey } = this.state;

        let categoryData = quantityInCategory(data.baskets, activeKey);

        return (
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.nbStat}>
                            <Text style={styles.bigNumber}>40</Text> scan(s)
                        </Text>
                        <Text style={styles.nbStat}>
                            <Text style={styles.bigNumber}>3</Text> panier(s)
                        </Text>
                    </View>
                    <Text style={styles.chartTitle}>Distribution du dernier panier</Text>
                    <Pie
                        pieWidth={200}
                        pieHeight={200}
                        onItemSelected={(newIndex, key) => this._onPieItemSelected(newIndex, key)}
                        colors={Theme.colors}
                        data={groupByCategories(data.baskets[data.baskets.length - 1])}
                        selectedSliceLabel={activeKey}/>
                    <Text style={styles.chartTitle}>Achats par panier de {activeKey}</Text>
                    <AxesLine
                        color={Theme.colors[activeIndex]}
                        data={categoryData} />
                    <StackedBar
                        colors={Theme.colors} />
                </View>
            </ScrollView>
        );
    }
}

export default Statistics;

const styles = StyleSheet.create({
    container: {
        backgroundColor:'whitesmoke',
        marginTop: 21,
    },
    chartTitle: {
        paddingTop: 15,
        textAlign: 'center',
        paddingBottom: 5,
        paddingLeft: 5,
        fontSize: 18,
        backgroundColor:'white',
        color: 'grey',
        fontWeight:'bold',
    },
    nbStat: {
        textAlign: 'center',
        backgroundColor:'white',
    },
    bigNumber: {
        fontSize: 30,
    }
});