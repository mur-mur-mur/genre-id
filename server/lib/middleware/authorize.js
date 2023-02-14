const ADMIN = process.env.ADMIN;

module.exports = async (req, res, next) => {
  try {
    
    if (!req.user || req.user.email !== ADMIN)
      throw new Error('You do not have access to view this page');

    next();

  } catch (e) {
    
    e.status = 403;
    next(e);
  
  }
};
