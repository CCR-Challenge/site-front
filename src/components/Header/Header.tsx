import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <img src="/assets/logo-site.png" alt="Logo do Site" className="logo__principal" />

        <p className="logo__alternativa">SMARTTRACK.</p>
      </Link>
      <nav className="header__menu">
        <ul className="menu__lista">
          <li className="menu__link"><Link href="/home">Home</Link></li>
          <li className="menu__link"><Link href="/status">Status</Link></li>
          <li className="menu__link"><Link href="/mapa">Mapa</Link></li>
          <li className="menu__link"><Link href="/reportar">Reportar</Link></li>
          <li className="menu__link"><Link href="/integrantes">Integrantes</Link></li>
          <li>
            <Link
              href="/login"
              className="menu__botao-login">
              Login
            </Link>
          </li>
        </ul>
      </nav>

      <div>
      <a href="perfil.html">
        <img 
          src="../assets/perfil-pequeno.png" 
          alt="Ícone de perfil" 
          className="w-1/2 ml-[1.5vw] transition-transform duration-500 ease-in-out hover:rotate-[50deg]"
        />
      </a>
    </div>
    </header>
  );
}