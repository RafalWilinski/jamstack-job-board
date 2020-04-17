const awsmobile = {
  aws_project_region: "us-west-2",
  aws_cognito_identity_pool_id:
    "us-west-2:5f868b86-2a1d-4643-95d6-e536811bad75",
  aws_cognito_region: "us-west-2",
  aws_user_pools_id: "us-west-2_XvdjBR7dl",
  aws_user_pools_web_client_id: "6crfbjihua6fpjq5ulsf17brbi",
  oauth: {
    domain:
      "jamstack-job-boardd25d9def-d25d9def-dev.auth.us-west-2.amazoncognito.com",
    scope: [
      "phone",
      "email",
      "openid",
      "profile",
      "aws.cognito.signin.user.admin",
    ],
    redirectSignIn: "http://localhost/",
    redirectSignOut: "http://localhost/logout/",
    responseType: "code",
  },
  federationTarget: "COGNITO_USER_POOLS",
  aws_appsync_graphqlEndpoint:
    "https://dtvlz2a2yne3behn36qxvjbtb4.appsync-api.us-west-2.amazonaws.com/graphql",
  aws_appsync_region: "us-west-2",
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
}

module.exports = awsmobile
