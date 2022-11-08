import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa'

const PlayPause = ({
  activeSong,
  isPlaying,
  song,
  handlePauseClick,
  handlePlayClick,
}) => {
  return (
    <div>
      {isPlaying && activeSong?.title === song.title ? (
        <FaPauseCircle
          size={35}
          className="text-gray-300"
          onClick={handlePauseClick}
        />
      ) : (
        <FaPlayCircle
          size={35}
          className="text-gray-300"
          onClick={handlePlayClick}
        />
      )}
    </div>
  )
}

export default PlayPause
