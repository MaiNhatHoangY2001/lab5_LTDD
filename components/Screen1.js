import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

const products = [
  {
    id: 1,
    name: "Ca nấu lẩu nấu mì mini",
    shop: "Devang",
    img: require("../assets/ca_nau_lau.png"),
  },
  {
    id: 2,

    name: "1KG KHÔ GÀ BƠ TỎI",
    shop: "LTD Food",
    img: require("../assets/ga_bo_toi.png"),
  },
  {
    id: 3,

    name: "Xe cần cẩu đa năng",
    shop: "Thế giới đồ chơi",
    img: require("../assets/xa_can_cau.png"),
  },
  {
    id: 4,

    name: "Lãnh đạo giản đơn",
    shop: "Minh Long Book",
    img: require("../assets/lanh_dao_gian_don.png"),
  },
  {
    id: 5,

    name: "Hiểu lòng con trẻ",
    shop: "Minh Long Book",
    img: require("../assets/hieu_long_con_tre.png"),
  },
];

export default function Screen1() {
  const [selectedId, setSelectedId] = useState(null);

  const Item = ({ item, onPress, backgroundColor }) => (
    <TouchableOpacity
      style={[styles.item, { backgroundColor: backgroundColor }]}
      onPress={onPress}
    >
      <Image style={styles.imgItem} source={item.img} />
      <View style={{ width: 180 }}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.shop}>{item.shop}</Text>
      </View>
      <TouchableOpacity style={styles.buttonItem}>
        <Text style={{ color: "white", fontSize: 16 }}>Chat</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "white" : "#E5E5E5";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topComponents}>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../assets/left.png")} />
        </TouchableOpacity>
        <Text style={{ alignSelf: "center", color: "white" }}>Chat</Text>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../assets/cart.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.centerComponent}>
        <Text
          style={{
            alignSelf: "center",
            margin: 25,
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>
      <TouchableOpacity
        style={styles.screenButton}
        onPress={() => setScreen(1)}
      >
        <Text style={{ color: "white", fontSize: 15 }}>Screen 2</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topComponents: {
    flexDirection: "row",
    marginTop: 30,
    backgroundColor: "#1BA9FF",
    justifyContent: "space-between",
  },
  button: {
    alignItems: "center",
    padding: 10,
  },
  item: {
    marginVertical: 0.5,
    flexDirection: "row",
  },
  title: {
    fontSize: 22,
    padding: 13,
  },
  shop: {
    paddingLeft: 13,
    fontSize: 19,
    color: "red",
  },

  imgItem: {
    width: 100,
    height: 100,
  },
  buttonItem: {
    backgroundColor: "red",
    margin: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

});
