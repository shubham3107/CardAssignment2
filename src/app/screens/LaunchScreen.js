import React from "react";
import { SafeAreaView, StyleSheet, Text, Pressable } from "react-native";
import I18n from '../services/translation';
import styles from "./styles";

const LaunchScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.lunchScreencontainer}>
            <Text style={styles.appName}>{I18n.t('APP_NAME')}</Text>
            <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("GameScreen")}>
                <Text style={styles.buttonText}>{I18n.t('START')}</Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default LaunchScreen;
