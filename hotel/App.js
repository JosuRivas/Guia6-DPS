import React, { useState } from 'react'; 
import {View, StyleSheet,Image,ScrollView,Text,Modal,Button,TouchableHighlight} from 'react-native'; 
 
const App = () =>{
  const [modalVisiblepersonal,setModalVisiblepersonal] = useState(false);
  const [modalVisibledoble, setModalVisibledoble] = useState(false);
  const [modalVisiblematrimonial, setModalVisiblematrimonial] = useState(false);
  return( 
    <> 
<ScrollView>
  <Modal transparent={true} animationType="slide" visible={modalVisiblepersonal} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Text style={styles.subtitulo}>Habitacion personal</Text>
      <Text>1 cama, 1 baño, con acceso a gimnasio, piscina y restaurante dentro del hotel.</Text>
      <Button title="Cerrar" onPress={()=> {setModalVisiblepersonal(!modalVisiblepersonal)}}></Button>
    </View>
  </View>
  </Modal>

  <Modal transparent={true} animationType="slide" visible={modalVisibledoble} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Text style={styles.subtitulo}>Habitacion doble</Text>
      <Text>2 camas, 1 baño, con acceso a gimnasio, piscina y restaurante dentro del hotel.</Text>
      <Button title="Cerrar" onPress={()=> {setModalVisibledoble(!modalVisibledoble)}}></Button>
    </View>
  </View>
  </Modal>

  <Modal transparent={true} animationType="slide" visible={modalVisiblematrimonial} onRequestClose={() => {
    alert('Modal has been closed.');
  }}>
  <View style={styles.vistaModal}>
    <View style={styles.Modal}>
      <Text style={styles.subtitulo}>Habitacion Matrimonial</Text>
      <Text>1 cama matrimonial, 1 baño, con acceso a gimnasio, piscina y restaurante dentro del hotel.</Text>
      <Button title="Cerrar" onPress={()=> {setModalVisiblematrimonial(!modalVisiblematrimonial)}}></Button>
    </View>
  </View>
  </Modal>

  <View style={{flexDirection:'row'}} >
    <Image  
    style={styles.banner} 
    source={require('./src/img/hotel.jpg')} /> 
  </View>

  <View style={styles.contenedor}>
    <Text style={styles.titulo}>Nuestras habitaciones</Text>
    <ScrollView horizontal>
      <View>
        <TouchableHighlight onPress={()=>{setModalVisiblepersonal(!modalVisiblepersonal)}}>
        <Image 
          style={styles.ciudad}
          source={require('./src/img/habitacion-personal.jpg')}
        />
        </TouchableHighlight>  
      </View>

      <View>
      <TouchableHighlight onPress={()=>{setModalVisibledoble(!modalVisibledoble)}}>
        <Image 
          style={styles.ciudad}
          source={require('./src/img/habitacion-doble.jpg')}
        />
        </TouchableHighlight>   
      </View>

      <View>
      <TouchableHighlight onPress={()=>{setModalVisiblematrimonial(!modalVisiblematrimonial)}}>
        <Image 
          style={styles.ciudad}
          source={require('./src/img/habitacion-matrimonial.jpg')}
        />
        </TouchableHighlight>   
      </View>
    </ScrollView>

    <Text style={styles.titulo}>Servicios dentro del hotel</Text>
    <View>
      <Image 
      style={styles.mejores}
      source={require('./src/img/piscina.jpg')}
      />
    </View>

    <View>
      <Image 
      style={styles.mejores}
      source={require('./src/img/casino.jpg')}
      />
    </View>

    <View>
      <Image 
      style={styles.mejores}
      source={require('./src/img/gimnasio.jpg')}
      />
    </View>

    <View>
      <Image 
      style={styles.mejores}
      source={require('./src/img/restaurante.jpg')}
      />
    </View>
  </View>

  <Text style={styles.titulo}>Lugares de interés cercanos</Text>
  <View style={styles.listado}>
  <View style={styles.listaItem}>
      <Image 
      style={styles.mejores}
      source={require('./src/img/pier.jpg')}
      />
  </View>
  <View style={styles.listaItem}>
    <Image 
    style={styles.mejores}
    source={require('./src/img/barco.jpg')}
    />
  </View>
  <View style={styles.listaItem}>
    <Image 
    style={styles.mejores}
    source={require('./src/img/playa.jpg')}
    />
  </View>
  <View style={styles.listaItem}>
    <Image 
    style={styles.mejores}
    source={require('./src/img/restaurante2.jpg')}
    />
  </View>
</View>
</ScrollView> 
</> 
  ); 
}; 
 
const styles = StyleSheet.create({ 
banner:{ 
  height:250, 
  flex:1 
},
titulo:{
  fontWeight:'bold',
  fontSize:24,
  marginVertical:10
},
contenedor:{
  marginHorizontal:10
},
ciudad:{
  width:250,
  height:300,
  marginRight:10
},
mejores:{
  width:'100%',
  height:200,
  marginVertical:5,
},
listaItem:{
  flexBasis:'49%'
},
listado:{
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent:'space-between'
},
vistaModal:{
  backgroundColor:'#000000aa',
  flex:1
},
Modal:{
  backgroundColor:'#fff',
  margin:50,
  padding:40,
  borderRadius:10,
  flex:1
},
subtitulo: {
  fontWeight:'bold',
  fontSize:14,
  justifyContent:'center'
} 
}); 
 
export default App;
