import { Ionicons } from '@expo/vector-icons';
import { Pressable, Share, Text, View } from 'react-native';
import { styles } from '../styles/indexStyles';

interface AiResultProps {
  answer: string;
}

export function AiResult({ answer }: AiResultProps) {
  async function shareAnswer() {
    await Share.share({
      message: answer,
    });
  }

  if (!answer) {
    return null;
  }

  return (
    <View style={styles.result}>
      <View style={styles.resultHeader}>
        <View style={styles.aiBadge}>
          <Ionicons name='sparkles' size={15} color='#6848F5' />

          <Text style={styles.aiBadgeText}>RESPOSTA DA IA</Text>
        </View>

        <Pressable
          accessibilityRole='button'
          accessibilityLabel='Compartilhar mensagem'
          onPress={shareAnswer}
          style={styles.shareButton}
        >
          <Ionicons name='share-outline' size={22} color='#6848F5' />
        </Pressable>
      </View>

      <Text style={styles.answer}>{answer}</Text>

      <Text style={styles.warning}>Revise a mensagem antes de enviar.</Text>
    </View>
  );
}
