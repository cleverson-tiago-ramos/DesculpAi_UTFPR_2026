import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
} from 'react-native';
import { AiResult } from '../components/AiResult';

import { HeroBanner } from '../components/HeroBanner';
import { MessageForm } from '../components/MessageForm';
import { generateAiMessage } from '../services/aiService';
import { styles } from '../styles/indexStyles';
import { Tone } from '../types/message';

export default function Index() {
  const [situation, setSituation] = useState('');
  const [recipient, setRecipient] = useState('');
  const [details, setDetails] = useState('');
  const [tone, setTone] = useState<Tone>('Convincente');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const canGenerate =
    situation.trim().length >= 5 && recipient.trim().length >= 2 && !loading;

  async function handleGenerate() {
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
      const generatedAnswer = await generateAiMessage(
        {
          event: situation.trim(),
          recipient: recipient.trim(),
          details: details.trim(),
          tone,
        },
        'gemini',
      );

      setAnswer(generatedAnswer);
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
        <HeroBanner />

        <MessageForm
          situation={situation}
          recipient={recipient}
          details={details}
          tone={tone}
          loading={loading}
          canGenerate={canGenerate}
          onSituationChange={setSituation}
          onRecipientChange={setRecipient}
          onDetailsChange={setDetails}
          onToneChange={setTone}
          onGenerate={handleGenerate}
        />

        <AiResult answer={answer} />

        <Text style={styles.footer}>
          Use a criatividade com responsabilidade 💜
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
