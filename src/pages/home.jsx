import { useEffect, useState } from "react";
import PageWrapper from "../components/page-wrapper";

const CAROUSEL_SIZE = 3;
export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(CAROUSEL_SIZE);

  useEffect(() => {
    setInterval(
      () => setCurrentImage((state) => (state > 1 ? state - 1 : CAROUSEL_SIZE)),
      3_000
    );
  }, []);

  return (
    <PageWrapper>
      <div className="flex flex-col items-center gap-8 text-center">
        <h1 className="font-bold text-3xl">
          Bem-vindo à Revolução da Formula E
        </h1>
        <p>
          A Fórmula E representa a vanguarda das corridas automobilísticas,
          unindo velocidade, tecnologia de ponta e um compromisso inabalável com
          a sustentabilidade. Este emocionante campeonato mundial de carros
          elétricos redefine o que significa competir em alta velocidade,
          promovendo um futuro mais verde e responsável. Junte-se a nós nessa
          jornada eletrizante, onde a inovação e a emoção se encontram em cada
          volta na pista!
        </p>

        <img
          className="rounded-lg w-[600px] h-[320px] shadow-md"
          src={`carousel/item${currentImage}.png`}
        />

        <h2 className="font-bold border-accent border-b-2 text-primary w-full">
          Destaques da Temporada
        </h2>
        <p>
          Fique por dentro das últimas novidades e dos momentos mais
          emocionantes da temporada da Fórmula E. Acompanhe nossas corridas,
          resultados e inovações que estão moldando o futuro das competições de
          automóveis.
        </p>
      </div>
    </PageWrapper>
  );
}
