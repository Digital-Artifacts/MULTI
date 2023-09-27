'use client'
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';
 
// import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"
import { Broadcast } from '@livepeer/react';

const client = createReactClient({
  provider: studioProvider({ apiKey: '' }),
});

const live = () => {
  return (
    <><LivepeerConfig client={client}>
    
  
      <NavBar />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-18">
      
      <div className="mt-10 ml-10 max-w-3xl max-h-2xl">
      <div className="p-1 shadow-xl  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
            <div className=" bg-black sm:p-10 p-6 rounded-xl">

            <Broadcast
      title="You, Live"
      streamKey=""
      // showTitle={false}
      aspectRatio="1to1"
      objectFit="cover"
      showPipButton={true}
      onPlaybackStatusUpdate={(muted) => console.log(muted)}
      // playbackStatusSelector={(state) => state.muted}
      theme={{
        borderStyles: {
          containerBorderStyle: 'solid',
        },
        colors: {
          accent: '#00a55f',
        },
        space: {
          controlsBottomMarginX: '10px',
          controlsBottomMarginY: '5px',
          controlsTopMarginX: '15px',
          controlsTopMarginY: '10px',
        },
        radii: {
          containerBorderRadius: '0px',
        },
      }}
      displayMediaOptions={{
        video: {
          width: {
            ideal: 1280,
          },
        },
      }}
    /> 
 
              
            </div>
          </div>

 

        </div>

   
        <div className=" mt-24 mr-10 grid grid-cols-2 gap-12 ">
  <div className="p-1 shadow-xl h-3/4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
  <div className=" mb-1 bg-black h-1/2  p-32 rounded-xl">.</div>
  </div>
  <div className="p-1 shadow-xl h-3/4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
  <div className="  bg-black h-1/2 text-center p-32 rounded-xl">STREAM 2</div>
  </div>
  <div className="p-1 shadow-xl h-3/4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
  <div className=" mt-1 bg-black h-1/2 text-center  py-28 rounded-xl">STREAM 3</div>
  </div>
  <div className="p-1 shadow-xl h-3/4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl">
  <div className="mt-1 bg-black h-1/2  py-28 rounded-xl"></div>
  </div>
  
</div>


      </div>
      </LivepeerConfig>
      {/* <Footer /> */}
    </>
    
  )
}


export default live