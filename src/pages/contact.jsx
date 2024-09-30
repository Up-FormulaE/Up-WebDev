import PageWrapper from "../components/page-wrapper";

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center gap-8 text-center">
        <h1 className="font-bold text-3xl">Entre em Contato</h1>
        <p>
          Se você tiver alguma dúvida ou quiser saber mais sobre a Fórmula E,
          preencha o formulário abaixo e entraremos em contato o mais breve
          possível.
        </p>

        {/* API de formulário da Netlify */}
        {/* eslint-disable-next-line react/no-unknown-property */}
        <form name="contact" className="w-full flex flex-col gap-4 text-justify" netlify>
          <div className="form-control">
            <label htmlFor="name">Nome</label>

            <input
              className="form-input"
              type="text"
              name="name"
              placeholder="Jane Doe"
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">E-mail</label>

            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="jane.doe@example.com"
            />
          </div>

          <div className="form-control">
            <label htmlFor="message">Mensagem</label>

            <textarea
              className="form-input"
              placeholder="Digite sua mensagem"
              rows={5}
            />
          </div>

          <button type="submit" className="bg-blue-500 px-14 py-1 text-white rounded-lg w-fit hover:opacity-60 self-end">
            Enviar
          </button>
        </form>
      </div>
    </PageWrapper>
  );
}
