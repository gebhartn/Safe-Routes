const BadRequest = () => ({
  message: 'Bad Request',
  code: 400,
});

const Unauthorized = () => ({
  message: 'Unauthorized',
  code: 401,
});

const NotFound = () => ({
  message: 'Not Found',
  code: 404,
});

const InternalServerError = () => ({
  message: 'Internal Server Error',
  code: 500,
});

const BadGateWay = () => ({
  message: 'Bad Gateway',
  code: 502,
});

const exceptionMap = {
  502: BadGateWay,
  500: InternalServerError,
  404: NotFound,
  401: Unauthorized,
  400: BadRequest,
};

export default (status, map = exceptionMap) => map[status]();
