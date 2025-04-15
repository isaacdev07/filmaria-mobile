import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Detalhes from "../detalhes";

export default function Filmes({ data }) {
  const [verModal, setVerModal] = useState(false);

  return (
    <View style={StyleSheet.card}>
      <Text style={StyleSheet.nome}>{data.nome}</Text>
      <Image source={{ uri: data.foto }} style={StyleSheet.foto} />

      <View style={styles.areaBotao}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => setVerModal(true)}
        >
          <Text style={styles.boatoText}>Leia Mais</Text>
        </TouchableOpacity>
      </View>

      <Modal animationType="slide" visible={verModal}>
        <Detalhes filme={data} voltar={() => setVerModal(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 15,
    elevation: 2,
  },
  nome: {
    padding: 15,    
    fontSize: 18,
  },
  foto: {
    height: 250,
    zIndex: 2,
  },
  areaBotao: {
    alignItems: "flex-end",
    marginTop: -45,
    zIndex: 4,
  },
  botao: {
    width: 100,
    backgroundColor: '#06a6ff',
    opacity: 10,
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  botaoText: {
    color: '#fff',
    textAlign: 'center'
  }
});
