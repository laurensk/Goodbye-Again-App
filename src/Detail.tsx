import React from 'react';
import {TextInput, Button, SafeAreaView, Alert, View, Text} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {
  NavigationRoute,
  NavigationScreenProp,
  TabRouter,
} from 'react-navigation';
import validateVat, {
  ViesValidationResponse,
  CountryCodes,
} from 'validate-vat-ts';

interface PropsType {
  navigation: NavigationScreenProp<any, any>;
  route: NavigationRoute;
}

interface StateType {
  vatName: string;
  vatNumber: string;
  resDate: string;
  resAmount: string;
}

class Detail extends React.Component<PropsType, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      vatName: '',
      vatNumber: '',
      resDate: '',
      resAmount: '',
    };
  }

  componentDidMount() {
    const data: string = this.props.route.params?.data || '';
    const splitData: string[] = data.split('_');
    const date = splitData[4];
    const amount = splitData[5];
    const rawVat = splitData[11];
    const vat = rawVat.split('U:AT')[1].split('-')[0];

    this.setState({
      vatNumber: vat,
      resDate: date,
      resAmount: amount,
    });

    this.getBusinessForVat(vat);
  }

  render() {
    return (
      <View>
        <Text>Unternehmen: {this.state.vatName}</Text>
        <Text>Umsatzsteuernummer: {'AT' + this.state.vatNumber}</Text>
        <Text>Datum: {this.state.resDate}</Text>
        <Text>Summe: {'€' + this.state.resAmount}</Text>
        <Button
          title="Scan again"
          onPress={() => this.props.navigation.navigate('Scan')}></Button>
      </View>
    );
  }

  getBusinessForVat = async (vat: string) => {
    try {
      const validationInfo: ViesValidationResponse = await validateVat(
        CountryCodes.Austria,
        vat,
      );
      this.setState({
        vatName: validationInfo.name || 'No vat information found',
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export default Detail;
