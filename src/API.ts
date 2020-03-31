/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateListingInput = {
  id?: string | null,
  position: string,
  description: string,
  responsibilities?: string | null,
  requirements?: string | null,
  timezone?: string | null,
  tags?: Array< string | null > | null,
  location: string,
  applyLink: string,
  isPromoted?: boolean | null,
  salary: SalaryInput,
  createdAt: string,
  updatedAt?: string | null,
  expiresAt?: string | null,
  closedAt?: string | null,
  listingCategoryId?: string | null,
  listingCompanyId?: string | null,
};

export type SalaryInput = {
  perYearFrom?: number | null,
  perYearTo?: number | null,
  perHourFrom?: number | null,
  perHourTo?: number | null,
};

export type UpdateListingInput = {
  id: string,
  position?: string | null,
  description?: string | null,
  responsibilities?: string | null,
  requirements?: string | null,
  timezone?: string | null,
  tags?: Array< string | null > | null,
  location?: string | null,
  applyLink?: string | null,
  isPromoted?: boolean | null,
  salary?: SalaryInput | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  expiresAt?: string | null,
  closedAt?: string | null,
  listingCategoryId?: string | null,
  listingCompanyId?: string | null,
};

export type DeleteListingInput = {
  id?: string | null,
};

export type CreateCompanyInput = {
  name: string,
  logo: string,
  webpage?: string | null,
  description?: string | null,
  createdAt: string,
  updatedAt?: string | null,
};

