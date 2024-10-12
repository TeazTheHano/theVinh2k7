import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProviderTotal } from './data/store';

// screen import
import Onboard from './screens/Onboard';
import Login from './screens/Login';
import clrStyle from './assets/componentStyleSheet';

// import Home from './screens/Home';
// import BottomTab from './assets/BottomTab';
// import Cart from './screens/Cart';
// import DrugList from './screens/DrugList';
// import Pillport from './screens/Pillport';
// >>>>>>>>>>
// import OrderDetail from './screens/OrderDetail';
// import InCateList from './screens/InCateList';
// import PillDetail from './screens/PillDetail';
// import Purchase from './screens/Purchase';

// ____________________END OF IMPORT_______________________

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    <ProviderTotal>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: clrStyle.white } }}>
          {/* <Stack.Screen name="BottomTab" component={BottomTab} /> */}
          <Stack.Screen name="Onboard" component={Onboard} />
          <Stack.Screen name="Login" component={Login} />
          {/* <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="DrugList" component={DrugList} />
          <Stack.Screen name="Pillport" component={Pillport} /> */}
          {/* >>> */}
          {/* <Stack.Screen name="OrderDetail" component={OrderDetail} />
          <Stack.Screen name="InCateList" component={InCateList} />
          <Stack.Screen name="PillDetail" component={PillDetail} />
          <Stack.Screen name="Purchase" component={Purchase} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </ProviderTotal>
  )
}

export default App;
