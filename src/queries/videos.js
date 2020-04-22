import gql from "graphql-tag";

const VIDEOS_QUERY = gql`  
  query videos {
    videos {
      titre
      lien_youtube
    }
  }
`;

export default VIDEOS_QUERY;
