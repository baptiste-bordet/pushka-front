import gql from "graphql-tag";

const GALLERIES_QUERY = gql`  
  query Galleries {
    galleries {
      titre
      photos {
        url
      }
    }
  }
`;

export default GALLERIES_QUERY;
