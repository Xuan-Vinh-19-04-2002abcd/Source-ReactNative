import React from 'react';
import { Text, View,StyleSheet,Image} from 'react-native';
  

const Home=({img,title,price}) => {
  return (
    <View style={styles.viewcard}>
        <Image style = {styles.cardImage} source={{uri:img}}/>
        <Text>{title}</Text>
        <Text>{price}</Text>
    </View>

    
  )
}
const styles = StyleSheet.create({
    viewcard:{
        width:120,
        alignItem:'center',
    },
    cardImage:{
        height:100,
        width:100
    }
  })
  
export default Home;

