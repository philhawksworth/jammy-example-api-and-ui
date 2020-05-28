exports.handler = (event, context, callback) => {

  const data = event.queryStringParameters;

  callback(null, {
    statusCode: 200,
    body: "<h1>Hello from a function!</h1>" + JSON.stringify(data)
  });

}
