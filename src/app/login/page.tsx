import '../globals.css';
import Link from 'next/link';

const Login = () => {
  return (
    <main className="mt-[10vh]">
      <section>
        <h1 className="ml-[13.5vw] w-[60%] text-[6rem] font-extrabold text-white">
          Bem-vindo, faça login para continuar
        </h1>

        <form aria-live="polite" id="formLogin" className="p-4">
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email:"
              required
              className="bg-white ml-[12.5vw] w-[40%] p-6 mt-4 rounded-xl border-none font-primary"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Senha:"
              required
              className="bg-white ml-[12.5vw] w-[40%] p-6 mt-4 rounded-xl border-none font-primary"
            />
          </div>

          <div className="mt-[5vh] ml-[27vw]">
            <Link href="/home">
              <button
                type="submit"
                className="bg-[var(--cor-botao)] w-[15%] text-center border-none p-4 text-xl cursor-pointer rounded-[16px] transition-all ease-in-out duration-300 block text-[var(--cor-primaria)] font-semibold hover:bg-[var(--botao-hover)] hover:scale-105"
              >
                Login
              </button>
            </Link>

            <p className="text-white mt-4 -ml-9">
              Ainda não é registrado?
              <Link href="/registro" className="no-underline">
                <span className="text-[var(--cor-secundaria)] font-semibold hover:underline ml-1">
                  Registre-se
                </span>
              </Link> 
            </p>
          </div>
        </form>
      </section>
    </main>
  )
};

export default Login;
