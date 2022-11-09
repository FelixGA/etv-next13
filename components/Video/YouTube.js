// import { useState } from "react";
// import Image from "next/image";
// import useTranslation from "/hooks/useTranslation";
import YoutubePlayer from "react-youtube";

export default function YouTube(props) {
//   const [selected, setSelected] = useState(0);
//   const ytChannel = useTranslation("YouTube-Kanal");

  return (
    <div className="overflow-hidden">
      <h2 className="text-green-dark mb-8">
        Video
      </h2>
            
          <YoutubePlayer
            className="w-full h-52 sm:h-80 lg:h-96"
            opts={{
              playerVars: {
                showinfo: 0,
                controls: 1,
                autoplay: 1,
                mute: 1,
              },
            }}
          />
      
    </div>
  );
}
