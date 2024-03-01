import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Switch, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ZoomableFeed from './ZoomableFeed';
import { MaterialIcons } from '@expo/vector-icons';

const PostCard = ({ title, content }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const FeedScreen = ({navigation}) => {
  const [showZoomableFeed, setShowZoomableFeed] = useState(false);

  const handlePostPress = () => {
    navigation.navigate('Post');
  };

  const toggleZoomableFeed = () => {
    setShowZoomableFeed(!showZoomableFeed);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Graph</Text>
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
      <TouchableOpacity style={styles.newPostButton} onPress={handlePostPress}>
          <Text style={styles.buttonText}>Nova Postagem</Text>
          <MaterialIcons name="add" size={24} color="#fff" />
      </TouchableOpacity> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
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
    color:'#aaa'
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
  newPostButton: {
    backgroundColor: '#007BFF',
    borderRadius: 15, // Bordas arredondadas para criar um botão mais suavizado
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row', // Alinha os itens na horizontal dentro do botão
    justifyContent: 'center', // Centraliza os itens horizontalmente dentro do botão
    alignItems: 'center', // Centraliza os itens verticalmente dentro do botão
  },
  buttonText: {
    fontSize: 20, // Tamanho da fonte aumentado
    fontWeight: 'bold',
    color: '#fff', // Cor do texto branca
    textAlign: 'center', // Centraliza o texto horizontalmente dentro do botão
  },
  content: {},
});

export default FeedScreen;
