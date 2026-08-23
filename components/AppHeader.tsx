import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';
import { styles } from '../styles/indexStyles';

export function AppHeader() {
  return (
    <View style={styles.header}>
      <LinearGradient colors={['#6C4DFF', '#967AFF']} style={styles.logo}>
        <Ionicons name='sparkles' size={26} color='#FFFFFF' />
      </LinearGradient>

      <View style={styles.headerContent}>
        <Text style={styles.appName}>Trabalho da UTFPR DesculpAí</Text>

        <Text style={styles.subtitle}>
          Mensagens criativas com Inteligência Artificial
        </Text>
      </View>
    </View>
  );
}
