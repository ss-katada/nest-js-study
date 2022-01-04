import { BookDetailFieldsFragment } from "../generated/graphql";

const Detail = (props: {fragment: BookDetailFieldsFragment}) => {
    const { fragment } = props;
  return (
    <div>
        {fragment.description}
        {fragment.price}
    </div>
  )
}

export default Detail
