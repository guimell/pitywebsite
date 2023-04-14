export default function Home() {
  return (
    <main className=" w-full ">
      <div className=" w-full flex flex-row justify-center ">
        <div className="flex flex-col w-4/12 justify-evenly items-center rounded-md bg-cyan-800 m-1.5 p-1.5 text-center text-white">
          <h3 className=" text-yellow-500">Informações de Contato</h3>
          <a href="tel:++55 71981618308">+55 71-98161-8308</a>
          <a href="mailto:p2psaudeseg@gmail.com">p2psaudeseg@gmail.com</a>
          <p>Siga nossas redes sociais</p>
        </div>
        <div className=" w-1/2 rounded-md m-1.5 p-1.5">
          <h3 className=" text-center text-yellow-500">Contato</h3>
          <form className="flex flex-col">
            <label htmlFor="Fname">Nome:</label>
            <input
              className="bg-transparent rounded-md border border-gray-500 focus:border-0 focus:outline-none focus:ring focus:ring-yellow-500  p-1.5 "
              type="text"
            />
            <label htmlFor="Email">E-mail:</label>
            <input
              className="bg-transparent rounded-md border border-gray-500 focus:border-0 focus:outline-none focus:ring focus:ring-yellow-500  p-1.5 "
              type="text"
            />
            <label htmlFor="Number">Numero de telefone</label>
            <input
              className="bg-transparent rounded-md border border-gray-500 focus:border-0 focus:outline-none focus:ring focus:ring-yellow-500  p-1.5 "
              type="text"
            />
            <label htmlFor="companyName">Nome da empresa:</label>
            <input
              className="bg-transparent rounded-md border border-gray-500 focus:border-0 focus:outline-none focus:ring focus:ring-yellow-500  p-1.5 "
              type="text"
            />
            <label htmlFor="CNPJ">CNPJ:</label>
            <input
              className="bg-transparent rounded-md border border-gray-500 focus:border-0 focus:outline-none focus:ring focus:ring-yellow-500  p-1.5 "
              type="text"
            />
            <label htmlFor="EmployNumber">Quantida de funcionarios:</label>
            <input
              className="bg-transparent rounded-md border border-gray-500 focus:border-0 focus:outline-none focus:ring focus:ring-yellow-500  p-1.5 "
              type="text"
            />
            <label htmlFor="Message">Mensagem</label>
            <textarea
              className="bg-transparent rounded-md border border-gray-500 focus:border-0 focus:outline-none focus:ring focus:ring-yellow-500  p-1.5 "
              rows={4}
              name=""
              id=""
            ></textarea>
            <button>Enviar</button>
          </form>
        </div>
      </div>
    </main>
  );
}
