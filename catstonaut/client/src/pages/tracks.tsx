import React from "react";
import { Layout, QueryResult } from "../components";
import { gql } from "../__generated__"; //  initialized Apollo Client and taken care of "generating" our types
import { useQuery } from "@apollo/client";
import { Track } from "../__generated__/graphql";
import TrackCard from "../containers/track-card";

/** TRACKS query to retrieve all tracks */
const TRACKS = gql(`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`);

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <>
      <Layout grid>
        <QueryResult error={error} loading={loading} data={data}>
          {data?.tracksForHome?.map((track: Track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </QueryResult>
      </Layout>
    </>
  );
};

export default Tracks;
