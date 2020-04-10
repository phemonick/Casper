import {Colour} from '../styles';
import {StyleSheet} from 'react-native';

const createOutlineStyles = (isActive) => ({
  container: {
    backgroundColor: isActive ? Colour.magenta : 'transparent',
    borderColor: Colour.magenta,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
  text: {color: isActive ? Colour.white : Colour.magenta},
});

const createStyles = ({isOutlined, isActive}) => {
  const containerStyles = isOutlined
    ? createOutlineStyles(isActive).container
    : {};
  const textStyles = isOutlined ? createOutlineStyles(isActive).text : {};

  return StyleSheet.create({
    container: {
      alignSelf: 'flex-start',
      backgroundColor: Colour.purpleIsh,
      borderRadius: 5,
      paddingHorizontal: 30,
      paddingVertical: 15,
      ...containerStyles,
    },
    text: {
      color: Colour.white,
      fontFamily: 'Montserrat-Medium',
      fontSize: 17,
      textAlign: 'center',
      ...textStyles,
    },
  });
};

export default createStyles;
