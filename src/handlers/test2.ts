exports.test = async (event: any) => {
  console.log('test2', event)

  return {
    statusCode: 200,
    body: JSON.stringify('Hello From test2')
  }
}