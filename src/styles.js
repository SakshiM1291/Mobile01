import {StyleSheet} from 'react-native';
import {windowHeight, fontSizes, windowWidth} from '@theme/appConstant';
import appColors from '@theme/appColors';
import appFonts from '@theme/appFonts';

export default styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    marginHorizontal: windowWidth(10),
    marginVertical: windowHeight(6),
  },
  title: {
    fontSize: fontSizes.FONT19,
    marginHorizontal: windowWidth(18),
    color:appColors.reviewText,
    fontFamily:appFonts.MontserratMedium,
  },
  row:{
    flexDirection:"row",
    justifyContent:"space-between",
    flex:1
  }
});
