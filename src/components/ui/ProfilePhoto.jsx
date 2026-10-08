import { useState } from 'react';
import { profile } from '../../data/profile';

/** Profile photo with a rotating gradient ring. Falls back to an animated monogram. */
export default function ProfilePhoto({ alt, className = '' }) {
    const [failed, setFailed] = useState(!profile.photo);

    return (
        <div className={`relative aspect-square ${className}`}>
            {/* Glow */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-blue-600/10 via-sky-600/5 to-indigo-600/10 blur-3xl" />

            {/* Spinning ring */}
            <div className="absolute -inset-[3px] rounded-full photo-ring" />

            <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-950 border-4 border-slate-950">
                {!failed ? (
                    <img
                        src={profile.photo}
                        alt={alt}
                        onError={() => setFailed(true)}
                        className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950" aria-label={alt} role="img">
                        <div className="absolute inset-0 bg-grid opacity-70" />
                        <span className="relative text-7xl md:text-8xl font-black text-gradient select-none">{profile.initials}</span>
                    </div>
                )}
            </div>
        </div>
    );
}
