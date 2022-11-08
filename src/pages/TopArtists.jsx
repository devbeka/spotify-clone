import React from 'react'
import { Error, Loader, ArtistCard } from '../components'
import { useGetTopChartsQuery } from '../redux/services/shazamCore'

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery()

  if (isFetching) return <Loader title="Loading top artists..." />

  if (error) return <Error />

  return (
    <div className="flex flex-col">
      <h2 className="mb-4 mt-10 font-bold text-white text-left text-3xl">
        Top artists now
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((track) => (
          <ArtistCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  )
}

export default TopArtists
