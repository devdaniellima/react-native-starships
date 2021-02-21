import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    marginBottom: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  textName: {
    fontFamily: 'SFDistantGalaxy',
    fontSize: 20,
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'SFDistantGalaxyOutline',
    fontSize: 18,
    marginRight: 20,
  },
  subTitle: {
    fontFamily: 'SFDistantGalaxy',
    color: 'black',
  },
  noInfo: {
    fontFamily: 'SFDistantGalaxy',
    color: '#b90e0a',
  },
  noInfoUnknown: {
    fontFamily: 'SFDistantGalaxy',
    color: 'black',
  },
  steps: {
    fontFamily: 'SFDistantGalaxy',
    color: '#2832c2',
    fontSize: 16,
  },
});
