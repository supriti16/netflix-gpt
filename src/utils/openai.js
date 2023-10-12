import OpenAI from 'openai';
import { OPENAI_KEY } from './constants/constant';

export const openai = new OpenAI({
  apiKey: OPENAI_KEY, // defaults to process.env["OPENAI_API_KEY"]
});