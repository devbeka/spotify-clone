import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components'
import { setActiveSong, playPause } from '../redux/features/playerSlice'
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from '../redux/services/shazamCore'

const SongDetails = () => {
  const dispatch = useDispatch()
  const { songid } = useParams()
  const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery(songid)
  const { data, isFetching, isFetchingRelatedSongs, error } = useGetSongRelatedQuery(songid)

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({song, data, i}))
    dispatch(playPause(true))
  }
  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  if (isFetchingRelatedSongs || isFetchingSongDetails)
    return <Loader title="Searching song details..." />

  if(error) return <Error />

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
        <div className="mt-5">
          {songData?.sections[1].type === 'LYRICS' ? (
            songData?.sections[1].text.map((Line, i) => (
              <p key={i} className="text-gray-400 text-base my-1">
                {Line}
              </p>
            ))
          ) : (
            <p className="text-gray-400 text-base">Sorry, no lyrics found :(</p>
          )}
        </div>
      </div>
      <RelatedSongs
        data={data}
        handlePlayClick={handlePlayClick}
        handlePauseClick={handlePauseClick}
      />
    </div>
  )
}

export default SongDetails
