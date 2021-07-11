const { createUserConnection } = require('../../models/UserConnection');

exports.handler = async (event, context, callback) => {
  const { userId, roomSlug } = event.queryStringParameters;
  const { connectionId, requestTimeEpoch } = event.requestContext;
  console.log(userId, roomSlug, connectionId, requestTimeEpoch);
  const messageRecord = {
    connectionId,
    requestTime: requestTimeEpoch,
    userId,
    roomSlug
  }
  createUserConnection(messageRecord);

  callback(null, {
    statusCode: 200,
    body: 'connected'
  })
};

