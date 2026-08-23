import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/headerStyles';
function CustomHeader() {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <LinearGradient
        colors={['#6848F5', '#9170FF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        <View style={styles.icon}>
          <Ionicons name='sparkles' size={22} color='#FFFFFF' />
        </View>

        <View style={styles.titleContent}>
          <Text style={styles.title}>DesculpAí</Text>

          <Text style={styles.subtitle}>Mensagens criativas com IA</Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

export default function RootLayout() {
  return (
    <View style={styles.screen}>
      <StatusBar style='light' />

      <CustomHeader />

      <Stack
        screenOptions={{
          headerShown: false,

          contentStyle: {
            backgroundColor: '#F8F7FC',
          },
        }}
      />
    </View>
  );
}
