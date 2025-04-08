import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [showContactOptions, setShowContactOptions] = useState(false);

  return (
    <div>
      <style jsx global>{`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        .main {
          min-height: 100vh;
          background: linear-gradient(to bottom, #0a0c1b, #0e122b, #0a0c1b);
          color: white;
          position: relative;
          overflow: hidden;
        }
        .background-radial {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(130, 170, 255, 0.1), transparent 70%);
          pointer-events: none;
          animation: pulse 4s infinite;
        }
        @keyframes pulse {
          0% { opacity: 0.1; }
          50% { opacity: 0.05; }
          100% { opacity: 0.1; }
        }
        .background-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, #1b1e38, transparent, #0a0c1b);
          pointer-events: none;
        }
        .hero-section {
          position: relative;
          text-align: center;
          padding: 120px 20px;
        }
        .hero-title {
          font-size: 60px;
          font-weight: 800;
          color: #84b5ff;
          text-shadow: 0 0 40px rgba(130, 170, 255, 0.4);
          margin-bottom: 20px;
        }
        .hero-subtitle {
          font-size: 18px;
          color: #d1d5db;
          max-width: 700px;
          margin: 0 auto;
        }
        .cards-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          padding: 60px 40px;
          position: relative;
        }
        .card-wrapper {
          position: relative;
        }
        .card {
          background: rgba(16, 19, 37, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid #84b5ff;
          border-radius: 24px;
          box-shadow: 0 0 40px rgba(130, 170, 255, 0.2);
          padding: 20px;
        }
        .card-content {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .card-title {
          font-size: 28px;
          font-weight: 700;
          color: #84b5ff;
          text-shadow: 0 0 10px rgba(130, 170, 255, 0.4);
        }
        .card-text {
          font-size: 14px;
          color: #d1d5db;
        }
        .button-group {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }
        .button {
          padding: 10px 20px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
          transition: background-color 0.3s, color 0.3s;
          cursor: pointer;
        }
        .button-filled {
          background-color: #84b5ff;
          color: black;
        }
        .button-filled:hover {
          background-color: white;
        }
        .button-outline {
          border: 1px solid #84b5ff;
          color: #84b5ff;
        }
        .button-outline:hover {
          background-color: #84b5ff;
          color: black;
        }
        .card-button {
          padding: 8px 16px;
        }
        .contact-section {
          text-align: center;
          padding: 80px 20px;
          border-top: 1px solid #84b5ff;
          position: relative;
        }
        .contact-title {
          font-size: 36px;
          font-weight: 700;
          color: #84b5ff;
          margin-bottom: 20px;
          text-shadow: 0 0 10px rgba(130, 170, 255, 0.4);
        }
        .contact-text {
          font-size: 16px;
          color: #9ca3af;
          max-width: 600px;
          margin: 0 auto 30px;
        }
        .contact-button-wrapper {
          display: inline-block;
        }
        .contact-options {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .contact-link {
          font-size: 14px;
          color: #84b5ff;
          text-decoration: underline;
        }
        .contact-link:hover {
          color: white;
        }
        .footer {
          background: #0a0c1b;
          text-align: center;
          padding: 30px 20px;
          border-top: 1px solid #84b5ff;
          color: #6b7280;
          font-size: 14px;
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 40px;
          }
          .hero-subtitle {
            font-size: 16px;
          }
          .cards-section {
            grid-template-columns: 1fr;
            padding: 40px 20px;
          }
          .card-title {
            font-size: 24px;
          }
          .contact-title {
            font-size: 28px;
          }
        }
      `}</style>

      <main className="main">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="background-radial"
        />
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="background-gradient"
        />

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
          className="hero-section"
        >
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, type: 'spring' }}
            className="hero-title"
          >
            Veloryin
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="hero-subtitle"
          >
            India’s most elite influencer collective. Where culture, trendsetters, and iconic brands collide.
          </motion.p>
        </motion.section>

        <section className="cards-section">
          {[
            {
              title: 'For Influencers & Celebrities',
              description1: 'You don’t just create content. You inspire.',
              description2: 'Veloryin gives you exclusive access to India’s most premium campaigns, legacy brand deals & unmatched creative support.',
              buttonText: 'Join the Legacy',
              formButtonText: 'Fill the Form',
              link: 'https://forms.gle/k44CPozkMLGNfZFd6',
            },
            {
              title: 'For Brands',
              description1: 'Work with India’s most powerful creators – verified, viral & vision-driven.',
              description2: 'From rapid matchmaking to complete campaign execution, Veloryin delivers results in hours, not weeks.',
              buttonText: 'Launch Campaign',
              formButtonText: 'Fill the Form',
              link: 'https://forms.gle/87WWTYy4dWYKyxGK9',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: i * 0.3 }}
              viewport={{ once: true }}
              className="card-wrapper"
            >
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.4 }}>
                <div className="card">
                  <div className="card-content">
                    <h2 className="card-title">{item.title}</h2>
                    <p className="card-text">{item.description1}</p>
                    <p className="card-text">{item.description2}</p>
                    <div className="button-group">
                      <motion.div whileHover={{ scale: 1.05 }}>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button button-filled card-button"
                        >
                          {item.buttonText}
                        </a>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }}>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button button-outline card-button"
                        >
                          {item.formButtonText}
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="contact-section"
        >
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="contact-title"
          >
            Let’s Make Your Brand Unforgettable
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="contact-text"
          >
            Whether you're launching or dominating, Veloryin gives you unmatched access to creators who move culture and drive results.
          </motion.p>
          <motion.div whileHover={{ scale: 1.1 }} className="contact-button-wrapper">
            <button
              onClick={() => setShowContactOptions(!showContactOptions)}
              className="button button-filled"
            >
              Contact Us
            </button>
          </motion.div>

          <AnimatePresence>
            {showContactOptions && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="contact-options"
              >
                <a href="mailto:veloryin@gmail.com" className="contact-link">
                  Email: veloryin@gmail.com
                </a>
                <a
                  href="https://instagram.com/veloryin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Instagram: @veloryin
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="footer"
        >
          <p>© {new Date().getFullYear()} Veloryin. where influence meets intuition.</p>
        </motion.footer>
      </main>
    </div>
  );
}

export default App;
