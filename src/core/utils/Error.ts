export default class Error {
  public static FormatError(error:any):any{

    if(error && error.data && error.data.responseBody)
    {
      return error.data.responseBody['odata.error'].message.value;
    }
    return error;
  }
}

