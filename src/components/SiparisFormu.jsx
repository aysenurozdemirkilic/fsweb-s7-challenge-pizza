import React, { useState } from 'react';
import styled from "styled-components";

const OrderContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  width: 100%;
  background-color: #CE2829; /* Koyu kırmızı */
  color: white;
  text-align: center; /* Metni merkezle */
  padding: 20px;
`;

const SiparisFormu = () => {
  // State'ler
  const [boyut, setBoyut] = useState('');
  const [hamur, setHamur] = useState('');
  const [ekMalzemeler, setEkMalzemeler] = useState([]);
  const [siparisNotu, setSiparisNotu] = useState('');

  // Malzemeler listesi
  const malzemeler = [
    'peperoni', 'sosis', 'kanada jambonu', 'tavuk ızgara',
    'soğan', 'domates', 'mısır', 'sucuk', 'jalepeno',
    'sarımsak', 'biber', 'ananas', 'kabak'
  ];

  const boyutlar = ['Küçük', 'Orta', 'Büyük'];

  // Hesaplanan sipariş toplam fiyatı
  const toplamFiyat = 25.00; // Sabit bir değer olduğunu varsayalım

  // Toplam ek malzeme seçimlerinin fiyatı
  const ekMalzemeFiyati = ekMalzemeler.length * 5.00; // Her ek malzeme için 5.00 TL olduğunu varsayalım

  // Toplam ücret
  const toplamUcret = toplamFiyat + ekMalzemeFiyati;

  // Form submit işlemi
  const handleSubmit = (e) => {
    e.preventDefault();
    // Sipariş oluşturma işlemleri burada yapılabilir
    console.log('Sipariş oluşturuldu:', { boyut, hamur, ekMalzemeler, siparisNotu });
  };

  // Sipariş Notu değişikliği için fonksiyon
  const handleSiparisNotuChange = (e) => {
    setSiparisNotu(e.target.value);
  };

  // Boyut seçimi için fonksiyon
  const handleBoyutChange = (e) => {
    setBoyut(e.target.value);
  };

  // Hamur seçimi için fonksiyon
  const handleHamurChange = (e) => {
    setHamur(e.target.value);
  };

  // Ek malzeme seçimi için fonksiyon
  const handleEkMalzemeChange = (malzeme) => {
    // Eğer malzeme zaten seçiliyse, listeden kaldır
    if (ekMalzemeler.includes(malzeme)) {
      setEkMalzemeler(ekMalzemeler.filter(item => item !== malzeme));
    } else { // Değilse, listeye ekle
      setEkMalzemeler([...ekMalzemeler, malzeme]);
    }
  };

  return (
    <OrderContainer>
      <h1>Teknolojik Yemekler</h1>
      <p>Anasayfa - Seçenekler - <strong>Sipariş Oluştur</strong></p>
      <form onSubmit={handleSubmit}>
        <label>
          Boyut Seç:
          <div className="boyut-secimi">
            {boyutlar.map((secim, index) => (
              <label key={index} className={`boyut-option ${boyut === secim ? 'selected' : ''}`}>
                <input
                  type="radio"
                  value={secim}
                  checked={boyut === secim}
                  onChange={handleBoyutChange}
                />
                <span className="boyut-label">{secim}</span>
              </label>
            ))}
          </div>
        </label>
        <br />
        <label>
          Hamur Seçimi:
          <select value={hamur} onChange={handleHamurChange}>
            <option value="ince">İnce</option>
            <option value="orta">Orta</option>
            <option value="kalin">Kalın</option>
          </select>
        </label>
        <br />
        <label>
          Ek Malzemeler:
          {malzemeler.map((malzeme, index) => (
            <label key={index}>
              <input
                type="checkbox"
                value={malzeme}
                checked={ekMalzemeler.includes(malzeme)}
                onChange={() => handleEkMalzemeChange(malzeme)}
              />
              {malzeme}
            </label>
          ))}
        </label>
        <br />
        <br />
        <label>
          Sipariş Notu:
          <textarea value={siparisNotu} onChange={handleSiparisNotuChange} placeholder="Siparişine eklemek istediğin bir not var mı?" />
        </label>
        <br />
        <button type="submit">Sipariş Ver</button>
      </form>
      <div className="order-summary">
        <div>
          <strong>Sipariş Toplamı:</strong> {toplamFiyat.toFixed(2)} TL
        </div>
        <div>
          <strong>Ek Malzemeler:</strong> {ekMalzemeFiyati.toFixed(2)} TL
        </div>
        <div>
          <strong>Toplam Ücret:</strong> {toplamUcret.toFixed(2)} TL
        </div>
      </div>
    </OrderContainer>
  );
};

export default SiparisFormu;