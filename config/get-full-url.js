function getFullUrl(req, type) {
  if (type) {
    return req.protocol + '://' + req.get('host') + req.originalUrl;
  }

  return req.protocol + '://' + req.get('host');
}

module.exports = getFullUrl;
