import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-[#2f3031] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4 tracking-tight">
            Contattaci
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#248acc] to-white mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium">
            Hai domande sui nostri prodotti? Vuoi collaborare con noi? Scrivici, saremo felici di risponderti
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">Informazioni di Contatto</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#248acc] transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-[#248acc] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white mb-1">Cooperativa Sociale Panta Rei</h4>
                  <p className="text-sm text-gray-300 font-medium">Via Pietro Vassanelli, 25</p>
                  <p className="text-sm text-gray-300 font-medium">37012 Bussolengo VR</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#248acc] transition-colors duration-300">
                  <Mail className="w-5 h-5 text-[#248acc] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white mb-1">Email</h4>
                  <a href="mailto:info@progettoalfresco.it" className="text-[#248acc] hover:text-white transition-colors font-medium text-sm">
                    info@progettoalfresco.it
                  </a>
                  <br />
                  <a href="mailto:info@cooperativapantarei.it" className="text-gray-300 hover:text-[#248acc] transition-colors font-medium text-sm">
                    info@cooperativapantarei.it
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#248acc] transition-colors duration-300">
                  <Phone className="w-5 h-5 text-[#248acc] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white mb-1">Telefono</h4>
                  <a href="tel:+390456717635" className="text-gray-300 hover:text-[#248acc] transition-colors font-medium text-sm">
                    +39 045 6717635
                  </a>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <p className="text-sm text-gray-200 leading-relaxed font-medium">
                  <strong className="text-white font-bold text-base">Orari:</strong><br />
                  Lunedì - Venerdì: 9:00 - 18:00<br />
                  Sabato: 9:00 - 13:00<br />
                  Domenica: Chiuso
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">Invia un Messaggio</h3>

            {status === 'success' && (
              <div className="mb-6 p-4 bg-[#248acc]/20 text-white rounded-lg flex items-center gap-2 border border-[#248acc]/30">
                <Send size={20} />
                <span className="text-sm font-medium">Messaggio inviato con successo!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-white/20 rounded-lg focus:outline-none focus:border-[#248acc] focus:ring-2 focus:ring-[#248acc]/20 transition-all duration-300 bg-white/5 text-white placeholder-gray-400"
                  placeholder="Il tuo nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-white/20 rounded-lg focus:outline-none focus:border-[#248acc] focus:ring-2 focus:ring-[#248acc]/20 transition-all duration-300 bg-white/5 text-white placeholder-gray-400"
                  placeholder="tua@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Messaggio *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-white/20 rounded-lg focus:outline-none focus:border-[#248acc] focus:ring-2 focus:ring-[#248acc]/20 transition-all duration-300 resize-none bg-white/5 text-white placeholder-gray-400"
                  placeholder="Come possiamo aiutarti?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#248acc] text-white px-6 py-3.5 rounded-full text-base font-bold hover:bg-white hover:text-[#2f3031] transition-all duration-500 shadow-lg hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Invia Messaggio
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
