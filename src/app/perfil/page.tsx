'use client';

import { useState } from 'react';
import '../globals.css';
import Image from 'next/image';

const Perfil = () => {
    // Estado para armazenar os valores dos inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');

    const handleUpdate = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); // Previne o comportamento padrão do botão

        // Verificação para garantir que todos os campos foram preenchidos
        if (!name.trim() || !email.trim() || !password.trim()) {
            alert("Preencha todos os campos antes de atualizar.");
            return;
        }

        // Mostra o alerta de sucesso
        alert('Perfil atualizado com sucesso! ✅');

        // Limpa os campos após o envio
        setName('');
        setEmail('');
        setPassword('');
        setNumber('');
    };

    return (
        <>
            <main className="mt-[10vh]">
                <section>
                    <h1 className="ml-[13.5vw] w-[60%] text-[6rem] font-extrabold text-white">
                        Editar Perfil
                    </h1>

                    <div className="flex justify-center mt-[10vh] mb-[5vh]">
                        <Image
                            src="/assets/perfil-gg.png"
                            alt="Ícone Perfil"
                            width={150}
                            height={150}
                            className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 rounded-full"
                        />
                    </div>

                    <form action="#" method="post" className="p-4" id="formEditarPerfil">
                        <div className="flex flex-col items-center space-y-5">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Username:"
                                value={name} // Vincula o valor ao estado
                                onChange={(e) => setName(e.target.value)} // Atualiza o estado ao mudar
                                required
                                aria-label="Nome de usuário"
                                className="w-2/5 p-4 rounded-lg border-none shadow-md focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                            />

                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email:"
                                value={email} // Vincula o valor ao estado
                                onChange={(e) => setEmail(e.target.value)} // Atualiza o estado ao mudar
                                required
                                aria-label="Email"
                                className="w-2/5 p-4 rounded-lg border-none shadow-md focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                            />

                            <input
                                type="password"
                                id="password"
                                name="senha"
                                placeholder="Senha:"
                                value={password} // Vincula o valor ao estado
                                onChange={(e) => setPassword(e.target.value)} // Atualiza o estado ao mudar
                                required
                                aria-label="Senha"
                                className="w-2/5 p-4 rounded-lg border-none shadow-md focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                            />

                            <input
                                type="tel"
                                id="number"
                                name="number"
                                placeholder="Telefone:"
                                value={number} // Vincula o valor ao estado
                                onChange={(e) => setNumber(e.target.value)} // Atualiza o estado ao mudar
                                aria-label="Número de Telefone"
                                className="w-2/5 p-4 rounded-lg border-none shadow-md focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                            />
                        </div>

                        <div className="flex justify-center mt-8">
                            <button
                                type="button" // Altere para "button" para usar o handleUpdate
                                className="bg-[var(--cor-botao)] w-[15%] text-center border-none p-4 text-xl cursor-pointer rounded-[16px] transition-all ease-in-out duration-300 block text-[var(--cor-primaria)] font-semibold hover:bg-[var(--botao-hover)] hover:scale-105"
                                onClick={handleUpdate} // Chamando a função handleUpdate ao clicar no botão
                            >
                                Atualizar
                            </button>
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
};

export default Perfil;
