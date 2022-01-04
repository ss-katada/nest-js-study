
import { filter } from 'graphql-anywhere';
import { useGetBooksQuery, useCreateBookMutation, BookDetailFieldsFragment, BookDetailFieldsFragmentDoc } from '../../src/generated/graphql';
import Detail from './detail';

const Nest = () => {
  const { data, loading, error } = useGetBooksQuery()
  console.log(data);

  const [createBook] = useCreateBookMutation({
    onCompleted: (data) => {
      console.log("created !!")
      console.log(data)
    },
    onError: (error) => {
      console.log(error);

    }
  })

  const handleClick = () => {
    createBook({
      variables: {
        title: "hoge",
        author: "test",
      }
    })
  }

  return (
    <div>
      {data && data.books?.map((book, index) => (
        <div key={index}>
          {/* {book?.description} */}
          <Detail fragment={filter<BookDetailFieldsFragment>(BookDetailFieldsFragmentDoc, book)} />
        </div>
      ))}
      {/* <button onClick={handleClick}>test</button> */}
    </div>
  )
}

export default Nest
