
import { StyleSheet } from "react-native";
import {COLORS, SIZES} from '../constants';

const styles = StyleSheet.create({
    textStyle:{
        fontFamily:"PoppinsBold",
        fontSize: 46,
       
    },
    appBarWrapper:{
        marginHorizontal:22,
        marginTop: SIZES.small,
    },
    appBar:{
        fontFamily:"PoppinsBold",
        fontSize: 30,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        color: COLORS.white,
    },
    locations:{
        fontFamily:"PoppinsSemibold",
        fontSize: SIZES.medium,
        color: COLORS.gray
        
    },
    cartCount:{
        position:"absolute",
        fontFamily:"PoppinsSemibold",
        bottom:16,
        width:16,
        height:16,
        borderRadius:8,
        alignItems:"center",
        backgroundColor: "green",
        justifyContent:"center",
        zIndex:999,
        
    },
    cartNumber:{
        fontFamily:"PoppinsRegular",
        fontWeight: 600,
        fontSize: 12,
        color: COLORS.lightWhite,
    },
    }
);

export default styles;