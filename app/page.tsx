import { Mail } from "lucide-react";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Founder Developer en Commet | 15-18K USD al año + Stock Options",
  description:
    "Únete a Commet como Founder Developer. Buscamos un desarrollador con experiencia en React, Next.js y TypeScript para construir una solución B2B SaaS que simplifica el cálculo y pago de comisiones.",
  keywords: [
    "trabajo desarrollador",
    "founder developer",
    "react",
    "next.js",
    "typescript",
    "trabajo remoto",
    "argentina",
    "startup",
    "b2b saas",
    "stock options",
    "vacaciones ilimitadas",
  ],
  openGraph: {
    title:
      "Founder Developer en Commet | Oportunidad única para desarrolladores",
    description:
      "15-18K USD al año + Stock Options. Trabaja con las últimas tecnologías (React 19, Next.js 15, TypeScript) en una startup B2B SaaS en crecimiento con vacaciones ilimitadas y home office.",
    url: "https://careers.commet.co",
    siteName: "Commet Careers",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder Developer en Commet | 15-18K USD al año + Stock Options",
    description:
      "Únete a una startup B2B SaaS en crecimiento. Trabaja con React 19, Next.js 15, TypeScript. Home office y vacaciones ilimitadas.",
    creator: "@workspace_co",
  },
  alternates: {
    canonical: "https://careers.commet.co",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function LandingPage(): Promise<ReactElement> {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-900 text-zinc-100">
      <main className="flex-1">
        <section className="py-12 md:py-20">
          <div className="container max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4 text-white">
              Founder Developer
            </h1>
            <p className="text-lg text-zinc-300 mb-8">
              Desde{" "}
              <Link
                href="https://commet.co/es/"
                className="underline underline-offset-4 text-zinc-100 hover:text-white"
              >
                Commet
              </Link>
              , estamos construyendo una solución que simplifica el proceso
              complejo de cálculo y pago de comisiones para equipos. Somos una
              startup B2B SaaS (venture-backed) en pleno crecimiento.
            </p>
            <Link
              href="mailto:guido@workspace.co?subject=Quiero%20trabajar%20en%20Commet"
              className="inline-flex h-10 items-center justify-center rounded-md bg-white text-zinc-900 px-8 text-sm font-medium shadow transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400"
            >
              <Mail className="mr-2 h-4 w-4" />
              Postularme ahora
            </Link>
          </div>
        </section>

        <Separator className="bg-zinc-800" />

        <section className="py-12 md:py-16">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-white">
              ¿Qué buscamos?
            </h2>
            <p className="mb-6 text-zinc-300">
              Queremos que Commet sea un lugar donde trabajar sea un placer
              todos los días. Para nosotros, eso se logra con buena gente y
              personas inteligentes. Buscamos alguien con valores sólidos, capaz
              de destrabar problemas, asumir responsabilidades y ser dueño de
              los procesos. Si te sentís cómodo dando y recibiendo feedback
              constante, y querés crecer en un equipo de alto rendimiento, este
              es tu lugar.
            </p>
          </div>
        </section>

        <Separator className="bg-zinc-800" />

        <section className="py-12 md:py-16">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-white">
              ¿Qué tendrás que hacer?
            </h2>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-2">
                <span className="text-white font-bold">→</span>
                <span className="text-zinc-300">
                  Diseñarás un roadmap en colaboración con el CEO y CTO para
                  alinear prioridades y definir el rumbo del producto.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-white font-bold">→</span>
                <span className="text-zinc-300">
                  Crearás funcionalidades clave que aporten valor inmediato a
                  los usuarios, priorizando rapidez y efectividad sobre
                  escalabilidad en esta etapa inicial.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <Separator className="bg-zinc-800" />

        <section className="py-12 md:py-16">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-white">
              ¿Qué perfil buscamos?
            </h2>
            <div className="mb-8">
              <h3 className="font-bold mb-3 text-white">
                Requisitos principales:
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex gap-2">
                  <span className="text-white font-bold">•</span>
                  <span className="text-zinc-300">
                    Dominio de React 19, Next.js 15, TypeScript, Server Actions,
                    RSC, Node
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-white font-bold">•</span>
                  <span className="text-zinc-300">
                    Experiencia con bases de datos relacionales
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-white font-bold">•</span>
                  <span className="text-zinc-300">
                    Conocimiento de Patrones de Diseño
                  </span>
                </li>
              </ul>

              <h3 className="font-bold mb-3 text-white">Nice To Have:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-white font-bold">•</span>
                  <span className="text-zinc-300">
                    Experiencia trabajando en SaaS B2B
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-white font-bold">•</span>
                  <span className="text-zinc-300">
                    Que disfrutes de aprender y enseñar
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-white font-bold">•</span>
                  <span className="text-zinc-300">Ubicación: Argentina</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Separator className="bg-zinc-800" />

        <section className="py-12 md:py-16 bg-zinc-800">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-white">
              ¿Por qué NO trabajar en Commet?
            </h2>
            <ul className="space-y-6 mb-6">
              <li>
                <h3 className="font-bold mb-1 text-white">
                  Estamos en una etapa donde nada está completamente definido.
                </h3>
                <p className="text-zinc-300">
                  Contamos con un MVP, algunos clientes y capital para formar un
                  equipo sólido, pero estamos abiertos a cambiar de enfoque o
                  incluso de industria si es necesario para dominar el mercado.
                </p>
              </li>
              <li>
                <h3 className="font-bold mb-1 text-white">
                  No somos una familia.
                </h3>
                <p className="text-zinc-300">
                  En Commet queremos construir un grupo de alto rendimiento
                  donde cada integrante impulse a los demás a ser mejores
                  profesionales. Valoramos el feedback constante porque sabemos
                  que es clave para crecer juntos y lograr resultados
                  excepcionales.
                </p>
              </li>
              <li>
                <h3 className="font-bold mb-1 text-white">
                  No tendrás un rol completamente definido.
                </h3>
                <p className="text-zinc-300">
                  Si bien te enfocarás en tecnología y desarrollo de producto,
                  el alcance de tus tareas puede variar. Esto es una oportunidad
                  para quienes disfrutan de la flexibilidad y los desafíos.
                </p>
              </li>
              <li>
                <h3 className="font-bold mb-1 text-white">
                  El aprendizaje dependerá de tu iniciativa.
                </h3>
                <p className="text-zinc-300">
                  Tendrás recursos y apoyo, pero serás el principal responsable
                  de adquirir las habilidades necesarias para cumplir tus
                  objetivos.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <Separator className="bg-zinc-800" />

        <section className="py-12 md:py-16">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-white">
              ¿Qué ofrecemos?
            </h2>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-2">
                <span className="text-white font-bold">→</span>
                <span className="text-zinc-300">
                  Rango Salarial 15k - 18k al año + Stock Options
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-white font-bold">→</span>
                <span className="text-zinc-300">
                  Vacaciones ilimitadas. Si, no contamos los días que te tomas
                  libres.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-white font-bold">→</span>
                <span className="text-zinc-300">
                  Macbook para que puedas trabajar (además después de 3 años es
                  tuya).
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-white font-bold">→</span>
                <span className="text-zinc-300">
                  Stock Options: tendrás la oportunidad de ser parte del éxito
                  de Commet y crecer junto con nosotros.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-white font-bold">→</span>
                <span className="text-zinc-300">
                  Home office libre. Creemos en que podemos construir un equipo
                  desde cualquier parte (en un principio nos gustaría compartir
                  las primeras semanas juntos en una oficina - CABA/Argentina).
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-white font-bold">→</span>
                <span className="text-zinc-300">
                  Tenemos un presupuesto a disposición para libros, cursos o
                  formaciones para que sigas creciendo.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <Separator className="bg-zinc-800" />

        <section className="py-12 md:py-16">
          <div className="container max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-white">
              Proceso de Selección
            </h2>
            <ol className="space-y-6 mb-6">
              <li className="flex gap-4">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-zinc-900 text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-white">
                    Charla cultural con el CEO (15-30 min)
                  </h3>
                  <p className="text-zinc-300">
                    Una conversación informal con nuestro CEO. Queremos
                    conocerte, entender tus motivaciones, valores y ver cómo
                    encajas con nuestra cultura de trabajo.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-zinc-900 text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-white">
                    Charla técnica con el CTO (15-30 min)
                  </h3>
                  <p className="text-zinc-300">
                    Una conversación técnica con nuestro CTO, donde
                    profundizaremos en tu experiencia técnica, conocimientos
                    específicos y temas que te apasionen.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-zinc-900 text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-white">
                    Challenge técnico (para resolver en casa)
                  </h3>
                  <p className="text-zinc-300">
                    Te enviaremos un challenge técnico sencillo para que
                    resuelvas en tu propio tiempo. No buscamos una solución
                    perfecta, sino entender cómo planteás y resolvés los
                    problemas.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-zinc-900 text-sm">
                  4
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-white">
                    Revisión técnica conjunta (30-60 min)
                  </h3>
                  <p className="text-zinc-300">
                    Durante esta reunión revisaremos juntos la solución que
                    enviaste. Vamos a conversar sobre tu enfoque, proponer
                    mejoras o alternativas y eventualmente trabajar en conjunto
                    sobre partes específicas del código.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-zinc-900 text-sm">
                  5
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-white">
                    Entrevista final con el equipo ejecutivo (30-45 min)
                  </h3>
                  <p className="text-zinc-300">
                    Reunión con todo el equipo ejecutivo para despejar dudas
                    restantes, profundizar en cómo será tu rol en Commet y
                    alinearnos en expectativas finales.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <Separator className="bg-zinc-800" />

        <section className="py-12 md:py-20 bg-zinc-800">
          <div className="container max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6 text-white">
              ¿Te interesa lo que lees?
            </h2>
            <p className="mb-8 text-zinc-300">
              Si te interesa lo que lees y quieres ser parte de una startup en
              crecimiento, manda un mail a{" "}
              <strong className="text-white">guido@workspace.co</strong> con el
              asunto &quot;Quiero trabajar en Commet&quot; contando tu experiencia
              (adjunta tu CV) y por qué quieres unirte a Commet.
            </p>
            <Link
              href="mailto:guido@commet.co?subject=Quiero%20trabajar%20en%20Commet"
              className="inline-flex h-11 items-center justify-center rounded-md bg-white text-zinc-900 px-8 text-sm font-medium shadow transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400"
            >
              <Mail className="mr-2 h-4 w-4" />
              Enviar mi postulación
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
