import { VideoProvider, FrostedSkin, Video } from "@videojs/react";
import "@videojs/react/skins/frosted.css";

export default function FrostedReactVideoPlayer() {
  return (
    <VideoProvider>
      <FrostedSkin>
        <Video
          src="https://stream.mux.com/lhnU49l1VGi3zrTAZhDm9LUUxSjpaPW9BL4jY25Kwo4/highest.mp4"
          poster="https://image.mux.com/lhnU49l1VGi3zrTAZhDm9LUUxSjpaPW9BL4jY25Kwo4/thumbnail.webp"
          playsInline
        />
      </FrostedSkin>
    </VideoProvider>
  );
}
