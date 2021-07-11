const { apigwManagementApi } = require('../../modules/apiGw');
const {
  getUserConnection,
  deleteUserConnection,
  scanUserConnection,
} = require('../../models/UserConnection');
const { createChatMessage } = require('../../models/ChatMessage');

exports.handler = async (event, context, callback) => {
  const body = JSON.parse(event.body);
  const messageBody = JSON.stringify({
    message: body.message,
  });
  const { connectionId, requestTimeEpoch } = event.requestContext;
  const { userId, roomSlug } = await getUserConnection({ connectionId });
  const messageRecord = {
    requestTime: requestTimeEpoch,
    userId,
    roomSlug,
    messageBody
  }

  createChatMessage(messageRecord);

  const result = await scanUserConnection({
    FilterExpression: 'roomSlug = :roomSlug',
    ExpressionAttributeValues: { ':roomSlug' : roomSlug }
  });
  messageRecord.messageType = 'postMessage'
  const postParams = { Data: JSON.stringify(messageRecord) };
  const apigw = apigwManagementApi();
  result.forEach((element) => {
    console.log(element.connectionId);
    const postData = {
      ...postParams,
      ConnectionId: element.connectionId
    }
    apigw.postToConnection(postData, (err) => {
      console.log(err);
      console.log(postData);
      if (err && err.statusCode === 410) {
        deleteUserConnection({ connectionId: element.connectionId });
      }
    });
  });
};
