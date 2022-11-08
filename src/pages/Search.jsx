import React from 'react'
import { Error, Loader, SongCard } from '../components'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useGetSongsBySearchQuery } from '../redux/services/shazamCore'

const Search = () => {
  const { searchTerm } = useParams()
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm)

  const songs = data?.tracks?.hits?.map((song) => song.track)

  if (isFetching) return <Loader title="Loading top charts..." />

  if (error) return <Error />

  return (
    <div className="flex flex-col">
      <h2 className="mb-4 mt-10 font-bold text-white text-left text-3xl">
        Showing results for <span className="font-black">"{searchTerm}"</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  )
}

export default Search
