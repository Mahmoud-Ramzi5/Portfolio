import { ChevronRight, ChevronLeft, BrainCircuit, Eye, MessageSquareText, Server, Box, LineChart } from 'lucide-react';
import { countByTag } from '../../lib/projects';
import SpotlightCard from '../ui/SpotlightCard';

const AREAS = [
    { tag: 'AI', icon: BrainCircuit, accent: 'text-indigo-400', glow: 'bg-indigo-500/15' },
    { tag: 'Computer Vision', icon: Eye, accent: 'text-blue-400', glow: 'bg-blue-500/15' },
    { tag: 'LLM & NLP', icon: MessageSquareText, accent: 'text-sky-400', glow: 'bg-sky-500/15' },
    { tag: 'Laravel', icon: Server, accent: 'text-sky-300', glow: 'bg-sky-400/15' },
    { tag: 'Simulation', icon: Box, accent: 'text-blue-300', glow: 'bg-blue-400/15' },
    { tag: 'Machine Learning', icon: LineChart, accent: 'text-indigo-300', glow: 'bg-indigo-400/15' },
];

export default function Categories({ t, isRTL, openProjects }) {
    return (
        <section id="categories" className="scroll-mt-32">
            <div data-reveal className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-3">{t.categories.title}</h2>
                    <p className="text-lg text-gray-400">{t.categories.subtitle}</p>
                </div>
                <button onClick={() => openProjects('All')} className="text-sky-400 hover:text-blue-300 font-bold flex items-center gap-2 group cursor-pointer">
                    {t.categories.explore}
                    {isRTL
                        ? <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                        : <ChevronRight className="group-hover:translate-x-1 transition-transform" />}
                </button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {AREAS.map(({ tag, icon: Icon, accent, glow }, i) => {
                    const item = t.categories.items[tag];
                    return (
                        <SpotlightCard
                            as="button"
                            key={tag}
                            data-reveal
                            style={{ '--delay': `${(i % 3) * 100}ms` }}
                            onClick={() => openProjects(tag)}
                            className="group text-start cursor-pointer bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 p-7 rounded-3xl overflow-hidden shadow-lg"
                        >
                            <div className={`absolute -end-6 -top-6 w-28 h-28 ${glow} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`} />
                            <div className="flex items-center justify-between mb-6 relative">
                                <Icon size={38} className={`${accent} group-hover:scale-110 transition-transform duration-300`} />
                                <span className="text-4xl font-black text-slate-800 group-hover:text-slate-700 transition-colors tabular-nums">
                                    {String(countByTag(tag)).padStart(2, '0')}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 relative">{item.title}</h3>
                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors relative">{item.desc}</p>
                        </SpotlightCard>
                    );
                })}
            </div>
        </section>
    );
}
