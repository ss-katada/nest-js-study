import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/client/react/components';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBook?: Maybe<Book>;
};


export type MutationAddBookArgs = {
  author?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  books?: Maybe<Array<Maybe<Book>>>;
};

export type CreateBookMutationVariables = Exact<{
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
}>;


export type CreateBookMutation = { __typename?: 'Mutation', addBook?: { __typename?: 'Book', title?: string | null | undefined, author?: string | null | undefined } | null | undefined };

export type BookDetailFieldsFragment = { __typename?: 'Book', description?: string | null | undefined, price?: number | null | undefined };

export type GetBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBooksQuery = { __typename?: 'Query', books?: Array<{ __typename?: 'Book', description?: string | null | undefined, price?: number | null | undefined } | null | undefined> | null | undefined };

export const BookDetailFieldsFragmentDoc = gql`
    fragment BookDetailFields on Book {
  description
  price
}
    `;
export const CreateBookDocument = gql`
    mutation CreateBook($title: String, $author: String) {
  addBook(title: $title, author: $author) {
    title
    author
  }
}
    `;
export type CreateBookMutationFn = Apollo.MutationFunction<CreateBookMutation, CreateBookMutationVariables>;
export type CreateBookComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateBookMutation, CreateBookMutationVariables>, 'mutation'>;

    export const CreateBookComponent = (props: CreateBookComponentProps) => (
      <ApolloReactComponents.Mutation<CreateBookMutation, CreateBookMutationVariables> mutation={CreateBookDocument} {...props} />
    );

export type CreateBookProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateBookMutation, CreateBookMutationVariables>
    } & TChildProps;
export function withCreateBook<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateBookMutation,
  CreateBookMutationVariables,
  CreateBookProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateBookMutation, CreateBookMutationVariables, CreateBookProps<TChildProps, TDataName>>(CreateBookDocument, {
      alias: 'createBook',
      ...operationOptions
    });
};

/**
 * __useCreateBookMutation__
 *
 * To run a mutation, you first call `useCreateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookMutation, { data, loading, error }] = useCreateBookMutation({
 *   variables: {
 *      title: // value for 'title'
 *      author: // value for 'author'
 *   },
 * });
 */
export function useCreateBookMutation(baseOptions?: Apollo.MutationHookOptions<CreateBookMutation, CreateBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBookMutation, CreateBookMutationVariables>(CreateBookDocument, options);
      }
export type CreateBookMutationHookResult = ReturnType<typeof useCreateBookMutation>;
export type CreateBookMutationResult = Apollo.MutationResult<CreateBookMutation>;
export type CreateBookMutationOptions = Apollo.BaseMutationOptions<CreateBookMutation, CreateBookMutationVariables>;
export const GetBooksDocument = gql`
    query GetBooks {
  books {
    ...BookDetailFields
  }
}
    ${BookDetailFieldsFragmentDoc}`;
export type GetBooksComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetBooksQuery, GetBooksQueryVariables>, 'query'>;

    export const GetBooksComponent = (props: GetBooksComponentProps) => (
      <ApolloReactComponents.Query<GetBooksQuery, GetBooksQueryVariables> query={GetBooksDocument} {...props} />
    );

export type GetBooksProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetBooksQuery, GetBooksQueryVariables>
    } & TChildProps;
export function withGetBooks<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetBooksQuery,
  GetBooksQueryVariables,
  GetBooksProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetBooksQuery, GetBooksQueryVariables, GetBooksProps<TChildProps, TDataName>>(GetBooksDocument, {
      alias: 'getBooks',
      ...operationOptions
    });
};

/**
 * __useGetBooksQuery__
 *
 * To run a query within a React component, call `useGetBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBooksQuery(baseOptions?: Apollo.QueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
      }
export function useGetBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
        }
export type GetBooksQueryHookResult = ReturnType<typeof useGetBooksQuery>;
export type GetBooksLazyQueryHookResult = ReturnType<typeof useGetBooksLazyQuery>;
export type GetBooksQueryResult = Apollo.QueryResult<GetBooksQuery, GetBooksQueryVariables>;