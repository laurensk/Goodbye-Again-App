import {NavigationState} from '@react-navigation/native';
import React from 'react';
import {TextInput, Button, SafeAreaView, Alert, View, Text} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import validateVat, {
  ViesValidationResponse,
  CountryCodes,
} from 'validate-vat-ts';
import {NavigationScreenProp} from 'react-navigation';

interface PropsType {
  navigation: NavigationScreenProp<any, any>;
}

interface StateType {
  vat: string;
  vatName: string;
  vatNumber: string;
  resDate: string;
  resAmount: string;
}

class Home extends React.Component<PropsType, StateType> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Button
          title="Start scan"
          onPress={() => this.props.navigation.navigate('Scan')}></Button>
      </SafeAreaView>
    );
  }
}

export default Home;
