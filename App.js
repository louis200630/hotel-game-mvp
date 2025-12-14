import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// 1. 引入剛剛拆分出去的劇本 (因為是 default export，名字可以自己取，這裡叫 ScriptData)
import ScriptData from './scriptData';

// 2. 引入剛剛做好的按鈕元件
import OptionButton from './OptionButton';

export default function App() {
  const [sceneId, setSceneId] = useState(1);

  // 從引入的資料中尋找
  const currentScene = ScriptData.find(scene => scene.id === sceneId);

  // 防呆 (萬一資料有錯)
  if (!currentScene) {
    return (
      <View style={styles.container}>
        <Text>找不到場景 {sceneId}</Text>
        <OptionButton label="回到首頁" onPress={() => setSceneId(1)} />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          
          {/* 劇情區 */}
          <View style={styles.textContainer}>
            <Text style={styles.storyText}>
              {currentScene.text}
            </Text>
          </View>

          {/* 選項區 */}
          <View style={styles.optionsContainer}>
            {currentScene.options.map((item, index) => (
              
              // 這裡直接使用我們寫好的 OptionButton！
              // 把資料透過 props 傳進去
              <OptionButton 
                key={index} 
                label={item.text} 
                onPress={() => setSceneId(item.nextSceneId)} 
              />

            ))}
          </View>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 16,
    marginBottom: 40,
    width: '100%',
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  storyText: {
    fontSize: 20,
    lineHeight: 30,
    color: '#333',
    textAlign: 'center',
    fontWeight: '600',
  },
  optionsContainer: {
    width: '100%',
  }
});