## Casuno Coding Chellenge

First clone the repository

```bash
git clone git@github.com:AminAbdisamad/Cosuno_Challenge.git
```

Navigate to `Cosuno_Challenge` directory

### Api setup Instructions

```bash
cd api
yarn # Installs all dependencies
yarn dev # Servers the graphql server in dev
yarn build # builds the app and creates a new folder (dist) in the root directory
yarn start # starts the dist

```

### Frontend Instructions

```bash
cd frontend
yarn # Installs all dependencies
yarn dev # Nextjs development in dev
yarn build # builds the app and creates a new folder (.next) in the root directory
yarn start # starts from production ready applicaiton

```

In addition, make a list of ideas on how you would improve this application if you had more time to work on It

Here's how I would I have improved this application if this was a real app

1. I might have used GraphQL libraries such as TypeGraphQL or NestJS with GraphQL if it was a large application. GraphQL schema based is a good choice for most of the time, but I prefer code first since it handles Typescript and Schema type. now, I'm using schema first because I'm creating a minimal Application. I'm sure there also great solutions when using schema first graphl.

2. In the frontend_app I would have used GraphQL codegen to generate code from the graphql schema, this will make sure that all typescript types in the backend is also available in the frontend with only source of truth "the graphQL Schema"

3. I would you have added some sort of ORM if I had to connect the app to the database TypeORM and Prisma are both very comptabile with GrapQL
4. I would have
