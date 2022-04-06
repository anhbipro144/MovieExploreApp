import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bgImage: {
    width: '100%',
    height: 800,
  },
  detailContainer: {
    width: '100%',
    height: 400,
    position: 'relative',
    top: -80,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderWidth: 1.5,
    borderColor: COLORS.third,
    paddingHorizontal: 10,
  },
  detail: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
});

export default styles;
