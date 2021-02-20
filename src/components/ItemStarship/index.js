import React from 'react';
import {View, Text} from 'react-native';

// Redux
import {connect} from 'react-redux';

// Styles
import Styles from './styles';

const ItemStarship = (props) => {
  const {starship, steps} = props;

  return (
    <View style={Styles.card}>
      <Text>{starship.name}</Text>
      <Text>Consumables</Text>
      <Text>{starship.consumables}</Text>
      <Text>{steps ? steps : 'Informações insuficientes'}</Text>
    </View>
  );
};

const mapStateToProps = (state) => {
  const {starshipsReducer} = state;

  return {
    starshipsReducer,
  };
};

export default connect(mapStateToProps)(ItemStarship);
