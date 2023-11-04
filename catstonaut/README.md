# Odyssey Lift Off

## Odyssey Lift-off I: Basics

- [x] Feature overview and setup
- [x] Feature data requirements
- [x] Schema definition language (SDL)
- [x] Building our schema
- [x] Apollo Server
- [x] Apollo Explorer
- [x] The frontend app
- [x] Apollo Client setup
- [x] Codegen
- [x] Defining a query
- [x] The useQuery hook

Welcome to the companion app of Odyssey Lift-off I! You can [find the course lessons and instructions on Odyssey](https://odyssey.apollographql.com/lift-off-part1), Apollo's learning platform.

You can [preview the completed demo app here](https://odyssey-catstronauts.netlify.app/).

### Feature overview and setup

using pnpm

### Feature data requirements

### Schema definition language (SDL)

### Building our schema

### Apollo Server

On the backend side, our first goal is to create a GraphQL server that can:

- Receive an incoming GraphQL query from our client
- Validate that query against our newly created schema
- Populate the queried schema fields with mocked data
- Return the populated fields as a response

## Apollo Explorer

To write our test query, we'll use Apollo Explorer. The Explorer is free to use, and it provides awesome development features like interactive query building, query history, and response hints. This will make building our queries fast and fun.

## The frontend app

## Apollo Client setup

`pnpm add graphql @apollo/client`

## Codegen - Generating types

There's one important step that we need to take care of before proceeding with our TypeScript app - we need to generate the TypeScript types to represent all of the GraphQL types in our schema!

`pnpm add -D @graphql-codegen/cli @graphql-codegen/client-preset`

setup `@graphql-codegen/cli` CodegenConfig

`npm run generate`

## Defining a query

We use the gql import from our `__generated__/index.ts` file as a function, with parentheses wrapping the backticks and operation!

after defining query, the GraphQL Code Generator scan and anticipate the operations that our app will be sending. It will use this information to determine the TypeScript types for our operations.

`pnpm run generate`

## The useQuery hook

## Lift-off II: Resolvers

- [ ] Journey of a GraphQL query
- [ ] Exploring our data
- [ ] Apollo RESTDataSource
- [ ] Implementing our RESTDataSource
- [ ] The shape of a resolver
- [ ] Implementing query resolvers
- [ ] Connecting the dots in server-land
- [ ] Querying live data
- [ ] Codegen on the server
- [ ] Errors! When queries go sideways
- [ ] Journey's end

## Lift-off III: Arguments

- [ ] Feature Overview
- [ ] Updating our schema
- [ ] GraphQL arguments
- [ ] Resolver args parameter
- [ ] Resolver chains
- [ ] Query building in Apollo Sandbox
- [ ] Building the track page
- [ ] The useQuery hook - with variables
- [ ] Navigating to the track page
