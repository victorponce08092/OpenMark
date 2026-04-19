import { CarouselComposition } from "@/types/carousel";
import { slides } from "./slides";

const composition: CarouselComposition = {
  id: "example-carousel",
  title: "5 Errores de Marketing",
  width: 1080,
  height: 1080,
  slides,
  defaultData: {
    brand: "Tu Marca",
    tagline: "Marketing que conecta",
  },
};

export default composition;
