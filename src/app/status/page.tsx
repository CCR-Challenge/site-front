import '../globals.css';
import Image from 'next/image';

const Status = () => {
    return (
        <>
            <main className="mt-[10vh]">
                <section>
                    <h1 className="font-sans ml-[13.5vw] w-[60%] text-[6rem] font-extrabold text-white">Status</h1>

                    <h2 className="ml-[13.5vw] w-[60%] text-[1.5rem] opacity-70 font-bold text-white">
                        Notificações sobre o funcionamento das estações.
                    </h2>

                    <ul className="list-none p-[20em] mt-[-25vh] flex flex-col gap-8">
                        <li className="flex items-center bg-[#f8f9fab6] p-6 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1 hover:shadow-lg">
                            <div className="w-12 h-12 flex justify-center items-center mr-4">
                                <Image
                                    src="/assets/bola-vermelha.png"
                                    alt="Ícone redondo vermelho"
                                    width={48}
                                    height={48}
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-bold text-gray-800">Sobrecarga de dados</h3>
                                <p className="text-base text-gray-600 opacity-70">Resolvido à 4 meses atrás</p>
                            </div>
                        </li>

                        <li className="flex items-center bg-[#f8f9fab6] p-6 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1 hover:shadow-lg">
                            <div className="w-12 h-12 flex justify-center items-center mr-4">
                                <Image
                                    src="/assets/bola-azul.png"
                                    alt="Ícone azul amarelo"
                                    width={48}
                                    height={48}
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-bold text-gray-800">Câmera danificada</h3>
                                <p className="text-base text-gray-600 opacity-70">Necessidade de atualização</p>
                            </div>
                        </li>

                        <li className="flex items-center bg-[#f8f9fab6] p-6 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1 hover:shadow-lg">
                            <div className="w-12 h-12 flex justify-center items-center mr-4">
                                <Image
                                    src="/assets/bola-roxa.png"
                                    alt="Ícone redondo roxo"
                                    width={48}
                                    height={48}
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-bold text-gray-800">Falhas de monitoramento</h3>
                                <p className="text-base text-gray-600 opacity-70">Pendente</p>
                            </div>
                        </li>

                        <li className="flex items-center bg-[#f8f9fab6] p-6 rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:cursor-pointer hover:-translate-y-1 hover:shadow-lg">
                            <div className="w-12 h-12 flex justify-center items-center mr-4">
                                <Image
                                    src="/assets/bola-verde.png"
                                    alt="Ícone redondo verde"
                                    width={48}
                                    height={48}
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-bold text-gray-800">Anomalia nos trilhos</h3>
                                <p className="text-base text-gray-600 opacity-70">Resolvido à 3 semanas atrás</p>
                            </div>
                        </li>
                    </ul>
                </section>
            </main>
        </>
    )
};

export default Status;