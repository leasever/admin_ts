import {CustomShadowsInteface} from '@/theme/customShadows'

interface AutocompleteInterface {
  customShadows?: CustomShadowsInteface
}

export default function Autocomplete(theme: AutocompleteInterface) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows!.z20,
        },
      },
    },
  }
}
