"use client";

import { useState, FormEvent } from "react";
import "../globals.css";

const Reportar = () => {
    const [problema, setProblema] = useState("");
    const [motivo, setMotivo] = useState("");
    const [estacao, setEstacao] = useState("");

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault(); 

        if (!problema.trim() || !motivo.trim() || !estacao.trim()) {
            alert("Preencha todos os campos antes de enviar.");
            return;
        }

        alert("Feedback enviado com sucesso! ✅");

        setProblema("");
        setMotivo("");
        setEstacao("");
    };

    return (
        <>
            <main className="mt-[10vh]">
                <section>
                    <h1 className="ml-[13.5vw] w-[60%] text-[6rem] font-extrabold text-white">Reportar problemas</h1>

                    <div>
                        <h2
                            className="ml-[13.8vw] w-[60%] text-[1.5rem] opacity-70 font-bold text-white"
                            id="feedback-title"
                        >
                            Dê o seu feedback
                        </h2>
                    </div>

                    <form
                        id="formulario__feedback"
                        className="flex flex-col gap-4 max-w-[73vw] mx-auto my-[10vh] p-8 rounded-xl shadow-lg bg-[#f8f9fab6]"
                        onSubmit={handleSubmit} 
                    >
                        <div>
                            <label htmlFor="problema" className="block font-semibold text-xl text-gray-800 mb-2">
                                Problema
                            </label>
                            <textarea
                                name="problema"
                                id="problema"
                                value={problema}
                                onChange={(e) => setProblema(e.target.value)} 
                                placeholder="Descreva o problema aqui..."
                                required
                                className="bg-white w-full p-3 text-base border-2 border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        <div>
                            <label htmlFor="motivo" className="block font-semibold text-xl text-gray-800 mb-2">
                                Motivo
                            </label>
                            <textarea
                                name="motivo"
                                id="motivo"
                                value={motivo} 
                                onChange={(e) => setMotivo(e.target.value)} 
                                placeholder="Explique o motivo aqui..."
                                required
                                className="bg-white w-full p-3 text-base border-2 border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        <div>
                            <label htmlFor="estacao" className="block font-semibold text-xl text-gray-800 mb-2">
                                Estação
                            </label>
                            <textarea
                                name="estacao"
                                id="estacao"
                                value={estacao} 
                                onChange={(e) => setEstacao(e.target.value)} 
                                placeholder="Informe a estação aqui..."
                                required
                                className="bg-white w-full p-3 text-base border-2 border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        <div className="flex justify-center items-center">
                            <button
                                type="submit" 
                                className="bg-[var(--cor-botao)] w-[20%] text-center border-none p-4 text-xl cursor-pointer rounded-[16px] transition-all ease-in-out duration-300 block text-[var(--cor-primaria)] font-semibold hover:bg-[var(--botao-hover)] hover:scale-105"
                                aria-label="Enviar feedback"
                            >
                                Enviar Feedback
                            </button>
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
};

export default Reportar;
