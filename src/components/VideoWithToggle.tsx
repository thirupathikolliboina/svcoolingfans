import { useRef, useState } from "react";
import { SpeakerXMarkIcon, SpeakerWaveIcon } from "@heroicons/react/24/solid";

const VideoWithToggle = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg">
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-lg"
        src="/images/hbg1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Mute Toggle Button */}
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition"
      >
        {isMuted ? (
          <SpeakerXMarkIcon className="h-6 w-6" />
        ) : (
          <SpeakerWaveIcon className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};

export default VideoWithToggle;
