import { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    setTimeout(() => {
      setStatus('success');
      setMessage('Grazie per esserti iscritto alla nostra newsletter!');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-20 bg-[#f6e4d4] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 lg:w-18 lg:h-18 bg-[#248acc]/10 rounded-full mb-6">
            <Mail className="w-8 h-8 lg:w-9 lg:h-9 text-[#248acc]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2f3031] mb-4 tracking-tight">
            Iscriviti alla Newsletter
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Ricevi aggiornamenti sui nostri prodotti, offerte esclusive e le ultime novità da Al Fresco
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Inserisci la tua email"
              required
              disabled={status === 'loading'}
              className="flex-1 px-6 py-4 lg:px-7 lg:py-4.5 text-base lg:text-lg rounded-full border-2 border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#248acc] focus:ring-2 focus:ring-[#248acc]/20 transition-all duration-300 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-[#248acc] text-white px-8 py-4 lg:px-9 lg:py-4.5 text-base lg:text-lg rounded-full font-semibold hover:bg-[#2f3031] transition-all duration-500 shadow-lg hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {status === 'loading' ? 'Invio...' : 'Iscriviti'}
            </button>
          </div>

          {status === 'success' && (
            <div className="mt-4 flex items-center gap-2 text-green-700 bg-green-100 px-6 py-3 lg:px-7 lg:py-3.5 rounded-full">
              <CheckCircle size={20} className="lg:w-6 lg:h-6" />
              <span className="text-sm lg:text-base font-medium">{message}</span>
            </div>
          )}

          {status === 'error' && (
            <div className="mt-4 flex items-center gap-2 text-red-700 bg-red-100 px-6 py-3 lg:px-7 lg:py-3.5 rounded-full">
              <AlertCircle size={20} className="lg:w-6 lg:h-6" />
              <span className="text-sm lg:text-base font-medium">{message}</span>
            </div>
          )}
        </form>

        <p className="text-center text-gray-600 text-sm lg:text-base mt-6">
          Rispettiamo la tua privacy. Puoi annullare l'iscrizione in qualsiasi momento.
        </p>
      </div>
    </section>
  );
}
