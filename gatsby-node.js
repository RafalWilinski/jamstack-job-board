const axios = require("axios")
const graphqltag = require("graphql-tag")
const gql = require("graphql")
const config = require("./src/aws-exports")
const { print } = gql

const getListings = `
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
        id
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
`

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions
  const imageKeys = []
  let authorImages = []

  const getSettingsData = await axios({
    url: config.aws_appsync_graphqlEndpoint,
    method: "post",
    headers: {
      "x-api-key": config.aws_appsync_apiKey,
    },
    data: {
      query: print(graphqltag(getListings)),
    },
  })

  const listings = getSettingsData.data.data.listListings.items
  const slugs = listings.map(listing => listing.id)

  const slugData = {
    key: "page-slugs",
    data: slugs.length ? slugs : "none",
  }
  const slugNodeMeta = {
    id: createNodeId(`my-data-${slugData.key}`),
    parent: null,
    children: [],
    internal: {
      type: `Slugs`,
      contentDigest: createContentDigest(slugData),
    },
  }
  const slugNode = Object.assign({}, slugData, slugNodeMeta)
  createNode(slugNode)
}
