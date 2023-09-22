
import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const styles = StyleSheet.create({

    container:{
        width:"100%",

    },
    welcomeTxt:(color) => ({
        fontFamily:"PoppinsBold",
        fontSize: SIZES.xxLarge -5,
        color: color,
        marginTop: top,
        marginStart:70,
    })
})

export default styles;