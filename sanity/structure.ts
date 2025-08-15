import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Panel Administrativo')
    .items([
      S.documentTypeListItem('muebles').title('MUebles'),
      S.documentTypeListItem('category').title('Categoria'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['muebles', 'category'].includes(item.getId()!),
      ),
    ])
