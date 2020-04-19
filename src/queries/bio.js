import gql from "graphql-tag";

const BIO_QUERY = gql`  
  query Bio {
    bio {
      description
      image {
        url
      }
    }
  }
`;

export default BIO_QUERY;
