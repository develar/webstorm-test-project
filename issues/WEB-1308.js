function MyCustomException(message)
{
  this.message = message;
}
MyCustomException.prototype = new Error();

throw new MyCustomException('foo');