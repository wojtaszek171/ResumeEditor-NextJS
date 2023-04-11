import CVContent from '@/app/components/CVContent';

export function generateStaticParams() {
  return [{ id: 'static' }]
}

export default async function CVPage({ params }) {
  const { id } = params;

  return (
    <CVContent id={id}/>
  )
}
