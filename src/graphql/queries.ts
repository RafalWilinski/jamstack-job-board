// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const getListing = /* GraphQL */ `
  query GetListing($id: ID!) {
    getListing(id: $id) {
      id
      position
      description
      responsibilities
      requirements
      timezone
      tags
      location
      applyLink
      isPromoted
      salary {
        perYearFrom
        perYearTo
        perHourFrom
        perHourTo
      }
      category {
        name
        description
        listings {
          nextToken
        }
      }
      company {
        name
        logo
        webpage
        description
        listings {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      expiresAt
      closedAt
    }
  }
`;
export const listListings = /* GraphQL */ `
  query ListListings(
    $filter: ModelListingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        position
        description
        responsibilities
        requirements
        timezone
        tags
        location
        applyLink
        isPromoted
        salary {
          perYearFrom
          perYearTo
          perHourFrom
          perHourTo
        }
        category {
          name
          description
        }
        company {
          name
          logo
          webpage
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        expiresAt
        closedAt
      }
      nextToken
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      name
      logo
      webpage
      description
      listings {
        items {
          id
          position
          description
          responsibilities
          requirements
          timezone
          tags
          location
          applyLink
          isPromoted
          createdAt
          updatedAt
          expiresAt
          closedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCompanys = /* GraphQL */ `
  query ListCompanys(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        logo
        webpage
        description
        listings {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      name
      description
      listings {
        items {
          id
          position
          description
          responsibilities
          requirements
          timezone
          tags
          location
          applyLink
          isPromoted
          createdAt
          updatedAt
          expiresAt
          closedAt
        }
        nextToken
      }
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        description
        listings {
          nextToken
        }
      }
      nextToken
    }
  }
`;
