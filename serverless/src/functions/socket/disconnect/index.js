const { deleteUserConnection } = require('../../models/UserConnection');

exports.handler = async (event, context, callback) => {
  const { connectionId } = event.requestContext;

  deleteUserConnection({ connectionId });
  callback(null, {
    statusCode: 200,
    body: "disconnected"
  });
};

