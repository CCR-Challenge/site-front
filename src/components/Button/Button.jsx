export default function Button({ href, children }) {
    return (
      <a href={href} className="botao-principal">
        {children}
      </a>
    );
  }

