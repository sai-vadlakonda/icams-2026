import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { ImageOff } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { GALLERY_IMAGES } from '@/data/gallery';
import 'swiper/css';
import 'swiper/css/pagination';

function GalleryThumb({ caption }: { caption: string }) {
  // Placeholder visual tile shown until real photos are added to
  // src/assets/images/gallery/ (see README "Replacing Images").
  return (
    <div className="flex h-56 w-full flex-col items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-primary-100 to-teal-100 dark:from-primary-500/10 dark:to-teal-500/10 text-ink-400">
      <ImageOff size={28} />
      <span className="px-4 text-center text-xs font-medium text-ink-500 dark:text-ink-300">{caption}</span>
    </div>
  );
}

export default function Gallery() {
  return (
    <>
      <SEO
        title="Gallery"
        description="Photo gallery of Vardhaman College of Engineering campus and previous conference moments ahead of ICAMS 2026."
        path="/gallery"
      />
      <PageHero
        eyebrow="Gallery"
        title="Campus & Conference Moments"
        description="A glimpse of the Vardhaman College of Engineering campus and past technical events."
      />

      <section className="section-padding">
        <div className="container-section">
          <SectionHeading eyebrow="Featured" title="Highlights" />
          <div className="mt-10">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1.1}
              breakpoints={{ 640: { slidesPerView: 2.2 }, 1024: { slidesPerView: 3.2 } }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="!pb-12"
            >
              {GALLERY_IMAGES.map((image) => (
                <SwiperSlide key={image.id}>
                  <GalleryThumb caption={image.caption} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3">
            {GALLERY_IMAGES.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
              >
                <GalleryThumb caption={image.caption} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
