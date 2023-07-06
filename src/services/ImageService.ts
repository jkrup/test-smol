import { ImageRequest, ImageResponse } from '../schemas';
import { checkCache, linkCache } from './CacheService';
import { generateImage } from './OpenAIService';
import { uploadToCloudFlare } from './CloudFlareService';
import { ImageGenerationJob } from '../jobs/ImageGenerationJob';
import { AsyncQueue } from '../utils/AsyncQueue';

const defaultPlaceholder = '/public/images/default-placeholder.png';

export async function getPlaceholderImage(request: ImageRequest): Promise<ImageResponse> {
  const cachedImage = checkCache(request);

  if (cachedImage) {
    return { url: cachedImage, status: 'CacheHit' };
  }

  const placeholderImage: ImageResponse = {
    url: defaultPlaceholder,
    status: 'CacheMiss',
    width: request.w,
    height: request.h,
  };

  AsyncQueue.add(new ImageGenerationJob(request));

  return placeholderImage;
}

export async function handleImageGenerationJob(job: ImageGenerationJob): Promise<void> {
  const generatedImage = await generateImage(job.request.p);
  const cloudFlareUrl = await uploadToCloudFlare(generatedImage);

  linkCache(job.request, cloudFlareUrl);
}