import { ActionIcon } from '@mantine/core';
import { RootState } from 'configStore';
import React, { useEffect, useState } from 'react';
import YouTubePlayer from 'react-player/youtube';
import { useSelector } from 'react-redux';
import { Volume, Volume2, Volume3, VolumeOff } from 'tabler-icons-react';

type Props = {
	playerRef?: React.RefObject<YouTubePlayer>;
};

const MuteButton = ({ playerRef }: Props) => {
	const [isMuted, setIsMuted] = useState<boolean>(true);
	const handleOnClick = () => {
		playerRef?.current?.getInternalPlayer().isMuted()
			? playerRef.current.getInternalPlayer().unMute() &&
			  setIsMuted(false)
			: playerRef?.current?.getInternalPlayer().mute() &&
			  setIsMuted(true);
	};

	return (
		<div className="border rounded-full md:p-1" onClick={handleOnClick}>
			<ActionIcon>
				{!isMuted && (
					<Volume size={window.innerWidth < 768 ? 20 : 58} />
				)}
				{isMuted && (
					<VolumeOff size={window.innerWidth < 768 ? 20 : 58} />
				)}
			</ActionIcon>
		</div>
	);
};

export default MuteButton;
