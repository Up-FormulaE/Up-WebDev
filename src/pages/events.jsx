import Event from "../components/event";
import PageWrapper from "../components/page-wrapper";

const events = [
  {
    name: "São Paulo E-Prix",
    date: "15 de março de 2025",
    local: "Circuito de São Paulo, Brasil",
    description:
      "Venha vivenciar a adrenalina das emocionantes corridas da Fórmula E no coração pulsante de São Paulo. Prepare-se para uma competição acirrada entre as melhores equipes do mundo!",
  },
  {
    name: "Roma E-Prix",
    date: "5 de abril de 2025",
    local: "Circuito de Roma, Itália",
    description:
      "Experimente a eletricidade da Fórmula E em Roma, onde os carros elétricos competem nas ruas de uma das cidades mais icônicas do mundo, cercados por uma rica história e cultura!",
  },
  {
    name: "Monaco E-Prix",
    date: "25 de abril de 2025",
    local: "Circuito de Mônaco, Mônaco",
    description:
      "Junte-se a nós em Mônaco, onde a Fórmula E traz toda a sua emoção em um dos circuitos mais desafiadores e glamourosos do planeta. Uma experiência que você não pode perder!",
  },
];

export default function EventsPage() {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center gap-8 text-center">
        <h1 className="font-bold text-3xl">Eventos da Formula E</h1>

        <p>
          Prepare-se para viver a emoção das corridas! Junte-se a nós na
          contagem regressiva para os próximos eventos da Fórmula E e fique por
          dentro de todas as datas das corridas. Acompanhe as novidades
          imperdíveis e não perca a chance de se envolver no vibrante mundo das
          corridas de carros elétricos, onde velocidade e sustentabilidade se
          encontram de maneira espetacular. Sua presença é fundamental para
          tornar cada evento ainda mais emocionante!
        </p>

        <h2 className="font-bold border-accent border-b-2 text-primary w-full">
          Próximos Eventos
        </h2>
        <div className="flex flex-col gap-4 w-full">
          {events.map((event) => (
            <Event {...event} key={event.name} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
