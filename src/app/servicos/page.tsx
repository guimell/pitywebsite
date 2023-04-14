import Image from "next/image";
import servicesImage from "../../../public/images/services.jpg";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const ServiceCard = ({
  title,
  textElement,
}: {
  title: string;
  textElement: JSX.Element;
}) => {
  return (
    <div className="justify-center align-center m-10 p-6 w-4/5 bg-teal-800 rounded-lg">
      <h2 className="text-yellow-600 text-4xl text-center p-4">{title}</h2>
      <div className="text-slate-50 text-base p-4">{textElement}</div>
    </div>
  );
};

export default function Services() {
  return (
    <main>
      {/* main image */}
      <div className="w-full max-h-96 bg-red-500">
        <Image
          src={servicesImage}
          alt="services page main image"
          className="object-contain w-full h-auto"
        />
      </div>

      {/* services */}
      <ServiceCard
        title="PCMSO - Programa de Controle Medico de Saude Ocupacional"
        textElement={
          <p>
            In vehicula, tortor eu tincidunt ultricies, sem tellus ultricies
            turpis, id faucibus erat lectus sit amet purus. Sed magna orci,
            malesuada in vestibulum volutpat, sollicitudin sed diam. Phasellus
            sit amet accumsan ligula. Nulla leo enim, elementum congue est et,
            luctus tincidunt ex. Maecenas sapien augue, iaculis sit amet enim
            sit amet, tincidunt gravida neque. Sed nisl neque, efficitur quis
            interdum sit amet, pellentesque ut orci. Morbi sollicitudin ipsum
            nunc, a consectetur elit aliquet eu. Morbi convallis magna dolor,
            sed auctor eros mollis at. Nullam eu varius magna. Nunc mi odio,
            sodales at finibus elementum, sagittis imperdiet nisi. In blandit
            est mollis, feugiat felis eu, mattis lorem. Suspendisse porttitor
            elit orci, eget laoreet nisl suscipit ac. Maecenas urna arcu, tempor
            ac neque sed, efficitur semper sapien.
          </p>
        }
      />
      <ServiceCard
        title="PGR - Programa de Gerenciamento de Riscos"
        textElement={
          <p>
            Nam eget felis nulla. Suspendisse imperdiet libero semper ornare
            viverra. Sed sit amet blandit mauris. Sed vitae fermentum metus.
            Nullam porttitor eu dolor eget suscipit. Pellentesque non urna
            neque. Phasellus quis tempor massa. Cras tempus magna quis
            consectetur fermentum. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Curabitur finibus faucibus
            magna sed dapibus. Interdum et malesuada fames ac ante ipsum primis
            in faucibus. Vestibulum et tincidunt eros. Donec sodales metus id
            urna maximus venenatis.
          </p>
        }
      />
      <ServiceCard
        title="Levantamento Preliminar de Riscos Ocupacionais"
        textElement={<p>...</p>}
      />
      <ServiceCard
        title="AEP - Avaliacao Ergonomica Preliminar"
        textElement={<p>...</p>}
      />
      <ServiceCard
        title="AET - Analise Ergonomica do Trabalho"
        textElement={<p>...</p>}
      />
      <ServiceCard
        title="LTCAT - Laudo Tecnico das Condicoes do Ambiente de Trabalho"
        textElement={<p>...</p>}
      />
      <ServiceCard title="Escoial" textElement={<p>...</p>} />
      <ServiceCard
        title="Gestao dos Programas de Saude e Seguranca do Trabalho"
        textElement={
          <p>
            <ul>
              <li>NR-6</li>
              <li>NR-12</li>
              <li>NR-17</li>
              <li>NR-20</li>
              <li>NR-33</li>
              <li>NR-35</li>
            </ul>
          </p>
        }
      />
      <ServiceCard title="Treinamentos" textElement={<p>...</p>} />
      <ServiceCard
        title="Outros Documentos Tecnicos"
        textElement={
          <p>
            <ul>
              <li>Laudo de Insalubridade</li>
              <li>Laudo de Periculosidade</li>
              <li>PCA</li>
              <li>PPR</li>
            </ul>
          </p>
        }
      />
      <ServiceCard
        title="Outros Servicos"
        textElement={
          <p>
            <ul>
              <li>Assistencia tecnica judicial</li>
              <li>Monitoramoentos ambientais</li>
              <li>Formacao e Treinamento de Brigada de Incendia</li>
              <li>Formacao e Treinamento de CIPA</li>
            </ul>
          </p>
        }
      />
    </main>
  );
}
