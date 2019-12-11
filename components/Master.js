import Head from "next/head";
import Navegacion from '../components/Navegacion';

const MasterPage = ({children}) => (
  <div>
    <Head>
      <title> BitCoin App</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="stylesheet" href="https://bootswatch.com/4/materia/bootstrap.min.css" />
    </Head>
    <Navegacion />

        {children}

  </div>
);
export default MasterPage;
