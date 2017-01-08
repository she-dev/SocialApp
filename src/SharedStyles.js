import { StyleSheet } from 'react-native';
import StyleVars from './StyleVars';

export default StyleSheet.create({
  headingText: {
  color: StyleVars.colors.primaryText,
  fontFamily: StyleVars.fonts.heading,
  fontSize: 16,
  fontWeight: "600"
  },
  navBarTitleText: {
    color: StyleVars.colors.navBarTitle,
    fontFamily: StyleVars.fonts.heading,
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 22
  },
  screenContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: StyleVars.colors.mediumBackground
  },
  text: {
    color: StyleVars.colors.primaryText,
    fontFamily: StyleVars.fonts.general,
    fontSize: 12,
    fontWeight: "400"
  }
});
