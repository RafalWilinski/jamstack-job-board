// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const createListing = /* GraphQL */ `
  mutation CreateListing($input: CreateListingInput!) {
    createListing(input: $input) {
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
export const updateListing = /* GraphQL */ `
  mutation UpdateListing($input: UpdateListingInput!) {
    updateListing(input: $input) {
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
export const deleteListing = /* GraphQL */ `
  mutation DeleteListing($input: DeleteListingInput!) {
    deleteListing(input: $input) {
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
export const createCompany = /* GraphQL */ `
  mutation CreateCompany($input: CreateCompanyInput!) {
    createCompany(input: $input) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany($input: UpdateCompanyInput!) {
    updateCompany(input: $input) {
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany($input: DeleteCompanyInput!) {
    deleteCompany(input: $input) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory($input: CreateCategoryInput!) {
    createCategory(input: $input) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory($input: UpdateCategoryInput!) {
    updateCategory(input: $input) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory($input: DeleteCategoryInput!) {
    deleteCategory(input: $input) {
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
