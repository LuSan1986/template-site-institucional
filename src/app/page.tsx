import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <NavBar logo="MinhaEmpresa" />

      <main>
        <HeroSection
          title="Sua empresa merece um site que converte"
          subtitle="Ajudamos pequenas e médias empresas a ter presença digital profissional, atrair clientes e crescer online."
          ctaPrimaryLabel="Fale conosco"
          ctaPrimaryHref="#contato"
          ctaSecondaryLabel="Conheça nossos serviços"
          ctaSecondaryHref="#servicos"
        />

        {/* Seção Sobre */}
        <Section id="sobre" background="white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sobre nós
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Parágrafo de apresentação da empresa. Conte quem vocês são, há
                quanto tempo atuam no mercado e qual é a missão do negócio.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Um segundo parágrafo reforçando os valores ou a história da empresa.
                Humanize a marca aqui.
              </p>
            </div>
            <div className="bg-gray-100 rounded-2xl h-64 md:h-80 flex items-center justify-center text-gray-400">
              {/* Substituir pela foto da equipe ou imagem da empresa */}
              Imagem aqui
            </div>
          </div>
        </Section>

        {/* Seção Serviços */}
        <Section id="servicos" background="gray">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Nossos serviços
          </h2>
          <p className="text-gray-600 text-lg text-center max-w-2xl mx-auto mb-12">
            Subtitle descrevendo os serviços de forma objetiva.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Serviço 1",
                description:
                  "Descrição curta do serviço. O que é, para quem é e qual resultado entrega.",
              },
              {
                title: "Serviço 2",
                description:
                  "Descrição curta do serviço. O que é, para quem é e qual resultado entrega.",
              },
              {
                title: "Serviço 3",
                description:
                  "Descrição curta do serviço. O que é, para quem é e qual resultado entrega.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-brand-light rounded-xl mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Seção Contato */}
        <Section id="contato" background="white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Entre em contato
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Preencha o formulário abaixo e responderemos em até 24 horas.
            </p>

            <form className="text-left flex flex-col gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  rows={5}
                  placeholder="Conte um pouco sobre o seu projeto..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Enviar mensagem
              </Button>
            </form>
          </div>
        </Section>
      </main>

      <Footer companyName="MinhaEmpresa" />
    </>
  );
}
