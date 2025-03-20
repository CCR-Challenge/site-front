import Link from 'next/link';
import Image from 'next/image';
 
export default function Header() {
  return (
    <header className="flex justify-end items-center p-14 h-16 w-full shadow-md bg-[var(--cor-de-fundo)]">
 
      <nav aria-label="Menu principal">
        <ul className="flex list-none space-x-6">
          <li><Link href="/home" className="text-xl text-white no-underline p-7 transition-all duration-300 hover:font-bold">Home</Link></li>
          <li><Link href="/status" className="text-xl text-white no-underline p-7 transition-all duration-300 hover:font-bold">Status</Link></li>
          <li><Link href="/mapa" className="text-xl text-white no-underline p-7 transition-all duration-300 hover:font-bold">Mapa</Link></li>
          <li><Link href="/reportar" className="text-xl text-white no-underline p-7 transition-all duration-300 hover:font-bold">Reportar</Link></li>
          <li><Link href="/integrantes" className="text-xl text-white no-underline p-7 transition-all duration-300 hover:font-bold">Integrantes</Link></li>
          <li>
            <Link href="/login" className="bg-[var(--cor-botao)] text-xl text-white no-underline p-7 transition-all duration-300 hover:font-bold px-4 py-2 rounded">
              Login
            </Link>
          </li>
        </ul>
      </nav>
 
 
      <div>
        <Link href="/">
          <p className="absolute top-0.5 left-30 w-48 mt-10 text-white font-black text-2xl">SMARTTRACK.</p>
          <Image
            src="/assets/logo-site.png"
            alt="Logo do Site"
            width={45}
            height={50}
            className="absolute top-0 left-10 mt-9 h-11 transition-transform duration-300 hover:scale-110"
          />
        </Link>
      </div>
 
      <div className="ml-4">
        <Link href="/perfil">
          <Image
            src="/assets/perfil-pequeno.png"
            alt="Ícone de perfil"
            width={50}
            height={50}
            className="w-1/2 ml-6 transition-transform duration-500 ease-in-out hover:rotate-45"
          />
        </Link>
      </div>
    </header>
  );
}