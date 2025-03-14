import Link from "next/link";

const Registro = () => {
  return (
    <main className="container">
      <section className="secao__principal">
        <h1 className="titulo" id="titulo-principal">
          Bem-vindo, faça o seu registro
        </h1>

        <div className="formulario__registro">
          <form action="#" method="post" aria-labelledby="titulo-principal" id="formRegistro">
            <div className="formulario__registro__input">
              <input type="text" id="name" name="name" placeholder="Nome Completo:" required aria-required="true" />
            </div>
            <div className="formulario__registro__input">
              <input type="email" id="email" name="email" placeholder="Email:" required aria-required="true" />
            </div>
            <div className="formulario__registro__input">
              <input type="password" id="password" name="password" placeholder="Senha:" required aria-required="true" />
            </div>

            <div className="container__titulo">
              
              <Link href="/registro/page" passHref>
                <a>
                  <button type="submit" className="container__conteudo__botao">
                    Registrar
                  </button>
                </a>
              </Link>
            </div>
          </form>

          <div className="container__texto__registro">
            <p className="texto__login">
              Já tem registro? Faça
              <a href="/login" className="ancora__login">
                <span className="estilo__login">Login</span>
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Registro;
