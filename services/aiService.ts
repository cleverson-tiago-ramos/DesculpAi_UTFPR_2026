import { MessageRequest, MessageResponse } from '../types/message';

const API_URL = process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:3333';

/**
 * Envia os dados preenchidos pelo usuário para o backend,
 * responsável pela comunicação segura com a API de IA.
 */
export async function generateAiMessage(
  request: MessageRequest,
): Promise<string> {
  const response = await fetch(`${API_URL}/api/excuses`, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(request),
  });

  const data = (await response.json()) as MessageResponse;

  if (!response.ok || !data.answer) {
    throw new Error(data.error ?? 'Não foi possível gerar a mensagem.');
  }

  return data.answer;
}
