import Head from "next/head";
import HeaderComponent from "../HeaderComponent/HeaderComponent";

const Layout = ({ children }) => {

  return (
    <>
      <Head>
        <title>{`Next.js CV manager`}</title>
      </Head>
      <HeaderComponent />
      {children}
    </>
  )
}

export default Layout

