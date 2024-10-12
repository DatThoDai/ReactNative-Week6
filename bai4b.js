import React from 'react';
import { View, Text, TextInput, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const ProductCard = ({ imageSource, title, rating, price, discount }) => (
  <View style={styles.productCard}>
    <Image source={imageSource} style={styles.productImage} resizeMode="contain" />
    <Text style={styles.productTitle} numberOfLines={2}>{title}</Text>
    <View style={styles.ratingContainer}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Image 
          key={star}
          source={star <= rating ? require('./images/star-filled.png') : require('./images/star-empty.png')} 
          style={styles.starIcon}
        />
      ))}
      <Text style={styles.ratingCount}>(15)</Text>
    </View>
    <View style={styles.priceContainer}>
      <Text style={styles.price}>{price.toLocaleString()}đ</Text>
      <Text style={styles.discount}>-{discount}%</Text>
    </View>
  </View>
);

const App = () => {
  const products = [
    { 
      id: '1',
      title: 'Cáp chuyển từ Cổng USB sang PS2...',
      price: 69900,
      rating: 4,
      discount: 39,
      image: require('./images/giacchuyen.png')
    },
    {
      id: '2',
      title: 'Cáp chuyển từ Cổng USB sang PS2...',
      price: 69900,
      rating: 4,
      discount: 39,
      image: require('./images/dauchuyendoipsps2.png')
    },
    {
      id: '3',
      title: 'Cáp chuyển từ Cổng USB sang PS2...',
      price: 69900,
      rating: 4,
      discount: 39,
      image: require('./images/daynguon.png')
    },
    {
      id: '4',
      title: 'Cáp chuyển từ Cổng USB sang PS2...',
      price: 69900,
      rating: 4,
      discount: 39,
      image: require('./images/dauchuyendoi.png')
    },
    {
      id: '5',
      title: 'Cáp chuyển từ Cổng USB sang PS2...',
      price: 69900,
      rating: 4,
      discount: 39,
      image: require('./images/carbusbtops2.png')
    },
    {
      id: '6',
      title: 'Cáp chuyển từ Cổng USB sang PS2...',
      price: 69900,
      rating: 4,
      discount: 39,
      image: require('./images/daucam.png')
    }
  ];

  const renderProductCard = ({ item }) => (
    <ProductCard
      imageSource={item.image}
      title={item.title}
      rating={item.rating}
      price={item.price}
      discount={item.discount}
    />
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('./images/outline.png')} style={styles.headerIcon} />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <Image source={require('./images/search-icon.png')} style={styles.searchIcon} />
          <TextInput 
            style={styles.searchInput}
            placeholder="Dây cáp usb"
            placeholderTextColor="#000"
          />
        </View>
        <TouchableOpacity style={styles.cartButton}>
          <View style={styles.redDot} />
          <Image source={require('./images/bi_cart-check.png')} style={styles.headerIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./images/menu.png')} style={styles.menu} />
        </TouchableOpacity>
      </View>

      <FlatList 
        data={products}
        renderItem={renderProductCard}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        contentContainerStyle={styles.page}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Image source={require('./images/Vector2.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Image source={require('./images/Vector.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Image source={require('./images/Vector1.png')} style={styles.footerIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Same styles as before
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1BA9FF',
    padding: 10,
    paddingTop: 40,
  },
  headerIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  redDot: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    zIndex: 1,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 4,
    marginHorizontal: 10,
    paddingHorizontal: 8,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 36,
    fontSize: 14,
  },
  menu: {
    marginLeft: 15,
  },
  page: {
    paddingHorizontal: 10,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
    marginHorizontal: 5,
    elevation: 2,
    width: 190,
    height: 250,
  },
  productImage: {
    width: '100%',
    height: 100,
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 14,
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  starIcon: {
    width: 14,
    height: 14,
    marginRight: 2,
  },
  ratingCount: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  discount: {
    fontSize: 12,
    color: '#666',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#1BA9FF',
  },
  footerIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
});

export default App;
