class CustomError extends Error {
  publicMessage: any;
  // eslint-disable-next-line no-unused-vars
  constructor(public statusCode: number, message: string) {
    super(message);
  }
}

export default CustomError;
