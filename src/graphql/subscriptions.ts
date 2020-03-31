// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateListing = /* GraphQL */ `
  subscription OnCreateListing($owner: String!) {
    onCreateListing(owner: $owner) {
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
export const onUpdateListing = /* GraphQL */ `
  subscription OnUpdateListing($owner: String!) {
    onUpdateListing(owner: $owner) {
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
export const onDeleteListing = /* GraphQL */ `
  subscription OnDeleteListing($owner: String!) {
    onDeleteListing(owner: $owner) {
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
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany($owner: String!) {
    onCreateCompany(owner: $owner) {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany($owner: String!, $editors: String!) {
    onUpdateCompany(owner: $owner, editors: $editors) {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany($owner: String!, $editors: String!) {
    onDeleteCompany(owner: $owner, editors: $editors) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($owner: String!) {
    onCreateCategory(owner: $owner) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($owner: String!) {
    onUpdateCategory(owner: $owner) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($owner: String!) {
    onDeleteCategory(owner: $owner) {
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
