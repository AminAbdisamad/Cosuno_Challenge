import { gql } from "apollo-server-express";

export const CompanyTypedefs = gql`
  type Query {
    company(id: ID!): Company
    companies(searchTerm: String): [Company]
    getCompanyByCategory(category: String!): [Company]
  }
  # type Mutation {
  #   # User
  #   createUser(data: CreateUserInput!): UserPayload!
  #   updateUser(data: UpdateUserInput): User
  #   deleteUser: User
  #   # Login
  #   login(email: String!, password: String!): UserPayload!
  #   forgetPassword(email: String!): UserPayload!
  #   #Logout
  #   logout: Boolean!
  # }
  # input CreateUserInput {
  #   userId: String
  #   email: String
  #   username: String
  #   password: String
  #   fullName: String
  #   role: ROLE
  #   status: USERSTATUS
  # }
  # input UpdateUserInput {
  #   email: String
  #   username: String
  #   password: String
  #   fullName: String
  #   role: ROLE
  #   status: USERSTATUS
  # }

  type Company {
    id: ID
    name: String!
    category: String!
    logo: String!
    city: String!
  }
  # type UserPayload {
  #   token: String!
  #   user: User!
  # }
`;
