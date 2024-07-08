import Video from 'next-video';
import BackgroundVideo from 'next-video/background-video';
import avatarVideo from '../../videos/avatar.mp4';

export default function AvatarVideo() {
  return (
    
        <BackgroundVideo src={avatarVideo} />
    );
}
