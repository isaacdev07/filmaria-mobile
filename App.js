import React, { useState, useEffect } from "react-native";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";

import Filmes from "./src/filmes";
import api from "./src/services/api";

export default function App() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarFilmes() {
      const response = await api.get("/r-api/?api=filmes");
      setFilmes(response.data);
      setLoading(false);
    }
    carregarFilmes();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator style={styles.act} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          data={filmes}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Filmes data={item} />}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  loading, container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  act: {
    size: 'large',
    color: '#00f'
  }
})


