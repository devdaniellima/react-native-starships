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
      <Text style={Styles.textName}>{starship.name}</Text>
      <View style={Styles.viewRow}>
        <Text style={Styles.title}>MGLT</Text>
        <Text
          style={
            starship.MGLT !== 'unknown' ? Styles.subTitle : Styles.noInfoUnknown
          }>
          {starship.MGLT !== 'unknown' ? starship.MGLT : '---'}
        </Text>
      </View>
      <View style={Styles.viewRow}>
        <Text style={Styles.title}>Consumables</Text>
        <Text
          style={
            starship.consumables !== 'unknown'
              ? Styles.subTitle
              : Styles.noInfoUnknown
          }>
          {starship.consumables !== 'unknown' ? starship.consumables : '---'}
        </Text>
      </View>
      <View style={Styles.viewRow}>
        <Text style={Styles.title}>Steps</Text>
        <Text style={steps !== '' ? Styles.steps : Styles.noInfo}>
          {steps !== '' ? steps : 'Insufficient information'}
        </Text>
      </View>
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
