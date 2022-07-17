import { youtubeParser } from './youtubeParser';

export const getYoutubeThumbnail = (url: string): string => {
	const videoId = youtubeParser(url);
	return `https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
};
