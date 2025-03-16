import Link from "next/link";
import '../globals.css';

const Registro = () => {
  return (
    <main className="mt-[10vh]">
      <section>
        <h1 className="ml-[13.5vw] w-[60%] text-[6rem] font-extrabold text-white" id="titulo-principal">
          Bem-vindo, faça o seu registro
        </h1>

        <div className="p-4">
          <form action="#" method="post" aria-labelledby="titulo-principal" id="formRegistro">
            <div className="bg-white rounded-[12px] flex flex-col ml-[12.5vw] w-[40%] mt-[2vh]">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nome Completo:"
                required
                aria-required="true"
                className="p-6 rounded-[12px] border-none font-[var(--fonte-principal)]"
              />
            </div>
            <div className="bg-white rounded-[12px] flex flex-col ml-[12.5vw] w-[40%] mt-[2vh]">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email:"
                required
                aria-required="true"
                className="p-6 rounded-[12px] border-none font-[var(--fonte-principal)]"
              />
            </div>
            <div className="bg-white rounded-[12px] flex flex-col ml-[12.5vw] w-[40%] mt-[2vh]">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Senha:"
                required
                aria-required="true"
                className="p-6 rounded-[12px] border-none font-[var(--fonte-principal)]"
              />
            </div>

            <div className="mt-[5vh] ml-[26.5vw]">
              <Link href="/home">
                <button
                  type="submit"
                  className="bg-[var(--cor-botao)] w-[15%] text-center border-none p-4 text-xl cursor-pointer rounded-[16px] transition-all ease-in-out duration-300 block text-[var(--cor-primaria)] font-semibold hover:bg-[var(--botao-hover)] hover:scale-105"
                >
                  Registrar
                </button>
              </Link>
            </div>
          </form>

          <div className="block mt-[3vh] ml-[27vw]">
            <p className="text-white">
              Já tem registro? Faça
              <Link href="/login" className="no-underline">
                <span className="text-[var(--cor-secundaria)] font-semibold hover:underline ml-1">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
};

export default Registro;
