import Link from "next/link";

const Navegacion = () => (
  <div>
     
    <ul>
    <h1>NameSite</h1>
      <li>
          
        <Link href="/">
          <a>Inicio</a>
        </Link>
      </li>
      <li>
        <Link href="/nosotros">
          <a>Nosotros</a>
        </Link>
      </li>
    </ul>
    <style jsx>{`
    h1 {
        color: white;
    }
      ul {
        background-color: #22a6b3;
        list-style: none;
        display: flex;
      }
      ul li {
        padding: 0.5rem 0;
        margin-right: 1rem;
      }
      ul li a {
        fontsize: 1.2rem;
        color: white;
        text-decoration: none;
      }
    `}</style>
  </div>
);

export default Navegacion;
