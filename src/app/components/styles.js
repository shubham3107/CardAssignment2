import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";
import { fonts } from "../../../resources/fonts";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    cardWrapper: {
        width: 120,
        height: 140,
        marginTop: 8,
        borderRadius: 8,
    },
    cardContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        backfaceVisibility: "hidden",
        borderRadius: 8,
    },
    cardFront: {
        backgroundColor: "red",
    },
    cardBack: {
        backgroundColor: "rgba(80,80,80,0.8)",
    },
    flipCard: {
        transform: [{ rotateY: "180deg" }],
    },
    cardText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },  
});

export default styles;
