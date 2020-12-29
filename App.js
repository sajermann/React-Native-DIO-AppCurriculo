import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Alert, TouchableOpacity } from 'react-native';
import fotoPerfil from './assets/BrunoSajermann.png';
import Icon from 'react-native-vector-icons/Feather';
import Card from './src/components/Card';

export default function App() {

  function handleRedeSocial(redeSocial) {
    switch (redeSocial) {
      case 'linkedin':
        Alert.alert('Meu Linkedin', 'http://linkedin.com/in/sajermanndev')
        break;
      case 'github':
        Alert.alert('Meu Github', 'http://github.com/sajermann')
        break;
    }
  }

  return (
    <View style={styles.page}>
      <StatusBar style="auto" />
      <View style={styles.containerCabecalho}>
        <Image source={fotoPerfil} style={styles.foto} />
        <Text style={styles.nome}>Bruno Sajermann</Text>
        <Text style={styles.funcao}>Desenvolvedor React</Text>
        <View style={styles.redesSociais}>
          <TouchableOpacity onPress={() => handleRedeSocial('github')}>
            <Icon name="github" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
            <Icon name="linkedin" size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <Card titulo="Formação Acadêmica">
        <Text style={styles.cardContentText}>Universidade Cruzeiro do Sul</Text>
        <Text style={styles.cardContentText}>Rocketseat</Text>
        <Text style={styles.cardContentText}>DIO</Text>
      </Card>
      <Card titulo="Experiências Profissionais">
        <Text style={styles.cardContentText}>Desenvolva Inc.</Text>
        <Text style={styles.cardContentText}>Dezenvolveu Ltda</Text>
        <Text style={styles.cardContentText}>Dexenvolvida ME</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#E7E7E7',
  },
  containerCabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },
  funcao: {
    color: '#939393',
    marginBottom: 10
  },
  redesSociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20
  },
  cardContentText: {
    color: '#939393',
    marginBottom: 10
  }
});
