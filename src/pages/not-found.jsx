import PageWrapper from "../components/page-wrapper";

export default function NotFoundPage() {
  return (
    <PageWrapper>
      <div className="flex items-center flex-col justify-center h-full w-full">
        <h1 className="text-9xl font-bold">404</h1>
        <p>O conteúdo buscado não foi encontrado</p>
      </div>
    </PageWrapper>
  );
}
