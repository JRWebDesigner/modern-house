import ProductClient from './Datos';

// Generación estática directamente en el archivo
export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' },{ id: '3' }, { id: '4' },{ id: '5' }, { id: '6' },{ id: '7' }, { id: '8' }];
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ProductClient params={params} />;
}


