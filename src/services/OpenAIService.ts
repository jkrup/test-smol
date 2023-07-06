import axios from 'axios';
import { ImageRequest, ImageResponse } from '../schemas';

export class OpenAIService {
  private static instance: OpenAIService;
  private openAIUrl: string = 'https://api.openai.com/v1/images';

  private constructor() {}

  public static getInstance(): OpenAIService {
    if (!OpenAIService.instance) {
      OpenAIService.instance = new OpenAIService();
    }
    return OpenAIService.instance;
  }

  public async generateImage(imageRequest: ImageRequest): Promise<ImageResponse> {
    const response = await axios.post(this.openAIUrl, imageRequest);
    return response.data;
  }
}