'use client';

import { motion } from 'framer-motion';
import { profile, skills, timeline, tools } from '@/lib/content';

const folders = ['AI Works', 'Google AI Studio', 'Logos', 'PDFs', 'Thumbnails', 'MY PROJECTS'];

export default function PortfolioOS() {
  return (
    <main className="mx-auto max-w-[1400px] px-5 py-8 md:px-10 lg:px-16">
      <section className="min-h-screen grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
        <div className="lg:col-span-7">
          <p className="mb-5 uppercase text-mutedSage tracking-[0.32em] text-xs">Creative Operating System</p>
          <h1 className="font-serifLuxury text-6xl md:text-8xl leading-[0.9]">{profile.name}</h1>
          <p className="mt-4 text-lg text-softMist">{profile.roles.join(' · ')}</p>
          <p className="mt-3 text-sm text-warmIvory/70">{profile.contact}</p>
        </div>
        <motion.div initial={{opacity:0,y:60}} animate={{opacity:1,y:0}} transition={{duration:1.1}} className="lg:col-span-5 glass rounded-[2rem] p-5 shadow-premium">
          <img src="https://i.ibb.co/KjX5hDTP/1000249427.png" alt="MD Sakib Character" className="w-full rounded-3xl object-cover" />
        </motion.div>
      </section>

      <section className="grid gap-6 py-20 lg:grid-cols-12">
        <div className="lg:col-span-4 glass rounded-3xl p-4"><img src="https://i.ibb.co/NdkQk7vj/1000249426.png" alt="portrait" className="w-full rounded-2xl"/></div>
        <div className="lg:col-span-8">
          <h2 className="font-serifLuxury text-5xl mb-4">Hello I&apos;m Sakib</h2>
          <p className="text-warmIvory/80 leading-8">{profile.intro}</p>
        </div>
      </section>

      <section className="py-16">
        <h2 className="font-serifLuxury text-5xl mb-8">Timeline</h2>
        <div className="space-y-4 border-l border-mutedSage/50 pl-6">
          {timeline.map(item => <div key={item.title} className="glass p-5 rounded-2xl"><p className="text-mutedSage text-sm">{item.year}</p><h3 className="text-xl">{item.title}</h3><p className="text-sm text-softMist">{item.org}</p><p className="mt-2 text-warmIvory/75">{item.detail}</p></div>)}
        </div>
      </section>

      <section className="py-16">
        <h2 className="font-serifLuxury text-5xl mb-8">Skills</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{skills.map(skill => <div key={skill} className="glass rounded-2xl p-4 text-sm hover:-translate-y-1 transition">{skill}</div>)}</div>
      </section>

      <section className="py-16">
        <h2 className="font-serifLuxury text-5xl mb-8">Tools Ecosystem</h2>
        <div className="flex flex-wrap gap-3">{tools.map(tool => <div key={tool} className="glass px-5 py-3 rounded-full">{tool}</div>)}</div>
      </section>

      <section className="py-16">
        <h2 className="font-serifLuxury text-5xl mb-8">Project Vault</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {folders.map(folder => (
            <article key={folder} className="glass rounded-3xl p-6 hover:shadow-premium transition">
              <p className="text-xs uppercase tracking-[0.2em] text-softMist/80">Folder</p>
              <h3 className="text-2xl mt-2">{folder}</h3>
              <p className="text-sm text-warmIvory/60 mt-4">Click to open cinematic gallery with filters (Images, Videos, Apps, Documents, Case Studies).</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
