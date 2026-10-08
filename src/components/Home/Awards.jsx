import { Trophy, Award, Calendar } from 'lucide-react';
import { awards } from '../../data/awards';
import SpotlightCard from '../ui/SpotlightCard';

export default function Awards({ t, lang }) {
    const ar = lang === 'ar';

    return (
        <section id="awards" className="scroll-mt-32">
            <div data-reveal className="text-center mb-14">
                <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-600 flex items-center justify-center shadow-lg shadow-black/25 animate-float">
                    <Trophy className="text-white" size={30} />
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">{t.awards.title}</h2>
                <p className="text-lg text-gray-400">{t.awards.subtitle}</p>
            </div>

            {/* Timeline: a glowing line with cards alternating on both sides on large screens */}
            <div className="relative max-w-5xl mx-auto">
                <div className="absolute top-0 bottom-0 start-3 sm:start-5 lg:start-1/2 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/60 to-blue-500/0" aria-hidden="true" />

                <ol className="space-y-10">
                    {awards.map((a, i) => {
                        const left = i % 2 === 0;
                        return (
                            <li key={a.id} className="relative lg:grid lg:grid-cols-2 lg:gap-16">
                                {/* Node on the line */}
                                <span className="absolute start-3 sm:start-5 lg:start-1/2 top-8 -translate-x-1/2 rtl:translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-slate-950 z-10" aria-hidden="true" />

                                <SpotlightCard
                                    data-reveal={left ? 'left' : 'right'}
                                    style={{ '--delay': `${i * 90}ms` }}
                                    className={`ms-8 sm:ms-14 lg:ms-0 min-w-0 bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 rounded-3xl p-5 sm:p-7 ${left ? 'lg:col-start-1' : 'lg:col-start-2'}`}
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                                        <div className="p-3 rounded-2xl bg-blue-950/60 border border-blue-500/30 text-blue-300">
                                            <Award size={22} />
                                        </div>
                                        <span className="flex items-center gap-1.5 whitespace-nowrap text-sm font-bold text-blue-300 bg-blue-950/50 border border-blue-500/20 px-3 py-1 rounded-full">
                                            <Calendar size={14} /> {ar ? a.dateAr : a.dateEn}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-1">{ar ? a.titleAr : a.titleEn}</h3>
                                    <p className="text-sm font-semibold text-sky-300/80 mb-3">{a.issuer}</p>
                                    <p className="text-gray-400 leading-relaxed">{ar ? a.descAr : a.descEn}</p>
                                </SpotlightCard>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
}
