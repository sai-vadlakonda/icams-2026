import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/PageHero';
import { SITE } from '@/constants/site';

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>();

  // NOTE: This demo submit handler simulates a network call. Wire this up to
  // your real backend / email service (e.g. Formspree, EmailJS, or a custom API).
  async function onSubmit(data: ContactFormValues) {
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/icams2026@vardhaman.org",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,

            _subject: `New ICAMS 2026 Contact Form: ${data.subject}`,
            _template: "table",
            _captcha: "false",
            _autoresponse:
              "Thank you for contacting ICAMS 2026. We have received your message and will get back to you shortly.",
          }),
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        reset();
      } else {
        alert(result.message || "Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please try again.");
    }
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with the ICAMS 2026 organizing committee at the Department of Mechanical Engineering, Vardhaman College of Engineering, Hyderabad."
        path="/contact"
      />
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Have a question about ICAMS 2026? Send us a message and our team will get back to you."
      />

      <section className="section-padding">
        <div className="container-section grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-ink-100 dark:border-white/10 bg-white dark:bg-ink-900 p-6 shadow-soft">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-300">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink-900 dark:text-white">Address</p>
                  <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">
                    {SITE.address.line1}, {SITE.address.line2}
                    <br />
                    {SITE.address.line3}, {SITE.address.line4}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-ink-100 dark:border-white/10 bg-white dark:bg-ink-900 p-6 shadow-soft">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-300">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink-900 dark:text-white">Email</p>
                  <a href={`mailto:${SITE.email}`} className="mt-1 text-sm text-primary-600 dark:text-primary-300">
                    {SITE.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-ink-100 dark:border-white/10 bg-white dark:bg-ink-900 p-6 shadow-soft">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-300">
                  <Phone size={20} />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink-900 dark:text-white">Phone</p>
                  <a href={`tel:${SITE.phone}`} className="mt-1 text-sm text-primary-600 dark:text-primary-300">
                    {SITE.phone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-ink-100 dark:border-white/10 bg-white dark:bg-ink-900 p-7 shadow-soft sm:p-9"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 size={44} className="text-teal-500" />
                <h3 className="mt-4 text-lg font-bold text-ink-900 dark:text-white">Message Sent</h3>
                <p className="mt-2 text-sm text-ink-500 dark:text-ink-300">
                  Thank you for reaching out. The ICAMS 2026 team will respond shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-5 text-sm font-semibold text-primary-600 dark:text-primary-300"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <input
                  type="text"
                  name="_honey"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-ink-700 dark:text-ink-200">Full Name</label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      placeholder="Your name"
                      className="mt-2 w-full rounded-xl border border-ink-200 dark:border-white/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-primary-500"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-ink-700 dark:text-ink-200">Email Address</label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
                      })}
                      type="email"
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-ink-200 dark:border-white/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-primary-500"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-ink-700 dark:text-ink-200">Subject</label>
                  <input
                    {...register('subject', { required: 'Subject is required' })}
                    type="text"
                    placeholder="How can we help?"
                    className="mt-2 w-full rounded-xl border border-ink-200 dark:border-white/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-primary-500"
                  />
                  {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>}
                </div>

                <div>
                  <label className="text-sm font-semibold text-ink-700 dark:text-ink-200">Message</label>
                  <textarea
                    {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message is too short' } })}
                    rows={5}
                    placeholder="Write your message..."
                    className="mt-2 w-full resize-none rounded-xl border border-ink-200 dark:border-white/15 bg-transparent px-4 py-3 text-sm outline-none focus:border-primary-500"
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
                </div>

                <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-60">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
