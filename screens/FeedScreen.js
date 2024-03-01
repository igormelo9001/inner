import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const FeedScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([
    { id: 1, userName: 'Vivian', content: 'Eu estou tão cansada :(', avatar: require('../assets/vivian.jpg') },
    { id: 2, userName: 'Isa', content: 'O mecanismo de defesa é uma coisa que não deixa evoluir a auto estima da pessoa se ele for sempre usado', avatar: require('../assets/isa.jpg') },
    { id: 3, userName: 'Charles', content: 'IA e a bolha financeira dos devs', avatar: require('../assets/charles.jpg') },
    { id: 4, userName: 'Thomaz', content: 'eu vou fazer um programa chamado piaba tank EAHUHAEUHAEU', avatar: require('../assets/thomaz.jpg') },
    { id: 5, userName: 'Daniel', content: 'Hoje eu ralei pra caramba', avatar: require('../assets/daniel.jpg') },
    { id: 6, userName: 'Maria', content: 'Dia de sustentação oral do cliente em monte carmelo', avatar: require('../assets/maria.jpg') },
    { id: 7, userName: 'Igor', content: 'To desenvolvendo essa bagaça aqui :|', avatar: require('../assets/igor.jpg') },

  ]);

  const renderItem = ({ item }) => (
    <View style={styles.post}>
      <View style={styles.userInfo}>
      <View style={styles.avatarContainer}>
        <Image source={item.avatar} style={styles.avatar} />
      </View>
        <Text style={styles.userName}>{item.userName}</Text>
      </View>
      <Text style={styles.content}>{item.content}</Text>
    </View>
  );

  const handlePostPress = () => {
    navigation.navigate('Post');
  }; 

  const navigateToUniverseGraph = () => {
    navigation.navigate('Graph');
};

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
      <TouchableOpacity style={styles.newPostButton} onPress={handlePostPress}>
          <Text style={styles.buttonPostText}>New Post</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.universeGraph} onPress={navigateToUniverseGraph}>
          <Text style={styles.buttonGraphText}>Universe Graph</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#333'
  },
  post: {
    marginBottom: 16,
    backgroundColor: '#aaa',
    padding: 16, // Cor de fundo do componente de postagem
    marginBottom: 10, // Adiciona margem inferior ao componente de postagem
    width: '100%',
    borderWidth: 5,
    borderRadius: 8,
    borderColor: '#ccc',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
     // Adiciona borda ao redor do componente de postagem // Cor da borda
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
    alignContent: 'center',
    alignItems:'center',
    paddingLeft:50
  },
  userName: {
    fontWeight: 'bold',
  },
  newPostButton: {
    backgroundColor: '#007BFF', // Cor de fundo do botão
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // Cor do texto do botão
    alignContent:'center',
    justifyContent:'center',
    paddingLeft:100
  },
  buttonPostText:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // Cor do texto do botão
    alignContent:'center',
    justifyContent:'center',
    paddingLeft:100
  },
  buttonGraphText:{
    fontSize: 16,
    fontWeight: 'bold',
    alignContent:'center',
    justifyContent:'center',
    paddingLeft:100,
    color: '#fff',
  },
  avatarContainer: {
    marginRight: 10, // Adiciona margem à direita para espaçamento entre o avatar e o conteúdo do post
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
  },
  universeGraph:{
    backgroundColor: '#4CAF50', // Cor de fundo do botão
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  content: {},
});

export default FeedScreen;
