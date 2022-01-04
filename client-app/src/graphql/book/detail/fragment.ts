import { gql } from "@apollo/client";

export const BookDetailFields = gql`
  fragment BookDetailFields on Book {
    description
    price
  }
`;
