import gql from "graphql-tag";

const BANNER_QUERY = gql`  
  query Banner {
    banner {
      image {
        url
      }
    }
  }
`;

export default BANNER_QUERY;
