import { gql } from "@apollo/client";
import { BookDetailFields } from "./detail/fragment";

export const GetBooks = gql`
  ${BookDetailFields}
  query GetBooks {
    books {
      ...BookDetailFields
    }
  }
`;
