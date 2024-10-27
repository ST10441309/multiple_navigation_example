import * as React from 'react';
import { Button, View } from 'react-native';
import { styles } from '../util/styles';
import{RootStackParamList, ScreenProps} from '../util/types';

function ProfileScreen({ navigation }: 
// state variables
// arrow functions
ScreenProps<'Profile'>) {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default ProfileScreen;