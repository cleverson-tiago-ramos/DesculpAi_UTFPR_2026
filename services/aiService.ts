import OpenAI from 'openai';
import { MessageRequest } from '../types/message';

export type AiProvider = 'openai' | 'gemini';

/**
 * Gera uma mensagem personalizada utilizando
 * as informações preenchidas no formulário.
 */
export async function generateAiMessage(
  request: MessageRequest,
  provider: AiProvider = 'gemini',
): Promise<string> {
  const apiKey =
    provider === 'gemini'
      ? process.env.EXPO_PUBLIC_GEMINI_API_KEY
      : process.env.EXPO_PUBLIC_OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error(
      `A chave da ${provider.toUpperCase()} não foi configurada.`,
    );
  }

  const client = new OpenAI({
    apiKey,

    baseURL:
      provider === 'gemini'
        ? 'https://generativelanguage.googleapis.com/v1beta/openai/'
        : undefined,

    dangerouslyAllowBrowser: true,
  });

  const model = provider === 'gemini' ? 'gemini-3.1-flash-lite' : 'gpt-4o-mini';

  const prompt = `
Crie uma mensagem personalizada de desculpa.

Situação: ${request.event}
Destinatário: ${request.recipient}
Tom escolhido: ${request.tone}
Detalhes adicionais: ${request.details || 'Nenhum'}

Entregue somente a mensagem pronta para ser enviada.
`;

  try {
    const result = await client.chat.completions.create({
      model,

      messages: [
        {
          role: 'system',
          content:
            'Você cria mensagens de desculpa em português do Brasil. A mensagem deve ser curta, natural, criativa, respeitosa e não pode ofender ninguém. Produza uma mensagem completa com no máximo 60 palavras. Não dê explicações e não interrompa a mensagem.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],

      max_tokens: 500,
      temperature: 0.8,
    });

    const text = result.choices[0]?.message?.content?.trim();

    if (!text) {
      throw new Error('A Inteligência Artificial retornou uma resposta vazia.');
    }

    return text;
  } catch (error) {
    console.error('Erro ao gerar mensagem:', error);

    throw new Error(
      'Não foi possível gerar a mensagem. Verifique a chave da API e sua conexão.',
    );
  }
}
