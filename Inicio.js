import { StatusBar, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Calendar from './Calendar'; // Importa o componente Inicio do arquivo Começo.js
import Person from './Person';

export default function Data({navigation})  {
  return ( 

    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/Foto de perfil da pessoa.png')}
          style={styles.profileImage}
        />
        <Text style={styles.headerText}>Olá, Ana</Text>
      </View>


      <View style={styles.rectangle}>
        <Text style={styles.nextConsultationText}>Próxima consulta</Text>
        <Text style={styles.dateText}>15/10/2024</Text>
        <Text style={styles.timeText}>09h00</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/Careca falando algo.png')}
          style={styles.carecaImage}
        />
      </View>

      <View style={styles.explorar}>
        <Text style={styles.explorer}>Explorar Serviços</Text>
      </View>

      <View style={styles.imagens}>
        <TouchableOpacity style={styles.touch}>
          <Image
            source={require('./assets/Consultas.png')}
            style={styles.serviceImage}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.touch}>
          <Image
            source={require('./assets/Emergencia.png')}
            style={styles.serviceImage}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.touch}>
          <Image
            source={require('./assets/Medicamentos.png')}
            style={styles.serviceImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity style={styles.iconsMenu}>
          <Image
            source={require('./assets/home.png')}
            style={styles.guiaImage}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconsMenu} onPress={() => navigation.navigate('Calendar')}>
       <Image
       source={require('./assets/calendar_month.png')}
       style={styles.guiaImage}
        />
      </TouchableOpacity>

      

        <TouchableOpacity style={styles.iconsMenu}>
          <Image
            source={require('./assets/chat.png')}
            style={styles.guiaImage}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconsMenu} onPress={() => navigation.navigate('Person')}>        
          <Image
            source={require('./assets/person.png')}
            
            style={styles.guiaImage}
          />
        </TouchableOpacity>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}


function navigation (){
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName={currentScreen}>
            <Stack.Screen name="Data" component={Calendar} />
            <Stack.Screen name="Person" component={Person} />
          </Stack.Navigator>
        </NavigationContainer>
        );}




// O InicioCalendario não precisa mais estar aqui

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row', // Para alinhar a imagem e o texto lado a lado
    paddingHorizontal: 20, // Adiciona espaçamento horizontal
    paddingVertical: 18, // Adiciona espaçamento vertical
    borderBottomWidth: 1, // Adiciona uma borda na parte inferior
    borderBottomColor: '#ccc', // Cor da borda
  },

  profileImage: {
    width: 60,
    height: 50,
    borderRadius: 30, // Para tornar a imagem circular
    marginRight: 10, // Adiciona margem à direita da imagem
  },

  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  rectangle: {
    backgroundColor: 'green', // Cor do retângulo
    padding: 20, // Adiciona espaçamento interno
    marginTop: 20, // Adiciona margem superior
  },

  nextConsultationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Cor do texto
  },

  dateText: {
    fontSize: 16,
    color: 'white', // Cor do texto
  },

  timeText: {
    fontSize: 16,
    color: 'white', // Cor do texto
  },

  imageContainer: {
    alignItems: 'center', // Centraliza a imagem na View
    marginTop: 20, // Adiciona margem superior
  },

  carecaImage: {
    resizeMode: 'cover',
  },

  explorar: {
    alignItems: 'center',
    marginTop: 30,
  },

  explorer: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  imagens: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    padding: 10,
    alignItems: 'center',
  },

  touch: {
    width: 100,
    height: 100,
  },

  serviceImage: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },

  guiaImage: {
    resizeMode: 'cover',
    width: 30,
    height: 30,
  },

  menu: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  iconsMenu:{
    margin: 20,
  }
});
