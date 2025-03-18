import '../globals.css';
import Image from 'next/image';

const Mapa = () => {
  return (
    <>
      <main className="mt-[10vh] font-sans">

        <section className="w-full">

          <h1 className="ml-[13.5vw] w-[60%] text-[6rem] font-extrabold text-white">
            Mapa
          </h1>

          <div>
            <h2 className="ml-[13.5vw] w-[60%] text-[1.5rem] opacity-70 font-bold text-white">
              Visualize o mapa de trens e metrôs do estado de São Paulo.
            </h2>
          </div>

          <div className="flex justify-center mt-[10vh]">
            <Image
              src="/assets/mapa.jpg"
              alt="Mapa de trens e metrôs de São Paulo"
              width={1200}
              height={800}
              className="w-[65%] border-[9px] border-[#f8f9fab6] rounded-[50px]"
            />
          </div>
        </section>
      </main>
    </>
  )
};

export default Mapa;