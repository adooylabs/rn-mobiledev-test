import React, {Fragment} from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { NativeRouter } from 'react-router-native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten';

import configureStore from './src/store';
import { Main } from './src/views/containers';

const history = createMemoryHistory();
const store = configureStore(history);

const App = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <ConnectedRouter history={history}>
          <ApplicationProvider mapping={mapping} theme={lightTheme}>
            <IconRegistry icons={EvaIconsPack} />
            <SafeAreaView>
              <Main />
            </SafeAreaView>
          </ApplicationProvider>
        </ConnectedRouter>
      </NativeRouter>
    </Provider>
  );
};

export default App;
