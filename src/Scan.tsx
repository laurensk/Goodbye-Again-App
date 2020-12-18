import React from 'react';
import {TextInput, Button, SafeAreaView, Alert, View, Text} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {NavigationScreenProp} from 'react-navigation';
import validateVat, {
  ViesValidationResponse,
  CountryCodes,
} from 'validate-vat-ts';

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

class Scan extends React.Component<PropsType, StateType> {
  scanner: any;
  focusHandler: any;

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.focusHandler = this.props.navigation.addListener('focus', () => {
      this.scanner.reactivate();
    });
  }

  componentWillUnmount() {
    this.focusHandler();
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <QRCodeScanner
          ref={(node) => {
            this.scanner = node;
          }}
          onRead={(qr) => this.onQrRead(qr.data)}
        />
      </SafeAreaView>
    );
  }

  onQrRead = (data: string) => {
    this.props.navigation.navigate('Detail', {data: data});
  };
}

export default Scan;
