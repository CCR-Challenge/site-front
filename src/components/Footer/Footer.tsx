export default function Footer() {
  return (
    <footer className="mt-[50vh] bg-[var(--cor-secundaria)] opacity-90 px-20 py-20 text-center text-[var(--cor-primaria)] border-t-2 border-[var(--cor-primaria)]">
      <div>
        <a href="#top" aria-label="Voltar ao topo">
          <img 
            src="/assets/logo-site.png" 
            alt="Logo do Site" 
            className="mt-12 mx-auto"
          />
        </a>
      </div>

      <div className="font-[var(--fonte-secundaria)] text-[var(--cor-primaria)] text-base underline underline-offset-2 decoration-[var(--cor-primaria)]">
        <p className="my-10">
          Desenvolvido pelo grupo Future-Focus
        </p>
        <p className="my-10">
          © 2024 Todos Direitos Reservados.
        </p>
        <p className="my-10">
          Política de Privacidade | Termos de Uso
        </p>
      </div>
    </footer>
  );
}
