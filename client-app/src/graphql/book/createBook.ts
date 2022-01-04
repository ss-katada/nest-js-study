import { gql } from "@apollo/client";

export const CreateBook = gql`
  mutation CreateBook($title: String, $author: String) {
    addBook(title: $title, author: $author) {
      title
      author
    }
  }
`;
