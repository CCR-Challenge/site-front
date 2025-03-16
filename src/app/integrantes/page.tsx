import '../globals.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Integrante = () => {
    return (
        <main className="mt-[10vh]">
            <section className="text-center">
                <h1 className="text-[6rem] font-extrabold text-white">Conheça o nosso time</h1>
                <p className="mt-[2vh] text-4xl font-extrabold opacity-70 text-white">1TDSPB</p>
            </section>

            <div className="flex justify-center gap-[5vw] p-[4em] flex-wrap max-w-full mx-auto mt-[3vh]">
                <figure className="bg-[#f0f0f03a] p-10 rounded-xl text-center transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                    <Image
                        src="/assets/imagem-gabriel.jpg"
                        alt="Foto do integrante 1"
                        width={200}
                        height={200}
                        className="w-48 h-48 rounded-full object-cover transition-transform duration-300"
                    />
                    <figcaption className="w-full mt-8 text-lg font-medium text-white">
                        <p>Gabriel Oliveira Rossi</p>
                        <p className="opacity-70 mt-2">Rm 560967</p>
                        <div className="flex mt-[3vh] justify-center gap-3">
                            <a href="https://github.com/GabrielRossi01" target="_blank" className="text-xl transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://www.linkedin.com/in/gabriel-oliveira-rossi-155baa324/" target="_blank" className="text-xl transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="mailto:rm560967@fiap.com.br" className="text-xl transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </div>
                    </figcaption>
                </figure>

                <figure className="bg-[#f0f0f03a] p-10 rounded-xl text-center transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                    <Image
                        src="/assets/imagem-patrick.jpg"
                        alt="Foto do integrante 2"
                        width={200}
                        height={200}
                        className="w-48 h-48 rounded-full object-cover transition-transform duration-300"
                    />
                    <figcaption className="w-full mt-8 text-lg font-medium text-white">
                        <p>Patrick Castro Quintana</p>
                        <p className="opacity-70 mt-2">Rm 559271</p>
                        <div className="flex mt-[3vh] justify-center gap-3">
                            <a href="https://github.com/castropatrick" target="_blank" className="text-xl transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://www.linkedin.com/in/patrick-castro-839aa2273/" target="_blank" className="text-xl transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="mailto:rm559271@fiap.com.br" className="text-xl transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </div>
                    </figcaption>
                </figure>

                <figure className="bg-[#f0f0f03a] p-10 rounded-xl text-center transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                    <Image
                        src="/assets/imagem-rodrigo.jpg"
                        alt="Foto do integrante 3"
                        width={200}
                        height={200}
                        className="w-48 h-48 rounded-full object-cover transition-transform duration-300"
                    />
                    <figcaption className="w-full mt-8 text-lg font-medium text-white">
                        <p>Rodrigo Naoki Yamasaki</p>
                        <p className="opacity-70 mt-2">Rm 560759</p>
                        <div className="flex mt-[3vh] justify-center gap-3">
                            <a href="https://github.com/RodrygoYamasaki" target="_blank" className="text-xl transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://www.linkedin.com/in/rodrigo-yamasaki-74a3b1324/" target="_blank" className="text-xl transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="mailto:rm560759@fiap.com.br" className="text-xl transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </main>
    );
};

export default Integrante;