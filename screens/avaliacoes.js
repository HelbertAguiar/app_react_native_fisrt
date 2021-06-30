import React from 'react'
import { View, Text, StyleSheet, Image, FlatList} from 'react-native'

import Constants from 'expo-constants'
import main_photo from '../assets/punta_cana.png'
import profile_photo from '../assets/helbert.jpg'


const comentarios = [

    {nome: 'Milena', data: 'Dezembro 2021', telefone: '(31) 999999876' },
    {nome: 'Helbert', data: 'Dezembro 2021', telefone: '(31) 999999876' },
    {nome: 'Hudson', data: 'Dezembro 2021', telefone: '(31) 999999876' },
    {nome: 'Graziele', data: 'Dezembro 2021', telefone: '(31) 999999876' },
    {nome: 'Helbert', data: 'Dezembro 2021', telefone: '(31) 999999876' },
    {nome: 'Hudson', data: 'Dezembro 2021', telefone: '(31) 999999876' },
    {nome: 'Graziele', data: 'Dezembro 2021', telefone: '(31) 999999876' },
    {nome: 'Helbert', data: 'Dezembro 2021', telefone: '(31) 999999876' },
    {nome: 'Hudson', data: 'Dezembro 2021', telefone: '(31) 999999876' },
    {nome: 'Graziele', data: 'Dezembro 2021', telefone: '(31) 999999876' },
    {nome: 'Hans', data: 'Dezembro 2021', telefone: '(31) 999999876' }

]

export default () => {
    return(
        <View style = {styles.container}>

            <View style = {styles.header}>
                <Image source = {main_photo} style = {styles.main_photo}/>
                <Text style = {styles.titulo_foto}> {'Punta Cana \n'}  </Text>
            </View>

            <FlatList
                data={comentarios}
                keyExtractor={({index}) => index}
                renderItem={({item}) => 

                    <View style = {styles.card}>
                        <View>
                            <Image source={profile_photo} style = {styles.profile_photo}/>
                        </View>

                        <View style = {styles.dados_comentario}>
                            <Text style = {[styles.texto_comentario, styles.destaque_texto_comentario]}> {item.nome} </Text>
                            <Text style = {styles.texto_comentario}> {item.data} </Text>
                            <Text style = {styles.texto_comentario}> {item.telefone} </Text>
                        </View>
                    </View>

                    
                
                }
            />

        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            marginTop: Constants.statusBarHeight,
        },
        
        main_photo: {
            width: '100%',
        },

        profile_photo: {
            width:70,
            height:70,
            borderRadius:10,
            elevation:20,
        },

        card: {
            marginBottom:20,
            marginTop:10,
            flexDirection:'row',
        },

        titulo_foto: {
            fontWeight: 'bold',
            fontSize: 20,
        },

        dados_comentario: {
            flexGrow: 1,
            padding: 10,
        },

        texto_comentario: {
            fontFamily: 'Roboto',
            fontSize: 14,
        },

        destaque_texto_comentario: {
            fontWeight: 'bold',
        }

    }
)
