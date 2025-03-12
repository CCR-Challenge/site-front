import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Button from '../components/Button/Button.jsx';
import '../app/globals.css';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col justify-center -mt-20">
        <h1 className="titulo">SMARTTRACK.</h1>
        <p className="subtitulo">
          Transforme a experiência dos usuários e simplifique a administração com tecnologia de ponta.
        </p>
        <div className="botao__principal">
          <Button href="/registro">Registre-se</Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
