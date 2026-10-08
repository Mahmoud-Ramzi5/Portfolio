import { Cpu, Target } from 'lucide-react';
import { skillsData } from '../../data/skills';
import { countByTag } from '../../lib/projects';
import SpotlightCard from '../ui/SpotlightCard';

export default function Skills({ t, lang, openProjects }) {
    return (
        <section id="skills" className="scroll-mt-32">
            <div data-reveal className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">{t.skills.title}</h2>
                <p className="text-lg text-gray-400 mb-6">{t.skills.subtitle}</p>
                <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-400 mx-auto rounded-full animate-gradient bg-[length:200%_200%]" />
            </div>

            {/* Core expertise */}
            <h3 data-reveal className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Cpu className="text-blue-500" size={28} />
                {t.skills.coreTitle}
            </h3>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-20">
                {skillsData.core.map((skill, i) => {
                    const count = countByTag(skill.tag);
                    return (
                        <SpotlightCard
                            as="button"
                            key={skill.id}
                            data-reveal
                            style={{ '--delay': `${(i % 3) * 110}ms` }}
                            onClick={() => openProjects(skill.tag)}
                            className="group text-start cursor-pointer bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 p-7 rounded-3xl flex flex-col gap-5 shadow-lg"
                        >
                            <div className="flex items-start justify-between w-full">
                                <div className="p-3.5 bg-slate-950 rounded-2xl border border-slate-800 text-sky-400 group-hover:text-blue-300 group-hover:border-blue-500/40 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                                    {skill.icon}
                                </div>
                                {count > 0 && (
                                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300">
                                        {count} {t.skills.usedIn}
                                    </span>
                                )}
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                                    {lang === 'ar' ? skill.nameAr : skill.nameEn}
                                </h4>
                                <p className="text-gray-400 leading-relaxed">
                                    {lang === 'ar' ? skill.descAr : skill.descEn}
                                </p>
                            </div>
                        </SpotlightCard>
                    );
                })}
            </div>

            {/* Also comfortable with */}
            <h3 data-reveal className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Target className="text-indigo-400" size={28} />
                {t.skills.familiarTitle}
            </h3>
            <div className="flex flex-wrap gap-4 mb-16">
                {skillsData.familiar.map((skill, i) => (
                    <div
                        key={skill.id}
                        data-reveal="scale"
                        style={{ '--delay': `${i * 70}ms` }}
                        className="group flex items-center gap-3 bg-slate-900 border border-slate-800 hover:border-sky-500/50 py-3 ps-3 pe-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 text-gray-300 hover:text-sky-300 hover:bg-sky-500/5"
                    >
                        <span className="p-2 bg-slate-950 rounded-xl border border-slate-800 text-blue-500 group-hover:text-sky-400 group-hover:rotate-12 transition-all">
                            {skill.icon}
                        </span>
                        <span className="font-bold">{skill.name}</span>
                    </div>
                ))}
            </div>

            {/* Tech marquee */}
            <div data-reveal className="marquee relative overflow-hidden mask-fade-x py-2" dir="ltr">
                <div className="marquee-track flex w-max gap-4">
                    {[...skillsData.stack, ...skillsData.stack].map((tech, i) => (
                        <span
                            key={`${tech}-${i}`}
                            className="px-5 py-2.5 rounded-full border border-slate-800 bg-slate-900/70 text-gray-300 font-semibold whitespace-nowrap hover:border-blue-500/50 hover:text-blue-300 transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
