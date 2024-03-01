import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Switch, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ZoomableFeed from './ZoomableFeed';

const PostCard = ({ title, content }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const FeedScreen = () => {
  const [showZoomableFeed, setShowZoomableFeed] = useState(false);

  const toggleZoomableFeed = () => {
    setShowZoomableFeed(!showZoomableFeed);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Mostrar com Zoom</Text>
        <Switch
          value={showZoomableFeed}
          onValueChange={toggleZoomableFeed}
        />
      </View>
      {showZoomableFeed ? (
        <ZoomableFeed /> // Renderiza o ZoomableFeed se showZoomableFeed for verdadeiro
      ) : (
        <ScrollView contentContainerStyle={styles.feed}>
          {/* Renderiza as postagens normais */}
          <PostCard title="Postagem 1" content="Conteúdo da postagem 1" />
          <PostCard title="Postagem 2" content="Conteúdo da postagem 2" />
          <PostCard title="Postagem 3" content="Conteúdo da postagem 3" />
          {/* Adicione mais postagens aqui, se necessário */}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  switchLabel: {
    marginRight: 10,
    fontSize: 16,
  },
  feed: {
    alignItems: 'center',
    paddingTop: 20,
  },
  card: {
    width: 200,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    elevation: 5,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {},
});

export default FeedScreen;
