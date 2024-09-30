import Event from "../components/event";
import PageWrapper from "../components/page-wrapper";
import { events } from "../utils/const/events";

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
