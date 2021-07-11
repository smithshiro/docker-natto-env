const { dynamodbClient } = require('../modules/dynamodbClient');
const TableName = 'UserConnection';

exports.scanUserConnection = async ({
  FilterExpression,
  ExpressionAttributeValues
}) => {
  const { Items } = await dynamodbClient.scan({
    TableName,
    FilterExpression,
    ExpressionAttributeValues,
  }).promise();
  return Items;
}

exports.getUserConnection = async ({ connectionId }) => {
  const params = {
    TableName,
    Key: {
      connectionId
    }
  };
  try {
    const { Item } = await dynamodbClient.get(params).promise();
    return Item;
  } catch (e) {
    console.error(e);
  }
}

exports.createUserConnection = async (items) => {
  const params = {
    TableName,
    Item: {
      ...items
    }
  };
  dynamodbClient.put(params, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  });
}

exports.deleteUserConnection = async ({ connectionId }) => {
  const params = {
    TableName,
    Key: {
      connectionId,
    }
  };
  dynamodbClient.delete(params, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  });
}

