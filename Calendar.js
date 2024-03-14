import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Person from './Person'; // Importa o componente Inicio do arquivo Começo.js

export default function Calendar({navigation}) {
  return (
    <View>
    
     <Text style={styles.abc1}>Procurar...</Text>
     <Text style={styles.abc2}>Todos</Text>
      <Text style={styles.abc3}>Médicos</Text>
         <Text style={styles.abc4}>Artigos</Text>
      <Text style={styles.abc5}>Tania Quintella</Text>
      <Text style={styles.abc6}>Pneumologista</Text>
      <Text style={styles.abc7}>Agendar Consulta</Text>
      <Text style={styles.abc8}>Tania Quintella</Text>
      
       <Text style={styles.abc9}>Pneumologista</Text>
      <Text style={styles.abc10}>Agendar Consulta</Text>
      <Text style={styles.abc11}>Tania Quintella</Text>
      <Text style={styles.abc12}>Pneumologista</Text>
      <Text style={styles.abc13}>Agendar Consulta</Text>
      <Text style={styles.abc14}>Tania Quintella</Text>
      <Text style={styles.abc15}>Pneumologista</Text>
      <Text style={styles.abc16}>Agendar Consulta</Text>
      <Text style={styles.abc17}>Tania Quintella</Text>
      <Text style={styles.abc18}>Pneumologista</Text>
      <Text style={styles.abc19}>Agendar Consulta</Text>
      <Text style={styles.abc20}>Tania Quintella</Text>
      <Text style={styles.abc21}>Pneumologista</Text>
      <Text style={styles.abc22}>Agendar Consulta</Text>
      <Text style={styles.abc1}>rodape</Text>
  
</View>
  );
};

function navigation2 () { 
  <NavigationContainer>
          <Stack.Navigator initialRouteName={currentScreen}>
            <Stack.Screen name="Person" component={Person} />
          </Stack.Navigator>
        </NavigationContainer>
}


const styles = StyleSheet.create({
  abc1: {
  marginTop: '20px',
  marginBottom: '40px',
  marginLeft: '50px',
  width:900,
 borderRadius: '1500px',
    flex: 1,
    backgroundColor: '#f0f0f5',
    alignItems: 'left',
    justifyContent: 'top',
    fontSize:"26px"
    
    
  },

  
  abc2: {
  marginTop: '-1px',
  borderRadius: '20px',
  marginLeft: '50px',
  border: '1px solid black',
    width:200,
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'left',
    justifyContent: 'top',
    fontSize:"20px"
    
  },

  abc3: {
    marginBottom:'10px',
    marginTop: '-23px',
    borderRadius: '20px',
    marginLeft: '270px',
    border: '1px solid black',
    width:200,
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'left',
    justifyContent: 'top',
    fontSize:"20px"
    
  },
  
  abc4: {
    marginBottom:'10px',
    width:200,
     marginTop: '-24px',
    borderRadius: '15px',
    marginLeft: '500px',
    border: '1px solid black',
    width:100,
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'left',
    justifyContent: 'top',
    fontSize:"20px"
  },
  
  abc5: {
    marginBottom:'10px',
    marginLeft: '50px',
    width:200,
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'left',
    justifyContent: 'top',
    fontSize:"24px"
  },
  
  abc6: {
    marginBottom:'10px',
     marginLeft: '50px',
     width:200,
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'left',
    justifyContent: 'top',
    fontSize:"20px"
  },
  
  abc7: {
    marginBottom:'10px',
    color: '#ffffff',
    borderRadius: '15px',
     marginLeft: '50px',
    border: '1px solid black',
    width:1000,
    width:200,
    flex: 1,
    backgroundColor: '#008000',
    alignItems: 'left',
    justifyContent: 'top',
    fontSize:"20px"
  },
  
  abc8: {
    marginBottom:'5px',
    width:200,
    marginLeft: '50px',
    width:200,
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'left',
    justifyContent: 'top',
    fontSize:"24px"
  },
  
  abc9: {
     marginBottom:'5px',
    width:200,
    marginLeft: '50px',
    width:200,
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'left',
    justifyContent: 'top',
    fontSize:"20px"
  },
  
  abc10: {
     marginBottom:'5px',
    color: '#ffffff',
    borderRadius: '15px',
    marginLeft: '50px',
    border: '1px solid black',
    width:200,
    flex: 1,
    backgroundColor: '#008000',
    alignItems: 'left',
    justifyContent: 'top',
    fontSize:"24px"
  },
  
  abc11: {
      marginBottom:'5px',
     marginLeft: '50px',
     width:200,
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'left',
    justifyContent: 'top',
    fontSize:"20px"
  },
  
  abc12: {
      marginBottom:'5px',
     marginLeft: '50px',
     width:200,
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'left',
    justifyContent: 'top',
    fontSize:"20px"
  },
  
  abc13: {
     marginBottom:'5px',
    color: '#ffffff',
    borderRadius: '15px',
    marginLeft: '50px',
    border: '1px solid black',
    width:200,
    flex: 1,
    backgroundColor: '#008000',
    alignItems: 'left',
    justifyContent: 'top',
    fontSize:"24px"
  },
  
  abc14: {
     marginBottom:'5px',
    marginLeft: '50px',
    width:200,
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'left',
    justifyContent: 'top',
    fontSize:"24px"
  },
  
  abc15: {
     marginBottom:'5px',
    marginLeft: '50px',
    width:200,
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'left',
    justifyContent: 'top',
    fontSize:"20px"
  },
  
  abc16: {
     marginBottom:'5px',
    color: '#ffffff',
    borderRadius: '15px',
    marginLeft: '50px',
    border: '1px solid black',
    width:200,
    flex: 1,
    backgroundColor: '#008000',
    alignItems: 'left',
    justifyContent: 'top',
    fontSize:"20px"
  },
  
  abc17: {
     marginBottom:'5px',
    width:200,
    marginLeft: '50px',
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'left',
    justifyContent: 'top',
    fontSize:"24px"
  },
  
  abc18: {
     marginBottom:'5px',
    width:200,
    marginLeft: '50px',
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'left',
    justifyContent: 'top',
    fontSize:"20px"
  },
  
  abc19: {
     marginBottom:'5px',
    color: '#ffffff',
    borderRadius: '15px',
    marginLeft: '50px',
    width:200,
    border: '1px solid black',
    flex: 1,
    backgroundColor: '#008000',
    alignItems: 'left',
    justifyContent: 'top',
    fontSize:"20px"
  },
  
  abc20: {
     marginBottom:'5px',
    width:200,
    marginLeft: '50px',
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'left',
    justifyContent: 'top',
     fontSize:"24px"
  },
  
  
  
  abc21: {
     marginBottom:'5px',
    width:200,
    marginLeft: '50px',
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'left',
    justifyContent: 'top',
    fontSize:"20px",
  },
  
    
  abc22: {
      marginBottom:'5px',
     color: '#ffffff',
     borderRadius: '15px',
    marginLeft: '50px',
    border: '1px solid black',
    width:200,
    flex: 1,
    backgroundColor: '#008000',
    alignItems: 'left',
    justifyContent: 'top',
    fontSize:"20px"
  },
  


  
});


 {
}