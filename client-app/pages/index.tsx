import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import { useGetBooksQuery } from '../src/generated/graphql';
import { useEffect, useState } from 'react';
import { Book } from '../src/generated/types';
import Nest from '../src/components/nest'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

const Home: NextPage = () => {
  return (
    <ApolloProvider client={client}>
      <Nest />
    </ApolloProvider>
  )
}

export default Home
