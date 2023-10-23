const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.orinalUrl}`)
  res.status(404)
  next(error)
}

export default notFound