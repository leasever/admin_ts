import {TypeWithKey} from '@/models'
import {SnackbarUtilities} from '@/utilities'

const getValidationError = (errorCode: any) => {
  const codeMatcher: TypeWithKey<string> = {
    ERR_NETWORK: 'The net broke',
    ERR_BAD_REQUEST: 'Not Found',
  }
  return SnackbarUtilities.error(codeMatcher[errorCode])
}
export default getValidationError
