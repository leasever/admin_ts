import { TypeWithKey } from '../models'

const getValidationError = (errorCode: any) => {
  const codeMatcher: TypeWithKey<string> = {
    ERR_NETWORK: 'The net broke',
    ERR_BAD_REQUEST: 'Not Found'
  }
  return codeMatcher[errorCode]
}

export default getValidationError
