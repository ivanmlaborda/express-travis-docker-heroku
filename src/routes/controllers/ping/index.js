const pingController = async (_, res) => {
  try {
    res.status(200).json({
      response: 'pong'
    })
  } catch (err) {
    res.status(400).send(err)
  }
}

module.exports = {
  pingController
}
