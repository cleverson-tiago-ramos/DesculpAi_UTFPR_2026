export type Tone =
  | 'Convincente'
  | 'Divertida'
  | 'Formal'
  | 'Dramática'
  | 'Rústica';

export interface MessageRequest {
  event: string;
  recipient: string;
  details: string;
  tone: Tone;
}

export interface MessageResponse {
  answer?: string;
  error?: string;
}
