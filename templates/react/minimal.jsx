import { VideoProvider, MinimalSkin, Video } from "@videojs/react";
import '@videojs/react/skins/minimal.css';

export default function VideoPlayer() {
  return (
    <VideoProvider>
      <MinimalSkin>
        <Video
          src="https://stream.mux.com/lhnU49l1VGi3zrTAZhDm9LUUxSjpaPW9BL4jY25Kwo4/highest.mp4"
          poster="https://image.mux.com/lhnU49l1VGi3zrTAZhDm9LUUxSjpaPW9BL4jY25Kwo4/thumbnail.webp"
          playsInline
        />
      </MinimalSkin>
    </VideoProvider>
  );
}
