import axios from 'axios';
import { ImageResponse } from '../schemas/ImageResponse';

export class CloudFlareService {
  private static instance: CloudFlareService;
  private baseURL: string;

  private constructor() {
    this.baseURL = 'https://cloudflare-r2-backend.com/api';
  }

  public static getInstance(): CloudFlareService {
    if (!CloudFlareService.instance) {
      CloudFlareService.instance = new CloudFlareService();
    }
    return CloudFlareService.instance;
  }

  public async uploadImage(imageData: Buffer): Promise<ImageResponse> {
    const response = await axios.post(`${this.baseURL}/upload`, imageData, {
      headers: {
        'Content-Type': 'image/png',
      },
    });

    if (response.status !== 200) {
      throw new Error('Failed to upload image to CloudFlare');
    }

    return response.data;
  }
}