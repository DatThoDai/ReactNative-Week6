import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useFonts, VT323_400Regular } from '@expo-google-fonts/vt323';
import AppLoading from 'expo-app-loading';


const Stack = createStackNavigator();


const WelcomeScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    VT323_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else {

    return (
      <View style={styles.container}>
        <View style={styles.welcomeContent}>
          <Text style={styles.welcomeTitle}>A premium online store for {"\n"}sporter and their stylish choice</Text>
          <View style={styles.imageSection}>
            <Image source={require('./images/bifour.png')} style={styles.welcomeImage} />
          </View>
          <Text style={styles.brandName}>POWER BIKE{"\n"} SHOP</Text>
          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={() => navigation.navigate('Products')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
}

  const ProductsScreen = ({ navigation }) => {
    const products = [
      { id: '1', name: 'Pinarello', price: 1800, image: require('./images/bifour.png') },
      { id: '2', name: 'Pina Mountain', price: 1700, image: require('./images/bione.png') },
      { id: '3', name: 'Pina Bike', price: 1500, image: require('./images/bithree.png') },
      { id: '4', name: 'Pinarello', price: 1900, image: require('./images/bitwo.png') },
      { id: '5', name: 'Pina Bike', price: 2700, image: require('./images/bithree.png') },
      { id: '6', name: 'Pinarello', price: 1350, image: require('./images/bione.png') },
    ];

    return (
      <View style={styles.container}>
        <Text style={styles.pageTitle}>The world's Best Bike</Text>
        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterButtonActive}>
            <Text style={styles.filterTextActive}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Roadbike</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Mountain</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={products}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.productCard}
              onPress={() => navigation.navigate('Details', { product: item })}
            >
              <Image source={require('./images/heart.png')} style={styles.heartIcon} />
              <Image source={item.image} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>
                <Text style={{ color: '#F7BA83' }}>$ </Text>{item.price}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };


  const DetailsScreen = ({ route }) => {
    const { product } = route.params;

    return (
      <View style={styles.container}>
        <View style={styles.detailImageSection}>
          <Image source={product.image} style={styles.detailImage} />
        </View>
        <View style={styles.detailsContent}>
          <Text style={styles.productTitle}>{product.name}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.discountPrice}>15% OFF | 350$</Text>
            <Text style={styles.originalPrice}>449$</Text>
          </View>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>
            It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.
          </Text>
          <View style={styles.addToCartContainer}>
            <TouchableOpacity style={styles.heartButton}>
              <Image source={require('./images/heart.png')} style={styles.heartIconInButton} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  // App Component with Navigation
  export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Products" component={ProductsScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    welcomeContent: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    welcomeTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'VT323_400Regular',
    },
    welcomeImage: {
      width: '70%',
      height: 300,
      resizeMode: 'contain',

    },
    imageSection: {
      width: '80%',
      height: 300,
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 30,
      backgroundColor: "#E941411A",
      borderRadius: 30,
    },
    brandName: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 50,
      textAlign: "center",
    },
    getStartedButton: {
      backgroundColor: '#E54B4B',
      paddingHorizontal: 40,
      paddingVertical: 15,
      borderRadius: 25,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily:'VT323_400Regular',
    },
    pageTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#E54B4B',
      margin: 20,
    },
    filterContainer: {
      flexDirection: 'row',
      paddingHorizontal: 20,
      marginBottom: 20,
      justifyContent: "space-between",
    },
    filterButton: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginRight: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#E94141',
    },
    filterButtonActive: {
      paddingHorizontal: 40,
      paddingVertical: 10,
      marginRight: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#E94141",
    },
    filterText: {
      color: '#BEB6B6',
    },
    filterTextActive: {
      color: '#E94141',
    },
    productCard: {
      flex: 1,
      margin: 10,
      padding: 10,
      width: 300,
      height: 225,
      backgroundColor: '#F7BA8326',
      borderRadius: 10,
      alignItems: 'center',
      position: 'relative',
    },
    heartIcon: {
      position: 'absolute',
      top: 10,
      left: 10,
      width: 20,
      height: 20,
      zIndex: 1,
    },
    productImage: {
      width: '70%',
      height: 150,
      resizeMode: 'contain',
    },
    productName: {
      fontSize: 18,
      color: "#00000099",
    },
    productPrice: {
      fontSize: 16,
    },
    detailImage: {
      width: "70%",
      height: 300,
      resizeMode: 'contain',
      borderRadius: 10,
    },
    detailImageSection: {
      backgroundColor: '#E941411A',
      width: '95%',
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 10,
      marginHorizontal: 10,
      borderRadius: 20,
      paddingHorizontal: 10,
    },
    detailsContent: {
      padding: 20,
    },
    productTitle: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    priceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    discountPrice: {
      fontSize: 18,
      fontWeight: 'bold',
      marginRight: 10,
      color: "#00000096",
    },
    originalPrice: {
      fontSize: 18,
      textDecorationLine: 'line-through',
    },
    descriptionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
    },
    description: {
      fontSize: 16,
      color: '#666',
      marginTop: 10,
      lineHeight: 24,
    },
    addToCartButton: {
      backgroundColor: '#E54B4B',
      padding: 15,
      borderRadius: 25,
      alignItems: 'center',
      marginTop: 20,
    },
    addToCartText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      paddingHorizontal: 90,
    },
    addToCartContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',

      marginTop: 20,
    },
    heartButton: {
      marginTop: 25,
    },
    heartIconInButton: {
      width: 30,
      height: 30,
    },
  });