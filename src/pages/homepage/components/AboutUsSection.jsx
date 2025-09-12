import React, { useEffect, useState } from 'react';
import Icon from '../../../components/AppIcon';

const AboutUsSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    {
      id: 1,
      src: '/assets/images/lab-image.avif',
      alt: 'Modern pharmaceutical laboratory',
      title: 'State-of-the-Art Facilities',
    },
    {
      id: 2,
      src: '/assets/images/lab-image2.avif',
      alt: 'Research and development',
      title: 'R&D Excellence',
    },
    {
      id: 3,
      src: '/assets/images/lab-image3.avif',
      alt: 'Quality control',
      title: 'Quality Control',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Dynamic Visual so it never feels empty */}
          <div className="lg:col-span-6 order-first">
            <div className="relative group rounded-3xl overflow-hidden shadow-xl">
              <img
                src={carouselImages[currentImageIndex].src}
                alt={carouselImages[currentImageIndex].alt}
                className="w-full h-[420px] object-cover transition-all duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                <div className="rounded-xl bg-white/90 backdrop-blur border border-border px-3 py-2 text-sm font-semibold text-foreground">
                  {carouselImages[currentImageIndex].title}
                </div>
                <div className="flex gap-1">
                  {carouselImages.map((img, idx) => (
                    <button
                      key={img.id}
                      onClick={() => setCurrentImageIndex(idx)}
                      aria-label={`Show image ${idx + 1}`}
                      className={`h-2 w-6 rounded-full transition ${idx === currentImageIndex ? 'bg-primary' : 'bg-border'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Trimmed copy and key points only */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-border bg-muted/40">
              <Icon name="Building2" size={18} className="text-primary mr-2" />
              <span className="text-sm font-semibold text-primary">About Apicon Pharma</span>
            </div>

            <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
              Revolutionizing oncology through precision APIs
            </h2>

            <p className="text-lg text-muted-foreground">
              We develop, scale, and supply critical oncology APIs with a regulatory-first mindset
              and unwavering reliability—so therapies reach patients faster.
            </p>

            <ul className="space-y-3">
              {[{ icon: 'Shield', text: 'FDA-compliant quality systems with data integrity' },
                { icon: 'Zap', text: 'R&D to scale-up: speed without compromise' },
                { icon: 'Globe', text: 'Global, resilient supply backed by audited partners' }].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mt-1 mr-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                    <Icon name={item.icon} size={18} className="text-primary" />
                  </span>
                  <span className="text-foreground/90">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-1">
              <a href="#contact" className="btn-conversion px-6 py-3 rounded-xl font-semibold" aria-label="Contact us">
                Contact us
              </a>
              <a href="#products" className="px-6 py-3 rounded-xl font-semibold border border-border hover:bg-muted/40 transition" aria-label="Explore our APIs">
                Explore our APIs
              </a>
            </div>
          </div>
        </div>

        {/* Balanced stats below the grid to avoid crowding the right column */}
        <div className="mt-12 grid grid-cols-3 gap-6">
          {[{ value: '15+', label: 'Years in oncology' },
            { value: '50M+', label: 'Patient doses enabled' },
            { value: '200+', label: 'APIs delivered' }].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;



