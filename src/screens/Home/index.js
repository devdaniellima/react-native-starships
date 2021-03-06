import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Animated,
  TouchableOpacity,
} from 'react-native';

// Redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getMoreStarships as getMoreStarshipsAction} from '../../states/ducks/starships';

// Utils
import {stepsByMGLT} from '../../utils/functions';

// Components
import Loader from '../../components/Loader';
import ItemStarship from '../../components/ItemStarship';

// Styles
import Styles from './styles';

const Home = (props) => {
  const {starships, actions} = props;

  const [distance, setDistance] = useState('');

  const [marginInputAnim] = useState(new Animated.Value(240));

  const getStarships = () => {
    // console.log('nextPage', starships.nextPage);
    if (starships.nextPage) {
      actions.getMoreStarships(starships.nextPage);
    }
  };

  const isCloseToBottom = (prop) => {
    const {layoutMeasurement, contentOffset, contentSize} = prop;
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  useEffect(() => {
    getStarships();
  }, []);

  return (
    <>
      <View style={Styles.container}>
        <View style={Styles.viewTitle}>
          <Text style={Styles.textTitle}>Starships</Text>
        </View>
        <Text style={Styles.textInput}>Input a distance in mega ligths</Text>
        <View style={Styles.viewInput}>
          <TextInput
            style={Styles.input}
            keyboardType="numeric"
            value={distance ? Number(distance).toLocaleString('pt-BR') : ''}
            onChangeText={(text) => {
              setDistance(text.replace(/[,|.]/g, ''));
            }}
          />
        </View>

        <ScrollView
          onScroll={({nativeEvent}) => {
            if (isCloseToBottom(nativeEvent)) {
              getStarships();
            }
          }}
          scrollEventThrottle={400}
          style={Styles.scroll}>
          {starships.list.map((item, index) => {
            return (
              <ItemStarship
                key={index}
                starship={item}
                steps={stepsByMGLT(
                  distance.replace(/[,|.]/g, ''),
                  item.MGLT,
                  item.consumables,
                )}
              />
            );
          })}
        </ScrollView>
      </View>

      <Loader />
    </>
  );
};

const mapStateToProps = (state) => {
  const {starshipsReducer} = state;

  return {
    starships: starshipsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getMoreStarships: bindActionCreators(getMoreStarshipsAction, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
