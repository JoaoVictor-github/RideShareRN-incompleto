import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps'; 

const MotoristaScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [destino, setDestino] = useState('');
  const [veiculo, setVeiculo] = useState('');
  const [placa, setPlaca] = useState('');
  const [hora, setHora] = useState('');
  const [zap, setZap] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      error => {
        console.error('Erro ao obter a localização:', error);
      }
    );
  };

  const handleRegister = () => {
    // Aqui você pode adicionar a lógica para registrar os dados
    console.log('Nome:', name);
    console.log('Destino:', destino);
    console.log('Veículo:', veiculo);
    console.log('Placa:', placa);
    console.log('Hora:', hora);
    console.log('Whatsapp:', zap);
    console.log('Latitude:', latitude);
    console.log('Longitude:', longitude);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RIDESHARE</Text>
      
      <View style={styles.headerPages}>
        <TouchableOpacity onPress={() => navigation.navigate('Motoristas')} style={styles.pageSelected}>
          <Text>Motoristas</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Passageiros')} style={styles.sidePage}>
          <Text>Passageiros</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -8.052442830407937,
            longitude: -34.88821193857346,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {latitude && longitude && (
            <Marker
              coordinate={{ latitude, longitude }}
              title="Você está aqui"
              description="Localização atual"
            />
          )}
        </MapView>
        <TouchableOpacity style={styles.geoButton} onPress={handleLocation}>
          <Text>Obter Localização</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.motoInfo}>
        <Text style={styles.headerMotoInfo}>Adicionar rota</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Destino"
          value={destino}
          onChangeText={text => setDestino(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Veículo"
          value={veiculo}
          onChangeText={text => setVeiculo(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Placa"
          value={placa}
          onChangeText={text => setPlaca(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Hora"
          value={hora}
          onChangeText={text => setHora(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Whatsapp"
          value={zap}
          onChangeText={text => setZap(text)}
        />
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text>Registrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF9600',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 32,
    color: '#0A0A0A',
    marginVertical: 20,
  },
  headerPages: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  pageSelected: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    paddingVertical: 10,
  },
  sidePage: {
    paddingVertical: 10,
  },
  mapContainer: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  map: {
    flex: 1,
  },
  geoButton: {
    backgroundColor: 'black',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    alignSelf: 'center',
  },
  motoInfo: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 20,
  },
  headerMotoInfo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: 'black',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default MotoristaScreen;
