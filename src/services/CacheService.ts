import { ImageRequest } from '../schemas/ImageRequest';
import { ImageResponse } from '../schemas/ImageResponse';

class CacheService {
  private cache: Map<string, ImageResponse>;

  constructor() {
    this.cache = new Map<string, ImageResponse>();
  }

  public checkCache(imageRequest: ImageRequest): ImageResponse | null {
    const key = this.generateKey(imageRequest);
    return this.cache.get(key) || null;
  }

  public linkCache(imageRequest: ImageRequest, imageResponse: ImageResponse): void {
    const key = this.generateKey(imageRequest);
    this.cache.set(key, imageResponse);
  }

  private generateKey(imageRequest: ImageRequest): string {
    return `${imageRequest.h}-${imageRequest.w}-${imageRequest.p}`;
  }
}

export default new CacheService();