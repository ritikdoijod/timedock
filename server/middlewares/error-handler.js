class CustomError extends Error {
  constructor(status, code, message, errors) {
    super(message);
    this.status = status;
    this.code = code;
    this._errors = errors
  }
}

const errorHandler = (err, req, res, next) => {
  // TODO: this is a redundant error check. Remove it if not required.
  if (!err) return next();

  const { status = 500, code = 500, message = 'Something went wrong', _errors = [] } = err;

  return res.status(status).json({
    status: 'error',
    data: null,
    error: {
      code,
      message,
      _errors
    }
  })
}

export { CustomError, errorHandler };
