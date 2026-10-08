import { Send, Mail, Phone, MapPin, FileText, GitBranch } from 'lucide-react';
import { profile } from '../../data/profile';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';

export default function Contact({ t, lang }) {
    const links = [
        profile.email && { href: `mailto:${profile.email}`, label: profile.email, icon: Mail },
        profile.phone && { href: `tel:${profile.phone.replace(/\s/g, '')}`, label: profile.phone, icon: Phone },
        profile.links.github && { href: profile.links.github, label: 'GitHub', icon: GithubIcon },
        profile.links.linkedin && { href: profile.links.linkedin, label: 'LinkedIn', icon: LinkedinIcon },
        profile.links.gitlab && { href: profile.links.gitlab, label: 'GitLab', icon: GitBranch },
        profile.links.cv && { href: profile.links.cv, label: 'CV', icon: FileText },
    ].filter(Boolean);

    const primaryHref = profile.email ? `mailto:${profile.email}` : links[0]?.href;

    return (
        <section id="contact" className="scroll-mt-32">
            <div data-reveal="scale" className="relative max-w-4xl mx-auto text-center bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-[3rem] p-10 md:p-16 overflow-hidden">
                <div className="aurora-blob w-[380px] h-[380px] bg-blue-600 -top-48 start-1/2 -translate-x-1/2" />
                <div className="absolute inset-0 bg-grid opacity-60" />

                <div className="relative z-10">
                    <div className="mx-auto mb-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center shadow-lg shadow-black/25 animate-float">
                        <Send className="text-white" size={28} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">{t.contact.title}</h2>
                    <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">{t.contact.desc}</p>

                    {primaryHref && (
                        <a
                            href={primaryHref}
                            target={primaryHref.startsWith('http') ? '_blank' : undefined}
                            rel="noreferrer"
                            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-blue-800 to-blue-600 text-white font-bold text-xl shadow-lg shadow-black/25 hover:shadow-lg shadow-black/25 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        >
                            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                            <Send size={20} className="relative" />
                            <span className="relative">{t.contact.btn}</span>
                        </a>
                    )}

                    {links.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-3 mt-10">
                            {links.map(({ href, label, icon: Icon }) => (
                                <a
                                    key={href}
                                    href={href}
                                    target={href.startsWith('http') || href.endsWith('.pdf') ? '_blank' : undefined}
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-900/80 text-gray-300 hover:text-sky-300 hover:border-blue-500/50 hover:-translate-y-0.5 transition-all font-semibold"
                                >
                                    <Icon size={18} /> <span dir="ltr">{label}</span>
                                </a>
                            ))}
                        </div>
                    )}

                    {profile.location?.en && (
                        <p className="mt-10 text-gray-500 flex items-center justify-center gap-2 font-semibold">
                            <MapPin size={16} className="text-blue-500" />
                            {t.contact.location} {lang === 'ar' ? profile.location.ar : profile.location.en}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}
