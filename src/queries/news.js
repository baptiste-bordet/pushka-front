import gql from "graphql-tag";

const NEWS_QUERY = gql`  
  query NewsItems {
    newsItems {
      titre
      description
      lien_youtube
      image {
        url
      }
    }
  }
`;

export default NEWS_QUERY;
