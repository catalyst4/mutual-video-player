import Head from 'next/head'
import { VideoPlayer } from '../components/video-player/VideoPlayer'
export default function Home() {

  return (
    <>
      <Head>
        <title>Mutual</title>
      </Head>
      <div className="flex justify-center items-center w-full h-full p-2">
        <VideoPlayer 
          src="https://player.vimeo.com/external/467667443.hd.mp4?s=6a8b8db8c42a3ae77ea3125ba7cbdfedd8d7dda6&profile_id=174" 
          title="Video Title" 
          autoPlay 
          loop
        />
      </div>
    </>
  )
}
