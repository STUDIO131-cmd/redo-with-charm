import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", company: "", whatsapp: "", instagram: "", revenue: "", timing: "", campaignDate: "", hasPlan: "", planDescription: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) emailjs.init(publicKey);
  }, []);

  const handleChange = (field: string, value: string) => { setFormData((prev) => ({ ...prev, [field]: value })); setSubmitError(""); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      if (!serviceId || !templateId) throw new Error("EmailJS not configured");
      await emailjs.send(serviceId, templateId, { first_name: formData.firstName, last_name: formData.lastName, company: formData.company, whatsapp: formData.whatsapp, instagram: formData.instagram, revenue: formData.revenue, timing: formData.timing, campaign_date: formData.campaignDate, has_plan: formData.hasPlan, plan_description: formData.planDescription });
      setShowSuccess(true);
      setFormData({ firstName: "", lastName: "", company: "", whatsapp: "", instagram: "", revenue: "", timing: "", campaignDate: "", hasPlan: "", planDescription: "" });
    } catch { setSubmitError("Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp."); } finally { setIsSubmitting(false); }
  };

  const radioClasses = (field: string, value: string) =>
    `flex items-center gap-2 px-4 min-h-[44px] rounded-lg border cursor-pointer transition-colors text-sm ${formData[field as keyof typeof formData] === value ? "bg-white text-black border-white" : "bg-white/10 border-white/20 text-white hover:bg-white/20"}`;

  return (
    <section className="py-12 sm:py-16 md:py-20 pb-16 md:pb-24 backdrop-blur-xl bg-white/[0.08] border-y border-white/[0.15]" id="orcamento">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-center text-white/90 mb-4" style={{ fontFamily: "var(--font-heading)" }}>Preencha o formulário de contato</h2>
          <p className="text-center text-white/60 text-sm leading-relaxed mb-6 md:mb-12">Conte-nos sobre a sua próxima campanha. Vamos avaliar o escopo e retornaremos com uma proposta personalizada.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Nome <span className="text-red-400">*</span></label>
                <input type="text" required value={formData.firstName} onChange={(e) => handleChange("firstName", e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Nome" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Sobrenome <span className="text-red-400">*</span></label>
                <input type="text" required value={formData.lastName} onChange={(e) => handleChange("lastName", e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Sobrenome" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Empresa</label>
              <input type="text" value={formData.company} onChange={(e) => handleChange("company", e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="Nome da empresa (opcional)" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">WhatsApp <span className="text-red-400">*</span></label>
              <input type="tel" required value={formData.whatsapp} onChange={(e) => handleChange("whatsapp", e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="DDD + Número" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Instagram da empresa <span className="text-red-400">*</span></label>
              <input type="text" required value={formData.instagram} onChange={(e) => handleChange("instagram", e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="@nomedeusuario" />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium text-white/80">Faixa de faturamento mensal <span className="text-red-400">*</span></label>
              <div className="flex flex-col md:flex-row flex-wrap gap-3">
                {["Abaixo de 30k", "Entre 30k - 60k", "60k - 100k", "Acima de 100k"].map((opt) => (
                  <label key={opt} className={radioClasses("revenue", opt)}>
                    <input type="radio" name="revenue" value={opt} checked={formData.revenue === opt} onChange={(e) => handleChange("revenue", e.target.value)} className="sr-only" required />{opt}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium text-white/80">Você está buscando uma campanha para agora ou planejando? <span className="text-red-400">*</span></label>
              <div className="flex flex-col gap-3">
                {["Quero começar logo (objetivos em 30 dias)", "Estou programando e quero conhecer proposta"].map((opt) => (
                  <label key={opt} className={radioClasses("timing", opt)}>
                    <input type="radio" name="timing" value={opt} checked={formData.timing === opt} onChange={(e) => handleChange("timing", e.target.value)} className="sr-only" required />{opt}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Há alguma data específica para a campanha?</label>
              <input type="text" value={formData.campaignDate} onChange={(e) => handleChange("campaignDate", e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/40" placeholder="ex: black friday, dia das mães..." />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium text-white/80">Você já tem um planejamento para a campanha? <span className="text-red-400">*</span></label>
              <div className="flex gap-4">
                {["Não, estou avaliando", "Tenho, quero compartilhar"].map((opt) => (
                  <label key={opt} className={radioClasses("hasPlan", opt)}>
                    <input type="radio" name="hasPlan" value={opt} checked={formData.hasPlan === opt} onChange={(e) => handleChange("hasPlan", e.target.value)} className="sr-only" required />{opt}
                  </label>
                ))}
              </div>
            </div>

            <AnimatePresence>
              {formData.hasPlan === "Tenho, quero compartilhar" && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="space-y-2 overflow-hidden">
                  <label className="text-sm font-medium text-white/80">Descreva brevemente o que você tem em mente para a campanha: <span className="text-red-400">*</span></label>
                  <textarea required value={formData.planDescription} onChange={(e) => handleChange("planDescription", e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/40 min-h-[120px]" placeholder="Pode ser um conceito, referência, data, produto..." />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="text-center pt-4 space-y-3">
              <button type="submit" disabled={isSubmitting} className="w-full md:w-fit md:mx-auto px-10 min-h-[44px] py-4 rounded-full bg-white text-black text-sm tracking-[0.2em] uppercase font-medium hover:opacity-90 transition-opacity disabled:opacity-50">
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
              {submitError && <p className="text-red-400 text-sm">{submitError}</p>}
            </div>
          </form>
        </motion.div>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setShowSuccess(false)}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} onClick={(e) => e.stopPropagation()} className="max-w-md max-w-[92vw] mx-auto rounded-2xl p-8 backdrop-blur-xl bg-white/[0.08] border border-white/[0.15] text-center">
              <h3 className="text-xl md:text-2xl text-white/90 mb-4" style={{ fontFamily: "var(--font-heading)" }}>Obrigado pelas informações :-)</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8">Nossa equipa vai avaliar as informações sobre a campanha e retornaremos no contato de WhatsApp dentro de 24h.</p>
              <button onClick={() => setShowSuccess(false)} className="w-full md:w-fit md:mx-auto px-10 min-h-[44px] py-3 rounded-full backdrop-blur-xl bg-white/[0.08] border border-white/[0.15] text-white text-sm tracking-[0.2em] uppercase font-medium hover:bg-white/[0.15] transition-colors">Fechar</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactForm;
