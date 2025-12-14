import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

// 接收父層傳來的 props: label (文字) 和 onPress (點擊功能)
export default function OptionButton({ label, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      // 這裡應用了您剛學會的「門鈴模式」！
      style={({ pressed }) => [
        styles.buttonBase,
        { 
          // 按下時變深灰，放開時變藍色
          backgroundColor: pressed ? '#333' : '#4A90E2',
          // 按下時稍微縮小 (0.95)，放開時還原 (1)
          transform: [{ scale: pressed ? 0.95 : 1 }] 
        }
      ]}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonBase: {
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12, // 按鈕之間的距離
    // 加個簡單陰影
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});