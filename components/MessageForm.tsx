import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import { styles } from '../styles/indexStyles';
import { Tone } from '../types/message';

const tones: Tone[] = ['Convincente', 'Divertida', 'Formal', 'Dramática'];

interface MessageFormProps {
  situation: string;
  recipient: string;
  details: string;
  tone: Tone;
  loading: boolean;
  canGenerate: boolean;
  onSituationChange: (value: string) => void;
  onRecipientChange: (value: string) => void;
  onDetailsChange: (value: string) => void;
  onToneChange: (value: Tone) => void;
  onGenerate: () => void;
}

export function MessageForm({
  situation,
  recipient,
  details,
  tone,
  loading,
  canGenerate,
  onSituationChange,
  onRecipientChange,
  onDetailsChange,
  onToneChange,
  onGenerate,
}: MessageFormProps) {
  return (
    <View style={styles.form}>
      <Text style={styles.label}>Qual é a situação?</Text>

      <TextInput
        value={situation}
        onChangeText={onSituationChange}
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
        onChangeText={onRecipientChange}
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
              onPress={() => onToneChange(item)}
              style={[styles.toneButton, selected && styles.toneButtonSelected]}
            >
              <Text
                style={[styles.toneText, selected && styles.toneTextSelected]}
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
        onChangeText={onDetailsChange}
        placeholder='Ex.: gostaria de remarcar para sábado'
        placeholderTextColor='#9993A6'
        maxLength={240}
        style={styles.input}
      />

      <Pressable
        accessibilityRole='button'
        disabled={!canGenerate}
        onPress={onGenerate}
        style={({ pressed }) => [
          styles.generateButtonContainer,
          pressed && canGenerate && styles.pressed,
        ]}
      >
        <LinearGradient
          colors={canGenerate ? ['#6848F5', '#9170FF'] : ['#BEB8CF', '#BEB8CF']}
          style={styles.generateButton}
        >
          {loading ? (
            <>
              <ActivityIndicator color='#FFFFFF' />

              <Text style={styles.generateButtonText}>Gerando mensagem...</Text>
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
  );
}
