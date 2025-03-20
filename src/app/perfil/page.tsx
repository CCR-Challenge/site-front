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
 
                <form className="p-4" id="formEditarPerfil">
                    <div className="flex flex-col items-center space-y-5">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Username:"
                            required
                            aria-label="Nome de usuário"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-2/5 p-4 rounded-lg border-none shadow-md focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                        />
 
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email:"
                            required
                            aria-label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-2/5 p-4 rounded-lg border-none shadow-md focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                        />
 
                        <input
                            type="password"
                            id="password"
                            name="senha"
                            placeholder="Senha:"
                            required
                            aria-label="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-2/5 p-4 rounded-lg border-none shadow-md focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                        />
 
                        <input
                            type="number"
                            id="number"
                            name="number"
                            placeholder="Telefone:"
                            aria-label="Número de Telefone"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            className="w-2/5 p-4 rounded-lg border-none shadow-md focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                        />
                    </div>
 
                    <div className="flex justify-center mt-8">
                        <button
                            type="button"
                            className="bg-[var(--cor-botao)] w-[15%] text-center border-none p-4 text-xl cursor-pointer rounded-[16px] transition-all ease-in-out duration-300 block text-[var(--cor-primaria)] font-semibold hover:bg-[var(--botao-hover)] hover:scale-105"
                            onClick={handleUpdate} // Chama a função handleUpdate ao clicar
                        >
                            Atualizar
                        </button>
                    </div>
                </form>
            </section>
        </main>
    );
};
 
export default Perfil;
