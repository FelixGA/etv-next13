import YoutubePlayer from "react-youtube";

export default function YouTube(props) {
  return (
    <>
      {/* props.videoId ? <div className=""> <YoutubePlayer/>  </div> : Null */}
      {props.videoId && (
        <div className="overflow-hidden">
          <h2 className="text-green-dark mb-8">{props.heading}</h2>

          <YoutubePlayer
            className="w-full h-52 sm:h-80 lg:h-96"
            videoId={props.videoId}
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
      )}
    </>
  );
}
