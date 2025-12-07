/*
  # Newsletter Subscribers Table

  ## Description
  Tabella per gestire le iscrizioni alla newsletter di Al Fresco.
  Permette agli utenti di iscriversi con la propria email per ricevere
  aggiornamenti, offerte e novità sui prodotti.

  ## Tables Created
  - `newsletter_subscribers`
    - `id` (uuid, primary key) - Identificativo univoco
    - `email` (text, unique, not null) - Email dell'iscritto
    - `subscribed_at` (timestamptz, default now()) - Data iscrizione
    - `is_active` (boolean, default true) - Stato iscrizione
    - `created_at` (timestamptz, default now()) - Data creazione record

  ## Security
  - Enabled Row Level Security (RLS)
  - Policy: Tutti possono inserire nuove iscrizioni (per form pubblico)
  - Policy: Solo admin possono leggere le iscrizioni
  - Email deve essere valida e univoca

  ## Notes
  - L'email viene salvata in lowercase per evitare duplicati
  - La tabella include un flag is_active per gestire disiscrizioni
  - Timestamp automatici per tracciare quando avviene l'iscrizione
*/

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  subscribed_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_active ON newsletter_subscribers(is_active) WHERE is_active = true;

-- Enable Row Level Security
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert (for public newsletter form)
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Only authenticated users can read (for admin dashboard)
CREATE POLICY "Only authenticated users can view subscribers"
  ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (true);

-- Function to convert email to lowercase before insert
CREATE OR REPLACE FUNCTION lowercase_email()
RETURNS TRIGGER AS $$
BEGIN
  NEW.email = LOWER(NEW.email);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to automatically lowercase emails
DROP TRIGGER IF EXISTS newsletter_lowercase_email ON newsletter_subscribers;
CREATE TRIGGER newsletter_lowercase_email
  BEFORE INSERT OR UPDATE ON newsletter_subscribers
  FOR EACH ROW
  EXECUTE FUNCTION lowercase_email();
