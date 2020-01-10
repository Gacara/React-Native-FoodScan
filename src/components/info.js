import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';


/*
function _displayFavoriteImage() {
    var sourceImage = require('../img/nomatch.png')
    if (this.props.favoriteFood.findIndex(item => item.id === this.props.navigation.state.params.Food.id) !== -1) {
    
      sourceImage = require('../img/match.png')
    }
    return (
      <Image
        style={styles.favorite_image}
        source={sourceImage}
      />
    )
}



 function _toggleFavorite() {
        const action = { type: "TOGGLE_FAVORITE", value: this.props.navigation.state.params.Food }
    this.props.dispatch(action)
    }
*/
    
const Info = ({data}) => {
    
    return(
        <View>

         <Container style = {{ width: 400, height: 300 }}>
         <Header />
         <Content>
           <Card>
             <CardItem>
               <Left>
                 <Thumbnail source={{uri: data.product.image_thumb_url}} />
                 <Body>
                   <Text>{data.product.product_name}</Text>
                   <Text note>{data.product.brands_tags}</Text>
                 </Body>
               </Left>
             </CardItem>
             <CardItem cardBody>
               <Image source={{uri: data.product.image_small_url}} style={{height: 450, width: null, flex: 1}}/>
             </CardItem>
             <CardItem>
               <Left>
                 <Text>{(data.product.nutriments.energy_100g/4.184).toFixed(2)} kcal</Text>
               </Left>
               <Body>
               
               <Text>Sucre : {data.product.nutriments.sugars_100g}%</Text>
                   
               </Body>
               <Right>
       
                <Text>Protéines : {data.product.nutriments.proteins_100g}%</Text>
               </Right>
             </CardItem>
           </Card>
         </Content>
       </Container>
       </View>
    );
};



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

/*
const mapStateToProps = (state) => {
  return {
    favoritesFood: state.favoritesFood
  }
}
*/
/*
 <TouchableOpacity
        style={styles.favorite_container}
        onPress={() => this._toggleFavorite()}>
        {this._displayFavoriteImage()}
    </TouchableOpacity> 
    connect(mapStateToProps)
    */


export default Info;

