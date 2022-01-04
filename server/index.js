const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
    category: String
    description: String
    price: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(title: String, author: String, category: String, description: String, price: Int): Book
  }
`;

const books = [
  {
    title: 'タイトル１',
    author: '作者A',
    category: 'サスペンス',
    description: 'ああああああああああああああああああ',
    price: 1000
  },
  {
    title: 'タイトル２',
    author: '作者B',
    category: 'ドキュメンタリー',
    description: 'いいいいいいいいいいい',
    price: 2000
  },
  {
    title: 'タイトル３',
    author: '作者A',
    category: 'コメディ',
    description: 'うううううううううううう',
    price: 5000
  },
  {
    title: 'タイトル４',
    author: '作者C',
    category: 'コメディ',
    description: 'えええええええええええええ',
    price: 3000
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    addBook: (_, book) => {
      // console.log(title)
      books.push(book)
      return book
    }
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

