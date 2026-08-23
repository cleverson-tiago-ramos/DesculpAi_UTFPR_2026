import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

const STORAGE_KEY = '@desculpai:responses';

export interface GeneratedResponse {
  id: string;
  situation: string;
  recipient: string;
  tone: string;
  message: string;
  createdAt: string;
}

interface ResponsesContextData {
  responses: GeneratedResponse[];
  addResponse: (
    response: Omit<GeneratedResponse, 'id' | 'createdAt'>,
  ) => Promise<void>;
  removeResponse: (id: string) => Promise<void>;
  clearResponses: () => Promise<void>;
}

const ResponsesContext = createContext<ResponsesContextData | undefined>(
  undefined,
);

export function ResponsesProvider({ children }: { children: ReactNode }) {
  const [responses, setResponses] = useState<GeneratedResponse[]>([]);

  useEffect(() => {
    async function loadResponses() {
      try {
        const savedResponses = await AsyncStorage.getItem(STORAGE_KEY);

        if (savedResponses) {
          setResponses(JSON.parse(savedResponses));
        }
      } catch (error) {
        console.error('Erro ao carregar respostas:', error);
      }
    }

    loadResponses();
  }, []);

  async function saveResponses(items: GeneratedResponse[]) {
    setResponses(items);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }

  async function addResponse(
    response: Omit<GeneratedResponse, 'id' | 'createdAt'>,
  ) {
    const newResponse: GeneratedResponse = {
      ...response,
      id: `${Date.now()}-${Math.random()}`,
      createdAt: new Date().toISOString(),
    };

    await saveResponses([newResponse, ...responses]);
  }

  async function removeResponse(id: string) {
    const updatedResponses = responses.filter((response) => response.id !== id);

    await saveResponses(updatedResponses);
  }

  async function clearResponses() {
    setResponses([]);
    await AsyncStorage.removeItem(STORAGE_KEY);
  }

  return (
    <ResponsesContext.Provider
      value={{
        responses,
        addResponse,
        removeResponse,
        clearResponses,
      }}
    >
      {children}
    </ResponsesContext.Provider>
  );
}

export function useResponses() {
  const context = useContext(ResponsesContext);

  if (!context) {
    throw new Error(
      'useResponses deve ser utilizado dentro de ResponsesProvider.',
    );
  }

  return context;
}
