import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const PostScreen = () => {
  const [avatar, setAvatar] = useState(null);

  // Função para manipular a seleção de imagem do avatar
  const handleAvatarSelection = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permissão para acessar a galeria de mídia é necessária.');
      return;
    }
  
    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      console.log('Seleção de imagem cancelada.');
      return;
    }
  
    if (!pickerResult.uri) {
      console.log('URI da imagem não está definida.');
      return;
    }
  
    console.log('URI da imagem selecionada:', pickerResult.uri);
    setAvatar(pickerResult.uri);
  };
  

  return (
    <View style={[styles.container, styles.darkMode]}>
      <Text style={styles.label}>Nome de Usuário:</Text>
      <TextInput style={styles.input} placeholderTextColor="#ccc" />

      {/* Botão para adicionar avatar */}
      <Button title="Adicionar Avatar" onPress={handleAvatarSelection} color="#4CAF50" />

      {/* Exibir o preview da imagem do avatar se uma imagem foi selecionada */}
      {avatar && (
        <View style={styles.avatarContainer}>
          <Text style={styles.label}>Preview do Avatar:</Text>
          <Image source={{ uri: avatar }} style={styles.avatar} />
        </View>
      )}

      <Text style={styles.label}>Texto da Postagem:</Text>
      <TextInput
        style={[styles.input, styles.textArea, { color: '#ccc', borderColor: '#666' }]}
        multiline
        placeholderTextColor="#ccc"
      />

      <Button title="Postar" onPress={() => {}} color="#007BFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  darkMode: {
    backgroundColor: '#333',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    color: '#fff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  avatarContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
  },
});

export default PostScreen;
