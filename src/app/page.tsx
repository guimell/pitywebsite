import Image, { StaticImageData } from "next/image";
import servicesImage from "../../public/images/services.jpg";

const Carousel = () => {
  return (
    <div className="w-full max-h-96">
      <Image
        src={servicesImage}
        alt="services page main image"
        className="object-contain w-full h-auto"
      />
    </div>
  );
};

const AnimatedCard = ({
  title,
  textElement,
}: {
  title: string;
  textElement: JSX.Element;
}) => {
  return (
    <div className="m-6 p-4 w-44 h-44 overflow-hidden bg-slate-300 rounded-xl">
      <div className="flex flex-col items-center text-slate-900">
        <p className="h-10 bg-slate-700">SVG</p>
        <h3>{title}</h3>
        {textElement}
      </div>
    </div>
  );
};

const ProfileCard = ({
  title,
  imageSrc,
  textElement,
}: {
  title: string;
  imageSrc: StaticImageData;
  textElement: JSX.Element;
}) => {
  return (
    <div className="flex flex-col justify-center align-center m-4 w-4/5">
      <h3 className="text-yellow-600 text-2xl text-center">{title}</h3>
      <div className="flex flex-row justify-center align-center ">
        <div className="flex justify-center align-center w-1/4 max-h-full">
          <Image
            src={imageSrc}
            alt="profile image"
            className="object-contain w-full h-auto"
          />
        </div>
        <div className="justify-center align-center p-6 w-3/4">
          <div className="text-slate-50 text-base p-4">{textElement}</div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main>
      <Carousel />

      <div className="flex flex-col justify-center items-center bg-teal-800">
        {/* about */}
        <h2 className="text-yellow-600 text-4xl text-center mt-10 p-4">
          Quem Somos
        </h2>
        <p className="flex justify-center items-center mb-10 w-4/5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis
          cursus tristique. Pellentesque volutpat sit amet dui ut pellentesque.
          Cras auctor massa massa, mattis viverra mi pretium vel. Aliquam
          lobortis metus nisl, sed consectetur nibh mattis sed. In imperdiet
          eget purus eu tempor. Morbi vitae rhoncus arcu, eget elementum diam.
          Proin posuere magna nunc, eget sagittis mi tempor ac. Etiam imperdiet
          vulputate enim, vel volutpat arcu eleifend placerat. Duis volutpat,
          elit quis rhoncus laoreet, mi quam aliquet mauris, ut suscipit odio
          tortor auctor tortor. Nam pulvinar sagittis nisi, eget placerat quam
          euismod sed. Vestibulum sagittis sagittis mauris, a dapibus risus
          tincidunt bibendum. Pellentesque vulputate, elit et aliquet elementum,
          massa quam imperdiet ligula, quis pulvinar ante massa et purus.
        </p>
        <div className="flex flex-wrap justify-center items-center">
          <AnimatedCard
            title={"Misao"}
            textElement={
              <p>
                Duis volutpat, elit quis rhoncus laoreet, mi quam aliquet
                mauris, ut suscipit odio tortor auctor tortor. Nam pulvinar
                sagittis nisi, eget placerat quam euismod sed. Vestibulum
                sagittis sagittis mauris, a dapibus risus tincidunt bibendum.
              </p>
            }
          />
          <AnimatedCard
            title={"Visao"}
            textElement={
              <p>
                Mauris pretium magna nec semper sollicitudin. Curabitur euismod
                libero quis sapien viverra mattis. Vivamus egestas, ipsum vitae
                tempor tincidunt, dui felis imperdiet erat, id tristique nunc
                eros id dui.
              </p>
            }
          />
          <AnimatedCard
            title={"Valores"}
            textElement={
              <p>
                <ul>
                  <li>A vida em um lugar</li>
                  <li>Etica</li>
                  <li>Eficiencia</li>
                  <li>Qualidade</li>
                  <li>Inovacao</li>
                  <li>Foco no Cliente</li>
                </ul>
              </p>
            }
          />
        </div>

        {/* team */}
        <h2 className="text-yellow-600 text-4xl text-center mt-10 p-4">
          Nossa Equipe
        </h2>
        <ProfileCard
          title="Pity"
          imageSrc={servicesImage}
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
              elit orci, eget laoreet nisl suscipit ac. Maecenas urna arcu,
              tempor ac neque sed, efficitur semper sapien.
            </p>
          }
        />
        <ProfileCard
          title="Luz"
          imageSrc={servicesImage}
          textElement={
            <p>
              Nam eget felis nulla. Suspendisse imperdiet libero semper ornare
              viverra. Sed sit amet blandit mauris. Sed vitae fermentum metus.
              Nullam porttitor eu dolor eget suscipit. Pellentesque non urna
              neque. Phasellus quis tempor massa. Cras tempus magna quis
              consectetur fermentum. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Curabitur finibus
              faucibus magna sed dapibus. Interdum et malesuada fames ac ante
              ipsum primis in faucibus. Vestibulum et tincidunt eros. Donec
              sodales metus id urna maximus venenatis.
            </p>
          }
        />
      </div>
    </main>
  );
}
