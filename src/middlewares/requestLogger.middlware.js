function requestLogger(req, res, next) {
  console.log({
    method: req.method,
    url: req.originalUrl,
    timestamp: new Date().toISOString(),
  });

  next();
}

export default requestLogger;
