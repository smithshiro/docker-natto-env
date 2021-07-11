const AWS = require('aws-sdk');
require('aws-sdk/clients/apigatewaymanagementapi');

const getApigw = (domainName = null, stage = null) => {
  return new AWS.ApiGatewayManagementApi({
    apiVersion: "2018-11-29",
    endpoint: 'http://localhost:3000'
  });
}

exports.apigwManagementApi = getApigw;
