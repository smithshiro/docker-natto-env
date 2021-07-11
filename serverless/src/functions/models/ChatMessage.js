const { dynamodbClient } = require('../modules/dynamodbClient');

exports.createChatMessage = async (items) => {
  const params = {
    TableName: 'ChatMessage',
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

