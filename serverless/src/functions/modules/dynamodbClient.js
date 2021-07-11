const AWS = require('aws-sdk');
const getDynamodbClient = () => {
  return new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://dynamodb:8000',
  });
};

exports.dynamodbClient = getDynamodbClient();
