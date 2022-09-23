import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";
import { fonts } from "../../../resources/fonts";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    lunchScreencontainer:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center" ,
        backgroundColor:'rgb(243,243,207)'
    },
    appName:{
        fontSize: 28,
        fontWeight: "bold"
    },
    container: {
        flex: 1,
        backgroundColor: 'rgb(243,243,207)'
    },
    topContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
        marginHorizontal: 10,
    },
    cardListContainer: {
        flex: 1,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(212,212,212,0.8)",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        paddingHorizontal: 35,
        paddingVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    scoreContainer: {
        flexDirection: "row",
        alignItems: "flex-end",
    },
    restartButton: {
        borderRadius: 30,
        backgroundColor: "#1890ff",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    restartText: {
        fontSize: 16,
        color: "white",
    },
    buttonWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buttonContainer: {
        borderRadius: 30,
        backgroundColor: "#1890ff",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginTop: 12,
    },
    buttonText: {
        fontSize: 16,
        color: "white",
    },
});

export default styles;
