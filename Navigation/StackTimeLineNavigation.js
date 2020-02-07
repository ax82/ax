import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import TimeLine from '../Screens/TimeLine';
import Icon from '@expo/vector-icons/Ionicons';
import Search from '../Screens/Search';
import SearchButton from '../Components/SearchButton';

//Since we want search screen in modal so we have to make two separated 'createStackNavigator's for that purpos 

//This contains all possible screens to navigate unless Search screen
const MainStack = createStackNavigator({
    TimeLine:{
        screen: TimeLine,
        navigationOptions:({navigation})=>{
            return{
            headerTitle: "Tshjeer",
            headerLeft: () =>
                <Icon 
                style={{paddingLeft:10}} 
                name="md-menu" size={30}
                onPress={()=>navigation.openDrawer()}
                />,
            headerRight: () =>
                <SearchButton navigation={navigation}/>
            }
        }
    }
},
{
    navigationOptions:{
        headerShown: false
    }
});

const StackTimeLineNavigation = createStackNavigator({
    Main:{
        screen: MainStack
    },
    Search:{
        screen: Search
    }
},
{
    mode: 'modal',
    headerMode: 'none'
});

export default StackTimeLineNavigation;