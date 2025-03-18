import Head from 'next/head';
import '../globals.css';
import Image from 'next/image';

const Home = () => {
    return (
        <>

            <main className="mt-[10vh] flex flex-col items-center">
                <section>
                    <h1 className="ml-[13.5vw] w-[60%] text-[6rem] font-extrabold text-white">
                        Agora ficou fácil andar nos trilhos
                    </h1>

                    <ul className="flex flex-col list-none mt-[10vh] gap-[10rem]">
                        <li className="flex flex-col items-center p-6 rounded-lg">
                            <figure className="flex flex-col items-center gap-2">
                                <Image
                                    src="/assets/grupo-verdee.png"
                                    alt="Ícone de monitoramento"
                                    width={150}
                                    height={150}
                                    className="w-4/5 h-4/5 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
                                />
                                <figcaption className="text-xl mt-2 font-bold text-white">
                                    Monitoramento
                                </figcaption>
                            </figure>
                            <p className="text-lg font-medium opacity-70 mt-2 text-center text-white">
                                Análise contínua do estado das estações e fluxo de passageiros.
                            </p>
                        </li>

                        <li className="flex flex-col items-center p-6 rounded-lg">
                            <figure className="flex flex-col items-center gap-2">
                                <Image
                                    src="/assets/grupo-azul.png"
                                    alt="Ícone de mapa"
                                    width={150}
                                    height={150}
                                    className="w-4/5 h-4/5 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
                                />
                                <figcaption className="text-xl mt-2 font-bold text-white">
                                    Mapa
                                </figcaption>
                            </figure>
                            <p className="text-lg font-medium opacity-70 mt-2 text-center text-white">
                                Visualize as linhas de trens e metrôs do estado de SP.
                            </p>
                        </li>
                    </ul>
                </section>
            </main>
        </>

    )
};

export default Home;