export type UpdateCompanyInput = {
  name?: string | null,
  logo?: string | null,
  webpage?: string | null,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteCompanyInput = {
  id?: string | null,
};

export type CreateCategoryInput = {
  name: string,
  description?: string | null,
};

export type UpdateCategoryInput = {
  name?: string | null,
  description?: string | null,
};

export type DeleteCategoryInput = {
  id?: string | null,
};

export type ModelListingFilterInput = {
  id?: ModelIDFilterInput | null,
  position?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  responsibilities?: ModelStringFilterInput | null,
  requirements?: ModelStringFilterInput | null,
  timezone?: ModelStringFilterInput | null,
  tags?: ModelStringFilterInput | null,
  location?: ModelStringFilterInput | null,
  applyLink?: ModelStringFilterInput | null,
  isPromoted?: ModelBooleanFilterInput | null,
  createdAt?: ModelStringFilterInput | null,
  updatedAt?: ModelStringFilterInput | null,
  expiresAt?: ModelStringFilterInput | null,
  closedAt?: ModelStringFilterInput | null,
  and?: Array< ModelListingFilterInput | null > | null,
  or?: Array< ModelListingFilterInput | null > | null,
  not?: ModelListingFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelCompanyFilterInput = {
  name?: ModelStringFilterInput | null,
  logo?: ModelStringFilterInput | null,
  webpage?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  createdAt?: ModelStringFilterInput | null,
  updatedAt?: ModelStringFilterInput | null,
  and?: Array< ModelCompanyFilterInput | null > | null,
  or?: Array< ModelCompanyFilterInput | null > | null,
  not?: ModelCompanyFilterInput | null,
};

export type ModelCategoryFilterInput = {
  name?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type CreateListingMutationVariables = {
  input: CreateListingInput,
};

export type CreateListingMutation = {
  createListing:  {
    __typename: "Listing",
    id: string,
    position: string,
    description: string,
    responsibilities: string | null,
    requirements: string | null,
    timezone: string | null,
    tags: Array< string | null > | null,
    location: string,
    applyLink: string,
    isPromoted: boolean | null,
    salary:  {
      __typename: "Salary",
      perYearFrom: number | null,
      perYearTo: number | null,
      perHourFrom: number | null,
      perHourTo: number | null,
    },
    category:  {
      __typename: "Category",
      name: string,
      description: string | null,
      listings:  {
        __typename: "ModelListingConnection",
        nextToken: string | null,
      } | null,
    } | null,
    company:  {
      __typename: "Company",
      name: string,
      logo: string,
      webpage: string | null,
      description: string | null,
      listings:  {
        __typename: "ModelListingConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string | null,
    } | null,
    createdAt: string,
    updatedAt: string | null,
    expiresAt: string | null,
    closedAt: string | null,
  } | null,
};

export type UpdateListingMutationVariables = {
  input: UpdateListingInput,
};

export type UpdateListingMutation = {
  updateListing:  {
    __typename: "Listing",
    id: string,
    position: string,
    description: string,
    responsibilities: string | null,
    requirements: string | null,
    timezone: string | null,
    tags: Array< string | null > | null,
    location: string,
    applyLink: string,
    isPromoted: boolean | null,
    salary:  {
      __typename: "Salary",
      perYearFrom: number | null,
      perYearTo: number | null,
      perHourFrom: number | null,
      perHourTo: number | null,
    },
    category:  {
      __typename: "Category",
      name: string,
      description: string | null,
      listings:  {
        __typename: "ModelListingConnection",
        nextToken: string | null,
      } | null,
    } | null,
    company:  {
      __typename: "Company",
      name: string,
      logo: string,
      webpage: string | null,
      description: string | null,
      listings:  {
        __typename: "ModelListingConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string | null,
    } | null,
    createdAt: string,
    updatedAt: string | null,
    expiresAt: string | null,
    closedAt: string | null,
  } | null,
};

export type DeleteListingMutationVariables = {
  input: DeleteListingInput,
};

export type DeleteListingMutation = {
  deleteListing:  {
    __typename: "Listing",
    id: string,
    position: string,
    description: string,
    responsibilities: string | null,
    requirements: string | null,
    timezone: string | null,
    tags: Array< string | null > | null,
    location: string,
    applyLink: string,
    isPromoted: boolean | null,
    salary:  {
      __typename: "Salary",
      perYearFrom: number | null,
      perYearTo: number | null,
      perHourFrom: number | null,
      perHourTo: number | null,
    },
    category:  {
      __typename: "Category",
      name: string,
      description: string | null,
      listings:  {
        __typename: "ModelListingConnection",
        nextToken: string | null,
      } | null,
    } | null,
    company:  {
      __typename: "Company",
      name: string,
      logo: string,
      webpage: string | null,
      description: string | null,
      listings:  {
        __typename: "ModelListingConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string | null,
    } | null,
    createdAt: string,
    updatedAt: string | null,
    expiresAt: string | null,
    closedAt: string | null,
  } | null,
};

export type CreateCompanyMutationVariables = {
  input: CreateCompanyInput,
};

export type CreateCompanyMutation = {
  createCompany:  {
    __typename: "Company",
    name: string,
    logo: string,
    webpage: string | null,
    description: string | null,
    listings:  {
      __typename: "ModelListingConnection",
      items:  Array< {
        __typename: "Listing",
        id: string,
        position: string,
        description: string,
        responsibilities: string | null,
        requirements: string | null,
        timezone: string | null,
        tags: Array< string | null > | null,
        location: string,
        applyLink: string,
        isPromoted: boolean | null,
        createdAt: string,
        updatedAt: string | null,
        expiresAt: string | null,
        closedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string | null,
  } | null,
};

export type UpdateCompanyMutationVariables = {
  input: UpdateCompanyInput,
};

export type UpdateCompanyMutation = {
  updateCompany:  {
    __typename: "Company",
    name: string,
    logo: string,
    webpage: string | null,
    description: string | null,
    listings:  {
      __typename: "ModelListingConnection",
      items:  Array< {
        __typename: "Listing",
        id: string,
        position: string,
        description: string,
        responsibilities: string | null,
        requirements: string | null,
        timezone: string | null,
        tags: Array< string | null > | null,
        location: string,
        applyLink: string,
        isPromoted: boolean | null,
        createdAt: string,
        updatedAt: string | null,
        expiresAt: string | null,
        closedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string | null,
  } | null,
};

export type DeleteCompanyMutationVariables = {
  input: DeleteCompanyInput,
};

export type DeleteCompanyMutation = {
  deleteCompany:  {
    __typename: "Company",
    name: string,
    logo: string,
    webpage: string | null,
    description: string | null,
    listings:  {
      __typename: "ModelListingConnection",
      items:  Array< {
        __typename: "Listing",
        id: string,
        position: string,
        description: string,
        responsibilities: string | null,
        requirements: string | null,
        timezone: string | null,
        tags: Array< string | null > | null,
        location: string,
        applyLink: string,
        isPromoted: boolean | null,
        createdAt: string,
        updatedAt: string | null,
        expiresAt: string | null,
        closedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string | null,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
};

export type CreateCategoryMutation = {
  createCategory:  {
    __typename: "Category",
    name: string,
    description: string | null,
    listings:  {
      __typename: "ModelListingConnection",
      items:  Array< {
        __typename: "Listing",
        id: string,
        position: string,
        description: string,
        responsibilities: string | null,
        requirements: string | null,
        timezone: string | null,
        tags: Array< string | null > | null,
        location: string,
        applyLink: string,
        isPromoted: boolean | null,
        createdAt: string,
        updatedAt: string | null,
        expiresAt: string | null,
        closedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
};

export type UpdateCategoryMutation = {
  updateCategory:  {
    __typename: "Category",
    name: string,
    description: string | null,
    listings:  {
      __typename: "ModelListingConnection",
      items:  Array< {
        __typename: "Listing",
        id: string,
        position: string,
        description: string,
        responsibilities: string | null,
        requirements: string | null,
        timezone: string | null,
        tags: Array< string | null > | null,
        location: string,
        applyLink: string,
        isPromoted: boolean | null,
        createdAt: string,
        updatedAt: string | null,
        expiresAt: string | null,
        closedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
};

export type DeleteCategoryMutation = {
  deleteCategory:  {
    __typename: "Category",
    name: string,
    description: string | null,
    listings:  {
      __typename: "ModelListingConnection",
      items:  Array< {
        __typename: "Listing",
        id: string,
        position: string,
        description: string,
        responsibilities: string | null,
        requirements: string | null,
        timezone: string | null,
        tags: Array< string | null > | null,
        location: string,
        applyLink: string,
        isPromoted: boolean | null,
        createdAt: string,
        updatedAt: string | null,
        expiresAt: string | null,
        closedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type GetListingQueryVariables = {
  id: string,
};

export type GetListingQuery = {
  getListing:  {
    __typename: "Listing",
    id: string,
    position: string,
    description: string,
    responsibilities: string | null,
    requirements: string | null,
    timezone: string | null,
    tags: Array< string | null > | null,
    location: string,
    applyLink: string,
    isPromoted: boolean | null,
    salary:  {
      __typename: "Salary",
      perYearFrom: number | null,
      perYearTo: number | null,
      perHourFrom: number | null,
      perHourTo: number | null,
    },
    category:  {
      __typename: "Category",
      name: string,
      description: string | null,
      listings:  {
        __typename: "ModelListingConnection",
        nextToken: string | null,
      } | null,
    } | null,
    company:  {
      __typename: "Company",
      name: string,
      logo: string,
      webpage: string | null,
      description: string | null,
      listings:  {
        __typename: "ModelListingConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string | null,
    } | null,
    createdAt: string,
    updatedAt: string | null,
    expiresAt: string | null,
    closedAt: string | null,
  } | null,
};

export type ListListingsQueryVariables = {
  filter?: ModelListingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListListingsQuery = {
  listListings:  {
    __typename: "ModelListingConnection",
    items:  Array< {
      __typename: "Listing",
      id: string,
      position: string,
      description: string,
      responsibilities: string | null,
      requirements: string | null,
      timezone: string | null,
      tags: Array< string | null > | null,
      location: string,
      applyLink: string,
      isPromoted: boolean | null,
      salary:  {
        __typename: "Salary",
        perYearFrom: number | null,
        perYearTo: number | null,
        perHourFrom: number | null,
        perHourTo: number | null,
      },
      category:  {
        __typename: "Category",
        name: string,
        description: string | null,
      } | null,
      company:  {
        __typename: "Company",
        name: string,
        logo: string,
        webpage: string | null,
        description: string | null,
        createdAt: string,
        updatedAt: string | null,
      } | null,
      createdAt: string,
      updatedAt: string | null,
      expiresAt: string | null,
      closedAt: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCompanyQueryVariables = {
  id: string,
};

export type GetCompanyQuery = {
  getCompany:  {
    __typename: "Company",
    name: string,
    logo: string,
    webpage: string | null,
    description: string | null,
    listings:  {
      __typename: "ModelListingConnection",
      items:  Array< {
        __typename: "Listing",
        id: string,
        position: string,
        description: string,
        responsibilities: string | null,
        requirements: string | null,
        timezone: string | null,
        tags: Array< string | null > | null,
        location: string,
        applyLink: string,
        isPromoted: boolean | null,
        createdAt: string,
        updatedAt: string | null,
        expiresAt: string | null,
        closedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string | null,
  } | null,
};

export type ListCompanysQueryVariables = {
  filter?: ModelCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCompanysQuery = {
  listCompanys:  {
    __typename: "ModelCompanyConnection",
    items:  Array< {
      __typename: "Company",
      name: string,
      logo: string,
      webpage: string | null,
      description: string | null,
      listings:  {
        __typename: "ModelListingConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory:  {
    __typename: "Category",
    name: string,
    description: string | null,
    listings:  {
      __typename: "ModelListingConnection",
      items:  Array< {
        __typename: "Listing",
        id: string,
        position: string,
        description: string,
        responsibilities: string | null,
        requirements: string | null,
        timezone: string | null,
        tags: Array< string | null > | null,
        location: string,
        applyLink: string,
        isPromoted: boolean | null,
        createdAt: string,
        updatedAt: string | null,
        expiresAt: string | null,
        closedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListCategorysQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategorysQuery = {
  listCategorys:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      name: string,
      description: string | null,
      listings:  {
        __typename: "ModelListingConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateListingSubscriptionVariables = {
  owner: string,
};

export type OnCreateListingSubscription = {
  onCreateListing:  {
    __typename: "Listing",
    id: string,
    position: string,
    description: string,
    responsibilities: string | null,
    requirements: string | null,
    timezone: string | null,
    tags: Array< string | null > | null,
    location: string,
    applyLink: string,
    isPromoted: boolean | null,
    salary:  {
      __typename: "Salary",
      perYearFrom: number | null,
      perYearTo: number | null,
      perHourFrom: number | null,
      perHourTo: number | null,
    },
    category:  {
      __typename: "Category",
      name: string,
      description: string | null,
      listings:  {
        __typename: "ModelListingConnection",
        nextToken: string | null,
      } | null,
    } | null,
    company:  {
      __typename: "Company",
      name: string,
      logo: string,
      webpage: string | null,
      description: string | null,
      listings:  {
        __typename: "ModelListingConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string | null,
    } | null,
    createdAt: string,
    updatedAt: string | null,
    expiresAt: string | null,
    closedAt: string | null,
  } | null,
};

export type OnUpdateListingSubscriptionVariables = {
  owner: string,
};

export type OnUpdateListingSubscription = {
  onUpdateListing:  {
    __typename: "Listing",
    id: string,
    position: string,
    description: string,
    responsibilities: string | null,
    requirements: string | null,
    timezone: string | null,
    tags: Array< string | null > | null,
    location: string,
    applyLink: string,
    isPromoted: boolean | null,
    salary:  {
      __typename: "Salary",
      perYearFrom: number | null,
      perYearTo: number | null,
      perHourFrom: number | null,
      perHourTo: number | null,
    },
    category:  {
      __typename: "Category",
      name: string,
      description: string | null,
      listings:  {
        __typename: "ModelListingConnection",
        nextToken: string | null,
      } | null,
    } | null,
    company:  {
      __typename: "Company",
      name: string,
      logo: string,
      webpage: string | null,
      description: string | null,
      listings:  {
        __typename: "ModelListingConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string | null,
    } | null,
    createdAt: string,
    updatedAt: string | null,
    expiresAt: string | null,
    closedAt: string | null,
  } | null,
};

export type OnDeleteListingSubscriptionVariables = {
  owner: string,
};

export type OnDeleteListingSubscription = {
  onDeleteListing:  {
    __typename: "Listing",
    id: string,
    position: string,
    description: string,
    responsibilities: string | null,
    requirements: string | null,
    timezone: string | null,
    tags: Array< string | null > | null,
    location: string,
    applyLink: string,
    isPromoted: boolean | null,
    salary:  {
      __typename: "Salary",
      perYearFrom: number | null,
      perYearTo: number | null,
      perHourFrom: number | null,
      perHourTo: number | null,
    },
    category:  {
      __typename: "Category",
      name: string,
      description: string | null,
      listings:  {
        __typename: "ModelListingConnection",
        nextToken: string | null,
      } | null,
    } | null,
    company:  {
      __typename: "Company",
      name: string,
      logo: string,
      webpage: string | null,
      description: string | null,
      listings:  {
        __typename: "ModelListingConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string | null,
    } | null,
    createdAt: string,
    updatedAt: string | null,
    expiresAt: string | null,
    closedAt: string | null,
  } | null,
};

export type OnCreateCompanySubscriptionVariables = {
  owner: string,
};

export type OnCreateCompanySubscription = {
  onCreateCompany:  {
    __typename: "Company",
    name: string,
    logo: string,
    webpage: string | null,
    description: string | null,
    listings:  {
      __typename: "ModelListingConnection",
      items:  Array< {
        __typename: "Listing",
        id: string,
        position: string,
        description: string,
        responsibilities: string | null,
        requirements: string | null,
        timezone: string | null,
        tags: Array< string | null > | null,
        location: string,
        applyLink: string,
        isPromoted: boolean | null,
        createdAt: string,
        updatedAt: string | null,
        expiresAt: string | null,
        closedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string | null,
  } | null,
};

export type OnUpdateCompanySubscriptionVariables = {
  owner: string,
  editors: string,
};

export type OnUpdateCompanySubscription = {
  onUpdateCompany:  {
    __typename: "Company",
    name: string,
    logo: string,
    webpage: string | null,
    description: string | null,
    listings:  {
      __typename: "ModelListingConnection",
      items:  Array< {
        __typename: "Listing",
        id: string,
        position: string,
        description: string,
        responsibilities: string | null,
        requirements: string | null,
        timezone: string | null,
        tags: Array< string | null > | null,
        location: string,
        applyLink: string,
        isPromoted: boolean | null,
        createdAt: string,
        updatedAt: string | null,
        expiresAt: string | null,
        closedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string | null,
  } | null,
};

export type OnDeleteCompanySubscriptionVariables = {
  owner: string,
  editors: string,
};

export type OnDeleteCompanySubscription = {
  onDeleteCompany:  {
    __typename: "Company",
    name: string,
    logo: string,
    webpage: string | null,
    description: string | null,
    listings:  {
      __typename: "ModelListingConnection",
      items:  Array< {
        __typename: "Listing",
        id: string,
        position: string,
        description: string,
        responsibilities: string | null,
        requirements: string | null,
        timezone: string | null,
        tags: Array< string | null > | null,
        location: string,
        applyLink: string,
        isPromoted: boolean | null,
        createdAt: string,
        updatedAt: string | null,
        expiresAt: string | null,
        closedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string | null,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  owner: string,
};

export type OnCreateCategorySubscription = {
  onCreateCategory:  {
    __typename: "Category",
    name: string,
    description: string | null,
    listings:  {
      __typename: "ModelListingConnection",
      items:  Array< {
        __typename: "Listing",
        id: string,
        position: string,
        description: string,
        responsibilities: string | null,
        requirements: string | null,
        timezone: string | null,
        tags: Array< string | null > | null,
        location: string,
        applyLink: string,
        isPromoted: boolean | null,
        createdAt: string,
        updatedAt: string | null,
        expiresAt: string | null,
        closedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  owner: string,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory:  {
    __typename: "Category",
    name: string,
    description: string | null,
    listings:  {
      __typename: "ModelListingConnection",
      items:  Array< {
        __typename: "Listing",
        id: string,
        position: string,
        description: string,
        responsibilities: string | null,
        requirements: string | null,
        timezone: string | null,
        tags: Array< string | null > | null,
        location: string,
        applyLink: string,
        isPromoted: boolean | null,
        createdAt: string,
        updatedAt: string | null,
        expiresAt: string | null,
        closedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  owner: string,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory:  {
    __typename: "Category",
    name: string,
    description: string | null,
    listings:  {
      __typename: "ModelListingConnection",
      items:  Array< {
        __typename: "Listing",
        id: string,
        position: string,
        description: string,
        responsibilities: string | null,
        requirements: string | null,
        timezone: string | null,
        tags: Array< string | null > | null,
        location: string,
        applyLink: string,
        isPromoted: boolean | null,
        createdAt: string,
        updatedAt: string | null,
        expiresAt: string | null,
        closedAt: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};
