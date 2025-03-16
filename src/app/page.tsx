import Link from 'next/link';
import '../app/globals.css';

export default function Inicial() {
  return (
    <>
      <main className="min-h-screen flex flex-col justify-center -mt-20">
        <h1 className="titulo">SMARTTRACK.</h1>
        <p className="ml-[10.2vw] w-[40%] text-[1.5rem] opacity-70 font-bold text-white">
          Transforme a experiência dos usuários e simplifique a administração com tecnologia de ponta.
        </p>
        <div className="flex ml-[22.5vw] mt-10">
          <Link
            href="/registro"
            className="bg-[var(--cor-botao)] text-white font-semibold text-xl px-9 py-5 rounded-2xl transition-all duration-300 ease-in-out hover:bg-[var(--botao-hover)] hover:scale-105">
            Registre-se
          </Link>
        </div>
      </main>
    </>
  );
}

