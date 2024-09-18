import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';

const CheckoutScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const [discountCode, setDiscountCode] = useState('');
  
  const productPrice = 141800; // Giá sản phẩm

  // Tính tổng giá
  const totalPrice = quantity * productPrice;

  return (
    <ScrollView style={styles.container}>
      {/* Thông tin sản phẩm */}
      <View style={styles.productContainer}>
        <Image
          source={require('./assets/image/Sach.jpg')} // Replace with actual image URL
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.productSubtitle}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.productPrice}>141.800 đ</Text>
        </View>
      </View>

      {/* Số lượng sản phẩm */}
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} style={styles.quantityButton}>
          <Text style={styles.quantityText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityNumber}>{quantity}</Text>
        <TouchableOpacity onPress={() => setQuantity(quantity + 1)} style={styles.quantityButton}>
          <Text style={styles.quantityText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Mã giảm giá */}
      <View style={styles.couponContainer}>
        <TextInput
          style={styles.couponInput}
          placeholder="Mã giảm giá"
          value={discountCode}
          onChangeText={setDiscountCode}
        />
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Áp dụng</Text>
        </TouchableOpacity>
      </View>

      {/* Tổng giá và nút đặt hàng */}
      <View style={styles.summaryContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Tạm tính</Text>
          <Text style={styles.value}>{totalPrice.toLocaleString()} đ</Text>
        </View>
        <Image
          source={require('./assets/image/snack-icon.png')} // Replace with actual image URL
          style={{padding:1}}
        />
        <View style={styles.row}>
          <Text style={styles.label}>Thành tiền</Text>
          <Text style={styles.value}>{totalPrice.toLocaleString()} đ</Text>
        </View>
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  productImage: {
    width: 100,
    height: 100,
  },
  productDetails: {
    marginLeft: 10,
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productSubtitle: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#e53935',
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantityNumber: {
    marginHorizontal: 20,
    fontSize: 18,
  },
  couponContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  couponInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  applyButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  summaryContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#666',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e53935',
  },
  orderButton: {
    backgroundColor: '#e53935',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;
