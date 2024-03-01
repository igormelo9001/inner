import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const PostCard = ({ title, content, style }) => {
  return (
    <View style={[styles.card, style]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

export default function App() {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 0.1);
  };

  const handleZoomOut = () => {
    if (zoomLevel > 0.1) {
      setZoomLevel(zoomLevel - 0.1);
    }
  };

  const cardStyle = {
    transform: [
      { scale: zoomLevel },
    ],
  };

  // Criando um array com 100 postagens fictícias
  const posts = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    title: `Postagem ${index + 1}`,
    content: `Conteúdo da postagem ${index + 1}`,
    left: Math.random() * 500, // Posição horizontal aleatória
    top: Math.random() * 500, // Posição vertical aleatória
    margin: Math.random() * 20, // Margem aleatória
  }));

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView contentContainerStyle={[styles.feed, cardStyle]}>
        {posts.map((post, index) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.content}
            style={{ left: post.left, top: post.top, margin: post.margin }}
          />
        ))}
      </ScrollView>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleZoomIn} style={styles.button}>
          <Text style={styles.buttonText}>Zoom +</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleZoomOut} style={styles.button}>
          <Text style={styles.buttonText}>Zoom -</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  feed: {
    position: 'relative',
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
  },
  card: {
    position: 'absolute',
    width: 200,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {},
  buttonsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
