import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Panel Administrativo')
    .items([
      S.documentTypeListItem('mueblesType').title('Muebles'),
      S.documentTypeListItem('categoryType').title('Categoria'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['mueblesType', 'categoryType'].includes(item.getId()!),
      ),
    ])
