import { useEffect, useState } from 'react';

const CameraPreview: React.FC = () => {
  const [videoToggle, setVideoToggle] = useState(true);
  const [audioToggle, setAudioToggle] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    const startVideo = async () => {
      if (!stream && (videoToggle || audioToggle)) {
        try {
          const constraints: MediaStreamConstraints = {
            video: videoToggle,
            audio: audioToggle,
          };
          const userMediaStream = await navigator.mediaDevices.getUserMedia(constraints);
          setStream(userMediaStream);
        } catch (error) {
          console.error('Error accessing camera and/or microphone:', error);
        }
      } else if (!videoToggle || !audioToggle) {
        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
          setStream(null);
        }
      }
    };

    startVideo();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [videoToggle, audioToggle]);

  return (
    <div className="-mt-14 text-2xl">
      <h1>Live Preview</h1>
      <div>
        <label htmlFor="video-toggle">Camera:</label>
        <input
          type="checkbox"
          id="video-toggle"
          checked={videoToggle}
          onChange={() => setVideoToggle(!videoToggle)}
        />
      </div>
      <div>
        <label htmlFor="audio-toggle">Microphone:</label>
        <input
          type="checkbox"
          id="audio-toggle"
          checked={audioToggle}
          onChange={() => setAudioToggle(!audioToggle)}
        />
      </div>
      <div style={{ position: 'relative' }}>
      <video  className="  flex justify-center items-center font-bold text-lg 
          bg-no-repeat rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-50 border border-gray-100 " id="preview-video" autoPlay playsInline ref={(video) => video && (video.srcObject = stream)}></video>
        {!videoToggle && (

          <div
          className=" flex justify-center items-center font-bold text-lg 
          bg-no-repeat rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-50 border border-gray-100 "
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%', 
              height: '300%',
              background: 'inherit',
            
            }}
            >LIVE PREVIEW 🎥</div>
        )}
      </div>
    </div>
  );
};

export default CameraPreview;
