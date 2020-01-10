import React from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, StyleSheet  } from 'react-native';
import { Container, Header, Content, Card, CardItem, Right } from 'native-base';

const List = ({data, test}) =>{

    return(
     
        <View style={{flex: 1, paddingTop:20}}>
      <Container style = {{ paddingLeft:50, width: 500 }}>
        <Header />
        <Content>
          <Card>
          <FlatList
          data={data.products}
          renderItem={({item}) => 
          <View>
            <CardItem>
            <TouchableOpacity
            style={styles.favorite_container}
            onPress={() => test.navigate('Produit', { code: item.code })}
           >
          <Image source={{uri: item.image_front_url}} style = {{ width: 200, height: 200 }}/>
        
      </TouchableOpacity>
      <Right>
      <Text>{item.product_name}</Text>
        </Right>
          
          </CardItem>
          </View>
          }
         
          keyExtractor={({id}, index) => id}
        />
        
           </Card>
        </Content>
      </Container>


     
      </View>
    );
}

const styles = StyleSheet.create({
	main_container: {
		flex: 1,
	},
	 image: {
    width: 200,
    height: 300,
    marginLeft: 80,

    marginTop: 15,
    flex: 3,
    backgroundColor: 'gray'
  },
  wrapperpic: {
  	flex : 2
  },
  slide: {

    flex: 2,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

favorite_container: {
    alignItems: 'center', 
},
favorite_image: {
    width: 40,
    height: 40
},



})


export default List

