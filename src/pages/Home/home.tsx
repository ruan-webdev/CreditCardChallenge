import './styles.css'
import '../../fonts/fonts.css' 
import IMask from 'imask';
import { useRef, useEffect } from 'react';
import React from 'react';

const Home = () => {

  const cardNumberRef = useRef(null);
  const cardValidityRef = useRef(null);
  const cardCvvRef = useRef(null);

  useEffect(() => {
    if (cardNumberRef.current) {
      const mask = IMask(cardNumberRef.current, {
        mask: '0000 0000 0000 0000'
      });
    }
  }, []);


  useEffect(() => {
    if (cardValidityRef.current) {
      const mask = IMask(cardValidityRef.current, {
        mask: 'MM{/}YY',
        blocks: {
          MM: {
            mask: IMask.MaskedRange,
            from: 1,
            to: 12,
          },
          YY: {
            mask: IMask.MaskedRange,
            from: String(new Date().getFullYear()).slice(2),
            to: String(new Date().getFullYear() + 10).slice(2),
          }
        }
      });
    }
  }, [cardValidityRef]);


  useEffect(() => {
    if (cardCvvRef.current) {
      const mask = IMask(cardCvvRef.current, {
        mask: '000'
      });
    }
  }, []);

 
  return (
      <>
        <body>
          <form>
            <section id="credit-card">
              <div className="front" id="card-number"></div>
              <div className="back" id="card-number"></div>
            </section>
            <section className="inputs flex">
              <div className="input-wrapper">
                <label htmlFor="cc-number">Número do cartão</label>
                <input id="cc-number" ref={cardNumberRef} required type="text" placeholder='**** **** **** ****'></input>
                <div className='warning'>
                  <img src='https://i.ibb.co/Rh8n90p/Warning.png' alt='icone de alerta'/>
                  Número do cartão é obrigatório
                </div>
              </div>
              <div className="input-wrapper">
                <label htmlFor="cc-holder">Nome do titular</label>
                <input id="cc-holder" required type="text" placeholder='Nome como está no cartão'></input>
                <div className='warning'>
                  <img src='https://i.ibb.co/Rh8n90p/Warning.png' alt='icone de alerta'/>
                  Nome do titular é obrigatório
                </div>
              </div>

              <div className="col-2 flex">
                <div className="input-wrapper">
                  <label htmlFor="cc-validity">Validade (mês/ano)</label>
                  <input id="cc-validity" ref={cardValidityRef} required type="text" placeholder='MM/AA'></input>
                  {/* <div className='warning'>
                  <img src='https://i.ibb.co/Rh8n90p/Warning.png' alt='icone de alerta'/>
                  Validade do cartão é obrigatório
                </div> */}
                </div>

                <div className="input-wrapper">
                  <label htmlFor="cc-cvv" className='flex help'>CVV <img src='https://i.ibb.co/pWVKg8f/interrogation.png' alt="icone de ajuda" title="Esse número está, geralmente, nas costas do seu cartão "/></label>
                  <input id="cc-cvv" ref={cardCvvRef} required type="text" placeholder='***'></input>
                  {/* <div className='warning'>
                  <img src='https://i.ibb.co/Rh8n90p/Warning.png' alt='icone de alerta'/>
                  Nome do titular é obrigatório
                </div> */}
                  </div>
              </div>

            </section>
            <section className="info-security flex">
              <img src='https://i.ibb.co/QFRkbXQ/privacy.png' alt="icone de segurança" title="Seus dados estão seguros"/>
              Seus dados estão seguros
            </section>
            <button>Adicionar Cartão</button>
          </form>
        </body>
      </>
     )
}

export default Home