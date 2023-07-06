import { ImageRequest, ImageResponse } from '../services/ImageService';
import { generateImage } from '../services/OpenAIService';
import { uploadToCloudFlare, linkCache } from '../services/CloudFlareService';
import { checkCache } from '../services/CacheService';
import { AsyncQueue } from '../utils/AsyncQueue';

class ImageGenerationJob {
  private queue: AsyncQueue<ImageRequest>;

  constructor() {
    this.queue = new AsyncQueue<ImageRequest>();
  }

  async processJob(request: ImageRequest): Promise<void> {
    const cacheResult = await checkCache(request);
    if (cacheResult) {
      return;
    }

    const image: ImageResponse = await generateImage(request.p);
    const cloudFlareLink: string = await uploadToCloudFlare(image);

    await linkCache(request, cloudFlareLink);
  }

  async addJob(request: ImageRequest): Promise<void> {
    this.queue.enqueue(request);
    this.processJob(request);
  }
}

export const imageGenerationJob = new ImageGenerationJob();