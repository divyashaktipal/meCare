"use client";

import Link from "next/link";
import { useState } from "react";

export function BlogDetails({ id }: { id: string }) {
  const [activeSection, setActiveSection] = useState("introduction");

  const tocLinks = [
    { id: "introduction", label: "Introduction" },
    { id: "preventive-care", label: "Preventive Care: Your Wellness Blueprint" },
    { id: "fueling-your-body", label: "Fueling Your Body: The Art of Nourishment" },
    { id: "movement", label: "Movement: The Rhythm of Life" },
    { id: "mental-wellness", label: "Mental Wellness: Cultivating Inner Peace" },
    { id: "sleep", label: "Sleep: The Magic of Restoration" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Left Column - Article */}
          <article className="w-full lg:w-[65%]">
            <div className="flex items-center gap-3 text-sm text-[#4B5563] font-semibold mb-6">
              <img src="./myPhoto.jpg" className="w-8 h-8 rounded-full shadow-sm" alt="Author" />
              <span className="text-[#03112E] font-bold">Joanna Kaminska</span>
              <span className="text-gray-300">•</span>
              <span>Aug 2, 2024</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#03112E] leading-tight mb-8">
              Elevating Patient Engagement Through Innovative Technology Solutions
            </h1>

            {/* Typography styling wrapper */}
            <div className="text-[#4B5563] text-base leading-[1.8] font-medium">
              <p className="mb-10 text-lg">
                Delivering out humane advantages. The medical management software simply a platform they channel technology events and real-time alerts or health anomalies, automatically share updates. This allows care teams to proactively intervene or adjust care plans automatically setting reminders for tracking and keeping overall patient outcomes and more effective methods. The patient communication tools help connect professionals for a seamless experience of lifelong health, wherever their care setting...
              </p>

              <h2 id="introduction" className="text-2xl font-bold text-[#03112E] mt-4 mb-5 pt-8 border-t border-gray-100 scroll-mt-24">Introduction</h2>
              <p className="mb-5">The modern era represents a unique paradox in human history. We communicate effortlessly, yet we increasingly experience loneliness and isolation. Stress feels ubiquitous, and finding a moment of calm can seem like an esoteric pursuit. However, incorporating self-care and mindful living is no longer a luxury—it’s a prerequisite for health.</p>

              <p className="mb-10">We believe that creating space for self-reflection and connection is the ultimate path towards genuine well-being. A wholesome lifestyle encapsulates mind, body, and spirit—creating a balanced foundation to sustain long-term resilience and emotional wellness.</p>

              <div className="rounded-3xl overflow-hidden aspect-[21/9] mb-12 border border-gray-100 shadow-sm">
                <img src="./myPhoto.jpg" className="w-full h-full object-cover" alt="Article Internal" />
              </div>

              <h2 id="preventive-care" className="text-2xl font-bold text-[#03112E] mt-10 mb-5 pt-0 scroll-mt-24">Preventive Care: Your Wellness Blueprint</h2>
              <p className="mb-6">Preventive care serves as the ultimate cornerstone of health. Simply putting out fires when they arise equates to reactionary medicine, whereas focusing on disease prevention allows for robust health parameters and longevity. Empowering health begins here.</p>
              <ul className="list-none pl-0 space-y-4 mb-10">
                <li className="flex gap-2">
                  <span className="text-[#03112E] font-bold mt-1 max-w-[10px]">•</span> <strong>Key Points:</strong>
                </li>
                <li className="flex gap-2 text-[#4B5563]">
                  <span className="text-[#03112E] font-bold mt-1 max-w-[10px]">•</span> <span>Seeking expert healthcare and consistent check-ups.</span>
                </li>
                <li className="flex gap-2 text-[#4B5563]">
                  <span className="text-[#03112E] font-bold mt-1 max-w-[10px]">•</span> <span>Understanding individual genetic markers or family risk.</span>
                </li>
                <li className="flex gap-2 text-[#4B5563]">
                  <span className="text-[#03112E] font-bold mt-1 max-w-[10px]">•</span> <span><span className="font-bold text-[#03112E]">Takeaway:</span> Routine monitoring pays immense dividends in diagnosing anomalies immediately and taking action sooner.</span>
                </li>
              </ul>

              <h2 id="fueling-your-body" className="text-2xl font-bold text-[#03112E] mt-10 mb-5 pt-0 scroll-mt-24">Fueling Your Body: The Art of Nourishment</h2>
              <p className="mb-6">Eating is easy, but nourishing is an art. Discovering the micro-details of adequate vitamin absorption, identifying sensitivities, and balancing your diet transforms your energy levels. Strategic hydration and mindful eating are absolute game changers in personal health management.</p>
              <ul className="list-none pl-0 space-y-4 mb-10">
                <li className="flex gap-2">
                  <span className="text-[#03112E] font-bold mt-1 max-w-[10px]">•</span> <strong>Key Points:</strong>
                </li>
                <li className="flex gap-2 text-[#4B5563]">
                  <span className="text-[#03112E] font-bold mt-1 max-w-[10px]">•</span> <span>Limit processing and artificial preservatives.</span>
                </li>
                <li className="flex gap-2 text-[#4B5563]">
                  <span className="text-[#03112E] font-bold mt-1 max-w-[10px]">•</span> <span>Source natural proteins and whole grains consistently.</span>
                </li>
                <li className="flex gap-2 text-[#4B5563]">
                  <span className="text-[#03112E] font-bold mt-1 max-w-[10px]">•</span> <span><span className="font-bold text-[#03112E]">Takeaway:</span> Your metabolic health is directly tied to what you put on your plate every single day.</span>
                </li>
              </ul>

              <h2 id="movement" className="text-2xl font-bold text-[#03112E] mt-10 mb-5 pt-0 scroll-mt-24">Movement: The Rhythm of Life</h2>
              <p className="mb-6">Movement is the rhythm of life. Regular physical activity shouldn't be about endless suffering in a gym—it should be about finding a sustainable, enjoyable activity that keeps your joints fluid and your heart rate active. Whether it's yoga, brisk walking, swimming, or weight training, consistency is paramount over intensity when building a lifelong habit.</p>
              <ul className="list-none pl-0 space-y-4 mb-10">
                <li className="flex gap-2">
                  <span className="text-[#03112E] font-bold mt-1 max-w-[10px]">•</span> <strong>Key Points:</strong>
                </li>
                <li className="flex gap-2 text-[#4B5563]">
                  <span className="text-[#03112E] font-bold mt-1 max-w-[10px]">•</span> <span>Dedicate a minimum of 30 minutes to cardiovascular exercise daily.</span>
                </li>
                <li className="flex gap-2 text-[#4B5563]">
                  <span className="text-[#03112E] font-bold mt-1 max-w-[10px]">•</span> <span>Integrate stretching to preserve flexibility.</span>
                </li>
                <li className="flex gap-2 text-[#4B5563]">
                  <span className="text-[#03112E] font-bold mt-1 max-w-[10px]">•</span> <span><span className="font-bold text-[#03112E]">Takeaway:</span> Movement naturally increases endorphins, fighting off fatigue and systemic inflammation.</span>
                </li>
              </ul>

              <h2 id="mental-wellness" className="text-2xl font-bold text-[#03112E] mt-10 mb-5 pt-0 scroll-mt-24">Mental Wellness: Cultivating Inner Peace</h2>
              <p className="mb-6">The mind dictates our reality. Cultivating inner peace is not about eliminating stress entirely—it’s about managing your reaction to it. Mindfulness, therapy, journaling, and creating rigid boundaries between work and rest are vital tools in preventing modern burnout. Emotional intelligence directly correlates to physical vitality.</p>
              <ul className="list-none pl-0 space-y-4 mb-10">
                <li className="flex gap-2">
                  <span className="text-[#03112E] font-bold mt-1 max-w-[10px]">•</span> <strong>Key Points:</strong>
                </li>
                <li className="flex gap-2 text-[#4B5563]">
                  <span className="text-[#03112E] font-bold mt-1 max-w-[10px]">•</span> <span>Practice daily gratitude or meditation for 10 minutes.</span>
                </li>
                <li className="flex gap-2 text-[#4B5563]">
                  <span className="text-[#03112E] font-bold mt-1 max-w-[10px]">•</span> <span>Limit screen time immediately upon waking.</span>
                </li>
                <li className="flex gap-2 text-[#4B5563]">
                  <span className="text-[#03112E] font-bold mt-1 max-w-[10px]">•</span> <span><span className="font-bold text-[#03112E]">Takeaway:</span> Your mental health is the operating system for your physical progression—prioritize it relentlessly.</span>
                </li>
              </ul>

              <h2 id="sleep" className="text-2xl font-bold text-[#03112E] mt-10 mb-5 pt-0 scroll-mt-24">Sleep: The Magic of Restoration</h2>
              <p className="mb-6">Sleep is the unsung hero of wellness. It is the period where the body undergoes cellular repair, memory consolidation, and hormonal balancing. Without adequate REM and deep sleep cycles, your immune system compromises and cognitive function deteriorates. A structured evening routine is critical.</p>
              <ul className="list-none pl-0 space-y-4 mb-10">
                <li className="flex gap-2">
                  <span className="text-[#03112E] font-bold mt-1 max-w-[10px]">•</span> <strong>Key Points:</strong>
                </li>
                <li className="flex gap-2 text-[#4B5563]">
                  <span className="text-[#03112E] font-bold mt-1 max-w-[10px]">•</span> <span>Maintain a consistent sleep schedule even on weekends.</span>
                </li>
                <li className="flex gap-2 text-[#4B5563]">
                  <span className="text-[#03112E] font-bold mt-1 max-w-[10px]">•</span> <span>Eliminate blue light sources at least an hour before bed.</span>
                </li>
                <li className="flex gap-2 text-[#4B5563]">
                  <span className="text-[#03112E] font-bold mt-1 max-w-[10px]">•</span> <span><span className="font-bold text-[#03112E]">Takeaway:</span> Sleep is the ultimate force multiplier for your waking hours; guard it fiercely.</span>
                </li>
              </ul>
            </div>
          </article>

          {/* Right Column - Sidebar */}
          <aside className="w-full lg:w-[35%]">
            <div className="sticky top-24">

              {/* Top Sidebar Image */}
              <div className="rounded-[1.5rem] overflow-hidden aspect-[4/3] mb-8 border border-gray-100 shadow-sm">
                <img src="./myPhoto.jpg" className="w-full h-full object-cover" alt="Sidebar Featured" />
              </div>

              {/* Table of Contents / Quick Links */}
              <div className="flex flex-col gap-1 mb-10 pt-2 relative">
                {/* Left decorative line */}
                <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-gray-100 rounded-full"></div>

                {tocLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setActiveSection(link.id)}
                    className={`flex items-center justify-between py-[18px] px-0 ml-4 rounded-xl text-[15px] font-bold transition-all border-b border-gray-100 last:border-0 relative ${activeSection === link.id ? 'text-[#03112E]' : 'text-[#03112E]/70 hover:text-[#03112E]'}`}
                  >
                    {/* Active dot indicator on the line */}
                    {activeSection === link.id && (
                      <div className="absolute left-[-21px] top-1/2 -translate-y-1/2 w-[8px] h-[8px] bg-[#5ACDCA] rounded-full ring-4 ring-white"></div>
                    )}

                    <span className="pr-4 leading-snug">{link.label}</span>

                    {activeSection === link.id ? (
                      <svg className="flex-shrink-0 text-[#03112E]" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7l7 7-7 7" /></svg>
                    ) : (
                      <svg className="flex-shrink-0 text-gray-300" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                    )}
                  </Link>
                ))}
              </div>

              {/* Newsletter Box */}
              <div className="bg-white rounded-[1.5rem] p-0 flex flex-col pt-4">
                <h3 className="text-[17px] font-bold text-[#03112E] mb-5">Weekly newsletter</h3>
                <input className="w-full h-12 px-5 rounded-full border border-gray-200 outline-none focus:border-[#5ACDCA] text-sm font-medium mb-4 placeholder-gray-400" placeholder="Email address" />
                <button className="w-full h-12 rounded-full bg-[#0A1629] text-white font-bold text-sm hover:bg-[#1A2E4F] transition-colors">Subscribe</button>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </section>
  )
}
