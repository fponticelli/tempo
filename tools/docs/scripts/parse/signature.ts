import { stripImportTypes } from './utils'

export const adjustSignature = (signature: string ) => {
  signature = signature.trim()
  if (signature.startsWith('export ')) {
    signature = signature.substring(7)
  }
  signature = stripImportTypes(signature)
  return signature
}
