import { Ionicons } from '@expo/vector-icons';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useResponses } from '../contexts/ResponsesContext';
export default function Respostas() {
  const { responses, removeResponse, clearResponses } = useResponses();

  function confirmClear() {
    Alert.alert(
      'Limpar respostas',
      'Deseja apagar todas as respostas geradas?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Apagar',
          style: 'destructive',
          onPress: clearResponses,
        },
      ],
    );
  }

  if (responses.length === 0) {
    return (
      <View style={pageStyles.container}>
        <View style={pageStyles.empty}>
          <Ionicons name='chatbubbles-outline' size={56} color='#9170FF' />

          <Text style={pageStyles.title}>Respostas geradas</Text>

          <Text style={pageStyles.description}>
            Todas as desculpas criadas serão exibidas aqui.
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={pageStyles.container}>
      <View style={pageStyles.header}>
        <View>
          <Text style={pageStyles.title}>Respostas geradas</Text>

          <Text style={pageStyles.counter}>
            {responses.length}{' '}
            {responses.length === 1 ? 'resposta' : 'respostas'}
          </Text>
        </View>

        <TouchableOpacity onPress={confirmClear}>
          <Text style={pageStyles.clearText}>Limpar tudo</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={responses}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={pageStyles.list}
        renderItem={({ item }) => (
          <View style={pageStyles.card}>
            <View style={pageStyles.cardHeader}>
              <View style={pageStyles.badge}>
                <Text style={pageStyles.badgeText}>{item.tone}</Text>
              </View>

              <TouchableOpacity
                onPress={() => removeResponse(item.id)}
                hitSlop={10}
              >
                <Ionicons name='trash-outline' size={21} color='#D14D72' />
              </TouchableOpacity>
            </View>

            <Text style={pageStyles.message}>{item.message}</Text>

            <View style={pageStyles.divider} />

            <Text style={pageStyles.info}>Para: {item.recipient}</Text>

            <Text style={pageStyles.date}>
              {new Date(item.createdAt).toLocaleString('pt-BR')}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const pageStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#F8F7FC',
  },

  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },

  title: {
    color: '#292431',
    fontSize: 22,
    fontWeight: '700',
  },

  description: {
    marginTop: 8,
    color: '#77717F',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },

  counter: {
    marginTop: 3,
    color: '#77717F',
    fontSize: 13,
  },

  clearText: {
    color: '#D14D72',
    fontSize: 14,
    fontWeight: '600',
  },

  list: {
    paddingBottom: 30,
  },

  card: {
    marginBottom: 14,
    padding: 18,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8E5EF',
    borderRadius: 16,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  badge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#EEEAFE',
    borderRadius: 20,
  },

  badgeText: {
    color: '#6848F5',
    fontSize: 12,
    fontWeight: '700',
  },

  message: {
    color: '#35303D',
    fontSize: 15,
    lineHeight: 23,
  },

  divider: {
    height: 1,
    marginVertical: 14,
    backgroundColor: '#EEEAF2',
  },

  info: {
    color: '#625B6A',
    fontSize: 13,
    fontWeight: '600',
  },

  date: {
    marginTop: 4,
    color: '#99939F',
    fontSize: 12,
  },
});
