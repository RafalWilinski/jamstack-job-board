const axios = require("axios")
const graphqltag = require("graphql-tag")
const gql = require("graphql")
const { print } = gql
let config = require("./config")

if (process.env.aws_appsync_apiKey) {
  config.aws_appsync_apiKey = process.env.aws_appsync_apiKey
} else {
  config = require("./src/aws-exports")
}

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

  listings.forEach(listing => {
    const nodeContent = JSON.stringify(listing)

    const nodeMeta = {
      id: createNodeId(`my-data-${listing.id}`),
      parent: null,
      children: [],
      internal: {
        type: `Listing`,
        mediaType: `text/html`,
        content: nodeContent,
        contentDigest: createContentDigest(listing),
      },
    }

    const node = Object.assign({}, listing, nodeMeta)
    createNode(node)
  })
}
