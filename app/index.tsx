import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

type Tone = 'Convincente' | 'Divertida' | 'Formal' | 'Dramática';

const tones: Tone[] = ['Convincente', 'Divertida', 'Formal', 'Dramática'];

export default function Index() {
  const [situation, setSituation] = useState('');
  const [recipient, setRecipient] = useState('');
  const [details, setDetails] = useState('');
  const [tone, setTone] = useState<Tone>('Convincente');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const canGenerate =
    situation.trim().length >= 5 && recipient.trim().length >= 2 && !loading;

  async function generateExcuse() {
    if (!canGenerate) {
      Alert.alert(
        'Campos obrigatórios',
        'Informe a situação e para quem será enviada a mensagem.',
      );

      return;
    }

    setLoading(true);
    setAnswer('');

    try {
      const apiUrl = process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:3333';

      const response = await fetch(`${apiUrl}/api/excuses`, {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          event: situation.trim(),
          recipient: recipient.trim(),
          details: details.trim(),
          tone,
        }),
      });

      const data = (await response.json()) as {
        answer?: string;
        error?: string;
      };

      if (!response.ok || !data.answer) {
        throw new Error(data.error ?? 'Não foi possível gerar a mensagem.');
      }

      setAnswer(data.answer);
    } catch (error) {
      Alert.alert(
        'Erro ao gerar',
        error instanceof Error
          ? error.message
          : 'Não foi possível acessar a Inteligência Artificial.',
      );
    } finally {
      setLoading(false);
    }
  }

  async function shareAnswer() {
    if (!answer) return;

    await Share.share({
      message: answer,
    });
  }

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps='handled'
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <LinearGradient colors={['#6C4DFF', '#967AFF']} style={styles.logo}>
            <Ionicons name='sparkles' size={26} color='#FFFFFF' />
          </LinearGradient>

          <View>
            <Text style={styles.appName}>DesculpAí</Text>

            <Text style={styles.subtitle}>
              Mensagens criativas com Inteligência Artificial
            </Text>
          </View>
        </View>

        <LinearGradient colors={['#6848F5', '#9170FF']} style={styles.hero}>
          <Text style={styles.heroLabel}>✨ CRIATIVIDADE COM IA</Text>

          <Text style={styles.heroTitle}>
            A mensagem certa em poucos segundos
          </Text>

          <Text style={styles.heroDescription}>
            Conte o que aconteceu e deixe a Inteligência Artificial preparar uma
            mensagem personalizada.
          </Text>
        </LinearGradient>

        <View style={styles.form}>
          <Text style={styles.label}>Qual é a situação?</Text>

          <TextInput
            value={situation}
            onChangeText={setSituation}
            placeholder='Ex.: Não conseguirei participar da reunião...'
            placeholderTextColor='#9993A6'
            multiline
            maxLength={180}
            style={[styles.input, styles.textArea]}
            textAlignVertical='top'
          />

          <Text style={styles.counter}>{situation.length}/180</Text>

          <Text style={styles.label}>Para quem é a mensagem?</Text>

          <TextInput
            value={recipient}
            onChangeText={setRecipient}
            placeholder='Ex.: meu chefe, professora ou amigo'
            placeholderTextColor='#9993A6'
            maxLength={60}
            style={styles.input}
          />

          <Text style={styles.label}>Escolha o tom</Text>

          <View style={styles.tones}>
            {tones.map((item) => {
              const selected = tone === item;

              return (
                <Pressable
                  key={item}
                  onPress={() => setTone(item)}
                  style={[
                    styles.toneButton,
                    selected && styles.toneButtonSelected,
                  ]}
                >
                  <Text
                    style={[
                      styles.toneText,
                      selected && styles.toneTextSelected,
                    ]}
                  >
                    {item}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          <Text style={styles.label}>Detalhes adicionais (opcional)</Text>

          <TextInput
            value={details}
            onChangeText={setDetails}
            placeholder='Ex.: gostaria de remarcar para sábado'
            placeholderTextColor='#9993A6'
            maxLength={240}
            style={styles.input}
          />

          <Pressable
            disabled={!canGenerate}
            onPress={generateExcuse}
            style={({ pressed }) => [
              styles.generateButtonContainer,
              pressed && canGenerate && styles.pressed,
            ]}
          >
            <LinearGradient
              colors={
                canGenerate ? ['#6848F5', '#9170FF'] : ['#BEB8CF', '#BEB8CF']
              }
              style={styles.generateButton}
            >
              {loading ? (
                <>
                  <ActivityIndicator color='#FFFFFF' />

                  <Text style={styles.generateButtonText}>
                    Gerando mensagem...
                  </Text>
                </>
              ) : (
                <>
                  <Ionicons name='sparkles' size={20} color='#FFFFFF' />

                  <Text style={styles.generateButtonText}>
                    Gerar minha mensagem
                  </Text>
                </>
              )}
            </LinearGradient>
          </Pressable>
        </View>

        {answer ? (
          <View style={styles.result}>
            <View style={styles.resultHeader}>
              <View style={styles.aiBadge}>
                <Ionicons name='sparkles' size={15} color='#6848F5' />

                <Text style={styles.aiBadgeText}>RESPOSTA DA IA</Text>
              </View>

              <Pressable onPress={shareAnswer} style={styles.shareButton}>
                <Ionicons name='share-outline' size={22} color='#6848F5' />
              </Pressable>
            </View>

            <Text style={styles.answer}>{answer}</Text>

            <Text style={styles.warning}>
              Revise a mensagem antes de enviar.
            </Text>
          </View>
        ) : null}

        <Text style={styles.footer}>
          Use a criatividade com responsabilidade 💜
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8F7FC',
  },

  container: {
    padding: 20,
    paddingTop: 58,
    paddingBottom: 40,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  logo: {
    width: 50,
    height: 50,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  appName: {
    color: '#292438',
    fontSize: 24,
    fontWeight: '800',
  },

  subtitle: {
    color: '#777184',
    fontSize: 12,
    marginTop: 2,
  },

  hero: {
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
  },

  heroLabel: {
    color: '#ECE7FF',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },

  heroTitle: {
    color: '#FFFFFF',
    fontSize: 27,
    lineHeight: 33,
    fontWeight: '800',
    marginTop: 10,
  },

  heroDescription: {
    color: '#ECE7FF',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 10,
  },

  form: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 18,
    borderWidth: 1,
    borderColor: '#ECE9F3',
  },

  label: {
    color: '#393346',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 15,
    marginBottom: 8,
  },

  input: {
    minHeight: 52,
    paddingHorizontal: 14,
    backgroundColor: '#F8F7FB',
    borderWidth: 1,
    borderColor: '#E4E0EC',
    borderRadius: 14,
    color: '#2E2939',
    fontSize: 15,
  },

  textArea: {
    height: 100,
    paddingTop: 14,
    paddingBottom: 22,
  },

  counter: {
    color: '#9993A6',
    fontSize: 11,
    textAlign: 'right',
    marginTop: -18,
    marginRight: 10,
  },

  tones: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  toneButton: {
    width: '48%',
    minHeight: 43,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F7FB',
    borderWidth: 1,
    borderColor: '#E4E0EC',
    borderRadius: 13,
  },

  toneButtonSelected: {
    backgroundColor: '#EFEAFF',
    borderColor: '#8065ED',
  },

  toneText: {
    color: '#6F697A',
    fontSize: 13,
    fontWeight: '600',
  },

  toneTextSelected: {
    color: '#6044DE',
    fontWeight: '800',
  },

  generateButtonContainer: {
    marginTop: 22,
    borderRadius: 15,
    overflow: 'hidden',
  },

  generateButton: {
    minHeight: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
  },

  generateButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },

  pressed: {
    opacity: 0.8,
  },

  result: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#D8CEFF',
    borderRadius: 22,
    padding: 19,
    marginTop: 20,
  },

  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  aiBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#EFEAFF',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  aiBadgeText: {
    color: '#6044DE',
    fontSize: 10,
    fontWeight: '800',
  },

  shareButton: {
    width: 40,
    height: 40,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2EEFF',
  },

  answer: {
    color: '#373141',
    fontSize: 16,
    lineHeight: 25,
    marginTop: 17,
  },

  warning: {
    color: '#8C8697',
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 13,
  },

  footer: {
    color: '#9892A2',
    textAlign: 'center',
    fontSize: 12,
    marginTop: 24,
  },
});
