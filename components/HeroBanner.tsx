import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'react-native';
import { styles } from '../styles/indexStyles';

export function HeroBanner() {
  return (
    <LinearGradient colors={['#6848F5', '#9170FF']} style={styles.hero}>
      <Text style={styles.heroLabel}>✨ CRIATIVIDADE COM IA</Text>

      <Text style={styles.heroTitle}>A mensagem certa em poucos segundos</Text>

      <Text style={styles.heroDescription}>
        Conte o que aconteceu e deixe a Inteligência Artificial preparar uma
        mensagem personalizada.
      </Text>
    </LinearGradient>
  );
}
