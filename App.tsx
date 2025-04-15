import React from 'react';
import { Provider } from 'react-redux';
import AppWrapper from './src/layout/AppWrapper';
import BottomTabsStack from './src/navigation/BottomTabsStack';
import { store } from './src/redux/store';

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <AppWrapper>
        <BottomTabsStack />
      </AppWrapper>
    </Provider>
  );
}

export default App;
