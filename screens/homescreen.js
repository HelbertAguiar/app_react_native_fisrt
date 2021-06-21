import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Constants from 'expo-constants'

import logo from '../assets/logo.png'

export default ({navigation}) => {
    return (
        <View style = {styles.container}>

            <View style = {styles.header}>
                <Text style = {styles.titulo_logo}> {'Travel Agency \n'}  </Text>
                <Image source = {logo} style = {styles.logo}/>
            </View>
            
            <View style = {styles.opcao}>
                <TouchableOpacity style = {styles.botao} onPress={() => navigation.navigate('avaliacoes')}>
                    <Text style = {styles.text_botao}> Exibir avaliações e recomendações </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.botao}>
                    <Text style = {styles.text_botao}> Sobre o aplicativo </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {[styles.botao, {backgroundColor: '#1f3548'}]} onPress={() => alert('Simulação de saida concluida')}>
                    <Text style = {styles.text_botao_sair}> Sair </Text>
                </TouchableOpacity>
            </View>
            
            <View style = {styles.footer}>
                <Text style = {styles.text_footer}> Desenvolvido pelo Aluno Helbert, [12107219] </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            marginTop: Constants.statusBarHeight
        },
        
        header: {
            padding: 35,
            backgroundColor: '#21466c',
            alignItems: 'center',
            justifyContent: 'space-evenly'
        },
        
        opcao: {
            flex: 1,
            padding: 20,
            justifyContent: 'space-evenly',
            backgroundColor: '#63acaa'
        },
        
        botao: {
            backgroundColor: 'white',
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'space-around',
            height: 40,
            elevation: 3
        },
        
        logo: {
            width: 100,
            height: 100,
            borderRadius: 100
        },
        
        titulo_logo: {
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'Roboto',
            fontSize: 20
        },

        text_footer: {
            color: 'white',
            fontFamily: 'Roboto'
        },
        
        footer: {
            padding: 20,
            alignItems: 'center',
            backgroundColor: '#000000'
        },

        text_botao_sair: {
            color: 'white'
        },

        text_botao: {
            color: 'black'
        }

    }
)
