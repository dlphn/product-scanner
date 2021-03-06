import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import HomeStackNavigator from "./HomeStackNavigator";
import HistoryStackNavigator from "./HistoryStackNavigator";
import SearchStackNavigator from "./SearchStackNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";

import StatsStackNavigator from "./StatsStackNavigator";
import MyBasketsStackNavigator from "./MyBasketsStackNavigator";

const DrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeStackNavigator,
            navigationOptions: {
                title: 'Accueil',
            }
        },
        Search: {
            screen: SearchStackNavigator,
            navigationOptions: {
                title: 'Recherche'
            }
        },
        History: {
            screen: HistoryStackNavigator,
            navigationOptions: {
                title: 'Mes scans'
            }
        },
        MyCarts: {
            screen: MyBasketsStackNavigator,
            navigationOptions: {
                title: 'Mes paniers'
            }
        },
        Stats: {
            screen: StatsStackNavigator,
            navigationOptions: {
                title: 'Analyse diététique',
            }
        },
        Profile: {
            screen: ProfileStackNavigator,
            navigationOptions: {
                title: 'Mon profil',
            }
        },
    }, {
        contentOptions: {
            activeTintColor: '#00C378'
        }
    }
);

const Navigator = createAppContainer(DrawerNavigator);

export default Navigator;
