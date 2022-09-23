import React, { useState, useEffect, useRef, useReducer } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, Button, View, Modal, Pressable } from "react-native";
import Card from "../components/Card";
import reducer from "../reducer/index";
import I18n from '../services/translation';
import styles from "./styles";

const GameScreen = ({ navigation }) => {
    const [state, dispatch] = useReducer(reducer, 0, init);
    const CARD_PAIRS_VALUE = 6;
    const [uniqueCardsArray, setUniqueCardsArray] = useState([]);
    const [cards, setCards] = useState([]);
    const [openCards, setOpenCards] = useState([]);
    const [clearedCards, setClearedCards] = useState({});
    const timeout = useRef(null);

    const [showModal, setShowModal] = useState(false);
    const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);

    useEffect(() => {
        let list = [];
        while (list.length < CARD_PAIRS_VALUE) {
            let value = Math.floor(Math.random() * 100 + 1);
            if (list.indexOf(value) == -1) {
                list.push(value);
            }
        }

        setUniqueCardsArray(list);
        setCards(() => shuffleCards(list.concat(list)));
    }, []);

    useEffect(() => {
        if (openCards.length === 2) {
            setTimeout(evaluate, 1000);
        }
    }, [openCards]);

    useEffect(() => {
        if (uniqueCardsArray.length > 0) {
            checkCompletion();
        }
    }, [clearedCards]);

    useEffect(() => {
        if (showModal) {
        }
    }, [showModal]);

    function swap(array, i, j) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    function shuffleCards(array) {
        const length = array.length;
        for (let i = length; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * i);
            const currIndex = i - 1;
            swap(array, currIndex, randomIndex);
        }
        return array;
    }

    function init(initialCount) {
        return { count: initialCount };
    }

    const evaluate = () => {
        const [first, second] = openCards;
        enable();
        if (cards[first] === cards[second]) {
            setClearedCards((prev) => ({ ...prev, [cards[first]]: true }));
            setOpenCards([]);
            return;
        }
        timeout.current = setTimeout(() => {
            setOpenCards([]);
        }, 400);
    };

    const checkIsFlipped = (index) => {
        return openCards.includes(index);
    };

    const checkIsInactive = (card) => {
        return Boolean(clearedCards[card]);
    };

    const handleCardClick = (index) => {
        if (openCards.length === 1) {
            setOpenCards((prev) => [...prev, index]);
            dispatch({ type: "increment" });
            disable();
        } else {
            clearTimeout(timeout.current);
            setOpenCards([index]);
        }
    };

    const checkCompletion = () => {
        if (Object.keys(clearedCards).length === uniqueCardsArray.length) {
            setShowModal(true);
        }
    };

    const disable = () => {
        setShouldDisableAllCards(true);
    };
    const enable = () => {
        setShouldDisableAllCards(false);
    };

    const handleRestart = () => {
        setClearedCards({});
        setOpenCards([]);
        setShowModal(false);
        dispatch({ type: "reset" });
        setCards(() => shuffleCards(uniqueCardsArray.concat(uniqueCardsArray)));
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const onBackPress = () => {
        handleClose();
        navigation.goBack();
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <Pressable onPress={handleRestart} style={styles.restartButton}>
                    <Text style={styles.restartText}>{I18n.t('RESTART')}</Text>
                </Pressable>
                <View style={styles.scoreContainer}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>{I18n.t('STEP')} : {state.count}</Text>
                </View>
            </View>

            <ScrollView
                style={styles.cardListContainer}
                contentContainerStyle={{
                    justifyContent: "space-around",
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}
            >
                {cards.map((value, index) => {
                    return (
                        <Card
                            testID={`test-${index}`}
                            key={index}
                            index={index}
                            value={value}
                            isDisabled={shouldDisableAllCards}
                            isInactive={checkIsInactive(value)}
                            isFlipped={checkIsFlipped(index)}
                            onClick={() => handleCardClick(index)}
                        />
                    );
                })}
            </ScrollView>
            <Modal
                visible={showModal}
                transparent={true}
                onRequestClose={() => {
                    setShowModal(false);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{textAlign:'center'}}>{I18n.t('COMPLETE_CHALLENGE_MESSGAE')}</Text>
                        <Text style={{textAlign:'center'}}>{I18n.t('TOTEL_MOVES')} {state.count}</Text>
                        <View style={styles.buttonWrapper}>
                            <Pressable style={styles.buttonContainer} onPress={onBackPress}>
                                <Text style={styles.buttonText}>{I18n.t('GO_BACK')}</Text>
                            </Pressable>
                            <Pressable style={styles.buttonContainer} onPress={handleRestart}>
                                <Text style={styles.buttonText}>{I18n.t('RESTART')}</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

export default GameScreen;


