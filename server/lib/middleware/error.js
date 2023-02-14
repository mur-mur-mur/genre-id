module.exports = (e, req, res, next) => {
  
  const status = e.status || 500;

  res.status(status);

  if (process.env.NODE_ENV !== 'test') {
    console.error(e);
  }

  res.send({
    status,
    message: 'Ⓔ Ⓔ Ⓔ Ⓔ Ⓔ ' + e.message + 'Ⓔ Ⓔ Ⓔ Ⓔ Ⓔ'
  });

  next();

};
