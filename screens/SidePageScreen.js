import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SidePageScreen = ({ navigation }) => {
  const toggleMenu = () => {
    // Implemente a lógica para alternar o menu, se necessário
    console.log('Toggle menu function');
  };

  const navigateTo = (screenName) => {
    // Implemente a navegação para a tela especificada
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuIcon} onPress={() => toggleMenu()}>
          <Text>&#9776;</Text>
        </TouchableOpacity>
        <View style={styles.menuDropdown}>
          <TouchableOpacity onPress={() => navigateTo('sobrenos')}>
            <Text>Sobre Nós</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('oapp')}>
            <Text>O Aplicativo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('index')}>
            <Text>Sair</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logo}>
          <TouchableOpacity onPress={() => navigateTo('motorista')}>
            <Image source={require('../assets/images/120.png')} style={styles.logoImage} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.headerPages}>
        <TouchableOpacity onPress={() => navigateTo('motorista')}>
          <Text style={styles.pageText}>Motoristas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pageSelected} onPress={() => navigateTo('sidePage')}>
          <Text style={[styles.pageText, styles.selectedText]}>Passageiros</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {/* Aqui você pode listar os passageiros de forma dinâmica */}
        <Text style={styles.passageirosList}>Lista de Passageiros</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  menuIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  menuDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    alignItems: 'center',
  },
  logoImage: {
    width: 40,
    height: 40,
  },
  headerPages: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  pageText: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  selectedText: {
    color: '#FF9600', 
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  passageirosList: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SidePageScreen;
