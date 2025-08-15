import { type SchemaTypeDefinition } from 'sanity'

import {categoryType} from './categoryType'
import {mueblesType} from './postType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [mueblesType, categoryType],
}
