describe('Sipariş Formu Testleri', () => {
    it('Inputa Metin Girme Testi', () => {
      cy.visit('http://localhost:5175');
      
      // Input alanını bulup metin girişi yap
      cy.get('input[type="text"]').type('Orta');
      
      // Girilen metni kontrol et
      cy.get('input[type="text"]').should('have.value', 'Orta');
    });
  
    it('Birden Fazla Malzeme Seçme Testi', () => {
      cy.visit('http://localhost:5175/');
      
      // Birden fazla malzeme seç
      cy.get('input[type="checkbox"]').eq(0).check();
      cy.get('input[type="checkbox"]').eq(1).check();
      
      // Seçim yapıldığını kontrol et
      cy.get('input[type="checkbox"]').eq(0).should('be.checked');
      cy.get('input[type="checkbox"]').eq(1).should('be.checked');
    });
  
    it('Formu Gönderme Testi', () => {
      cy.visit('http://localhost:5175');
      
      // Gerekli alanları doldur
      cy.get('select[name="boyut"]').select('Orta');
      cy.get('select[name="hamur"]').select('İnce');
      cy.get('textarea[name="siparisNotu"]').type('Ekstra acılı istiyorum.');
  
      // Formu gönder
      cy.get('button[type="submit"]').click();
  
      // Gönderildiğini doğrula
      cy.url().should('eq', 'http://localhost:5175/siparisonayi');
    });
  });