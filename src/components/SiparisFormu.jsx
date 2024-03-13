import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from "styled-components";

const OrderContainer = styled.div`
  margin-top: 0;
  width: 100%;
  background-color: #CE2829; /* Koyu kırmızı */
  color: white;
  text-align: center; /* Metni merkezle */
  padding: 0px;
  max-width: 100%; /* Resmin maksimum genişliği */
  max-height: 100%; /* Resmin maksimum yüksekliği */
}
`;

const Title = styled.h1`
  font-size: 40px;
  font-family: 'Satisfy', cursive; /* Satisfy fontu kullanılıyor */
  margin-bottom: 20px; /* Altta biraz boşluk bırak */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
`;

const EkMalzemelerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; /* Malzemeler arasında boşluk */
`;

const EkMalzemeLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Button = styled.button`
  background-color: #FDC913; /* Sarı renk */
  color: #292929; /* Koyu Gri renk */
  border: none;
  padding: 10px 20px;
  border-radius: 25px; /* Yuvarlak kenarlar */
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;

  &:hover {
    background-color: #FAF7F2; /* Bej renk */
  }
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

  const history = useHistory();

  // Form submit işlemi
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!boyut || !hamur) {
      alert("Lütfen boyut ve hamur seçiniz.");
      return;
    }

    // Sipariş oluşturma işlemleri burada yapılabilir
    const all = {...boyut, ...hamur, ...ekMalzemeler, ...siparisNotu};
    console.log('Sipariş oluşturuldu:', { boyut, hamur, ekMalzemeler, siparisNotu });

    axios.post('https://reqres.in/api/pizza', all)
    .then(function (response) {
    // handle success
    console.log(response);
     history.push("/siparisonayi")
    })
    .catch(function (error) {
    // handle error
    console.log(error);
  })
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
    <OrderContainer >
      <Title>Teknolojik Yemekler</Title>
      <p>Anasayfa - Seçenekler - <strong>Sipariş Oluştur</strong></p>
      <Form onSubmit={handleSubmit}>
        <Label>
          Boyut Seç:
          <select value={boyut} onChange={handleBoyutChange}>
            {boyutlar.map((secim, index) => (
              <option key={index} value={secim}>{secim}</option>
            ))}
          </select>
        </Label>
        <Label>
          Hamur Seçimi:
          <select value={hamur} onChange={handleHamurChange}>
            <option value="ince">İnce</option>
            <option value="orta">Orta</option>
            <option value="kalin">Kalın</option>
          </select>
        </Label>
        <Label>
          Ek Malzemeler:
          {malzemeler.map((malzeme, index) => (
            <Label key={index} style={{ marginRight: "10px", marginBottom: "10px" }}>
            <input
                type="checkbox"
                checked={ekMalzemeler.includes(malzeme)}
                onChange={() => handleEkMalzemeChange(malzeme)}
              />
              {malzeme}
            </Label>
          ))}
        </Label>
        <Label>
          Sipariş Notu:
          <TextArea value={siparisNotu} onChange={handleSiparisNotuChange} placeholder="Siparişine eklemek istediğin bir not var mı?" />
        </Label>
        <Button onClick={handleSubmit} type="submit" >Sipariş Ver</Button>
      </Form>
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