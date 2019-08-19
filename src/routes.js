import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import SignIn from './SignIn';

import SignUp from './SignUp';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
  }),
);
