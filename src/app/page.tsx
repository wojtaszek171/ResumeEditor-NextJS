import Head from 'next/head'
import restService from './api/restService'
import HeaderComponent from './components/HeaderComponent'

export default async function Index() {  
  const allCvs = await restService.fetchCVs()

  return (
    <>
      <Head>
        <title>{`Next.js CV manager`}</title>
      </Head>
      <HeaderComponent />
      {allCvs.map((cv) => <span key={cv.id}>{cv.userId}</span>)}
    </>
  )
}
