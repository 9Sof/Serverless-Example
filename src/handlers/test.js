exports.test = async (event) => {
  console.log(event.queryStringParameters)

  return {
    statusCode: 200,
    body: JSON.stringify('Hello From lambda')
  }
}

exports.test2 = async (event) => {
  console.log(event)

  return {
    statusCode: 200,
    body: JSON.stringify('Hello From test2')
  }
}
