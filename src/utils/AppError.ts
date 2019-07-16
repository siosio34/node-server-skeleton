// centralized error object that derives from Node’s Error
function AppError(
  name: string,
  httpCode: number,
  description: string,
  isOperational: boolean
) {
  Error.call(this);
  Error.captureStackTrace(this);
  this.name = name;
  this.httpCode = httpCode;
  this.description = description;
  this.isOperational = isOperational;
}

AppError.prototype.__proto__ = Error.prototype;

module.exports.AppError = AppError;

// client throwing an exception
// if (user == null) {
//   throw new AppError(
//     commonErrors.resourceNotFound,
//     commonHTTPErrors.notFound,
//     "further explanation",
//     true
//   );
// }
