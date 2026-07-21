import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'Preciso ter experiência prévia para acompanhar os sinais?',
    answer: 'Não! Enviamos todas as instruções detalhadas (par da moeda, se é compra/venda, faixa de preço, alavancagem e alvos de lucro). Além disso, disponibilizamos tutoriais rápidos em vídeo mostrando passo a passo como configurar na sua corretora (Binance, Bybit, OKX, etc.).',
  },
  {
    question: 'Como recebo os alertas dos sinais de negociação?',
    answer: 'Assim que a assinatura é confirmada, você recebe acesso imediato ao nosso Bot VIP no Telegram, que te insere no canal exclusivo de sinais com notificações instantâneas.',
  },
  {
    question: 'Quantos sinais são enviados por dia?',
    answer: 'Em média enviamos entre 8 a 15 análises/sinais por dia, dependendo da volatilidade e das oportunidades do mercado. Priorizamos a qualidade e a relação risco-retorno sobre a quantidade.',
  },
  {
    question: 'Qual banca mínima é recomendada para começar?',
    answer: 'Você pode começar com qualquer valor a partir de $50 ou $100 dólares, aplicando sempre nossa gestão de risco recomendada (1% a 2% de banca por entrada).',
  },
  {
    question: 'Como funciona a garantia de satisfação?',
    answer: 'Oferecemos garantia incondicional de 7 dias. Se você por qualquer motivo não ficar satisfeito, pode solicitar 100% do reembolso diretamente pela plataforma de pagamento sem complicações.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 px-4 relative z-10 max-w-4xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-electric-light px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 inline-flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Esclareça Suas Dúvidas</span>
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-4 mb-3">
          Perguntas Frequentes
        </h2>
        <p className="text-slate-300 text-sm sm:text-base">
          Tudo o que você precisa saber antes de fazer parte da nossa Sala VIP.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-white text-sm sm:text-base hover:text-electric-light transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-electric-light transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-6 text-slate-300 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
