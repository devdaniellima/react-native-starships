import React from 'react';
import {View} from 'react-native';
import {Spinner} from 'native-base';
import _ from 'lodash';

// Redux
import {connect} from 'react-redux';

// Styles
import Styles from './styles';

const Loader = (props) => {
  const {loading} = props;

  return (
    <>
      {loading.isLoading && (
        <View style={Styles.container}>
          <Spinner color="white" />
        </View>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const {loadingReducer} = state;

  return {
    loading: loadingReducer,
  };
};

export default connect(mapStateToProps)(Loader);
