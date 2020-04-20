import gql from "graphql-tag";

const CONCERTS_QUERY = gql`  
  query Concerts {
    concerts {
      date
      nom
      lieu
      lien
    }
  }
`;

export default CONCERTS_QUERY;
