import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
      <Link href="/" aria-label='Voltar para a página principal'>
        <Image
          src="/assets/logo-site.png"
          alt="Logo do Site"
          width={45}
          height={50}
          className="logo__principal"
        />

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
        <Link href="/perfil" aria-label='Ir para o perfil'>
          <Image
            src="/assets/perfil-pequeno.png"
            alt="Ícone de perfil"
            width={100}
            height={100}
            className="w-1/2 ml-[1.2vw] mb-2 transition-transform duration-500 ease-in-out hover:rotate-[50deg]"
          />
        </Link>
      </div>
    </header>
  );
}