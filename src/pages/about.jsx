import PageWrapper from "../components/page-wrapper";
import Testimony from "../components/testimony";

const testimonials = [
  {
    id: 1,
    description:
      "Participar da Fórmula E é mais do que competir; é fazer parte de um movimento que está moldando o futuro do automobilismo. A tecnologia que estamos desenvolvendo aqui pode ter um impacto significativo nas ruas.",
    author: "Um piloto da Mahindra Racing",
  },
  {
    id: 2,
    description:
      "A Fórmula E não é apenas uma corrida, é uma vitrine para o que é possível com a tecnologia elétrica. Estou animado para ver como essa inovação se traduz em veículos do dia a dia.",
    author: "Um engenheiro da Mahindra Racing",
  },
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center gap-8 text-center">
        <h1 className="font-bold text-3xl">Sobre a Fórmula E</h1>
        <p>
          A Fórmula E, inaugurada em 2014, é a primeira categoria de corridas
          totalmente elétrica do mundo. Surgiu da necessidade de inovar no
          automobilismo, integrando entretenimento e sustentabilidade em um
          contexto de crescente conscientização sobre mobilidade sustentável e
          mudanças climáticas. Desde sua origem, a Fórmula E tem se posicionado
          como uma plataforma vital para o desenvolvimento de veículos elétricos
          e mobilidade limpa.
        </p>

        <h1 className="font-bold text-3xl">Missão e Visão</h1>
        <p>
          A missão da Fórmula E é acelerar a transformação rumo a um futuro mais
          sustentável, promovendo a mobilidade elétrica globalmente. A visão é
          ser a principal plataforma de inovação para fabricantes e engenheiros,
          estabelecendo um modelo de entretenimento esportivo que inspira
          mudanças significativas em direção à sustentabilidade.
        </p>

        <h1 className="font-bold text-3xl">Tecnologia e Inovação</h1>
        <p>
          Os veículos da Fórmula E utilizam tecnologias de ponta, como sistemas
          de recuperação de energia e baterias de última geração. Essas
          inovações não apenas melhoram o desempenho nas pistas, mas também
          possuem aplicações diretas em veículos de consumo, contribuindo para a
          evolução da mobilidade elétrica no cotidiano.
        </p>

        <h1 className="font-bold text-3xl">
          Compromisso com a Sustentabilidade
        </h1>
        <p>
          O compromisso da Fórmula E e da Mahindra Racing com a sustentabilidade
          é evidente em suas operações. Além de promover veículos elétricos, a
          competição realiza iniciativas de responsabilidade social e ambiental,
          como programas de educação e projetos para redução de emissões. A
          Fórmula E busca não apenas entreter, mas também educar o público sobre
          a importância da sustentabilidade na sociedade contemporânea.
        </p>

        <h1 className="font-bold text-3xl">Depoimentos</h1>

        <div className="flex flex-col gap-4 w-full">
          {testimonials.map((testimony) => (
            <Testimony {...testimony} key={testimony.id} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
