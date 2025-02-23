## Description

How to create a GraphQL server with NestJS: https://docs.nestjs.com/graphql/quick-start

Using graphql code first approach: https://docs.nestjs.com/graphql/quick-start#code-first
Using graphql schema first approach: https://docs.nestjs.com/graphql/quick-start#schema-first

This source code using both code first and schema first approach.
You can see the code first approach in the `src/modules/users` folder.
And the schema first approach in the `src/modules/schemas` folder.


Created by Cedric

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# debug mode
$ yarn run start:debug

# production mode
$ yarn run start:prod
```



GraphQL: http://localhost:3000/graphql
- Get users
```graphql

{
  users {
    id
    email
    profile {
      id
      firstName
      lastName
      address
      userId
    }
  }
}

```

- Get user by id
```graphql
{
  user(id: 1) {
    id
    email
    profile {
      id
      firstName
      lastName
      address
      userId
    }
  }
}
```
- Create user
```graphql
mutation {
  createUser(createUserInput: { 
    email: "johndoe10@example.com",
    profile: {
      firstName: "John",
      lastName: "Doe",
      address: "Vietnam"
    } 
  }) {
    id
    email
    profile {
      firstName
      lastName
      address
    }
  }
}
```
- Update user
```graphql
mutation {
  updateUser(updateUserInput: {
    id : 3,
    email: "johndoe8@example.com",
    profile: {
      firstName: "John3",
      lastName: "Doe3",
      address: "Vietnam"
    } 
  }) {
    id
    email
    profile {
      firstName
      lastName
      address
    }
  }
}
```
- Delete user
```graphql
mutation {
  removeUser(id: 11) {
    id
    email
  }
}
```



*****************************************************************

- Get books
```graphql
{
    books {
        id
        name
        title
        userId
        author {
            id
            email
            profile {
                firstName
                lastName
                address
                userId
            }

        }
    }
}

```

- Get book by id
```graphql
{
    book (id: 1) {
        id
        name
        title
        userId
        author {
            id
            email
            profile {
                firstName
                lastName
                address
                userId
            }

        }
    }
}

```

- Create book
```graphql

mutation {
  createBook(createBookInput: { 
    name: "book3",
    title: "title3",
    userId: 1
    
  }) {
    id
    name
    title
  }
}

```

- Update book
```graphql

mutation {
  updateBook(updateBookInput: {
    id : 2,
    name: "book2",
    title: "title2"
    userId: 2
  }) {
    id
  }
}

```

- Delete book
```graphql

mutation {
  removeUser(id: 3) {
    id
  }
}

```
