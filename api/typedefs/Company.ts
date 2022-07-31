import { gql } from "apollo-server-express";

export const CompanyTypedefs = gql`
  type Query {
    company(id: ID!): Company
    companies(searchTerm: String): [Company]
    getCompanyByCategory(category: String!): [Company]
  }

  type Company {
    id: ID
    name: String!
    category: String!
    logo: String!
    city: String!
  }
`;
