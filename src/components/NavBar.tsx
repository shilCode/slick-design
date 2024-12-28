import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";

const navItem = ["Nexus", "Vault", "Prolouge", "About", "Contact"];

const NavBar = () => {
  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);
  const [isAudioPlaying, setisAudioPlaying] = useState(false);
  const [isIndicatorActive, setisIndicatorActive] = useState(false);
  const toggleAudioIndicator = () => {
    setisAudioPlaying((prev) => !prev);
    setisIndicatorActive((prev) => !prev);
  };

  const [lastScrollY, setlastScrollY] = useState(0);
  //@ts-ignore
  const [isNavVisible, setisNavVisible] = useState(true);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setisNavVisible(true);
      //@ts-ignore
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setisNavVisible(false);
      //@ts-ignore
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setisNavVisible(true);
      //@ts-ignore
      navContainerRef.current.classList.add("floating-nav");
    }
    setlastScrollY(currentScrollY);
  }, [currentScrollY,lastScrollY]);


  useEffect(() => {
    if (isAudioPlaying) {
      //@ts-ignore
      audioElementRef.current.play();
    }
    //@ts-ignore
    else audioElementRef.current.pause();
  }, [isAudioPlaying]);
  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>

          <div className="flex-h-full items-center font-general text-xs uppercase text-blue-50  after-absolute after:bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-botton-right after:scale-x-0 after:transition-transform after:duration-0 ">
            <div className="hidden md:block">
              {navItem.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative ms-10 "
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              className="ml-10 flex items-center space-x-0.5"
              onClick={toggleAudioIndicator}
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />

              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={` indicator-line${
                    isIndicatorActive ? ".active" : ""
                  }`}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
