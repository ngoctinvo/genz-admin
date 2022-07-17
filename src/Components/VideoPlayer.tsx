import { youtubeParser } from 'Helpers/youtubeParser';
import Movie from 'Interface/movie';
import React from 'react';
import ReactPlayer, { YouTubeConfig } from 'react-player/youtube';

type Props = {
	movie: Movie | null;
	playerRef?: React.RefObject<ReactPlayer>;
	muted?: boolean;
	setIsTrailerDone?: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultFunction = () => {};

const VideoPlayer = ({
	playerRef,
	movie,
	setIsTrailerDone = defaultFunction,
	...rest
}: Props) => {
	if (movie?.trailer == '') {
		return (
			<div className="absolute inset-0 w-full h-full flex justify-center items-center">
				<h2>Phim này không có trailer</h2>
			</div>
		);
	}

	return (
		<ReactPlayer
			// url={`https://www.youtube-nocookie.com/embed/${
			// 	playerVideo?.trailer?.id || ''
			// }`}
			ref={playerRef}
			url={
				movie
					? `http://www.youtube-nocookie.com/embed/${youtubeParser(
							movie.trailer
					  )}`
					: ''
			}
			width="100%"
			height="100%"
			playing
			// muted
			// controls
			onEnded={() => {
				setIsTrailerDone(true);
			}}
			config={
				{
					// youtube: { playerVars: { start: 1000 } },
					playerVars: {
						rel: 0,
						showinfo: 0,
						modestbranding: 1,
						playsinline: 1,
						iv_load_policy: 3,
					},
				} as YouTubeConfig
			}
			{...rest}
		/>
	);
};

export default VideoPlayer;
