import { ReactNode } from "react";
import { TiLocationArrow } from "react-icons/ti";

interface IBentoCard {
  src: string;
  title: ReactNode;
  description: string;
  isComingSoon?: boolean;
}

const BentoCard = ({ src, title, description }: IBentoCard) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full
        object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-100">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
      {title}
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-white ">
            Into the Metagame Layer
          </p>
          <p className="max-w-md font-circular-web text-lg text-white opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into an interconnected overlay on
            your world
          </p>
        </div>

        <div className="border border-white/20 relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="/videos/feature-1.mp4"
            title={
              <>
                radi<b>n</b>t
              </>
            }
            description="A cross-platform metagame app, turning your activities across web2 and web3 games into a rewarding adventure"
          />
        </div>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <div className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={<>zigma</>}
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </div>
          <div className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="/videos/feature-3.mp4"
              title={<>Nexus</>}
              description="A gamified social hub, adding a new dimension of play to social interaction for web3 communities"
            />
          </div>
          <div className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="/videos/feature-4.mp4"
              title={<>azul</>}
              description="A gamified social hub, adding a new dimension of play to social interaction for web3 communities"
            />
          </div>
          <div className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5 ">
              <h1 className=" bento-title special-font text-black">
                More coming soon!
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </div>
          <div className="bento-tilt_2">
            <video
              src="/videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
