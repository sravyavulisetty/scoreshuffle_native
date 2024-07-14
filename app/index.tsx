import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { styled } from 'nativewind';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
    useFonts,
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  } from '@expo-google-fonts/poppins';

import CustomButton from '../components/CustomButton';
import { router } from 'expo-router';

const Index = () => {
    let [fontsLoaded] = useFonts({
        Poppins_100Thin,
        Poppins_100Thin_Italic,
        Poppins_200ExtraLight,
        Poppins_200ExtraLight_Italic,
        Poppins_300Light,
        Poppins_300Light_Italic,
        Poppins_400Regular,
        Poppins_400Regular_Italic,
        Poppins_500Medium,
        Poppins_500Medium_Italic,
        Poppins_600SemiBold,
        Poppins_600SemiBold_Italic,
        Poppins_700Bold,
        Poppins_700Bold_Italic,
        Poppins_800ExtraBold,
        Poppins_800ExtraBold_Italic,
        Poppins_900Black,
        Poppins_900Black_Italic,
      });

  return (
    <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView}>
            <View>
                <View style={styles.headerContainer}>
                    <Ionicons name="menu-outline" size={35} color="black" />
                    <Image source={require('../assets/images/logo.png')} resizeMode='contain' style={styles.image}></Image>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.nrmlCont}>Welcome to </Text>
                    <Text style={styles.redCont}>Score Shuffler</Text>
                </View>
                <View style={styles.gameContainer}>
                    <View style={styles.gamesPlayed}>
                        <Text style={styles.numberCont}>30 <MaterialCommunityIcons name="cards-playing" size={35} color="#D2122E" /></Text>
                        <Text style={styles.textCont}>Games played</Text>
                    </View>
                    <View style={styles.gamesPlayed}>
                        <Text style={styles.numberCont}>3 <MaterialCommunityIcons name="crown" size={40} color="#e8b923" /> </Text>
                        <Text style={styles.textCont}>Won</Text>
                    </View>
                </View>
                <View style={styles.btnContainer}>
                    {/* <CustomButton handlePress={() => router.push('/(screens)')}>
                        <Text style={styles.textCont}>Start</Text>
                    </CustomButton>
                    <CustomButton handlePress={() => alert("clicked")}>
                        <Text style={styles.textCont}>Resume</Text>
                    </CustomButton> */}
                </View>
            </View>
        </ScrollView>
        
    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({
    safeArea:{ 
        backgroundColor : 'white',
        flex: 1,
        padding: 10,
        
    },
    image: {
        width: 50,
        height: 50
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 70,
        padding: 10
    },
    scrollView: {
        margin: 10
    },
    textContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: 30,
    },
    gameContainer:{
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginHorizontal: 35,
        marginTop: 40
    },
    gamesPlayed: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderColor: "red",
        borderWidth: 2,
        padding: 20,
        borderRadius: 10,
    },
    redCont: {
        fontSize: 40,
        letterSpacing: 1,
        color: 'red',
        fontFamily: 'Poppins_600SemiBold'
    },
    nrmlCont: {
        fontSize: 35,
        letterSpacing: -1,
        fontFamily: 'Poppins_500Medium_Italic'
    },
    numberCont:{
        fontSize: 40,
        fontWeight: 'semibold',
        fontFamily: 'Poppins_500Medium',
    },
    textCont: {
        fontSize: 18,
        fontWeight:'medium',
        fontFamily: 'Poppins_400Regular',
        // marginLeft: 5,
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        marginTop: 50,
        fontFamily: 'Poppins_400Regular'
    }
})