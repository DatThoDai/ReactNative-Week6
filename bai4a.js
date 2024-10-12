import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handlePress = (index) => {
    setSelectedItem(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Image source={require('./images/outline.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Chat</Text>
        <TouchableOpacity style={styles.cartButton}>
          <Image source={require('./images/bi_cart-check.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <Text style={styles.promptText}>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>
        <FlatList
          data={[
            { name: "Ca nấu lẩu, nấu mì mini...", shopName: "Devang", imgUrl: require("./images/ca_nau_lau.png") },
            { name: "1KG KHÔ GÀ BƠ TỎI", shopName: "LTD Foot", imgUrl: require("./images/ga_bo_toi.png") },
            { name: "Xe cần cẩu đa năng", shopName: "Thế giới đồ chơi", imgUrl: require("./images/xa_can_cau.png") },
            { name: "Đồ chơi dạng mô hình", shopName: "Thế giới đồ chơi", imgUrl: require("./images/do_choi_dang_mo_hinh.png") },
            { name: "Lãnh đạo giản đơn", shopName: "Minh Long Book", imgUrl: require("./images/lanh_dao_gian_don.png") },
            { name: "Hiểu lòng con trẻ", shopName: "Minh Long Book", imgUrl: require("./images/hieu_long_con_tre.png") },
            { name: "Donal Trump Thiên tài lãnh đạo", shopName: "Minh Long Book", imgUrl: require("./images/trump1.png") },
          ]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[
                styles.productItem,
                { backgroundColor: selectedItem === index ? 'white' : '#f5f5f5' }
              ]}
              onPress={() => handlePress(index)}
            >
              <Image source={item.imgUrl} style={styles.productImage} />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={[
                  styles.shopName,
                  { color: item.shopName === 'Devang' ? 'red' : '#7D5B5B' }
                ]}>
                  Shop <Text style={item.shopName === 'Devang'? styles.redShop : styles.blackShop}>{item.shopName}</Text>
                </Text>
              </View>
              <TouchableOpacity style={styles.chatButton}>
                <Text style={styles.chatText}>Chat</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => (
            <View style={styles.separator} />
          )}
        />
      </View>

      <View style={styles.footer}>
        <Image source={require('./images/Vector.png')} style={styles.footerIcon} />
        <Image source={require('./images/Vector1.png')} style={styles.footerIcon} />
        <Image source={require('./images/Vector2.png')} style={styles.footerIcon} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: "#1BA9FF",
    height: 50,
    paddingHorizontal: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backButton: {
    flex: 1,
    alignItems: 'flex-start',
  },
  cartButton: {
    flex: 1,
    alignItems: 'flex-end',
  },
  icon: {
    width: 24,
    height: 24,
  },
  body: {
    flex: 1,
  },
  promptText: {
    fontSize: 20,
    color: "#000",
    marginBottom: 10,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 20,
    borderRadius: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#C4C4C4',
  },
  productImage: {
    width: 60,
    height: 60,
  },
  productInfo: {
    flex: 2,
    marginLeft: 20,
  },
  productName: {
    fontSize: 16,
    color: 'black',
  },
  shopName: {
    fontWeight: 'bold',
  },
  redShop: {
    color: 'red',
  },
  blackShop: {
    color: 'black',
  },
  chatButton: {
    backgroundColor: 'red',
    padding: 10,
    paddingHorizontal:30,
  },
  chatText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: "#1BA9FF",
    height: 50,
  },
  footerIcon: {
    width: 24,
    height: 24,
  },
});

export default App;
