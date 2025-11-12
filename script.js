// ===================================================================
// YENİ YAPI BÖLÜM 1: İLAÇ VERİ TABANI
// Artık tüm ilaçlar, HTML'de değil, burada JavaScript içinde bir "veri" olarak saklanıyor.
// YENİ BİR İLAÇ EKLEMEK İÇİN:
// 1. Bu dizinin (array) içine yeni bir `{ ... }` nesnesi ekleyin.
// 2. `id`, `isim`, `piyasaIsimleri` ve `dozajlar` alanlarını doldurun.
// 3. Dozaj HTML'ini ` (ters tırnak) arasına yazın.
// ===================================================================
const ilacVeritabani = [
    {
        id: "parasetamolContainer",
        isim: "Parasetamol",
        piyasaIsimleri: [
            "Parol 500 mg 20 Tablet", "Minoset 500 mg 16 Tablet", "Tylol 500 mg 30 Tablet", "Tamol 500 mg 24 Tablet"
        ],
        dozajlar: {
            yetiskin: `
                <h5 class="dose-condition-title">Analjezi ve Ateş</h5>
                <h6 class="dose-type-title">Hemen Salınım (Immediate–Release)</h6>
                <ul class="dose-details-list">
                    <li>
                        <strong>Normal Güç</strong>
                        <ul>
                            <li><strong>Doz:</strong> 325–650 mg (PO veya PR)</li>
                            <li><strong>Sıklık:</strong> Her 4 saatte bir (PRN)</li>
                            <li><strong>Maksimum:</strong> Günde 3250 mg’ı aşmamalı</li>
                            <li><strong>Not:</strong> Sağlık uzmanı gözetiminde günlük dozlar 4 g/gün’e kadar kullanılabilir.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Ekstra Güç</strong>
                        <ul>
                            <li><strong>Doz:</strong> 1000 mg (PO)</li>
                            <li><strong>Sıklık:</strong> Her 6–8 saatte bir (PRN)</li>
                            <li><strong>Maksimum:</strong> Günde 3000 mg’ı aşmamalı</li>
                            <li><strong>Not:</strong> Sağlık uzmanı gözetiminde günlük dozlar 4 g/gün’e kadar kullanılabilir.</li>
                        </ul>
                    </li>
                </ul>
                <h6 class="dose-type-title">Uzatılmış Salınım (Extended–Release)</h6>
                <ul class="dose-details-list">
                    <li>
                        <strong>Standart Doz</strong>
                        <ul>
                            <li><strong>Doz:</strong> 1300 mg (2 kapsül) (PO)</li>
                            <li><strong>Sıklık:</strong> Her 8 saatte bir (PRN)</li>
                            <li><strong>Maksimum:</strong> Günde 3.9 g’ı aşmamalı.</li>
                        </ul>
                    </li>
                </ul>
                <h6 class="dose-type-title">Maksimum Doz (Genel Uyarılar)</h6>
                <ul class="dose-details-list simple-list">
                    <li><strong>Asetaminofen içeren ürünler:</strong> Toplam günlük doz 3.25 g/gün’ü aşmamalıdır (Sağlık uzmanı gözetiminde 4 g/gün'e kadar).</li>
                    <li><strong>Tylenol Ekstra Güç (500 mg):</strong> Günde 3 g/gün’ü (6 tablet) aşmamalıdır (Sağlık uzmanı gözetiminde 4 g/gün'e kadar).</li>
                </ul>
                <h6 class="dose-type-title">Böbrek Yetmezliği</h6>
                <ul class="dose-details-list simple-list">
                    <li><strong>GFR ≥50 mL/dk:</strong> Doz ayarlaması gerekli değildir.</li>
                    <li><strong>GFR 10–50 mL/dk:</strong> Her 6 saatte bir uygulayın.</li>
                    <li><strong>GFR <10 mL/dk:</strong> Her 8 saatte bir uygulayın.</li>
                    <li><strong>Sürekli böbrek replasman tedavisi:</strong> Her 6 saatte bir uygulayın.</li>
                </ul>
            `,
            cocuk: `
                <h5 class="dose-condition-title">Ağrı ve Ateş Tedavisi</h5>
                <h6 class="dose-type-title">Kilo Bazlı Dozaj (Oral Solüsyon)</h6>
                <ul class="dose-details-list">
                    <li><strong>Yenidoğan (28-31 hafta gestasyon)</strong><ul><li><strong>Doz:</strong> 10-15 mg/kg/doz (PO)</li><li><strong>Sıklık:</strong> Her 12 saatte bir (PRN)</li><li><strong>Maksimum:</strong> Günde 40 mg/kg'ı veya 48 saati aşmamalı.</li></ul></li>
                    <li><strong>Yenidoğan (32-37 hafta gestasyon)</strong><ul><li><strong>Doz:</strong> 10-15 mg/kg/doz (PO)</li><li><strong>Sıklık:</strong> Her 8 saatte bir (PRN)</li><li><strong>Maksimum:</strong> Günde 60 mg/kg'ı veya 48 saati aşmamalı.</li></ul></li>
                    <li><strong>Yenidoğan (0-9 gün)</strong><ul><li><strong>Doz:</strong> 10-15 mg/kg/doz (PO)</li><li><strong>Sıklık:</strong> Her 6-8 saatte bir (PRN)</li><li><strong>Maksimum:</strong> Günde 60 mg/kg'ı veya 48 saati aşmamalı.</li></ul></li>
                    <li><strong>Yenidoğan (10-29 gün)</strong><ul><li><strong>Doz:</strong> 10-15 mg/kg/doz (PO)</li><li><strong>Sıklık:</strong> Her 4-8 saatte bir (PRN)</li><li><strong>Maksimum:</strong> Günde 90 mg/kg'ı veya 48 saati aşmamalı.</li></ul></li>
                    <li><strong>Bebekler</strong><ul><li><strong>Doz:</strong> 10-15 mg/kg/doz (PO)</li><li><strong>Sıklık:</strong> Her 4-6 saatte bir (PRN)</li><li><strong>Maksimum:</strong> Doz başına 15 mg/kg'ı veya günde 75 mg/kg'ı aşmamalı.</li></ul></li>
                    <li><strong>Çocuklar ve ergenler (&lt;60 kg)</strong><ul><li><strong>Doz:</strong> 10-15 mg/kg/doz (PO)</li><li><strong>Sıklık:</strong> Her 4-6 saatte bir (PRN)</li><li><strong>Maksimum:</strong> Doz başına 15 mg/kg veya 1000 mg (hangisi düşükse) ya da günde 75 mg/kg veya 4000 mg (hangisi düşükse) aşılmamalı.</li></ul></li>
                </ul>
                <h6 class="dose-type-title">Sabit Dozaj</h6>
                <ul class="dose-details-list">
                    <li><strong>&lt;6 yaş</strong><ul><li>Bir sağlık uzmanına danışın.</li></ul></li>
                    <li><strong>6-12 yaş</strong><ul><li><strong>Doz:</strong> 325-650 mg (PO)</li><li><strong>Sıklık:</strong> Her 4-6 saatte bir</li><li><strong>Maksimum:</strong> Günde 1.625 g'ı 5 günden fazla aşmamalı (uzman yönlendirmesi dışında).</li></ul></li>
                    <li><strong>&gt;12 yaş (Normal Güç)</strong><ul><li><strong>Doz:</strong> 325-650 mg</li><li><strong>Sıklık:</strong> Her 4-6 saatte bir</li><li><strong>Maksimum:</strong> Günde 3.25 g (uzman gözetiminde 4 g/gün'e kadar).</li></ul></li>
                </ul>
            `,
            yasli: `
                <ul class="dose-details-list simple-list">
                    <li>Böbrek ve karaciğer fonksiyonlarına göre doz ayarlanmalıdır.</li>
                </ul>
            `
        }
    },
    {
        id: "setirizinContainer",
        isim: "Setirizin",
        piyasaIsimleri: [
            "Allerset 10 mg 10 Tablet", "Allerset 10 mg 20 Tablet", "Allerset Damla 10 mg 20 ml", "Allerset Şurup 200 ml",
            "Cetryn 10 mg 20 Tablet", "Cetryn Şurup 200 ml", "Hitrizin 1 mg/ml 200 ml Şurup", "Hitrizin 10 mg 10 Tablet",
            "Hitrizin 10 mg 20 Tablet", "Hitrizin Şurup 150 ml", "Setidril 10 mg 20 Tablet", "Yenizin Şurup 100 ml",
            "Zyrtec 10 mg 20 Tablet", "Zyrtec Damla 10 mg 20 ml", "Zyrtec Şurup 1 mg 200 ml"
        ],
        dozajlar: {
            yetiskin: `
                <h5 class="dose-condition-title">Alerjiler / Saman Nezlesi / Ürtiker</h5>
                <h6 class="dose-type-title">Oral (PO)</h6>
                <p>Yıl boyu ve mevsimsel alerjik ve vazomotor rinit; soğuk algınlığı, ürtiker, anjiyoödem, anafilaktik reaksiyonlar, kaşıntı (<em>pruritus</em>) ve alerjik konjonktivit semptomlarının hafifletilmesi.</p>
                <ul class="dose-details-list">
                    <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 5-10 mg (PO)</li><li><strong>Sıklık:</strong> Günde bir kez (Semptomların şiddetine bağlı olarak)</li><li><strong>Maksimum:</strong> Günde 10 mg’ı aşmamalı.</li></ul></li>
                </ul>
                <h6 class="dose-type-title">İntravenöz (IV)</h6>
                <p>Akut ürtiker için endikedir.</p>
                <ul class="dose-details-list">
                    <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 10 mg (IV) bolus</li><li><strong>Sıklık:</strong> Gerektiğinde (<em>PRN</em>) her 24 saatte bir</li></ul></li>
                </ul>
                <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
                <h6 class="dose-type-title">Böbrek Yetmezliği</h6>
                <ul class="dose-details-list simple-list">
                    <li><strong>Oral (PO) - GFR >50 mL/dk:</strong> Doz ayarlaması gerekli değildir.</li>
                    <li><strong>Oral (PO) - GFR ≤50 mL/dk:</strong> Günde bir kez 5 mg (PO).</li>
                    <li><strong>Oral (PO) - Periton diyalizi:</strong> Günde bir kez 5 mg (PO).</li>
                    <li><strong>Oral (PO) - Aralıklı hemodiyaliz:</strong> Günde bir kez 5 mg (PO); ayrıca haftada üç kez de uygulanabilir.</li>
                    <li><strong>İntravenöz (IV):</strong> Doz ayarlaması gerekli değildir; antihistaminik yan etkiler açısından izlenmelidir.</li>
                </ul>
                <h6 class="dose-type-title">Karaciğer Yetmezliği</h6>
                <ul class="dose-details-list simple-list">
                    <li><strong>Oral (PO):</strong> Üretici etiketinde doz ayarlaması belirtilmemiştir.</li>
                    <li><strong>İntravenöz (IV):</strong> Doz ayarlaması gerekli değildir; bu hasta popülasyonunda antihistaminik yan etkiler açısından izlenmelidir.</li>
                </ul>
            `,
            cocuk: `
                <h5 class="dose-condition-title">Alerjiler / Saman Nezlesi / Ürtiker</h5>
                <h6 class="dose-type-title">Oral (PO)</h6>
                <ul class="dose-details-list">
                    <li><strong>&lt;2 yaş</strong><ul><li>Güvenlik ve etkinlik belirlenmemiştir.</li></ul></li>
                    <li><strong>2-6 yaş</strong><ul><li><strong>Doz:</strong> 2.5 mg (0.5 çay kaşığı) oral solüsyon (PO)</li><li><strong>Sıklık:</strong> Günde bir kez</li><li><strong>Not:</strong> 5 mg günde bir kez (PO) veya 2.5 mg günde iki kez (PO) olarak artırılabilir.</li><li><strong>Maksimum:</strong> Günde 5 mg’ı aşmamalı.</li></ul></li>
                    <li><strong>&gt;6 yaş</strong><ul><li><strong>Doz:</strong> 5-10 mg (PO)</li><li><strong>Sıklık:</strong> Günde bir kez (Semptomların şiddetine bağlı olarak)</li><li><strong>Maksimum:</strong> Günde 10 mg’ı aşmamalı.</li></ul></li>
                </ul>
                <h6 class="dose-type-title">İntravenöz (IV) (≥6 Ay)</h6>
                <ul class="dose-details-list">
                    <li><strong>6 ay - 5 yaş</strong><ul><li><strong>Doz:</strong> 2.5 mg (IV) bolus</li><li><strong>Sıklık:</strong> Gerektiğinde (<em>PRN</em>) her 24 saatte bir.</li></ul></li>
                    <li><strong>6 - &lt;12 yaş</strong><ul><li><strong>Doz:</strong> 5 veya 10 mg (IV) bolus (Semptom şiddetine bağlı olarak)</li><li><strong>Sıklık:</strong> Gerektiğinde (<em>PRN</em>) her 24 saatte bir.</li></ul></li>
                    <li><strong>≥12 yaş</strong><ul><li><strong>Doz:</strong> 10 mg (IV) bolus</li><li><strong>Sıklık:</strong> Gerektiğinde (<em>PRN</em>) her 24 saatte bir.</li></ul></li>
                </ul>
            `,
            yasli: `
                <ul class="dose-details-list simple-list">
                    <li>Böbrek ve karaciğer fonksiyonlarına göre doz ayarlanmalıdır.</li>
                </ul>
            `
        }
    },
    {
        id: "ibuprofenContainer",
        isim: "İbuprofen",
        piyasaIsimleri: [
            "Advil Liqui-Gels 200 mg 20 Kapsül", "Apireks (Apirex) Şurup 100 mg/5 ml 100 ml", "Artril 400 mg 20 Tablet",
            "Artril 600 mg 20 Tablet", "Bravex 400 mg 30 Kapsül", "Brufen 400 mg 20 Tablet", "Brufen 600 mg 20 Tablet",
            "Brufen Retard 800 mg 14 Tablet", "Bruprex Şurup 200 mg/5 ml 100 ml", "Brus Çocuk Şurubu 100 mg/5 ml 100 ml",
            "Cicifen Pediyatrik Şurup 100 mg/5 ml 100 ml", "Dolven Pediyatrik Şurup 100 mg/5 ml 100 ml", "Dorifen 400 mg/100 ml IV 1 Flakon",
            "Ibufen Pediatrik Şurup 100 ml", "Kidyfen Pediatrik Süspansiyon", "Nurofen 200 mg 20 Tablet", "Pedifen Şurup 100 ml",
            "Profen Fort 600 mg 20 Tablet", "Suprafen 400 mg 20 Tablet", "Suprafen 400 mg 30 Tablet", "Suprafen 400 mg 100 Tablet",
            "İbu-600 mg 20 Tablet", "İbu-Baby Fitil 60 mg 10 Adet", "İbu-Fort Şurup 200 mg/5 ml 100 ml",
            "İbu Pharma Bios 600 mg Değiştirilmiş Salımlı 20 Tablet", "İbuactive Çocuk Şurubu 100 mg/5 ml 100 ml", "İbujezik Baby 60 mg 10 Supozituvar",
            "İntrafen 400 mg/ml 4 ml 1 Flakon", "İntrafen 800 mg/ml 8 ml 1 Flakon",
            "Apireks Cold 200 mg/30 mg 24 Tablet",
            "Bikaramin Cold Şurup 100-15-1 mg/5 ml 100 ml",
            "Coldaway C 200/30/300 mg 24 Tablet",
            "Coldaway C 200/30/300 mg 30 Tablet",
            "Coldaway Cold & FLU 24 Tablet",
            "Coldaway Plus Şurup 100 mg/15 mg/1 mg/5 ml 100 ml",
            "Coldfen Zero 200 mg/2 mg 24 Tablet",
            "Coldfen Şurup 100 ml",
            "Dolorin Cold 30 Tablet",
            "Dolorin Cold 200 mg/30 mg 30 Tablet",
            "Droflu Cold Plus Şurup 100 ml",
            "Famtrec 800 mg/26.6 mg 30 Tablet",
            "Forflu 200 mg/30 mg 30 Tablet",
            "Forflu Pediyatrik Şurup 100 mg+15 mg+1 mg/5 ml 100 ml",
            "Gribex Cold & Flu 200 mg/30 mg/4 mg 24 Tablet",
            "Gribex Cold & Flu 200 mg/30 mg/4 mg 30 Tablet",
            "Gribo Cold 30 Tablet",
            "Ibucold C 200 mg/30 mg/300 mg 30 Tablet",
            "Orofen Cold & Flu 200 mg/30 mg Tablet",
            "Pedifen Cold Flu Şurup 100 ml",
            "İbucold 200 mg/30 mg 30 Tablet",
            "İbucold Şurup 100 mg+15 mg+1 mg/5 ml",
            "İburamin Cold 24 Tablet",
            "İburamin Cold Şurup 100 ml",
            "İburamin Zero 24 Tablet"

            
        ],
        dozajlar: {
            yetiskin: `
                <h5 class="dose-condition-title">Ağrı / Ateş / Dismenore</h5>
                <h6 class="dose-type-title">Reçetesiz (OTC)</h6>
                <ul class="dose-details-list">
                    <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 200-400 mg (PO)</li><li><strong>Sıklık:</strong> Her 4-6 saatte bir</li><li><strong>Maksimum:</strong> Günde 1200 mg (Hekim yönlendirmesi dışında).</li></ul></li>
                </ul>
                <h6 class="dose-type-title">Reçeteli</h6>
                <ul class="dose-details-list">
                    <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 400-800 mg (PO)</li><li><strong>Sıklık:</strong> Her 6 saatte bir</li><li><strong>Maksimum:</strong> Günde 3200 mg.</li></ul></li>
                </ul>
                <h5 class="dose-condition-title">Enflamatuar Hastalık</h5>
                <ul class="dose-details-list">
                    <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 400-800 mg (PO)</li><li><strong>Sıklık:</strong> Her 6-8 saatte bir</li><li><strong>Maksimum:</strong> Günde 3200 mg.</li></ul></li>
                </ul>
                <h5 class="dose-condition-title">Osteoartrit / Romatoid Artrit</h5>
                <ul class="dose-details-list">
                    <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 300 mg, 400 mg, 600 mg, veya 800 mg (PO)</li><li><strong>Sıklık:</strong> Her 6-8 saatte bir</li><li><strong>Maksimum:</strong> Günde 3200 mg.</li><li><strong>Not:</strong> Gastrointestinal (GI) riskler açısından izlenmelidir.</li></ul></li>
                </ul>
                <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
                <ul class="dose-details-list simple-list">
                    <li><strong>Belirgin böbrek yetmezliği:</strong> Yakından izleyin; gerekirse doz azaltmayı düşünün.</li>
                    <li><strong>Şiddetli karaciğer yetmezliği:</strong> Kullanımdan kaçının.</li>
                </ul>
            `,
            cocuk: `
                <h5 class="dose-condition-title">Ateş</h5>
                <h6 class="dose-type-title">&lt; 6 Ay</h6>
                <ul class="dose-details-list simple-list"><li>Güvenlik ve etkinlik belirlenmemiştir.</li></ul>
                <h6 class="dose-type-title">≥ 6 Ay</h6>
                <ul class="dose-details-list">
                    <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 5-10 mg/kg/doz (PO)</li><li><strong>Sıklık:</strong> Her 6-8 saatte bir</li><li><strong>Maksimum:</strong> Doz başına 400 mg veya günde 40 mg/kg'ı aşmamalı.</li></ul></li>
                </ul>
                <h5 class="dose-condition-title">Ağrı</h5>
                <ul class="dose-details-list">
                    <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 4-10 mg/kg/doz (PO)</li><li><strong>Sıklık:</strong> Her 6-8 saatte bir</li><li><strong>Maksimum:</strong> Günde 40 mg/kg'ı aşmamalı.</li></ul></li>
                </ul>
                <h5 class="dose-condition-title">Jüvenil İdiyopatik Artrit</h5>
                <ul class="dose-details-list">
                    <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 30-50 mg/kg/24 saat (PO)</li><li><strong>Sıklık:</strong> 8 saatte bir bölünerek</li><li><strong>Maksimum:</strong> Günde 2.4 g'ı aşmamalı.</li></ul></li>
                </ul>
                <h5 class="dose-condition-title">Dozlama Hususları</h5>
                <ul class="dose-details-list simple-list">
                     <li>6 yaşından küçük çocuklarda potansiyel toksik doz: 200 mg/kg.</li>
                </ul>
            `,
            yasli: `
                <ul class="dose-details-list simple-list">
                    <li>Böbrek ve karaciğer fonksiyonlarına göre doz ayarlanmalıdır.</li>
                    <li>Artan GI ve renal toksisite riski nedeniyle, mümkün olan en düşük etkili doz, en kısa süre için kullanılmalıdır.</li>
                </ul>
            `
        }
    },
    {
        id: "klorfeniraminContainer",
        isim: "Klorfeniramin",
        piyasaIsimleri: [
            /* Şimdilik boş */
        ],
        dozajlar: {
            yetiskin: `
                <h5 class="dose-condition-title">Alerjik Rinit</h5>
                <h6 class="dose-type-title">Tablet veya Şurup</h6>
                <ul class="dose-details-list">
                    <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 4 mg (PO)</li><li><strong>Sıklık:</strong> Her 4-6 saatte bir</li><li><strong>Maksimum:</strong> Günde 24 mg'ı aşmamalı.</li></ul></li>
                </ul>
                <h6 class="dose-type-title">Uzatılmış Salınım (Extended-Release) Tabletler</h6>
                <ul class="dose-details-list">
                    <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 8 mg (PO) VEYA 12 mg (PO)</li><li><strong>Sıklık:</strong> Her 8-12 saatte bir VEYA Her 12 saatte bir</li><li><strong>Maksimum:</strong> Günde 24 mg'ı aşmamalı.</li></ul></li>
                </ul>
                <h6 class="dose-type-title">Uzatılmış/Sürekli Salınım Kapsüller</h6>
                <ul class="dose-details-list">
                    <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 8-12 mg (PO)</li><li><strong>Sıklık:</strong> Her 8-12 saatte bir</li><li><strong>Maksimum:</strong> Günde 16-24 mg'a kadar.</li></ul></li>
                </ul>
                <h5 class="dose-condition-title">Diğer Endikasyonlar & Kullanımlar</h5>
                <p>Pereniyal & mevsimsel alerjik & vazomotor rinit, soğuk algınlığı semptomlarının hafifletilmesi, ürtiker, anjiyoödem, anafilaktik reaksiyonlar, kaşıntı (pruritus), alerjik konjonktivit.</p>
            `,
            cocuk: `
                <h5 class="dose-condition-title">Alerjik Rinit</h5>
                <h6 class="dose-type-title">6 - 12 Yaş</h6>
                <ul class="dose-details-list">
                    <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 2 mg (PO)</li><li><strong>Sıklık:</strong> Her 4-6 saatte bir</li><li><strong>Maksimum:</strong> Günde 12 mg'ı aşmamalı.</li></ul></li>
                </ul>
                <h6 class="dose-type-title">> 12 Yaş</h6>
                <p>(Dozaj yetişkin ile aynıdır)</p>
                <ul class="dose-details-list">
                    <li><strong>Tablet veya Şurup</strong><ul><li><strong>Doz:</strong> 4 mg (PO)</li><li><strong>Sıklık:</strong> Her 4-6 saatte bir</li><li><strong>Maksimum:</strong> Günde 24 mg'ı aşmamalı.</li></ul></li>
                    <li><strong>Uzatılmış Salınım Tabletler</strong><ul><li><strong>Doz:</strong> 8 mg (PO) VEYA 12 mg (PO)</li><li><strong>Sıklık:</strong> Her 8-12 saatte bir VEYA Her 12 saatte bir</li><li><strong>Maksimum:</strong> Günde 24 mg'ı aşmamalı.</li></ul></li>
                </ul>
            `,
            yasli: `
                <h5 class="dose-condition-title">Dozaj ve Uyarılar</h5>
                <ul class="dose-details-list simple-list">
                    <li><strong>Standart Doz:</strong> 4 mg (PO) günde bir kez veya her 12 saatte bir.</li>
                    <li><strong>Sürekli Salınım:</strong> 8 mg (PO) yatarken (HS).</li>
                    <li><strong>Beers Kriterleri:</strong> Alerjik reaksiyonları tedavi ederken öncelikle non-antikolinerjik antihistaminikler düşünülmelidir.</li>
                    <li><strong>Kaçınma:</strong> Yüksek antikolinerjik etki insidansı nedeniyle yaşlılarda kullanımdan kaçının.</li>
                    <li><strong>Riskler:</strong> İleri yaşla birlikte klirens azalır; konfüzyon, ağız kuruluğu, kabızlık ve diğer antikolinerjik etkiler ile toksisite riski artar.</li>
                </ul>
            `
        }
    },
    {
        id: "diazepamContainer",
        isim: "Diazepam",
        piyasaIsimleri: [
            "Diaksi 5 mg/2.5 ml Rektal Çözelti 5 Tüp", "Diaksi 10 mg/2.5 ml Rektal Çözelti 5 Tüp", "Diapam Ampül 10 mg 10 Adet",
            "Diazem 2 mg 25 Kapsül", "Diazem 5 mg 25 Kapsül", "Diazem 10 mg 25 Kapsül", "Diazem Ampül 10 mg 10 İğne",
            "Diazepam Desitin 5 mg 5 Rektal Tüp", "Diazepam Desitin 10 mg 5 Rektal Tüp", "Nervium 5 mg 50 Tablet"
        ],
        dozajlar: {
            yetiskin: `
                <h5 class="dose-condition-title">Anksiyete</h5>
                <ul class="dose-details-list">
                    <li><strong>Oral (PO)</strong><ul><li><strong>Doz:</strong> 2-10 mg</li><li><strong>Sıklık:</strong> Her 6-12 saatte bir</li></ul></li>
                    <li><strong>IV/IM (Orta Düzey)</strong><ul><li><strong>Doz:</strong> 2-5 mg</li><li><strong>Sıklık:</strong> Gerekirse her 3-4 saatte bir</li></ul></li>
                    <li><strong>IV/IM (Şiddetli)</strong><ul><li><strong>Doz:</strong> 5-10 mg</li><li><strong>Sıklık:</strong> Gerekirse her 3-4 saatte bir</li></ul></li>
                </ul>
                <h5 class="dose-condition-title">Alkol Yoksunluğu</h5>
                <ul class="dose-details-list">
                    <li><strong>Oral (PO)</strong><ul><li><strong>Doz:</strong> İlk 24 saatte 10 mg (PO) her 6-8 saatte bir</li><li><strong>Not:</strong> Gerektiğinde (PRN) 5 mg (PO) her 6-8 saatte bire düşürülür.</li></ul></li>
                    <li><strong>IV/IM</strong><ul><li><strong>Doz:</strong> Başlangıçta 10 mg (IV/IM)</li><li><strong>Not:</strong> Gerektiğinde her 6-8 saatte bir 5-10 mg (IV) ek dozlar verilebilir.</li></ul></li>
                </ul>
                <h5 class="dose-condition-title">Endoskopik Prosedürler</h5>
                <ul class="dose-details-list">
                    <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> ≤10 mg (IV) yeterlidir; 20 mg'a kadar çıkılabilir.</li><li><strong>IM:</strong> IV kullanılamıyorsa, işlemden 30 dakika önce 5-10 mg (IM).</li><li><strong>Not:</strong> Narkotik dozu en az 1/3 oranında azaltılmalıdır.</li></ul></li>
                </ul>
                <h5 class="dose-condition-title">Preoperatif Sedasyon / YBÜ Sedasyonu</h5>
                <ul class="dose-details-list">
                    <li><strong>Preop</strong><ul><li><strong>Doz:</strong> Ameliyattan önce 10 mg (IM tercih edilir).</li></ul></li>
                    <li><strong>YBÜ</strong><ul><li><strong>Doz:</strong> 5-10 mg (IV); VEYA 0.03-0.1 mg/kg</li><li><strong>Sıklık:</strong> Her 30 dakikada bir ila 6 saatte bir.</li></ul></li>
                </ul>
                <h5 class="dose-condition-title">Kas Spazmı</h5>
                <ul class="dose-details-list">
                    <li><strong>Oral (PO)</strong><ul><li><strong>Doz:</strong> 2-10 mg (PO)</li><li><strong>Sıklık:</strong> Gerektiğinde (PRN) her 6-8 saatte bir.</li></ul></li>
                    <li><strong>IV/IM</strong><ul><li><strong>Doz:</strong> Başlangıçta 5-10 mg (IV/IM), SONRA gerekirse 5-10 mg</li><li><strong>Sıklık:</strong> Her 3-3 saatte bir. (Tetanoz için daha büyük dozlar).</li></ul></li>
                </ul>
                <h5 class="dose-condition-title">Nöbet Bozukluğu</h5>
                <h6 class="dose-type-title">Oral (PO)</h6>
                <ul class="dose-details-list"><li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 2-10 mg (PO)</li><li><strong>Sıklık:</strong> Her 6-12 saatte bir.</li></ul></li></ul>
                <h6 class="dose-type-title">İntranazal Sprey (Kilo Bazlı)</h6>
                <ul class="dose-details-list">
                    <li><strong>28-50 kg</strong><ul><li><strong>Doz:</strong> 10 mg (1 sprey, 1 burun deliğine)</li></ul></li>
                    <li><strong>51-75 kg</strong><ul><li><strong>Doz:</strong> 15 mg (1 sprey, her burun deliğine)</li></ul></li>
                    <li><strong>≥76 kg</strong><ul><li><strong>Doz:</strong> 20 mg (1 sprey, her burun deliğine)</li></ul></li>
                </ul>
                <h6 class="dose-type-title">Rektal Jel (Kilo Bazlı)</h6>
                <ul class="dose-details-list">
                    <li><strong>Standart</strong><ul><li><strong>Doz:</strong> 0.2 mg/kg (PR) VEYA tek doz 10-20 mg.</li></ul></li>
                    <li><strong>Detaylı (Örnek)</strong><ul><li><strong>38-50 kg:</strong> 10 mg</li><li><strong>51-62 kg:</strong> 12.5 mg</li><li><strong>63-75 kg:</strong> 15 mg</li></ul></li>
                </ul>
                <h5 class="dose-condition-title">Status Epileptikus</h5>
                <ul class="dose-details-list">
                    <li><strong>IV/IM</strong><ul><li><strong>Doz:</strong> Başlangıçta 5-10 mg (IV tercih edilir); 10-15 dk arayla 30 mg max'a kadar tekrarla.</li></ul></li>
                    <li><strong>Rektal (PR)</strong><ul><li><strong>Doz:</strong> 0.2-0.5 mg/kg (PR); max 20 mg tek doz.</li></ul></li>
                </ul>
                <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
                <ul class="dose-details-list simple-list">
                    <li><strong>Böbrek Yetmezliği:</strong> Veri yok / Çalışılmamış. Uzun süreli kullanımda doz azaltmayı düşünün.</li>
                    <li><strong>Karaciğer Yetmezliği (Şiddetli):</strong> Oral kullanım kontrendikedir.</li>
                    <li><strong>Karaciğer Yetmezliği (Hafif-Orta):</strong> Dikkatli kullanın; yarı ömür 2-5 kat uzayabilir.</li>
                </ul>
            `,
            cocuk: `
                <h5 class="dose-condition-title">Sedatif / Kas Gevşetici (> 6 Ay)</h5>
                <ul class="dose-details-list simple-list"><li><strong>< 6 Ay:</strong> Önerilmez.</li></ul>
                <ul class="dose-details-list">
                    <li><strong>Oral (PO)</strong><ul><li><strong>Doz:</strong> 1-2.5 mg (PO) her 6-8 saatte bir; VEYA 0.12-0.8 mg/kg/gün (PO) bölünerek.</li></ul></li>
                    <li><strong>IV/IM</strong><ul><li><strong>Doz:</strong> 5-10 mg VEYA 0.04-0.2 mg/kg (IV/IM)</li><li><strong>Sıklık:</strong> Her 3-4 saatte bir.</li></ul></li>
                </ul>
                <h5 class="dose-condition-title">Nöbet Bozukluğu (≥2 Yaş)</h5>
                <h6 class="dose-type-title">Rektal Jel (Kilo Bazlı Dozaj)</h6>
                <ul class="dose-details-list">
                    <li><strong>2-5 Yaş (0.5 mg/kg)</strong><ul><li><strong>6-10 kg:</strong> 5 mg</li><li><strong>16-20 kg:</strong> 10 mg</li></ul></li>
                    <li><strong>6-11 Yaş (0.3 mg/kg)</strong><ul><li><strong>10-16 kg:</strong> 5 mg</li><li><strong>26-33 kg:</strong> 10 mg</li></ul></li>
                    <li><strong>≥12 Yaş (0.2 mg/kg)</strong><ul><li>(Yetişkin dozuyla benzer)</li></ul></li>
                </ul>
                <h6 class="dose-type-title">İntranazal Sprey (Kilo Bazlı Dozaj)</h6>
                <ul class="dose-details-list">
                    <li><strong>2-5 Yaş (0.5 mg/kg)</strong><ul><li><strong>6-11 kg:</strong> 5 mg</li><li><strong>12-22 kg:</strong> 10 mg</li></ul></li>
                    <li><strong>6-11 Yaş (0.3 mg/kg)</strong><ul><li><strong>10-18 kg:</strong> 5 mg</li><li><strong>19-37 kg:</strong> 10 mg</li></ul></li>
                </ul>
                <h5 class="dose-condition-title">Status Epileptikus</h5>
                <ul class="dose-details-list">
                    <li><strong>Rektal (PR)</strong><ul><li><strong>2-6 Yaş:</strong> 0.5 mg/kg</li><li><strong>6-12 Yaş:</strong> 0.3 mg/kg</li><li><strong>>12 Yaş:</strong> 0.2 mg/kg</li></ul></li>
                    <li><strong>İntravenöz (IV)</strong><ul><li><strong>>30 gün – 5 yaş:</strong> 0.2-0.5 mg yavaşça her 2-5 dakikada bir (max 5 mg).</li><li><strong>>5 yaş:</strong> 1 mg yavaşça her 2-5 dakikada bir (max 10 mg).</li></ul></li>
                </ul>
                <h5 class="dose-condition-title">Dozlama Hususları</h5>
                <ul class="dose-details-list simple-list">
                    <li><strong>Benzil Alkol Uyarısı (İntranazal):</strong> Yenidoğanlarda/bebeklerde onaylanmamıştır. Benzil alkol "gasping sendromu"na neden olabilir.</li>
                    <li><strong>Yavaş IV Dozlama:</strong> Apne riskini azaltmak için yavaşça (3 dk üzerinde) uygulayın.</li>
                </ul>
            `,
            yasli: `
                <h5 class="dose-condition-title">Dozlama Hususları</h5>
                <ul class="dose-details-list simple-list">
                    <li>Uzun etkili metaboliti nedeniyle yaşlılarda tercih edilen bir ilaç olarak kabul edilmez; düşmelerle ilişkilidir.</li>
                    <li><strong>Rektal jel:</strong> Daha düşük doz kullanın.</li>
                </ul>
            `
        }
    },
    {
        id: "levetirasetamContainer",
        isim: "Levetirasetam",
        piyasaIsimleri: [
            "Anlev 250 mg 50 Tablet", "Anlev 500 mg 50 Tablet", "Anlev 1000 mg 50 Tablet", "Epilem 500 mg/5 ml 10 Flakon",
            "Epitam 250 mg 50 Tablet", "Epitam 500 mg 50 Tablet", "Epitam 1000 mg 50 Tablet", "Epitam XR 500 mg 50 Tablet",
            "Epitam XR 750 mg 50 Tablet", "Epixx 250 mg 50 Tablet", "Epixx 500 mg 50 Tablet", "Epixx 750 mg 50 Tablet",
            "Epixx 1000 mg 50 Tablet", "Epixx XR 500 mg 50 Tablet", "Epixx XR 750 mg 50 Tablet", "Epixx Şurup 100 mg/ml 300 ml",
            "Keppra 100 mg/ml Oral Çözelti 150 ml", "Keppra 250 mg 50 Tablet", "Keppra 500 mg 50 Tablet",
            "Keppra 1000 mg 50 Tablet", "Keppra Şurup 100 mg/ml Oral Çözelti 300 ml", "Leptica 250 mg 50 Tablet",
            "Leptica 500 mg 50 Tablet", "Leptica 1000 mg 50 Tablet", "Lev-End 250 mg 50 Tablet", "Lev-End 500 mg 50 Tablet",
            "Lev-End 750 mg 50 Tablet", "Lev-End 1000 mg 50 Tablet", "Lev-End Şurup 100 mg/ml 300 ml",
            "Levebrain 500 mg/5 ml 10 Flakon", "Levebrain 500 mg 50 Tablet", "Levebrain 1000 mg 50 Tablet",
            "Levemax 250 mg 50 Tablet", "Levemax 250 mg 100 Tablet", "Levemax 500 mg 50 Tablet", "Levemax 500 mg 100 Tablet",
            "Levemax 1000 mg 50 Tablet", "Levemax 1000 mg 100 Tablet", "Levesto 250 mg 50 Tablet", "Levesto 500 mg 50 Tablet",
            "Levesto 750 mg 50 Tablet", "Levesto 1000 mg 50 Tablet", "Levetam 500 mg/5 ml 10 Flakon",
            "Netrolex 250 mg 50 Tablet", "Netrolex 500 mg 50 Tablet", "Netrolex 1000 mg 50 Tablet",
            "Netrolex XR 500 mg 50 Tablet", "Netrolex XR 750 mg 50 Tablet", "Netrolex XR 1000 mg 50 Tablet",
            "Netrolex Şurup 100 mg/ml 150 ml", "Netrolex Şurup 100 mg/ml 300 ml", "Vetria 500 mg 50 Tablet", "Vetria 1000 mg 50 Tablet"
        ],
        dozajlar: {
            yetiskin: `
                <h5 class="dose-condition-title">Miyoklonik Nöbetler</h5>
                <h6 class="dose-type-title">Hemen Salınım (Keppra, Spritam)</h6>
                <ul class="dose-details-list">
                    <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 500 mg (IV/PO)</li><li><strong>Sıklık:</strong> Her 12 saatte bir</li><li><strong>Artış:</strong> Önerilen doz olan 1500 mg (her 12 saatte bir) ulaşmak için her 2 haftada bir 500 mg/doz artırılabilir.</li></ul></li>
                </ul>
                <h5 class="dose-condition-title">Parsiyel Başlangıçlı Nöbet</h5>
                <h6 class="dose-type-title">Hemen Salınım (Keppra, Spritam)</h6>
                <ul class="dose-details-list">
                    <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 500 mg (PO)</li><li><strong>Sıklık:</strong> Her 12 saatte bir</li><li><strong>Artış:</strong> Her 2 haftada bir 500 mg/doz artırılabilir.</li><li><strong>Maksimum:</strong> Günde 3000 mg'ı aşmamalı.</li></ul></li>
                </ul>
                <h6 class="dose-type-title">Uzatılmış Salınım (Keppra XR veya Elepsia XR)</h6>
                <ul class="dose-details-list">
                    <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 1000 mg (PO)</li><li><strong>Sıklık:</strong> Günde bir kez</li><li><strong>Artış:</strong> Her 2 haftada bir 1000 mg/gün artırılabilir.</li><li><strong>Maksimum:</strong> Günde 3000 mg'ı aşmamalı.</li></ul></li>
                </ul>
                <h6 class="dose-type-title">İntravenöz (IV)</h6>
                <ul class="dose-details-list">
                    <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 500 mg (IV)</li><li><strong>Sıklık:</strong> Her 12 saatte bir</li><li><strong>Artış:</strong> Her 2 haftada bir 500 mg/doz artırılabilir.</li><li><strong>Maksimum:</strong> Günde 3000 mg'ı aşmamalı.</li></ul></li>
                </ul>
                <h5 class="dose-condition-title">Primer Jeneralize Tonik-Klonik Nöbetler</h5>
                <h6 class="dose-type-title">Hemen Salınım (Keppra, Spritam)</h6>
                <ul class="dose-details-list">
                    <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 500 mg (IV/PO)</li><li><strong>Sıklık:</strong> Her 12 saatte bir</li><li><strong>Artış:</strong> Önerilen doz olan 1500 mg (her 12 saatte bir) ulaşmak için her 2 haftada bir 500 mg/doz artırılabilir.</li></ul></li>
                </ul>
                <h5 class="dose-condition-title">Dozaj Modifikasyonları (Böbrek Yetmezliği)</h5>
                <h6 class="dose-type-title">Hemen Salınım ve IV Formülasyonlar</h6>
                <ul class="dose-details-list simple-list">
                    <li><strong>CrCl >80 mL/dk/1.73 m²:</strong> Doz ayarlaması gerekmez.</li>
                    <li><strong>CrCl 50-80 mL/dk/1.73 m²:</strong> 500-1000 mg (PO) her 12 saatte bir.</li>
                    <li><strong>CrCl 30-50 mL/dk/1.73 m²:</strong> 250-750 mg (PO) her 12 saatte bir.</li>
                    <li><strong>CrCl <30 mL/dk/1.73 m²:</strong> 250-500 mg (PO) her 12 saatte bir.</li>
                    <li><strong>Diyaliz (konvansiyonel):</strong> Günde bir kez 500-1000 mg (PO), SONRA diyaliz sonrası 250-500 mg ek doz.</li>
                </ul>
                <h6 class="dose-type-title">Uzatılmış Salınım (Keppra XR / Elepsia XR)</h6>
                <ul class="dose-details-list simple-list">
                    <li><strong>CrCl 50-80 mL/dk/1.73 m²:</strong> 1000-2000 mg (PO) her 24 saatte bir.</li>
                    <li><strong>CrCl <50 mL/dk/1.73 m² (Elepsia XR):</strong> Önerilmez.</li>
                    <li><strong>Son dönem böbrek hastalığı (diyaliz):</strong> Hemen salınım formülasyonu önerilir.</li>
                </ul>
            `,
            cocuk: `
                <h5 class="dose-condition-title">Parsiyel Başlangıçlı Nöbetler</h5>
                <h6 class="dose-type-title">Hemen Salınım (Keppra) (≥1 Ay)</h6>
                <ul class="dose-details-list">
                    <li><strong>1-6 Ay</strong><ul><li><strong>Doz:</strong> 7 mg/kg (PO) her 12 saatte bir</li><li><strong>Artış:</strong> Önerilen doz olan 21 mg/kg (her 12 saatte bir) ulaşmak için her 2 haftada bir 7 mg/kg (her 12 saatte bir) artırılır.</li></ul></li>
                    <li><strong>6 Ay - 4 Yaş</strong><ul><li><strong>Doz:</strong> 10 mg/kg (PO) her 12 saatte bir</li><li><strong>Artış:</strong> Önerilen doz olan 25 mg/kg (her 12 saatte bir) ulaşmak için her 2 haftada bir 10 mg/kg (her 12 saatte bir) artırılır.</li></ul></li>
                    <li><strong>4-16 Yaş</strong><ul><li><strong>Doz:</strong> 10 mg/kg (PO) her 12 saatte bir</li><li><strong>Artış:</strong> Her 2 haftada bir 10 mg/kg/doz artırılarak 30 mg/kg (her 12 saatte bir) doza çıkılır.</li></ul></li>
                    <li><strong>>16 Yaş</strong><ul><li>(Yetişkin dozuyla aynı)</li></ul></li>
                </ul>
                <h6 class="dose-type-title">Oral Süspansiyon Tabletleri (Spritam) (≥4 Yaş & >20 kg)</h6>
                <ul class="dose-details-list">
                    <li><strong>Ağırlık 20-40 kg</strong><ul><li><strong>Doz:</strong> Başlangıçta 250 mg (PO) GİBİ</li><li><strong>Artış:</strong> Maksimum 1500 mg/gün (750 mg GİBİ) doza kadar her 2 haftada bir 500 mg (250 mg GİBİ) artırın.</li></ul></li>
                    <li><strong>Ağırlık >40 kg</strong><ul><li><strong>Doz:</strong> Başlangıçta 500 mg (PO) GİBİ</li><li><strong>Artış:</strong> Maksimum 3000 mg/gün (1500 mg GİBİ) doza kadar her 2 haftada bir 1000 mg (500 mg GİBİ) artırın.</li></ul></li>
                </ul>
                <h6 class="dose-type-title">Uzatılmış Salınım (Keppra XR / Elepsia XR) (≥12 Yaş)</h6>
                <ul class="dose-details-list">
                    <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> Başlangıçta 1000 mg (PO) günde bir kez</li><li><strong>Artış:</strong> Maksimum 3000 mg/gün'e kadar her 2 haftada bir 1000 mg artırılabilir.</li></ul></li>
                </ul>
                <h5 class="dose-condition-title">Primer Jeneralize Tonik-Klonik Nöbetler (≥6 Yaş)</h5>
                <h6 class="dose-type-title">Keppra / Spritam</h6>
                <ul class="dose-details-list">
                    <li><strong>6-16 Yaş (Keppra)</strong><ul><li><strong>Doz:</strong> 10 mg/kg (PO) her 12 saatte bir</li><li><strong>Artış:</strong> Önerilen doz olan 30 mg/kg (her 12 saatte bir) doza kadar her 2 haftada bir 10 mg/kg/doz artırılır.</li></ul></li>
                    <li><strong>≥6 Yaş (Spritam, Kilo Bazlı)</strong><ul><li>(Dozaj Parsiyel Nöbetlerdeki Spritam ile aynıdır)</li></ul></li>
                    <li><strong>>16 Yaş</strong><ul><li>(Yetişkin dozuyla aynı)</li></ul></li>
                </ul>
                <h5 class="dose-condition-title">Miyoklonik Nöbetler (≥12 Yaş)</h5>
                <h6 class="dose-type-title">Keppra, Spritam</h6>
                <ul class="dose-details-list">
                    <li><strong>Standart Doz</strong><ul><li>(Yetişkin dozuyla aynı)</li></ul></li>
                </ul>
            `,
            yasli: `
                <ul class="dose-details-list simple-list">
                    <li>Dozaj, böbrek fonksiyonlarına (CrCl) göre ayarlanmalıdır. Bkz. Yetişkin Dozaj Modifikasyonları.</li>
                </ul>
            `
        }
    },
	{
    id: "deksketoprofenContainer",
    isim: "Deksketoprofen",
    piyasaIsimleri: [
        "Arex 25 mg 20 Tablet",
        "Arex 50 mg 30 Tablet",
        "Arfen 50 mg/2 ml 6 Ampül",
        "Arveles 25 mg 20 Tablet",
        "Arveles 50 mg/2 ml 6 Ampül",
        "Arvepro 25 mg 20 Tablet",
        "Aseket-S 25 mg 20 Tablet",
        "Aseket-S 50 mg 30 Tablet",
        "Berodex 25 mg 20 Tablet",
        "Berodex 50 mg 30 Tablet",
        "Deksolex 25 mg 20 Tablet",
        "Dex-Forte 50 mg 30 Tablet",
        "Dexday 50 mg 20 Efervesan Tablet",
        "Dexday 50 mg 30 Efervesan Tablet",
        "Dexfull SR 75 mg 10 Tablet",
        "Dexiren 25 mg 20 Tablet",
        "Dexiren 50 mg/2 ml 6 Ampül",
        "Dexmol 25 mg 20 Efervesan Tablet",
        "Dexofen 25 mg 20 Tablet",
        "Dexpro 25 mg 20 Tablet",
        "Elektra 25 mg 20 Tablet",
        "Elektra Fort 50 mg 30 Tablet",
        "Grot 50 mg/2 ml 6 Ampül",
        "Ketavel 25 mg 20 Tablet",
        "Ketavel 50 mg/2 ml 6 Ampül",
        "Ketavel 50 mg 30 Tablet",
        "Leodex 25 mg 20 Tablet",
        "Leodex 50 mg/2ml 6 Ampül",
        "Longdex XR 75 mg 10 Tablet",
        "Metadem 50 mg/2 ml 6 Ampül",
        "Rastel 25 mg 20 Çentikli Tablet",
        "Rastel 50 mg/2 ml 6 Ampül",
        "Sepremil 50 mg/2 ml 6 Ampül",
        "Varles 25 mg 20 Tablet",
        "Velores 25 mg 20 Tablet"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Ağrı Yönetimi</h5>
            <h6 class="dose-type-title">Hemen Salınım</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 25-50 mg (PO)</li><li><strong>Sıklık:</strong> Gerektiğinde her 6-8 saatte bir.</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Uzatılmış Salınım</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 200 mg (PO)</li><li><strong>Sıklık:</strong> Günde bir kez.</li><li><strong>Not:</strong> Akut ağrı için önerilmez.</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Romatoid Artrit veya Osteoartrit</h5>
            <h6 class="dose-type-title">Hemen Salınım</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 75 mg (PO) VEYA 50 mg (PO)</li><li><strong>Sıklık:</strong> Her 8 saatte bir VEYA Her 6 saatte bir.</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Uzatılmış Salınım</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 200 mg (PO)</li><li><strong>Sıklık:</strong> Günde bir kez.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Dismenore (Adet Sancısı)</h5>
            <h6 class="dose-type-title">Hemen Salınım</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 25-50 mg</li><li><strong>Sıklık:</strong> Gerektiğinde (PRN) her 6-8 saatte bir.</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Uzatılmış Salınım</h6>
            <ul class="dose-details-list simple-list"><li>Akut ağrı için önerilmez.</li></ul>
            
            <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
            <h6 class="dose-type-title">Böbrek Yetmezliği</h6>
            <ul class="dose-details-list simple-list">
                <li><strong>GFR 25-60 mL/dk/1.73 m²:</strong> Önerilmez; eğer tedavi başlatılmalıysa, maksimum 150 mg/gün uygulanabilir; böbrek fonksiyonlarını yakından izleyin.</li>
                <li><strong>GFR <25 mL/dk/1.74 m²:</strong> Önerilmez; eğer tedavi uygulanmalıysa, maksimum 100 mg/gün uygulanabilir; böbrek fonksiyonlarını yakından izleyin.</li>
            </ul>
            <h6 class="dose-type-title">Karaciğer Yetmezliği</h6>
            <ul class="dose-details-list simple-list">
                <li><strong>Serum albümin <3.5 g/dL:</strong> Günde 100 mg'ı aşmayın; yakından izleyin; karaciğer fonksiyonu kötüleşirse durdurun.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Pediatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Güvenlik ve etkinlik konusunda yeterli bilgi yoktur.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Ağrı Yönetimi</h5>
            <ul class="dose-details-list">
                <li><strong>Başlangıç Dozu</strong>
                    <ul>
                        <li><strong>Doz:</strong> 25-50 mg (PO)</li>
                        <li><strong>Sıklık:</strong> Her 6-8 saatte bir</li>
                        <li><strong>Artış:</strong> 150-300 mg/gün'e yükseltilebilir.</li>
                        <li><strong>Maksimum:</strong> 300 mg'ı aşmamalıdır.</li>
                    </ul>
                </li>
            </ul>
            <ul class="dose-details-list simple-list">
                <li>Böbrek ve karaciğer fonksiyonları yakından izlenmelidir.</li>
            </ul>
        `
    }
},
{
    id: "hiyosinNButilbromurContainer",
    isim: "Hiyosin-n-Butilbromür",
    piyasaIsimleri: [
        "Buscopan 10 mg 20 Draje",
        "Buscopan 20 mg 6 Ampül",
        "Butopan 10 mg 20 Draje",
        "Butopan 20 mg/ml 6 Ampül",
        "Molit 20 mg 6 Ampül",
        "Spazmol 20 mg/ml 6 Ampül",
        "Spazmol IM/IV 1 ml 3 Ampül",
        "Spazmotek 20 mg 6 Ampül",
        "Xemol 20 mg/ml 6 Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <p>(Yetişkinler ve 12 yaş üstü çocuklar)</p>
            <h5 class="dose-condition-title">Genel Doz</h5>
            <ul class="dose-details-list">
                <li>
                    <strong>Standart Doz (Tablet)</strong>
                    <ul>
                        <li><strong>Doz:</strong> İki tablet (10 mg) VEYA bir tablet (20 mg)</li>
                        <li><strong>Sıklık:</strong> Günde 4 kez.</li>
                    </ul>
                </li>
            </ul>

            <h5 class="dose-condition-title">İrritabl Bağırsak Sendromu (IBS)</h5>
            <ul class="dose-details-list">
                <li>
                    <strong>Başlangıç Dozu</strong>
                    <ul>
                        <li><strong>Doz:</strong> Bir tablet (10 mg)</li>
                        <li><strong>Sıklık:</strong> Günde 3 kez.</li>
                        <li><strong>Not:</strong> Gerekirse bu doz artırılabilir.</li>
                    </ul>
                </li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">6 - 12 Yaş Arası</h5>
            <ul class="dose-details-list">
                <li>
                    <strong>Standart Doz</strong>
                    <ul>
                        <li><strong>Doz:</strong> Bir tablet (10 mg)</li>
                        <li><strong>Sıklık:</strong> Günde 3 kez.</li>
                    </ul>
                </li>
            </ul>
            <h5 class="dose-condition-title">&lt; 6 Yaş</h5>
            <ul class="dose-details-list simple-list">
                <li>Önerilmez.</li>
            </ul>
        `,
        yasli: `
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir dozaj ayarlaması belirtilmemiştir, ancak böbrek ve karaciğer fonksiyonları göz önünde bulundurulmalıdır.</li>
            </ul>
        `
    }
},
{
    id: "tenoksikamContainer",
    isim: "Tenoksikam",
    piyasaIsimleri: [
        "Arcotil 20 mg IV/IM 1 Flakon ve Ampül",
        "Oksamen-L 20 mg 1 Flakon",
        "Oksamen 20 mg 10 Tablet",
        "Tenoksan 20 mg 10 Kapsül",
        "Texonim 20 mg 1 Flakon",
        "Tilcotil 20 mg 1 Ampül (Flakon)",
        "Tilcotil 20 mg 10 Tablet",
        "Trocmetam 20 mg 1 Flakon",
        "Vienoks 20 mg 10 Tablet"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Akut Kas-İskelet Bozuklukları, Osteoartrit, Romatoid Artrit</h5>
            
            <h6 class="dose-type-title">Oral</h6>
            <ul class="dose-details-list">
                <li>
                    <strong>Standart Doz</strong>
                    <ul>
                        <li><strong>Doz:</strong> 20 mg (Tek doz)</li>
                        <li><strong>Sıklık:</strong> Her gün aynı saatte.</li>
                        <li><strong>Tedavi Süresi:</strong> Akut kas-iskelet bozuklukları için 7 güne kadar, ciddi vakalarda 14 güne kadar.</li>
                    </ul>
                </li>
            </ul>

            <h6 class="dose-type-title">Parenteral (IM/IV)</h6>
            <ul class="dose-details-list">
                <li>
                    <strong>Başlangıç Dozu</strong>
                    <ul>
                        <li><strong>Doz:</strong> 20 mg (IM/IV) (Tek doz)</li>
                        <li><strong>Sıklık:</strong> 1-2 gün boyunca.</li>
                        <li><strong>Devam Tedavisi:</strong> Oral form ile devam edilir (her gün aynı saatte).</li>
                        <li><strong>Tedavi Süresi:</strong> (Oral dahil) Akut kas-iskelet bozuklukları için 7 güne kadar, ciddi vakalarda 14 güne kadar.</li>
                    </ul>
                </li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Pediatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Güvenlik ve etkinlik konusunda yeterli bilgi yoktur.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Mümkün olan en kısa süre için en düşük etkili doz kullanılmalıdır.</li>
            </ul>
        `
    }
},
{
    id: "klaritromisinContainer",
    isim: "Klaritromisin",
    piyasaIsimleri: [
        "Claricide 500 mg 14 Tablet",
        "Cleanomisin 500 mg 14 Tablet",
        "Deklarit 500 mg 14 Tablet",
        "Klacid 500 mg 14 Tablet",
        "Klacid 500 mg IV 1 Flakon",
        "Klacid MR 7 Tablet",
        "Klacid MR 500 mg 14 Tablet",
        "Klacid MR 500 mg 20 Tablet",
        "Klamaxin 500 mg 14 Tablet",
        "Klamer 500 mg 14 Tablet",
        "Klamer Şurup 125 mg 70 ml",
        "Klamer Şurup 250 mg 50 ml",
        "Klamer Şurup 250 mg 100 ml",
        "Klarimax 250 mg 14 Tablet",
        "Klarimax 500 mg 14 Tablet",
        "Klarolid 250 mg 14 Tablet",
        "Klaromin 250 mg 14 Tablet",
        "Klaromin 500 mg 14 Tablet",
        "Klaromin Şurup 125 mg 70 ml",
        "Klaromin Şurup 250 mg 50 ml",
        "Klaromin Şurup 250 mg 100 ml",
        "Klax 500 mg 14 Tablet",
        "Laricid 500 mg 14 Tablet",
        "Macrol 250 mg 14 Film Tablet",
        "Macrol 500 mg 14 Film Tablet",
        "Macrol 500 mg MR 7 Tablet",
        "Macrol 500 mg MR 20 Tablet",
        "Macrol MR 500 mg 14 Tablet",
        "Macrol Süspansiyon 125 mg/5 ml 70 ml",
        "Macrol Süspansiyon 250 mg/5 ml 100 ml",
        "Macrol Şurup 250 mg/5 ml 50 ml",
        "Maxiclar 250 mg/5 ml Süspansiyon Tozu 100 ml",
        "Maxiclar 500 mg 14 Tablet",
        "Oradro 500 mg 1 Flakon",
        "Oradro 500 mg 14 Tablet",
        "Uniklar 250 mg 14 Tablet",
        "Uniklar 500 mg 14 Tablet",
        "Uniklar Şurup 250 mg/5 ml 50 ml"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Kronik Bronşit Akut Alevlenmesi</h5>
            <h6 class="dose-type-title">Hemen Salınım (IR)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 250-500 mg (PO)</li><li><strong>Sıklık:</strong> Her 12 saatte bir (7-14 gün).</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Uzatılmış Salınım (ER)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 1000 mg (PO)</li><li><strong>Sıklık:</strong> Günde bir kez (7 gün).</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Akut Maksiller Sinüzit</h5>
            <h6 class="dose-type-title">Hemen Salınım (IR)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 500 mg (PO)</li><li><strong>Sıklık:</strong> Her 12 saatte bir (14 gün).</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Uzatılmış Salınım (ER)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 1000 mg (PO)</li><li><strong>Sıklık:</strong> Günde bir kez (14 gün).</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Mikobakteriyel Enfeksiyon (MAC) (Tedavi ve Profilaksi)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 500 mg (PO)</li><li><strong>Sıklık:</strong> Her 12 saatte bir (7-14 gün).</li><li><strong>Not:</strong> MAC tedavisi için diğer antimikobakteriyel ilaçlarla (örn. etambutol) kombine kullanılmalıdır.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Peptik Ülser Hastalığı (H. pylori Eradikasyonu)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 500 mg (PO)</li><li><strong>Sıklık:</strong> Her 8-12 saatte bir (10-14 gün).</li><li><strong>Not:</strong> 2'li veya 3'lü kombinasyon rejiminin (örn. bizmut, amoksisilin, PPI) bir parçası olarak uygulanır.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Farenjit / Tonsillit</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 250 mg (PO)</li><li><strong>Sıklık:</strong> Her 12 saatte bir (10 gün).</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Toplum Kökenli Pnömoni</h5>
            <h6 class="dose-type-title">Hemen Salınım (IR)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 250 mg (PO)</li><li><strong>Sıklık:</strong> Her 12 saatte bir (7-14 gün).</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Uzatılmış Salınım (ER)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 1000 mg (PO)</li><li><strong>Sıklık:</strong> Günde bir kez (7 gün).</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Cilt / Cilt Yapısı Enfeksiyonu</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 250 mg (PO)</li><li><strong>Sıklık:</strong> Her 12 saatte bir (7-14 gün).</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Pertussis (Boğmaca) (Endikasyon Dışı)</h5>
            <p>(Tedavi veya temas sonrası profilaksi)</p>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 500 mg (PO)</li><li><strong>Sıklık:</strong> Günde iki kez (7 gün).</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Endokardit Profilaksisi (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 500 mg (PO)</li><li><strong>Sıklık:</strong> İşlemden 30-60 dakika önce.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
            <h6 class="dose-type-title">İlaç Etkileşimleri</h6>
            <ul class="dose-details-list simple-list">
                <li><strong>Atazanavir ile birlikte kullanım:</strong> Klaritromisin dozunu %50 azaltın.</li>
            </ul>
            <h6 class="dose-type-title">Böbrek Yetmezliği</h6>
            <ul class="dose-details-list simple-list">
                <li><strong>Orta (CrCl 30-60 mL/dk):</strong> Doz ayarı gerekmez (Atazanavir veya Ritonavir içeren rejimlerle birlikteyse dozu %50 azaltın).</li>
                <li><strong>Şiddetli (CrCl <30 mL/dk):</strong> Klaritromisin dozunu %50 azaltın.</li>
                <li><strong>Şiddetli (CrCl <30 mL/dk) + Atazanavir/Ritonavir:</strong> Klaritromisin dozunu %75 azaltın.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Akut Otitis Media (≥6 Ay)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 15 mg/kg/gün (PO) (q12hr bölünmüş)</li><li><strong>Süre:</strong> 10 gün</li><li><strong>Maksimum:</strong> 500 mg/doz.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Toplum Kökenli Pnömoni (≥3 Ay)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 15 mg/kg/gün (PO) (q12hr bölünmüş)</li><li><strong>Süre:</strong> 10 gün</li><li><strong>Maksimum:</strong> 500 mg/doz.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Sinüzit / Bronşit (≥6 Ay)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 15 mg/kg/gün (PO) (q12hr bölünmüş)</li><li><strong>Süre:</strong> 10 gün</li><li><strong>Maksimum:</strong> 500 mg/doz.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Cilt Enfeksiyonları (≥6 Ay)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 15 mg/kg/gün (PO) (q12hr bölünmüş)</li><li><strong>Süre:</strong> 10 gün</li><li><strong>Maksimum:</strong> 250 mg/doz.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Mikobakteriyel Enfeksiyon (MAC) (≥20 Ay)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 7.5 mg/kg (PO)</li><li><strong>Sıklık:</strong> Her 12 saatte bir</li><li><strong>Maksimum:</strong> 500 mg/doz.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Streptokokal Farenjit (≥6 Ay)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 7.5 mg/kg</li><li><strong>Sıklık:</strong> Her 12 saatte bir (10 gün)</li><li><strong>Maksimum:</strong> 250 mg/doz.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Endokardit Profilaksisi (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 15 mg/kg (PO)</li><li><strong>Sıklık:</strong> İşlemden 30-60 dakika önce</li><li><strong>Maksimum:</strong> 500 mg/doz.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Pertussis (Boğmaca) (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>1-6 Ay</strong><ul><li><strong>Doz:</strong> 7.5 mg/kg/doz (PO)</li><li><strong>Sıklık:</strong> Her 12 saatte bir (7 gün).</li></ul></li>
                <li><strong>>6 Ay</strong><ul><li><strong>Doz:</strong> 7.5 mg/kg/doz (PO)</li><li><strong>Sıklık:</strong> Her 12 saatte bir (7 gün).</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Dozlama Hususları</h5>
            <ul class="dose-details-list simple-list">
                <li>Çocuklara sadece oral süspansiyon veya hemen salınımlı tabletler verin; uzatılmış salınımlı (ER/MR) tabletleri kullanmayın.</li>
            </ul>
        `,
        yasli: `
            <ul class="dose-details-list simple-list">
                <li>Böbrek fonksiyonuna (CrCl) göre doz ayarlanmalıdır. Bkz. Yetişkin Dozaj Modifikasyonları.</li>
            </ul>
        `
    }
},
{
    id: "butamiratSitratContainer",
    isim: "Butamirat Sitrat",
    piyasaIsimleri: [
        "Busicod Fort Şurup 22.5 mg/5 ml",
        "Busicod Şurup 15 mg/5 ml",
        "Butamcod Fort Plus Şurup 22.5 mg/5 ml 100 ml",
        "Butamcod Fort Şurup 15 mg/5 ml 100 ml",
        "Butamcod Şurup 7.5 mg/5 ml - 100 ml",
        "Butirol Fort Şurup 22.5 mg/5 ml 100 ml",
        "Butirol Şurup 7.5 mg/5 ml - 100 ml",
        "Codactiv Fort Şurup 22.5 mg/5 ml 100 ml",
        "Codactiv Şurup 7.5 mg/5 ml",
        "Cutmirat Şurup 7.5 mg/5 ml 100 ml",
        "Kreval Forte Şurup 15mg/5ml 100 ml",
        "Kreval Max Şurup 22.5 mg/5 ml 100 ml",
        "Kreval SR 50 mg 20 Tablet",
        "Kreval Şurup 100 ml",
        "Notuss 50 mg SR 20 Tablet",
        "Notuss Fort Şurup 22.5 mg/5 ml 100 ml",
        "Notuss Şurup 7.5 mg/5 ml - 100 ml",
        "Pulmistat Fort Şurup 22.5 mg/5 ml 100 ml",
        "Sinecod Depo (Hap) 50 mg 20 Tablet",
        "Sinecod Depo 50 mg 10 Tablet",
        "Sinecod Şurup 7.5 mg - 100 ml",
        "Tusamol Şurup 7.5 mg/5 ml 100 ml",
        "Tuscod Şurup 7.5 mg/5 ml 100 ml",
        "Tuscod Şurup 7.5 mg/5 ml 200 ml"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Non-prodüktif (Kuru) Öksürük</h5>
            
            <h6 class="dose-type-title">Oral (Tablet - 50 mg)</h6>
            <ul class="dose-details-list">
                <li>
                    <strong>Standart Doz</strong>
                    <ul>
                        <li><strong>Doz:</strong> 2 veya 3 tablet (günlük)</li>
                        <li><strong>Sıklık:</strong> 8 veya 12 saat aralıklarla.</li>
                    </ul>
                </li>
            </ul>

            <h6 class="dose-type-title">Oral (Şurup - 7.5 mg/5 mL)</h6>
            <ul class="dose-details-list">
                <li>
                    <strong>Standart Doz</strong>
                    <ul>
                        <li><strong>Doz:</strong> 22.5 mg (15 mL)</li>
                        <li><strong>Sıklık:</strong> Günde 4 defaya kadar.</li>
                        <li><strong>Maksimum:</strong> 90 mg (60 mL) günlük.</li>
                    </ul>
                </li>
            </ul>
            <ul class="dose-details-list simple-list">
                <li>Dozaj önerileri ülkelere veya bireysel ürünlere göre değişiklik gösterebilir (spesifik ürün kılavuzlarına başvurun).</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Pediatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Dozaj önerileri ülkelere veya bireysel ürünlere göre değişiklik gösterebilir (spesifik ürün kılavuzlarına başvurun).</li>
            </ul>
        `,
        yasli: `
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir dozaj ayarlaması belirtilmemiştir. Standart yetişkin dozu kullanılabilir ancak dikkatli olunmalıdır.</li>
            </ul>
        `
    }
},
{
    id: "midazolamContainer",
    isim: "Midazolam",
    piyasaIsimleri: [
        "Dalizom 15 mg/3 ml 5 Ampül",
        "Midolam 5 mg/1 ml 5 Ampül",
        "Midolam 15 mg/3 ml 5 Ampül",
        "Midolam 50 mg/10 ml 5 Ampül",
        "Sedever 5 mg/1 ml 5 Ampül",
        "Zolamid 5 mg/5 ml 5 Ampül",
        "Zolamid 15 mg/3 ml 5 Ampül",
        "Zolamid 50 mg/10 ml 5 Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Preoperatif Sedasyon/Anksiyoliz (Amnezi ile)</h5>
            <h6 class="dose-type-title">Intramüsküler (IM)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 70-80 mcg/kg (yaklaşık 5 mg)</li><li><strong>Sıklık:</strong> Ameliyattan 30-60 dakika önce.</li><li><strong>Not:</strong> Kronik hastalarda veya geriatrik hastalarda dozu %50 azaltın.</li></ul></li>
            </ul>
            <h6 class="dose-type-title">İntravenöz (IV)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç</strong><ul><li><strong>Doz:</strong> 0.5-1 mg (2 dk üzerinde), 2.5 mg/doz aşılmamalı.</li><li><strong>Tekrar:</strong> Sedatif etkiyi değerlendirmek için 2-3 dk bekleyin.</li><li><strong>Not:</strong> Total doz >5 mg genellikle gerekmez. Narkotik premedikasyonu varsa %30 daha az kullanın.</li></ul></li>
                <li><strong>Zayıf/Kronik Hastalar</strong><ul><li><strong>Doz:</strong> Başlangıç 1.5 mg (IV); 1 mg/doz ile tekrar (PRN).</li><li><strong>Maksimum:</strong> Kümülatif doz 3.5 mg'ı aşmamalı.</li></ul></li>
                <li><strong>İdame</strong><ul><li><strong>Doz:</strong> Başlangıç etkili dozun %25'i (PRN) yavaş titrasyonla.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Anestezi İndüksiyonu</h5>
            <h6 class="dose-type-title">< 55 Yaş (Premedikasyonsuz)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 300-350 mcg/kg (IV) (20-30 sn üzerinde).</li><li><strong>Not:</strong> İndüksiyonu tamamlamak için %25'lik artışlar gerekebilir. Dirençli vakalarda 0.6 mg/kg'a kadar çıkılabilir.</li></ul></li>
            </ul>
            <h6 class="dose-type-title">> 55 Yaş (Premedikasyonsuz)</h6>
            <ul class="dose-details-list">
                <li><strong>Sistemik Hastalık Yok</strong><ul><li><strong>Doz:</strong> 300 mcg/kg (IV) (20-30 sn üzerinde).</li></ul></li>
                <li><strong>Sistemik Hastalık Var/Zayıf</strong><ul><li><strong>Doz:</strong> 200-250 mcg/kg (IV) (0.15 mg/kg yeterli olabilir).</li></ul></li>
            </ul>
            <h6 class="dose-type-title">> 55 Yaş (Premedikasyonlu)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 150-350 mcg/kg (IV) (20-30 sn üzerinde). (250 mcg/kg genelde yeterlidir).</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Anestezi İdamesi</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> Anestetik etkilerin hafiflediğine dair işaretler olduğunda indüksiyon dozunun %25'i kadar artışlar (PRN).</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Entübe/Ventile Hastalarda Sedasyon</h5>
            <ul class="dose-details-list">
                <li><strong>Yükleme</strong><ul><li><strong>Doz:</strong> 10-50 mcg/kg (0.5-4 mg) yavaş IV enjeksiyon/infüzyon (birkaç dk üzerinde).</li><li><strong>Sıklık:</strong> Gerekirse her 5-15 dakikada bir tekrarlanır.</li></ul></li>
                <li><strong>İdame</strong><ul><li><strong>Doz:</strong> Başlangıç 20-100 mcg/kg/saat infüzyon; %25-50 oranında yukarı veya aşağı titre edilir (PRN).</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Status Epileptikus</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 10 mg (IM)</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Dozlama Hususları</h5>
            <ul class="dose-details-list simple-list">
                <li>Diazepam'a göre pik EEG etkilerine ulaşması yaklaşık 3 kat daha uzun sürer; bu nedenle, dozu tekrarlamadan önce sedatif etkileri tam olarak değerlendirmek için 2-3 dakika bekleyin.</li>
                <li>Vasküler erişim sağlanamazsa IM uygulanabilir.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Sedasyon</h5>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 500-750 mcg/kg (meyve suyu ile seyreltilmiş)</li><li><strong>Sıklık:</strong> İşlemden 20-30 dakika önce.</li><li><strong>Maksimum:</strong> 20 mg.</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Intramüsküler (IM)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 100-150 mcg/kg (500 mcg/kg'a kadar kullanılmıştır)</li><li><strong>Maksimum:</strong> 10 mg.</li></ul></li>
            </ul>
            <h6 class="dose-type-title">İntravenöz (IV)</h6>
            <ul class="dose-details-list">
                <li><strong>< 6 Ay</strong><ul><li><strong>Doz:</strong> Başlangıç 50 mcg/kg (IV) (2-3 dk üzerinde); küçük artışlarla titre edin; yakından izleyin.</li></ul></li>
                <li><strong>6 Ay - 6 Yaş</strong><ul><li><strong>Doz:</strong> Başlangıç 50-100 mcg/kg (IV) (2-3 dk üzerinde); PRN her 2-3 dakikada bir tekrarla.</li><li><strong>Maksimum:</strong> 600 mcg/kg total doz veya 6 mg total doz.</li></ul></li>
                <li><strong>6 - 12 Yaş</strong><ul><li><strong>Doz:</strong> Başlangıç 25-50 mcg/kg (IV) (2-3 dk üzerinde); PRN her 2-3 dakikada bir tekrarla.</li><li><strong>Maksimum:</strong> 400 mcg/kg total doz veya 10 mg total doz.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Anestezi (Non-Neonatal)</h5>
            <ul class="dose-details-list">
                <li><strong>Yükleme</strong><ul><li><strong>Doz:</strong> İstenen etkiyi elde etmek için 50-150 mcg/kg (IV) (2-3 dk üzerinde) (PRN).</li></ul></li>
                <li><strong>Sürekli İnfüzyon</strong><ul><li><strong>Doz:</strong> 1-2 mcg/kg/dk (IV) infüzyon.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Anestezi (Neonatal)</h5>
            <ul class="dose-details-list simple-list"><li>Neonatallerde IV yükleme dozu kullanılmamalıdır.</li></ul>
            <ul class="dose-details-list">
                <li><strong>Sürekli İnfüzyon</strong><ul><li><strong>Doz:</strong> 0.5 mcg/kg/dk (IV) infüzyon.</li></ul></li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Preoperatif Sedasyon/Anksiyoliz</h5>
            <h6 class="dose-type-title">Intramüsküler (IM)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 2-3 mg (~20-50 mcg/kg)</li><li><strong>Sıklık:</strong> Ameliyattan 30-60 dakika önce.</li><li><strong>Not:</strong> Bazı yaşlı hastalar 1 mg'a kadar düşük dozlara yanıt verebilir.</li></ul></li>
            </ul>
            <h6 class="dose-type-title">İntravenöz (IV) (>60 Yaş)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç</strong><ul><li><strong>Doz:</strong> 1-1.5 mg; 2 dakikalık periyotta >1.5 mg'ı aşmayın.</li><li><strong>Tekrar:</strong> Gerekirse 1 mg/doz her 2-3 dakikada bir (PRN).</li><li><strong>Maksimum:</strong> Kümülatif doz 3.5 mg'ı aşmamalıdır.</li><li><strong>Not:</strong> Yaşlılarda pik etki gecikebilir, bu nedenle artışlar daha küçük ve enjeksiyon hızı daha yavaş olmalıdır.</li></ul></li>
                <li><strong>İdame</strong><ul><li><strong>Doz:</strong> Başlangıç etkili dozun %25'i (PRN) yavaş titrasyonla.</li></ul></li>
            </ul>
        `
    }
},
{
    id: "adrenalinContainer",
    isim: "Adrenalin (Epinefrin)",
    piyasaIsimleri: [
        "Adrenalin 0.5 mg (1/2 mg) 10 Ampül (Drogsan)",
        "Adrenalin 0.5 mg 10 Ampül (Biofarma)",
        "Adrenalin 0.5 mg 10 Ampül (Galen)",
        "Adrenalin 0.5 mg 10 Ampül (Osel)",
        "Adrenalin 0.25 mg 10 Ampül (Biofarma)",
        "Adrenalin 0.25 mg 10 Ampül (Galen)",
        "Adrenalin 1 mg/1 ml 10 Ampül (Drogsan)",
        "Adrenalin 1 mg 10 Ampül (Biofarma)",
        "Adrenalin 1 mg 10 Ampül (Galen)",
        "Adrenalin 1 mg 10 Ampül (Osel)",
        "Penepin 0.3 mg/0.3 ml IM 2 Enjektör",
        "Penepin JR. 0.15 mg/0.3 ml IM 2 Enjektör"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Dozaj Formları & Konsantrasyonlar</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>Oto-enjektör (SC/IM):</strong> 0.3mg/0.3mL (EpiPen, Auvi-Q, Symjepi)</li>
                <li><strong>Enjektabl Solüsyon (1mg/mL):</strong> (1:1000 olarak da bilinir)</li>
                <li><strong>Enjektabl Solüsyon (0.1mg/mL):</strong> (1:10,000 olarak da bilinir)</li>
                <li><strong>Hazır IV İnfüzyon:</strong> 8mcg/mL ile 64mcg/mL arasında çeşitli konsantrasyonlar.</li>
            </ul>

            <h5 class="dose-condition-title">Kardiyak Arrest</h5>
            <h6 class="dose-type-title">İntravenöz (IV)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 0.5-1 mg (5-10 mL)</li><li><strong>Sıklık:</strong> Resüsitasyon sırasında her 5 dakikada bir 0.5 mg (5 mL) IV.</li></ul></li>
            </ul>
            <h6 class="dose-type-title">İntrakardiyak</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 0.3-0.5 mg (3-5 mL) (IV yol açılamadıysa).</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Endotrakeal Tüp (ETT)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 2-2.5 mg</li><li><strong>Sıklık:</strong> Her 3-5 dakikada bir (IV/IO erişimi sağlanana kadar).</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Septik Şok ile İlişkili Hipotansiyon</h5>
            <h6 class="dose-type-title">IV İnfüzyon</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 0.05-2 mcg/kg/dakika (IV infüzyon)</li><li><strong>Not:</strong> İstenen ortalama arteriyel basınca (MAP) ulaşmak için titre edilir.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Anafilaksi</h5>
            <h6 class="dose-type-title">IV (Sadece Şiddetli Hipotansiyon/Arrest Durumunda)</h6>
            <ul class="dose-details-list">
                <li><strong>0.1 mg/mL Solüsyon</strong><ul><li><strong>Doz:</strong> 0.1 mg (5 dk üzerinde) VEYA 5-15 mcg/dk infüzyon.</li></ul></li>
            </ul>
            <h6 class="dose-type-title">IM/SC (1 mg/mL Solüsyon)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 0.3-0.5 mg (0.3-0.5 mL) (seyreltilmemiş)</li><li><strong>Uygulama:</strong> Uyluğun anterolateral yönüne IM/SC.</li><li><strong>Tekrar:</strong> Gerekirse her 5-10 dakikada bir tekrarlanır (max 0.5 mg/enjeksiyon).</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Oto-Enjektör (Prefilled)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 0.3 mg (1 oto-enjektör) (SC/IM)</li><li><strong>Tekrar:</strong> Semptomlar devam ederse 5-15 dakika sonra tekrarlanabilir.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Semptomatik Bradikardi</h5>
            <p>(Atropin veya pace'e yanıtsız)</p>
            <ul class="dose-details-list">
                <li><strong>IV İnfüzyon</strong><ul><li><strong>Doz:</strong> 2-10 mcg/dk VEYA 0.1-0.5 mcg/kg/dk; yanıta göre titre edilir.</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Midriyazis (Göz İçi Cerrahi Sırasında)</h5>
            <h6 class="dose-type-title">İntraoküler İrigasyon Solüsyonu</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 1 mg (1 mg/mL'lik solüsyondan) 1-10 mcg/mL'ye seyreltilir.</li></ul></li>
            </ul>
            <h6 class="dose-type-title">İntraoküler İntrakameral Enjeksiyon</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 1 mg (1 mg/mL'lik solüsyondan) 2.5-10 mcg/mL'ye seyreltilir.</li><li><strong>Hacim:</strong> 0.1 mL.</li></ul></li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Dozaj Formları (Oto-Enjektör)</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>0.1mg/0.1mL</strong> (Auvi-Q)</li>
                <li><strong>0.15mg/0.15mL</strong> (EpiPen Jr, Auvi-Q, Symjepi)</li>
                <li><strong>0.3mg/0.3mL</strong> (EpiPen, Auvi-Q, Symjepi)</li>
            </ul>

            <h5 class="dose-condition-title">Anafilaksi</h5>
            <h6 class="dose-type-title">IM/SC (1 mg/mL Solüsyon)</h6>
            <ul class="dose-details-list">
                <li><strong>< 30 kg (66 lbs)</strong><ul><li><strong>Doz:</strong> 0.01 mg/kg (0.01 mL/kg) (SC/IM)</li><li><strong>Maksimum:</strong> 0.3 mg (0.3 mL) / enjeksiyon.</li><li><strong>Tekrar:</strong> Gerekirse her 5-10 dakikada bir.</li></ul></li>
                <li><strong>≥ 30 kg (66 lbs)</strong><ul><li><strong>Doz:</strong> 0.3-0.5 mg (0.3-0.5 mL) (SC/IM)</li><li><strong>Maksimum:</strong> 0.5 mg (0.5 mL) / enjeksiyon.</li><li><strong>Tekrar:</strong> Gerekirse her 5-10 dakikada bir.</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Oto-Enjektör (Kilo Bazlı)</h6>
            <ul class="dose-details-list">
                <li><strong>7.5-15 kg (Auvi-Q)</strong><ul><li><strong>Doz:</strong> 0.1 mg (SC/IM) bir kez.</li></ul></li>
                <li><strong>15 - < 30 kg</strong><ul><li><strong>Doz:</strong> 0.15 mg (1 enjektör) (SC/IM) bir kez.</li><li><strong>Tekrar:</strong> Gerekirse 5-15 dk sonra.</li></ul></li>
                <li><strong>≥ 30 kg</strong><ul><li><strong>Doz:</strong> 0.3 mg (1 enjektör) (SC/IM) bir kez.</li><li><strong>Tekrar:</strong> Gerekirse 5-15 dk sonra.</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Asistoli / Nabızsız Arrest (Endikasyon Dışı)</h5>
            <h6 class="dose-type-title">IV / Intraosseöz (IO) (0.1 mg/mL solüsyon)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 0.01 mg/kg (0.1 mL/kg) (IO/IV)</li><li><strong>Maksimum:</strong> 1 mg/doz.</li><li><strong>Tekrar:</strong> Her 3-5 dakikada bir (PRN).</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Endotrakeal (ETT) (1 mg/mL solüsyon)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 0.1 mg/kg (0.1 mL/kg) (ETT)</li><li><strong>Maksimum:</strong> 2.5 mg/doz.</li><li><strong>Tekrar:</strong> Her 3-5 dakikada bir (PRN).</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Semptomatik Bradikardi (Endikasyon Dışı)</h5>
            <h6 class="dose-type-title">IV / Intraosseöz (IO) (0.1 mg/mL solüsyon)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 0.01 mg/kg (IO/IV)</li><li><strong>Maksimum:</strong> 1 mg/doz.</li><li><strong>Tekrar:</strong> Her 3-5 dakikada bir (PRN).</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Endotrakeal (ETT) (1 mg/mL solüsyon)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 0.1 mg/kg (0.1 mL/kg) (ETT)</li><li><strong>Tekrar:</strong> Her 3-5 dakikada bir (PRN).</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Neonatal (< 28 gün)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 0.01-0.03 mg/kg (IV Puşe) (0.1-0.3 mL/kg)</li><li><strong>Sıklık:</strong> Her 3-5 dakikada bir.</li></ul></li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Yaşlı hastalar (özellikle koroner arter hastalığı olanlar) adrenerjik stimülasyona karşı daha duyarlı olabileceğinden dikkatle kullanılmalıdır.</li>
                <li>Doz ayarlaması, hastanın kliniğine ve kardiyovasküler durumuna göre değerlendirilmelidir.</li>
            </ul>
        `
    }
},
{
    id: "norepinefrinContainer",
    isim: "Norepinefrin (Noradrenalin)",
    piyasaIsimleri: [
        "Biemefrin 4 mg/4 ml IV 10 Ampül",
        "Cardenor 4 mg/4 ml 10 Ampül",
        "Cardenor 25 mg/25 ml 1 Flakon",
        "Seladrenalin 4 mg/4 ml 10 Ampül",
        "Stenor 4 mg/4 ml 10 Ampül",
        "Türktıpsan Noradrenalin 4 mg/4 ml IV Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Akut Hipotansiyon</h5>
            <h6 class="dose-type-title">IV İnfüzyon</h6>
            <ul class="dose-details-list">
                <li>
                    <strong>Standart Doz</strong>
                    <ul>
                        <li><strong>Başlangıç:</strong> 8-12 mcg/dk (IV infüzyon); etkiye göre titre edilir.</li>
                        <li><strong>İdame:</strong> 2-4 mcg/dk (IV infüzyon).</li>
                    </ul>
                </li>
            </ul>

            <h5 class="dose-condition-title">Kardiyak Arrest</h5>
            <h6 class="dose-type-title">IV İnfüzyon</h6>
            <ul class="dose-details-list">
                <li>
                    <strong>Standart Doz</strong>
                    <ul>
                        <li><strong>Başlangıç:</strong> 8-12 mcg/dk (IV infüzyon); etkiye göre titre edilir.</li>
                        <li><strong>İdame:</strong> 2-4 mcg/dk (IV infüzyon).</li>
                    </ul>
                </li>
            </ul>
            
            <h5 class="dose-condition-title">Sepsis & Septik Şok</h5>
            <h6 class="dose-type-title">IV İnfüzyon</h6>
            <ul class="dose-details-list">
                <li>
                    <strong>Standart Doz</strong>
                    <ul>
                        <li><strong>Doz:</strong> 0.01-3.3 mcg/kg/dk (IV infüzyon).</li>
                    </ul>
                </li>
            </ul>
            
            <h5 class="dose-condition-title">Toksisite (Endikasyon Dışı)</h5>
            <p>(Beta Bloker, Kalsiyum Kanal Bloker, Trisiklik Antidepresan Toksisitesi)</p>
            <ul class="dose-details-list simple-list">
                <li>Doz, yaşa uygun kan basıncına göre titre edilmelidir.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Akut Hipotansiyon</h5>
            <h6 class="dose-type-title">IV İnfüzyon</h6>
            <ul class="dose-details-list">
                <li>
                    <strong>Standart Doz</strong>
                    <ul>
                        <li><strong>Başlangıç:</strong> 0.05-0.1 mcg/kg/dk (IV infüzyon); etkiye göre titre edilir.</li>
                        <li><strong>Maksimum:</strong> 1-2 mcg/kg/dk.</li>
                    </ul>
                </li>
            </ul>
            
            <h5 class="dose-condition-title">Kardiyak Arrest</h5>
            <h6 class="dose-type-title">IV İnfüzyon</h6>
            <ul class="dose-details-list">
                <li>
                    <strong>Standart Doz</strong>
                    <ul>
                        <li><strong>Başlangıç:</strong> 0.05-0.1 mcg/kg/dk (IV infüzyon); etkiye göre titre edilir.</li>
                        <li><strong>Maksimum:</strong> 1-2 mcg/kg/dk.</li>
                    </ul>
                </li>
            </ul>

            <h5 class="dose-condition-title">Şok</h5>
            <h6 class="dose-type-title">IV İnfüzyon</h6>
            <ul class="dose-details-list">
                <li>
                    <strong>Standart Doz</strong>
                    <ul>
                        <li><strong>Doz:</strong> 0.05-0.1 mcg/kg/dk (IV infüzyon); etkiye göre titre edilir.</li>
                        <li><strong>Maksimum:</strong> 2 mcg/kg/dk'yı aşmamalıdır.</li>
                    </ul>
                </li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Yaşlı hastalarda, özellikle kardiyovasküler hastalığı olanlarda, daha düşük başlangıç dozları düşünülmeli ve vital bulgular yakından izlenmelidir.</li>
                <li>Doz, hastanın bireysel yanıtına ve toleransına göre dikkatlice titre edilmelidir.</li>
            </ul>
        `
    }
},
{
    id: "seftriaksonContainer",
    isim: "Seftriakson",
    piyasaIsimleri: [
        "Armaseft 1 g IV 1 Flakon",
        "Bulsef 1 g IM 1 Flakon",
        "Ceforce 1 g IV 1 Flakon 1 Ampül",
        "Cefridem 0.5 g IM 1 Flakon",
        "Cefridem 0.5 g IV 1 Flakon",
        "Cefridem 1 g IM 1 Flakon",
        "Cefridem 1 g IV 1 Flakon",
        "Cefridem 2 g IV 1 Flakon",
        "Cephaxon 1 g IM 1 Flakon",
        "Cephaxon 1 g IV 1 Flakon",
        "Desefin 1 g IM 1 Flakon",
        "Desefin 1 g IV 1 Flakon",
        "Desefin 500 mg IM 1 Flakon",
        "Desefin 500 mg IV 1 Flakon",
        "Eqiceft 500 mg IM 1 Flakon",
        "Eqiceft 500 mg IV 1 Flakon",
        "Eqiceft 1000 mg IM 1 Flakon",
        "Eqiceft 1000 mg IV 1 Flakon",
        "Forsef 500 mg IM 1 Flakon",
        "Forsef 500 mg IV 1 Flakon",
        "Forsef 1000 mg IM 1 Flakon",
        "Forsef 1000 mg IV 1 Flakon",
        "Nevakson 1 g IM 1 Flakon",
        "Nevakson 1 g IV 1 Flakon",
        "Nevakson 500 mg IM 1 Flakon",
        "Nevakson 500 mg IV 1 Flakon",
        "Novosef 1 g/10 ml IV 1 Ampül",
        "Novosef 1 g IM 1 Flakon",
        "Novosef 500 mg IM 1 Flakon",
        "Novosef 500 mg IV 1 Flakon",
        "Novosef İğne 1 g IV 1 Flakon",
        "Onceft 0.5 g IM 1 Flakon",
        "Onceft 0.5 g IV 1 Flakon",
        "Onceft 1 g IM 1 Flakon",
        "Onceft 1 g IV 1 Flakon",
        "Sefabel 0.5 g 1 Flakon",
        "Sefabel 1 g 1 Flakon",
        "Sefbul 0.5 g IM/IV 1 Adet",
        "Seftrasim 1 g IM 1 Flakon",
        "Tregs 0.5 g IM 1 Flakon",
        "Tregs 0.5 g IV 1 Flakon",
        "Tregs 1 g IM 1 Flakon",
        "Tregs 1 g IV 1 Flakon",
        "Unacefin 1 g IM 1 Flakon",
        "Unacefin 1 g IV 1 Flakon",
        "Unacefin 500 mg IM 1 Flakon",
        "Unacefin 500 mg IV 1 Flakon",
        "İesef İğne (IM) 0.5 g 1 Flakon",
        "İesef İğne (IM) 1 g 1 Flakon",
        "İesef İğne (IV) 0.5 g 1 Flakon",
        "İesef İğne (IV) 1 g 1 Flakon"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Çeşitli Enfeksiyonlar</h5>
            <h6 class="dose-type-title">Genel Dozaj</h6>
            <ul class="dose-details-list">
                <li><strong>İntra-abdominal Enf. (Hafif-Orta)</strong><ul><li><strong>Doz:</strong> 1-2 g/gün (IV)</li><li><strong>Sıklık:</strong> Tek doz veya q12hr bölünmüş (4-7 gün).</li><li><strong>Not:</strong> Metronidazol ile kombine edilir.</li></ul></li>
                <li><strong>Akut Bakteriyel Otitis Media</strong><ul><li><strong>Doz:</strong> 50 mg/kg (IM) tek doz.</li><li><strong>Tedavi Başarısızlığı:</strong> 50 mg/kg (IV/IM) 3 gün.</li></ul></li>
                <li><strong>Pelvik İnflamatuar Hastalık (PID)</strong><ul><li><strong>Doz:</strong> 250 mg (IM) tek doz.</li><li><strong>Not:</strong> Doksisiklin (± metronidazol) ile 14 gün kombine edilir.</li></ul></li>
                <li><strong>Prostetik Eklem Enfeksiyonu</strong><ul><li><strong>Doz:</strong> 2 g (IV)</li><li><strong>Sıklık:</strong> q24hr (2-6 hafta).</li></ul></li>
                <li><strong>Menenjit</strong><ul><li><strong>Doz:</strong> 2 g (IV)</li><li><strong>Sıklık:</strong> q12hr (7-14 gün).</li></ul></li>
                <li><strong>Akut Komplike Olmayan Piyelonefrit</strong><ul><li><strong>Doz:</strong> 1-2 g (IV)</li><li><strong>Sıklık:</strong> qDay (Günde bir).</li></ul></li>
                <li><strong>Cerrahi Profilaksi</strong><ul><li><strong>Doz:</strong> 1 g (IV)</li><li><strong>Sıklık:</strong> Prosedürden 0.5-2 saat önce.</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Komplike Olmayan Gonokokal Enfeksiyonlar</h5>
            <h6 class="dose-type-title">(Farenks, Serviks, Üretra, Rektum)</h6>
            <ul class="dose-details-list">
                <li><strong>Ağırlık <150 kg</strong><ul><li><strong>Doz:</strong> 500 mg (IM) tek doz.</li></ul></li>
                <li><strong>Ağırlık ≥150 kg</strong><ul><li><strong>Doz:</strong> 1000 mg (1 g) (IM) tek doz.</li></ul></li>
                <li><strong>Not:</strong> Klamidya dışlanmadıysa, Doksisiklin 100 mg (GİBİ, 7 gün) ekleyin (veya hamile ise Azitromisin 1g).</li>
            </ul>
            
            <h5 class="dose-condition-title">Cinsel Saldırı Sonrası Profilaksi</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 500 mg (IM) tek doz (veya ≥150 kg ise 1000 mg).</li><li><strong>Artı:</strong> Doksisiklin 100 mg (GİBİ, 7 gün) VE Metronidazol 500 mg (GİBİ, 7 gün).</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Diğer Enfeksiyonlar (Bazıları Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Septik/Toksik Şok</strong><ul><li><strong>Doz:</strong> 2 g (IV) günde bir kez (Toksik şok için klindamisin ile).</li></ul></li>
                <li><strong>Akut Epididimit (Klamidya/Gonore)</strong><ul><li><strong>Doz:</strong> 250 mg (IM) tek doz ARTI Doksisiklin 100 mg (GİBİ, 10 gün).</li></ul></li>
                <li><strong>Nekrotizan Cilt Enfeksiyonu</strong><ul><li><strong>Doz:</strong> 1-2 g (IV) qDay (Doksisiklin ile kombine).</li></ul></li>
                <li><strong>Gonokokal Konjonktivit</strong><ul><li><strong>Doz:</strong> 1 g (IM) tek doz.</li></ul></li>
                <li><strong>Dissemine Gonokokal Enfeksiyon</strong><ul><li><strong>Doz:</strong> 1 g/gün (IV/IM); iyileşme sonrası 24-48 saat devam edilir, sonra Sefiksim'e geçilir.</li></ul></li>
                <li><strong>Gonokokal Endokardit/Menenjit</strong><ul><li><strong>Doz:</strong> 1-2 g (IV)</li><li><strong>Sıklık:</strong> q12hr (4 hafta / 10-14 gün).</li></ul></li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Akut Bakteriyel Otitis Media</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 50 mg/kg (IM) tek doz.</li><li><strong>Maksimum:</strong> 1 g.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Menenjit</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 100 mg/kg/gün (IV/IM)</li><li><strong>Sıklık:</strong> Tek doz veya q12hr bölünmüş (7-14 gün).</li><li><strong>Maksimum:</strong> 4 g/gün.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Menenjit Dışı Ciddi Enfeksiyonlar</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 50-75 mg/kg/gün (IV/IM)</li><li><strong>Sıklık:</strong> q12hr bölünmüş (7-14 gün).</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Cilt/Cilt Yapısı Enfeksiyonları</h5>
            <ul class="dose-details-list">
                <li><strong>>12 Yaş</strong><ul><li><strong>Doz:</strong> 1-2 g/gün (IV/IM)</li><li><strong>Sıklık:</strong> Tek doz veya q12hr bölünmüş (7-14 gün).</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Gonokokal Enfeksiyonlar (Neonatal)</h5>
            <ul class="dose-details-list">
                <li><strong>Oftalmia Neonatorum</strong><ul><li><strong>Doz:</strong> 25-50 mg/kg (IV/IM) tek doz.</li><li><strong>Maksimum:</strong> 125 mg.</li></ul></li>
                <li><strong>Dissemine Enf. / Saçlı Deri Apsesi</strong><ul><li><strong>Doz:</strong> 25-50 mg/kg/gün (IV/IM) (7 gün).</li><li><strong>Menenjit Varsa:</strong> 10-14 gün tedavi.</li></ul></li>
                <li><strong>Profilaksi (Anneden)</strong><ul><li><strong>Doz:</strong> 25-50 mg/kg (IV/IM) tek doz.</li><li><strong>Maksimum:</strong> 125 mg.</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Gonokokal Enfeksiyonlar (Çocuk)</h5>
            <ul class="dose-details-list">
                <li><strong><45 kg (Komplike olmayan)</strong><ul><li><strong>Doz:</strong> 125 mg (IM) tek doz.</li></ul></li>
                <li><strong><45 kg (Bakteremi/Artrit)</strong><ul><li><strong>Doz:</strong> 50 mg/kg/gün (IM/IV) tek doz (7 gün).</li><li><strong>Maksimum:</strong> 1 g/gün.</li></ul></li>
                <li><strong>>45 kg (Bakteremi/Artrit)</strong><ul><li><strong>Doz:</strong> 50 mg/kg/gün (IM/IV) tek doz (7 gün).</li></ul></li>
                <li><strong>>45 kg (Genel)</strong><ul><li><strong>Doz:</strong> 1-2 g (IV)</li><li><strong>Sıklık:</strong> q12hr.</li></ul></li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Böbrek ve karaciğer fonksiyonları normal olan yaşlı hastalarda genellikle doz ayarlaması gerekmez.</li>
                <li>Ancak, şiddetli böbrek yetmezliği olan veya hem böbrek hem de karaciğer yetmezliği olan yaşlı hastalarda doz ayarlaması düşünülmelidir.</li>
            </ul>
        `
    }
},
{
    id: "metilprednizolonContainer",
    isim: "Metilprednizolon",
    piyasaIsimleri: [
        "Cortipol 20 mg 1 Ampül",
        "Cortipol 40 mg 1 Ampül",
        "Cortipol 250 mg 1 Ampül",
        "Depo-Medrol 40 mg 1 Flakon",
        "Meticure 20 mg IM/IV 1 Ampül",
        "Meticure 40 mg IM/IV 1 Ampül",
        "Meticure 250 mg IM/IV 1 Ampül",
        "Precort-Liyo 20 mg IM/IV 1 Ampül",
        "Precort-Liyo 40 mg IM/IV 1 Ampül",
        "Precort-Liyo 250 mg 1 Ampül",
        "Precort 4 mg 20 Tablet",
        "Precort 16 mg 20 Tablet",
        "Prednol-L 20 mg 1 Ampül",
        "Prednol-L 40 mg 1 Ampül",
        "Prednol-L 250 mg 1 Ampül",
        "Prednol 4 mg 20 Tablet",
        "Prednol 16 mg 20 Tablet",
        "Tredison 20 mg IM/IV 1 Ampül",
        "Tredison 40 mg IM/IV 1 Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Alerjik Durumlar (Oral Doz Paketi)</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>Gün 1:</strong> 8 mg (kahvaltıdan önce), 4 mg (öğle yemeğinden sonra), 4 mg (akşam yemeğinden sonra), 8 mg (yatarken).</li>
                <li><strong>Gün 2:</strong> 4 mg (kahvaltıdan önce), 4 mg (öğle yemeğinden sonra), 4 mg (akşam yemeğinden sonra), 8 mg (yatarken).</li>
                <li><strong>Gün 3:</strong> 4 mg (kahvaltıdan önce), 4 mg (öğle yemeğinden sonra), 4 mg (akşam yemeğinden sonra), 4 mg (yatarken).</li>
                <li><strong>Gün 4:</strong> 4 mg (kahvaltıdan önce), 4 mg (öğle yemeğinden sonra), 4 mg (yatarken).</li>
                <li><strong>Gün 5:</strong> 4 mg (kahvaltıdan önce), 8 mg (yatarken).</li>
                <li><strong>Gün 6:</strong> 4 mg (kahvaltıdan önce).</li>
                <li>(Not: Dermatit alevlenmesini azaltmak için 12 gün boyunca azaltılabilir).</li>
            </ul>

            <h5 class="dose-condition-title">Multipl Skleroz (MS) Akut Alevlenmeleri</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 160 mg (IV)</li><li><strong>Sıklık:</strong> 1 hafta boyunca günde bir kez.</li><li><strong>Devam:</strong> Ardından 1 ay boyunca gün aşırı 64 mg (IV).</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">COVID-19 (Endikasyon Dışı)</h5>
            <p>NIH kılavuzları, mekanik ventilasyon veya oksijen alan hastalarda deksametazon (yoksa metilprednizolon) önermektedir.</p>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 32 mg (IV)</li><li><strong>Sıklık:</strong> Günde bir kez (10 güne kadar veya taburculuğa kadar).</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">AIDS Hastalarında Pneumocystis (PJP) Pnömonisi (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz 1:</strong> 30 mg (IV) q12hr (5 gün), ardından</li><li><strong>Doz 2:</strong> 30 mg (IV) q24hr (5 gün), ardından</li><li><strong>Doz 3:</strong> 15 mg (IV) q24hr (11 gün).</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Akut Spinal Kord Hasarı (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Yükleme (İlk Saat)</strong><ul><li><strong>Doz:</strong> 30 mg/kg (IV) (15 dakika üzerinde).</li></ul></li>
                <li><strong>İdame (Sonraki 23 Saat)</strong><ul><li><strong>Doz:</strong> 5.4 mg/kg/saat (IV) (sürekli infüzyon).</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Şiddetli Lupus Nefriti (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz (Pulse Terapi)</strong><ul><li><strong>Doz:</strong> 0.5-1 g (IV) (1 saat üzerinde)</li><li><strong>Sıklık:</strong> 3 gün boyunca günde bir kez.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Dozlama Hususları (Formlara Göre)</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>Metilprednizolon (Oral Tablet):</strong> Olağan doz aralığı 2-60 mg/gün (PO) q6-24hr bölünmüş.</li>
                <li><strong>Metilprednizolon Asetat (IM - Depo):</strong> Olağan doz 10-80 mg (IM) her 1-2 haftada bir. Oral tedaviye geçici alternatif olarak kullanılabilir. <strong>IV VERİLMEZ.</strong></li>
                <li><strong>Metilprednizolon Sodyum Süksinat (IM/IV - Liyo):</strong> Olağan doz 10-250 mg (IM/IV) gerekirse her 4 saatte bir (PRN).</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">İnflamasyon</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 0.5-1.7 mg/kg/gün (IV/PO/IM)</li><li><strong>Sıklık:</strong> q12hr bölünmüş.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Status Astmatikus</h5>
            <ul class="dose-details-list">
                <li><strong><12 Yaş</strong><ul><li><strong>Doz:</strong> 1-2 mg/kg (IV/IM) (2 doza bölünmüş).</li><li><strong>Maksimum:</strong> 60 mg/gün.</li></ul></li>
                <li><strong>>12 Yaş</strong><ul><li><strong>Doz:</strong> 40-80 mg/gün (IM) (q12-24hr bölünmüş).</li><li><strong>Maksimum:</strong> 60 mg/gün.</li></ul></li>
                <li><strong>Not:</strong> PEF %70'e ulaşana kadar devam edilir.</li>
            </ul>
            
            <h5 class="dose-condition-title">AIDS Hastalarında PJP (>13 Yaş, Endikasyon Dışı)</h5>
            <ul class="dose-details-list simple-list">
                <li>(Yetişkin dozuyla aynı)</li>
                <li><strong>Doz 1:</strong> 30 mg (IV) q12hr (5 gün), ardından</li>
                <li><strong>Doz 2:</strong> 30 mg (IV) q24hr (5 gün), ardından</li>
                <li><strong>Doz 3:</strong> 15 mg (IV) q24hr (11 gün).</li>
            </ul>
            
            <h5 class="dose-condition-title">Şiddetli Lupus Nefriti (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz (Pulse Terapi)</strong><ul><li><strong>Doz:</strong> 30 mg/kg (IV)</li><li><strong>Sıklık:</strong> Gün aşırı (toplam 6 doz).</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Dozlama Hususları (Formlara Göre)</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>Metilprednizolon (Oral):</strong> Olağan doz 0.117-1.66 mg/kg/gün (PO) q6-8hr bölünmüş.</li>
                <li><strong>Metilprednizolon Sodyum Süksinat (IM):</strong> Olağan doz 0.03-0.2 mg/kg (IM) q12-24hr.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Yaşlı hastalar kortikosteroidlerin yan etkilerine (örn. osteoporoz, hipertansiyon, sıvı retansiyonu, glukoz intoleransı) daha duyarlı olabilir.</li>
                <li>Mümkün olan en düşük etkili doz, en kısa süre için kullanılmalı ve hasta yakından izlenmelidir.</li>
            </ul>
        `
    }
},
{
    id: "deksametazonContainer",
    isim: "Deksametazon",
    piyasaIsimleri: [
        "Dekort 0.5 mg 20 Tablet",
        "Dekort 0.75 mg 20 Tablet",
        "Dekort 4 mg 20 Tablet",
        "Dekort 8 mg 20 Tablet",
        "Dekort Ampül 2 ml 8 mg",
        "Deksamet Ampül 8 mg/2 ml 100 Ampül",
        "Deksamet Ampül 8 mg 2 ml 1 Ampül",
        "Dexoject 8 mg/2 ml IM/IV 1 Ampül",
        "Gadexon 8 mg/2 ml 1 Ampül",
        "Infladox 8 mg/2 ml 1 Ampül",
        "Kordexa 4 mg 20 Tablet",
        "Kordexa 8 mg 20 Tablet",
        "Onadron Ampül 2 ml 8 mg 1 Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">İnflamasyon</h5>
            <ul class="dose-details-list">
                <li><strong>Sistemik</strong><ul><li><strong>Doz:</strong> 0.75-9 mg/gün (IV/IM/PO)</li><li><strong>Sıklık:</strong> q6-12hr bölünmüş.</li></ul></li>
                <li><strong>Lokal</strong><ul><li><strong>Doz:</strong> 0.2-6 mg/gün</li><li><strong>Uygulama:</strong> İntra-artiküler, intralezyonel veya yumuşak doku.</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Multipl Skleroz (MS) Akut Alevlenmesi</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 30 mg/gün (PO) (1 hafta), ardından 4-12 mg/gün (1 ay).</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Serebral Ödem</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 10 mg (IV) başlangıç, ardından 4 mg (IM)</li><li><strong>Sıklık:</strong> q6hr (iyileşme görülene kadar).</li><li><strong>Not:</strong> 2-4 gün sonra azaltılabilir ve 5-7 gün içinde kademeli olarak kesilebilir.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Şok</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 1-6 mg/kg (IV) tek doz VEYA 40 mg (IV)</li><li><strong>Sıklık:</strong> Gerekirse (PRN) q2-6hr.</li></ul></li>
                <li><strong>Alternatif</strong><ul><li><strong>Doz:</strong> 20 mg (IV) başlangıç, ardından 3 mg/kg/gün (sürekli IV infüzyon).</li></ul></li>
                <li><strong>Not:</strong> Yüksek doz tedavi 48-72 saati geçmemelidir.</li>
            </ul>

            <h5 class="dose-condition-title">Alerjik Durumlar (Doz Paketi)</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>Gün 1:</strong> 4-8 mg (IM).</li>
                <li><strong>Gün 2-3:</strong> 3 mg/gün (PO) (q12hr bölünmüş).</li>
                <li><strong>Gün 4:</strong> 1.5 mg/gün (PO) (q12hr bölünmüş).</li>
                <li><strong>Gün 5-6:</strong> 0.75 mg/gün (PO) (tek doz).</li>
                <li><strong>Gün 7:</strong> Tedavi yok.</li>
            </ul>
            
            <h5 class="dose-condition-title">Deksametazon Süpresyon Testi (Cushing Sendromu)</h5>
            <h6 class="dose-type-title">Düşük Doz Test (Tarama)</h6>
            <ul class="dose-details-list simple-list">
                <li><strong>Gece Testi:</strong> 1 mg (PO) 23:00-00:00 arası; ertesi sabah 08:00-09:00 arası kortizol testi.</li>
                <li><strong>2 Günlük Test:</strong> 0.5 mg (PO) q6hr (2 gün); son dozdan 6 saat sonra kortizol testi.</li>
            </ul>
            <h6 class="dose-type-title">Yüksek Doz Test (Ayırıcı Tanı)</h6>
            <ul class="dose-details-list simple-list">
                <li><strong>2 Günlük Test:</strong> 2 mg (PO) q6hr (2 gün).</li>
                <li><strong>Gece Testi:</strong> 8 mg (PO) 23:00-00:00 arası.</li>
            </ul>
            
            <h5 class="dose-condition-title">Multipl Miyelom (MM)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 20 veya 40 mg (PO)</li><li><strong>Sıklık:</strong> qDay (spesifik tedavi rejimine göre belirli günlerde).</li><li><strong>Not:</strong> Diğer antimiyelom ürünleri ile kombinasyon halinde kullanılır.</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">COVID-19 (Endikasyon Dışı - NIH Önerisi)</h5>
            <p>Sadece invaziv mekanik ventilasyon veya oksijen desteği alan hastanede yatan hastalarda.</p>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 6 mg (PO/IV)</li><li><strong>Sıklık:</strong> qDay (10 güne kadar veya taburculuğa kadar).</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Kemoterapiye Bağlı Bulantı/Kusma (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 8-12 mg (PO/IV) (kemoterapiden önce), ardından 8 mg (PO/IV) q24hr (sonraki 1-3 gün).</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Dağ Hastalığı (İrtifa) (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Profilaksi (Önleme)</strong><ul><li><strong>Doz:</strong> 2 mg (PO) q6hr VEYA 4 mg (PO) q12hr (tırmanış günü başlanır).</li></ul></li>
                <li><strong>Tedavi (AMS/HACE)</strong><ul><li><strong>Doz:</strong> 4 mg (PO/IV/IM) q6hr VEYA HACE için 8 mg başlangıç dozu.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Spinal Kord Kompresyonu (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 10-100 mg (IV) başlangıç, ardından 4-24 mg (IV) q6hr (radyoterapi sırasında), sonra azaltılır.</li></ul></li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Havayolu Ödemi</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 0.5-2 mg/kg/gün (PO/IV/IM)</li><li><strong>Sıklık:</strong> q6hr bölünmüş.</li><li><strong>Not:</strong> Ekstübasyondan 24 saat önce başlanır ve sonrasında 4-6 doz devam edilir.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Krup (Croup)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 0.6 mg/kg (PO/IV/IM) tek doz.</li><li><strong>Maksimum:</strong> 16 mg.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">İnflamasyon</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 0.08-0.3 mg/kg/gün (IV/PO/IM)</li><li><strong>Sıklık:</strong> q6hr veya q12hr bölünmüş.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Menenjit (>6 Hafta)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 0.6 mg/kg/gün (IV) (q6hr bölünmüş)</li><li><strong>Süre:</strong> Antibiyotik tedavisinin ilk 2-4 günü.</li><li><strong>Not:</strong> İlk antibiyotik dozundan 10-20 dk önce veya aynı anda başlanır.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Serebral Ödem (Beyin Tümörü ile İlişkili)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 1-2 mg/kg (IV/IM) tek doz.</li><li><strong>İdame:</strong> 1-1.5 mg/kg/gün (IV/IM) (q4-6hr bölünmüş).</li><li><strong>Maksimum:</strong> 16 mg/gün.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Prematüre Bebeklerde Solunum Sıkıntısı Sendromu (RDS) (Profilaksi)</h5>
            <p>(Endikasyon Dışı - Anneye Uygulanır)</p>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 4 mg (IM) (Anneye)</li><li><strong>Sıklık:</strong> Doğumdan 2 gün önce, 8 saatte bir.</li></ul></li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Yaşlı hastalar kortikosteroidlerin yan etkilerine (örn. osteoporoz, hipertansiyon, sıvı retansyonu, glukoz intoleransı) daha duyarlı olabilir.</li>
                <li>Mümkün olan en düşük etkili doz, en kısa süre için kullanılmalı ve hasta yakından izlenmelidir.</li>
            </ul>
        `
    }
},
{
    id: "diklofenakContainer",
    isim: "Diklofenak",
    piyasaIsimleri: [
        "Benseri 50 mg 30 Tablet",
        "Cataflam Ağrı Kesici 50 mg 20 Draje",
        "Clodifen 75 mg/3 ml 5 Ampül",
        "Clodifen 100 mg 10 Tablet",
        "Dicloflam Ağrı Kesici 50 mg 20 Tablet",
        "Diclogesic 50 mg 20 Tablet",
        "Diclomec 3 ml 75 mg 4 Ampül",
        "Diclomec 3 ml 75 mg 10 Ampül",
        "Diclomec SR 75 mg 10 Tablet",
        "Diclomec SR 100 mg 10 Tablet",
        "Dicloponac 50 mg 20 Tablet",
        "Difenak 100 mg 10 Tablet",
        "Difenak 100 mg 30 Tablet",
        "Difenject 75 mg / 3 ml IM 10 Ampül",
        "Diklojik 75 mg 3 ml 4 Ampül",
        "Diklojik 75 mg 3 ml 10 Ampül",
        "Dikloron 25 mg 30 Tablet",
        "Dikloron 50 mg 20 Tablet",
        "Dikloron 75 mg IM 4 Ampül (kas içine enjekte iğne)",
        "Dikloron 75 mg IM 10 Ampül (kas içine enjekte iğne)",
        "Dikloron 100 mg 10 Retard Tablet",
        "Dikloron SR 75 mg 10 Tablet",
        "Dolorex Ağrı Kesici 50 mg 20 Draje",
        "Fevere 25 mg/ml Oral Çözelti 50 ml",
        "Kalidren 50 mg 20 Tablet",
        "Miyadren 75 mg/3 ml 4 Ampül",
        "Miyadren 75 mg/3 ml 10 Ampül",
        "Miyadren Retard 100 mg 10 Tablet",
        "Rodinac 75 mg/3 ml IM 10 Ampül",
        "Turktıpsan Diklofenak Sodyum 75 mg/3 ml 10 Ampül",
        "Voltaren 25 mg 30 Tablet",
        "Voltaren 50 mg 20 Tablet",
        "Voltaren 100 mg 10 Supozituar",
        "Voltaren Fitil 100 mg 5 Supozituar",
        "Voltaren Retard 100 mg 10 Tablet",
        "Voltaren Retard 100 mg 30 Tablet",
        "Voltaren SR 75 mg 10 Tablet",
        "Voltaren SR 75 mg 20 Tablet"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Romatoid Artrit ve Osteoartrit</h5>
            <h6 class="dose-type-title">Diklofenak Potasyum</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 50 mg (PO)</li><li><strong>Sıklık:</strong> Her 8-12 saatte bir.</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Diklofenak Sodyum</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 50 mg (PO) her 8 saatte bir VEYA 75 mg (PO) her 12 saatte bir.</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Uzatılmış Salınım (Extended Release)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 100 mg (PO) günde bir kez.</li><li><strong>Artış:</strong> Günde iki kez 100 mg'a yükseltilebilir (q12hr).</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Ankilozan Spondilit</h5>
            <ul class="dose-details-list">
                <li><strong>Diklofenak Sodyum</strong><ul><li><strong>Doz:</strong> 25 mg (PO)</li><li><strong>Sıklık:</strong> Günde 4 veya 5 kez.</li></ul></li>
                <li><strong>Diklofenak Potasyum</strong><ul><li><strong>Doz:</strong> 50 mg (PO)</li><li><strong>Sıklık:</strong> Her 12 saatte bir.</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Akut Ağrı / Dismenore</h5>
            <h6 class="dose-type-title">Hemen Salınım (Immediate Release)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç & İdame</strong><ul><li><strong>Başlangıç:</strong> 100 mg (PO) tek doz.</li><li><strong>İdame:</strong> Gerekirse (PRN) her 8 saatte bir 50 mg (PO).</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Uzatılmış Salınım (Zipsor)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 25 mg (PO)</li><li><strong>Sıklık:</strong> Gerekirse (PRN) günde 4 kez (QID).</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Akut Migren</h5>
            <h6 class="dose-type-title">Cambia (Oral Solüsyon)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 50 mg (1 paket)</li><li><strong>Uygulama:</strong> 30-60 mL su içinde karıştırılıp hemen içilir.</li><li><strong>Not:</strong> Profilaksi için değildir.</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
            <h6 class="dose-type-title">Böbrek Yetmezliği</h6>
            <ul class="dose-details-list simple-list">
                <li>Böbrek yetmezliği olan hastalarda doz eğrileri ve eliminasyon oranları sağlıklı hastalarla karşılaştırılabilirdir.</li>
            </ul>
            <h6 class="dose-type-title">Karaciğer Yetmezliği</h6>
            <ul class="dose-details-list simple-list">
                <li>Eliminasyonun neredeyse tamamı hepatik metabolizma ile gerçekleşir.</li>
                <li>Dozaj önerilerini destekleyecek yeterli bilgi yoktur.</li>
                <li>En düşük dozla başlayın; etkinlik sağlanamazsa, alternatif bir ilaç kullanmayı düşünün.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Akut Ağrı (Zipsor)</h5>
            <h6 class="dose-type-title">≥ 12 Yaş (Uzatılmış Salınım)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 25 mg (PO)</li><li><strong>Sıklık:</strong> Gerekirse (PRN) günde 4 kez (QID).</li></ul></li>
            </ul>
            <h5 class="dose-condition-title">< 12 Yaş</h5>
            <ul class="dose-details-list simple-list">
                <li>Güvenlik ve etkinlik belirlenmemiştir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Yaşlı hastalar NSAİİ'lerin yan etkilerine (özellikle GI ve renal toksisite) daha duyarlı olabilir.</li>
                <li>En düşük etkili doz, en kısa süre için kullanılmalıdır.</li>
                <li>Karaciğer ve böbrek fonksiyonları yakından izlenmelidir.</li>
            </ul>
        `
    }
},
{
    id: "tiyokolşikozidContainer",
    isim: "Tiyokolşikozid",
    piyasaIsimleri: [
        "Adeleks 4 mg/ 2 ml IM 6 Ampül",
        "Adeleks 4 mg 20 Tablet",
        "Adeleks 8 mg 14 Tablet",
        "Colciospa 4 mg/2ml 6 Ampül",
        "Keyrelaks 4 mg/2 ml IM Ampül",
        "Maxthio 4 mg/2 ml IM 6 Ampül",
        "Muscal 4 mg/2 ml 6 Ampül",
        "Muscoflex 4 mg 20 Kapsül",
        "Muscoflex 8 mg 10 Kapsül",
        "Muscoflex Ampül 4 mg/2 ml IM 6 Ampül",
        "Muscomed 4 mg 20 Kapsül",
        "Muscomed 8 mg 10 Kapsül",
        "Muscoril 4 mg 2 ml 6 Ampül",
        "Muscoril 4 mg 20 Kapsül",
        "Muscoril 8 mg 10 Kapsül",
        "Muscoril Merhem",
        "Musfixa 4 mg/2 ml 6 Ampül",
        "Musfixa 4 mg 20 Kapsül",
        "Musfixa 8 mg 20 Kapsül",
        "Recoside 4 mg/2 ml IM 6 Ampül",
        "Redemus 4 mg/2 ml 6 Ampül",
        "Thiospa 4 mg/2 ml 6 Ampül",
        "Thiospa 4 mg 20 Tablet",
        "Thiospa 8 mg 14 Tablet",
        "Tiorelax 8 mg 14 Tablet",
        "Tiyozid 4 mg/2 ml 6 Ampül",
        "Tiyozid 4 mg 20 Tablet",
        "Tiyozid 8 mg 10 Tablet",
        "Tyoflex 4 mg/2 ml 6 Ampül",
        "Tyoflex 4 mg 20 Kapsül",
        "Tyoflex Fort 8 mg 10 Kapsül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Kas Spazmları</h5>
            <h6 class="dose-type-title">Intramüsküler (IM)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> Günde 8 mg'a kadar.</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> Başlangıçta günde 16 mg.</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Yan Etkiler</h5>
            <ul class="dose-details-list simple-list">
                <li>Fotosensitivite (ışığa duyarlılık) reaksiyonları.</li>
            </ul>
            <h5 class="dose-condition-title">Dozlama Hususları</h5>
            <ul class="dose-details-list simple-list">
                <li>Tiyokolşikozid genotoksik potansiyeli nedeniyle mümkün olan en kısa süre kullanılmalıdır.</li>
                <li>Maksimum tedavi süresi 7 gün, maksimum oral doz günde 8 mg'dır. (Ürün bilgilerine göre değişebilir.)</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Pediatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Güvenlik ve etkinlik verilerinin yetersiz olması ve genotoksik risk potansiyeli nedeniyle 16 yaş altı çocuklarda kullanılması önerilmez.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Yaşlılarda standart yetişkin dozu kullanılır, ancak genotoksik potansiyel ve böbrek/karaciğer fonksiyonlarındaki azalma nedeniyle dikkatli olunmalıdır.</li>
                <li>Doz, günde 8 mg ile sınırlandırılmalı ve tedavi süresi kısa tutulmalıdır.</li>
            </ul>
        `
    }
},
{
    id: "metamizolContainer",
    isim: "Metamizol (Dipiron)",
    piyasaIsimleri: [
        "Adepiron Ampül 1 g/2 ml 10 Ampül",
        "Adepiron Tablet 500 mg 20 Tablet",
        "Andolor 500 mg 20 Tablet",
        "Andolor Ampül 2 ml 1 g",
        "Devaljin Ampül 1 g/2 ml 10 Ampül",
        "Geralgine-M 1000 mg/2 ml 10 Ampül",
        "Novalgin 500 mg 20 Tablet",
        "Novalgin Ampül 2 ml 10 Ampül",
        "Novalgin Damla %5 10 ml",
        "Novalgin Şurup %5 100 ml",
        "Novamizol 100 mg/2 ml 10 Ampül",
        "Novoplan 2 ml 1 g 10 Ampül",
        "Novopyrine 1 g/2 ml 10 Ampül",
        "Onpyron 1g/2 ml 10 Ampül",
        "Sedoral 1 g/2 ml 10 Ampül",
        "Turktıpsan Metamizol Sodyum 10 Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Genel Ağrı ve Ateş (15 Yaş ve Üzeri)</h5>
            <h6 class="dose-type-title">Oral (Ağızdan)</h6>
            <ul class="dose-details-list">
                <li><strong>Tipik Doz</strong><ul><li><strong>Doz:</strong> 500 mg – 1000 mg</li><li><strong>Sıklık:</strong> Günde 2 ila 3 kez.</li></ul></li>
                <li><strong>Maksimum Günlük Doz (EMA Önerisi)</strong><ul><li><strong>Tek Doz:</strong> 1000 mg</li><li><strong>Maksimum:</strong> Günde 4 defaya kadar (Maksimum günlük doz: 4000 mg).</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Parenteral (IV/IM/Rektal)</h6>
            <ul class="dose-details-list">
                <li><strong>Maksimum Günlük Doz (EMA Önerisi)</strong><ul><li><strong>Doz:</strong> Toplam günlük doz 5000 mg'ı (5 g) aşmamalıdır.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Dozlama Hususları</h5>
            <ul class="dose-details-list simple-list">
                <li>Metamizol, agranülositoz riski nedeniyle bazı ülkelerde kısıtlanmıştır veya yasaklanmıştır. Kullanım endikasyonları dikkatle değerlendirilmelidir.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Pediatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Dozaj, çocuğun yaşına ve kilosuna göre ayarlanmalıdır. </li>
                <li>Tipik olarak 15 yaş altı çocuklar için şurup veya damla formları kullanılır.</li>
                <li>Genel olarak 8-16 mg/kg/doz tavsiye edilir, ancak spesifik ürün kılavuzlarına veya hekim önerisine kesinlikle uyulmalıdır.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Metamizolün eliminasyonu yavaşlayabileceğinden, yaşlı hastalarda en düşük etkili dozun kullanılması ve dozlar arasında daha uzun aralık bırakılması önerilir.</li>
                <li>Böbrek/karaciğer fonksiyonları dikkatle izlenmelidir.</li>
            </ul>
        `
    }
},
{
    id: "sefaklorContainer",
    isim: "Sefaklor",
    piyasaIsimleri: [
        "Cec 250 mg 20 Efervesan Tablet",
        "Cec 500 mg 20 Efervesan Tablet",
        "Cec 1000 mg 20 Efervesan Tablet",
        "Cefec 500 mg 20 Efervesan Tablet",
        "Cefec 1000 mg 20 Efervesan Tablet",
        "Sanocef 750 mg 10 MR Tablet",
        "Sefklav 1000/125 mg 20 Efervesan Tablet"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Alt Solunum Yolu Enfeksiyonları, Otitis Media, Komplike Olmayan Cilt Enfeksiyonları, İYE</h5>
            <h6 class="dose-type-title">Kapsül (Hemen Salınım)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 250-500 mg (PO)</li><li><strong>Sıklık:</strong> Her 8 saatte bir (q8hr).</li><li><strong>Not:</strong> Beta-hemolitik streptokok enfeksiyonlarında tedavi süresi en az 10 gün olmalıdır.</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Komplike Olmayan Cilt Enfeksiyonları</h5>
            <h6 class="dose-type-title">Uzatılmış Salınım (ER)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 375 mg (PO)</li><li><strong>Sıklık:</strong> Her 12 saatte bir (q12hr) (7-10 gün).</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Bronşit Akut Bakteriyel Alevlenmesi</h5>
            <h6 class="dose-type-title">Uzatılmış Salınım (ER)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 500 mg (PO)</li><li><strong>Sıklık:</strong> Her 12 saatte bir (q12hr) (7 gün).</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Farenjit ve Tonsillit</h5>
            <h6 class="dose-type-title">Uzatılmış Salınım (ER)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 750 mg (PO)</li><li><strong>Sıklık:</strong> Her 12 saatte bir (q12hr) (10 gün).</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Dozlama Hususları ve Eşdeğerlik</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>Böbrek/Karaciğer Yetmezliği:</strong> Doz ayarlaması belirtilmemiştir.</li>
                <li><strong>Eşdeğerlik Notu:</strong> 500 mg ER (q12hr) formu, 250 mg Kapsül (q8hr) formuna eşdeğerdir. ANCAK, 500 mg ER (günde iki kez) formu, 500 mg Kapsül (q8hr) formuna EŞDEĞER DEĞİLDİR.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Alt Solunum Yolu Enf., Otitis Media, Cilt Enf., Farenjit/Tonsillit</h5>
            <h6 class="dose-type-title">Kapsül ve Süspansiyon (>1 Ay)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 20-40 mg/kg/gün (PO)</li><li><strong>Sıklık:</strong> q8hr (veya q8-12hr) bölünmüş.</li><li><strong>Maksimum:</strong> Günde 1 g'ı aşmamalı.</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Uzatılmış Salınım Formları (≥16 Yaş)</h5>
            <p>(Dozaj yetişkin dozlarıyla aynıdır)</p>
            <ul class="dose-details-list">
                <li><strong>Cilt Enfeksiyonları:</strong> 375 mg (PO) q12hr (7-10 gün).</li>
                <li><strong>Bronşit:</strong> 500 mg (PO) q12hr (7 gün).</li>
                <li><strong>Farenjit/Tonsillit:</strong> 750 mg (PO) q12hr (10 gün).</li>
            </ul>
            <h5 class="dose-condition-title">< 1 Ay</h5>
            <ul class="dose-details-list simple-list">
                <li>Güvenlik ve etkinlik belirlenmemiştir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Genel olarak yetişkin dozları kullanılır.</li>
                <li>Böbrek ve karaciğer fonksiyonları yakından izlenmelidir.</li>
            </ul>
        `
    }
},
{
    id: "metoprololContainer",
    isim: "Metoprolol",
    piyasaIsimleri: [
        "Beloc 5 mg 1 Ampül",
        "Beloc Durules 200 mg 20 Tablet",
        "Beloc ZOK 25 mg 20 Tablet",
        "Beloc ZOK 50 mg 20 Tablet",
        "Beloc ZOK 100 mg 20 Tablet",
        "Betablok SDK 25 mg 20 Tablet",
        "Betablok SDK 50 mg 20 Tablet",
        "Betablok SDK 50 mg 30 Tablet",
        "Betablok SDK 100 mg 20 Tablet",
        "Cardovol 5 mg/5 ml 10 Ampül",
        "Mepolex 5 mg/5 ml IV 1 Ampül",
        "Metloc 5 mg/5 ml 1 Ampül",
        "Mevopal 50 mg 20 Tablet",
        "Normolol 5 mg/5 ml IV 1 Ampül",
        "Problok 50 mg 20 Tablet",
        "Problok 100 mg 20 Tablet",
        "Saneloc 25 mg Kontrollu Salımlı 20 Tablet",
        "Saneloc 25 mg Kontrollu Salımlı 30 Tablet",
        "Saneloc 50 mg 20 Tablet",
        "Saneloc 50 mg 30 Tablet",
        "Saneloc 50 mg Değiştirilmiş Salımlı 20 Tablet",
        "Saneloc 50 mg Değiştirilmiş Salımlı 30 Tablet",
        "Saneloc 100 mg 20 Tablet",
        "Saneloc 100 mg Değiştirilmiş Salımlı 20 Tablet",
        "Saneloc 200 mg 20 Tablet",
        "Saneloc 200 mg 30 Tablet",
        "Tanelor 50 mg 20 Tablet"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Hipertansiyon</h5>
            <h6 class="dose-type-title">Hemen Salınım (Lopressor)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> Başlangıç 100 mg/gün (PO) (Tek doz veya q12hr bölünmüş)</li><li><strong>Maksimum:</strong> 450 mg/gün'ü aşmamalı.</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Uzatılmış Salınım (Toprol XL, Kapspargo)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> Başlangıç 25-100 mg (PO) (Günde tek doz)</li><li><strong>Maksimum:</strong> 400 mg/gün'ü aşmamalı.</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Akut Miyokard Enfarktüsü (MI)</h5>
            <h6 class="dose-type-title">Erken Tedavi (IV)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 5 mg (hızlı IV)</li><li><strong>Sıklık:</strong> Her 2 dakikada bir (3 doza kadar).</li><li><strong>Not:</strong> Ardından oral idameye geçilir.</li></ul></li>
            </ul>
            <h6 class="dose-type-title">İdame (PO - 48 Saat)</h6>
            <ul class="dose-details-list">
                <li><strong>Tam IV Dozu Tolere Eden Hasta:</strong> 50 mg (PO) q6hr.</li>
                <li><strong>IV Dozu Tolere Edemeyen Hasta:</strong> 25 mg (PO) q6hr.</li>
            </ul>

            <h5 class="dose-condition-title">Konjestif Kalp Yetmezliği (ER Formları)</h5>
            <ul class="dose-details-list">
                <li><strong>Başlangıç Dozu</strong><ul><li><strong>Doz:</strong> 25 mg (PO) (Günde bir kez) (2 hafta).</li><li><strong>NYHA Sınıf ≥II:</strong> 12.5 mg/gün ile başlayın.</li></ul></li>
                <li><strong>Titrasyon</strong><ul><li><strong>Sıklık:</strong> Her 2 haftada bir doz iki katına çıkarılır.</li><li><strong>Hedef:</strong> Tolere edilen en yüksek doz veya 200 mg/gün.</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Anjina</h5>
            <h6 class="dose-type-title">Hemen Salınım (Lopressor)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> Başlangıç 100 mg/gün (PO) (q12hr bölünmüş)</li><li><strong>Maksimum:</strong> 400 mg/gün.</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Uzatılmış Salınım (Toprol XL, Kapspargo)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> Başlangıç 100 mg/gün (PO) (Günde tek doz)</li><li><strong>Maksimum:</strong> 400 mg/gün.</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Akut Taşiaritmi / Atriyal Fibrilasyon (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>IV Doz</strong><ul><li><strong>Doz:</strong> 2.5-5 mg (IV) (1-2 dk üzerinde)</li><li><strong>Sıklık:</strong> Her 5 dakikada bir.</li><li><strong>Maksimum:</strong> 10-15 dakikada 15 mg'ı aşmamalı.</li></ul></li>
                <li><strong>İdame (PO)</strong><ul><li><strong>Doz:</strong> 25-100 mg (PO) q12hr.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Dozaj Modifikasyonları ve Hususlar</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>Böbrek Yetmezliği:</strong> Doz ayarlaması gerekmez.</li>
                <li><strong>Karaciğer Yetmezliği:</strong> İlaç öncelikle karaciğerde metabolize edildiğinden, eliminasyon yarı ömrü uzayabilir (7.2 saate kadar). Şiddete bağlı olarak doz ayarlaması düşünülmelidir.</li>
                <li><strong>Tedavinin Kesilmesi:</strong> Tedavi kesilecekse, doz 1-2 hafta içinde kademeli olarak azaltılmalıdır.</li>
                <li><strong>Oral/IV Geçiş Oranı:</strong> Eşdeğer beta-bloke edici etki, 2.5:1 (oral-IV) oranında elde edilir.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Hipertansiyon</h5>
            <h6 class="dose-type-title">Hemen Salınım (Lopressor)</h6>
            <ul class="dose-details-list">
                <li><strong>Yaş:</strong> 1-17 yaş.</li>
                <li><strong>Doz:</strong> 1-2 mg/kg/gün (PO) (GİBİ bölünmüş).</li>
                <li><strong>Maksimum:</strong> 6 mg/kg/gün VEYA ≤200 mg/gün.</li>
            </ul>
            <h6 class="dose-type-title">Uzatılmış Salınım (Toprol XL, Kapspargo)</h6>
            <ul class="dose-details-list">
                <li><strong>Yaş:</strong> ≥6 yaş.</li>
                <li><strong>Doz:</strong> Başlangıç 1 mg/kg (PO) (Günde bir kez).</li>
                <li><strong>Maksimum:</strong> 50 mg/gün (başlangıç). Ayarlama sonrası 2 mg/kg/gün VEYA ≤200 mg/gün.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz ve Hususlar</h5>
            <ul class="dose-details-list simple-list">
                <li>Genellikle dozaj değişiklikleri için spesifik bir kılavuz olmasa da, MI tedavisinde zayıf veya kronik hastalığı olan yaşlılar için başlangıç dozları daha düşük olabilir (Bkz. Yetişkin MI İdame Dozu).</li>
                <li>Hafif Karaciğer Yetmezliği bile eliminasyon yarı ömrünü uzatabileceğinden, yaşlı hastalarda hepatik fonksiyon yakından izlenmelidir.</li>
                <li>Semptomatik bradikardi riskine karşı doz dikkatle titre edilmelidir.</li>
            </ul>
        `
    }
},
{
    id: "diltiazemContainer",
    isim: "Diltiazem HCL",
    piyasaIsimleri: [
        "Diltizem 25 mg 1 Flakon",
        "Diltizem 30 mg 48 Tablet",
        "Diltizem 60 mg 48 Tablet",
        "Diltizem SR 90 mg 48 Tablet",
        "Diltizem SR 120 mg 48 Tablet"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Anjina</h5>
            <h6 class="dose-type-title">Konvansiyonel (Hemen Salınım)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 30 mg (PO)</li><li><strong>Sıklık:</strong> Her 6 saatte bir (q6hr).</li><li><strong>Titrasyon:</strong> Her 1 veya 2 günde bir artırılır (Genellikle 180-360 mg/gün, q6-8hr bölünmüş).</li><li><strong>Maksimum:</strong> 360 mg/gün.</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Uzatılmış Salınım (CD, XT, XR, LA Formları)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç</strong><ul><li><strong>Doz:</strong> 120-180 mg/gün (PO).</li><li><strong>Titrasyon:</strong> 7-14 gün sonra titre edilir.</li><li><strong>İdame Aralığı:</strong> Genellikle 120-320 mg/gün.</li><li><strong>Maksimum:</strong> Forma göre 360 mg/gün ile 540 mg/gün arasında değişir.</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Hipertansiyon</h5>
            <h6 class="dose-type-title">Uzatılmış Salınım (Günde Tek Doz)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç</strong><ul><li><strong>Doz:</strong> 180-240 mg/gün (PO).</li><li><strong>Titrasyon:</strong> 14 gün sonra titre edilir.</li><li><strong>İdame Aralığı:</strong> Genellikle 180-420 mg/gün (LA formu 120-540 mg/gün).</li><li><strong>Maksimum:</strong> Forma göre 480 mg/gün ile 540 mg/gün arasında değişir.</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Uzatılmış Salınım (Günde İki Kez)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 60-120 mg (PO)</li><li><strong>Sıklık:</strong> Her 12 saatte bir (q12hr).</li><li><strong>İdame Aralığı:</strong> Genellikle 240-360 mg/gün.</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Paroksismal Supraventriküler Taşikardi (PSVT) / Atriyal Fibrilasyon/Flutter</h5>
            <h6 class="dose-type-type">IV Bolus</h6>
            <ul class="dose-details-list">
                <li><strong>İlk Bolus</strong><ul><li><strong>Doz:</strong> 0.25 mg/kg (Ortalama yetişkin dozu: 20 mg)</li><li><strong>Uygulama:</strong> 2 dakika üzerinde direkt IV.</li></ul></li>
                <li><strong>İkinci Bolus (Gerekirse)</strong><ul><li><strong>Doz:</strong> 0.35 mg/kg (Ortalama yetişkin dozu: 25 mg)</li><li><strong>Sıklık:</strong> İlk dozdan 15 dakika sonra.</li></ul></li>
            </ul>
            <h6 class="dose-type-type">Sürekli İnfüzyon</h6>
            <ul class="dose-details-list">
                <li><strong>İdame</strong><ul><li><strong>Doz:</strong> Başlangıçta 10 mg/saat (IV).</li><li><strong>Titrasyon:</strong> 24 saate kadar 15 mg/saat'e kadar artırılabilir.</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
            <h6 class="dose-type-title">Böbrek & Karaciğer Yetmezliği</h6>
            <ul class="dose-details-list simple-list">
                <li>Dikkatli kullanın; yeterli çalışma yapılmamıştır.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Hipertansiyon (Endikasyon Dışı)</h5>
            <h6 class="dose-type-title">Oral (Hemen Salınım)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 1.5-2 mg/kg/gün (PO)</li><li><strong>Sıklık:</strong> q8hr bölünmüş.</li><li><strong>Maksimum:</strong> 6 mg/kg/gün VEYA 360 mg/gün.</li></ul></li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Metabolizma yavaşlayabileceği için doz titrasyonu daha yavaş yapılmalı ve en düşük etkili doz hedeflenmelidir.</li>
                <li>Hipotansiyon ve bradikardi riskine karşı yakından izlenmelidir.</li>
            </ul>
        `
    }
},
{
    id: "verapamilContainer",
    isim: "Verapamil",
    piyasaIsimleri: [
        "İsoptin 40 mg 30 Tablet",
        "İsoptin 80 mg 50 Tablet",
        "İsoptin KKH 120 mg 50 Tablet",
        "İsoptin SR 240 mg 50 Tablet"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Anjina</h5>
            <h6 class="dose-type-title">Hemen Salınım (Immediate Release)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç & İdame</strong><ul><li><strong>Başlangıç:</strong> 80 mg (PO) her 8 saatte bir (q8hr).</li><li><strong>İdame Aralığı:</strong> Genellikle 80-120 mg (PO) q8hr.</li><li><strong>Maksimum:</strong> 480 mg/gün.</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Uzatılmış Salınım (Extended Release - ER)</h6>
            <ul class="dose-details-list">
                <li><strong>Covera-HS:</strong> Başlangıç 180 mg/gün (PO) yatarken; idame 180-540 mg/gün.</li>
                <li><strong>Diğer ER Formları:</strong> Başlangıç 180 mg/gün (PO) sabahları (küçük/yaşlı hastada 120 mg); maksimum 480 mg/gün'e kadar titre edilebilir.</li>
            </ul>

            <h5 class="dose-condition-title">Hipertansiyon</h5>
            <h6 class="dose-type-title">Hemen Salınım</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Başlangıç:</strong> 80 mg (PO) q8hr.</li><li><strong>İdame:</strong> 80-320 mg (PO) q12hr.</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Uzatılmış Salınım (ER)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Başlangıç:</strong> 180 mg/gün (PO) sabahları (küçük/yaşlı hastada 120 mg).</li>
                <li><strong>Titrasyon:</strong> İstenen yanıta göre haftalık aralıklarla artırılır.</li>
                <li><strong>Verelan PM:</strong> Başlangıç 200 mg/gün (PO) yatarken (küçük/yaşlı hastada 100 mg); maksimum 400 mg/gün.</li>
                <li><strong>Maksimum (Genel):</strong> 480 mg/gün (Verelan için).</li>
            </ul>

            <h5 class="dose-condition-title">Supraventriküler Aritmi & Atriyal Fibrilasyon/Flutter</h5>
            <h6 class="dose-type-title">IV Bolus</h6>
            <ul class="dose-details-list">
                <li><strong>İlk Doz:</strong> 2.5-5 mg (IV) (2 dakika üzerinde).</li>
                <li><strong>İkinci Doz (Gerekirse):</strong> 5-10 mg (IV) (İlk dozdan 15-30 dakika sonra tekrarlanabilir).</li>
                <li><strong>VEYA:</strong> 0.075-0.15 mg/kg (Max 10 mg) (IV) (2 dakika üzerinde).</li>
            </ul>

            <h5 class="dose-condition-title">Kronik Atriyal Fibrilasyon & PSVT Önlenmesi</h5>
            <h6 class="dose-type-title">Hemen Salınım (Oral)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 240-480 mg/gün (PO) q6-8hr bölünmüş.</li>
            </ul>

            <h5 class="dose-condition-title">Migren Profilaksisi (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 160-320 mg (PO) q6-8hr.</li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
            <h6 class="dose-type-title">Böbrek Yetmezliği</h6>
            <ul class="dose-details-list simple-list">
                <li>Dikkatli kullanın; EKG'yi izleyin.</li>
                <li><strong>Verelan PM (Özel Not):</strong> CrCl <10 mL/dk ise dozu %25-50 azaltın.</li>
            </ul>
            <h6 class="dose-type-title">Karaciğer Yetmezliği (Siroz)</h6>
            <ul class="dose-details-list simple-list">
                <li>Oral ve IV uygulamada normal dozun %20-50'sine kadar azaltın.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Supraventriküler Taşikardi (SVT)</h5>
            <h6 class="dose-type-title">IV Doz (1-15 Yaş)</h6>
            <ul class="dose-details-list">
                <li><strong>İlk Doz:</strong> 0.1-0.3 mg/kg (Max 5 mg) (IV) (2 dakika üzerinde).</li>
                <li><strong>İkinci Doz:</strong> 30 dakika sonra (Max 10 mg) verilebilir.</li>
            </ul>
            <h6 class="dose-type-title">Oral Doz (İyi Çalışılmamıştır)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 4-8 mg/kg/gün (PO) q8hr bölünmüş.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Yaşlı hastalar ve küçük yapılı hastalar için başlangıç dozları genellikle daha düşüktür (Örn: ER formlarında başlangıç 120 mg/gün).</li>
                <li>Karaciğer ve böbrek fonksiyonları yakından izlenmeli, doz yavaşça titre edilmelidir.</li>
            </ul>
        `
    }
},
{
    id: "adenozinContainer",
    isim: "Adenozin",
    piyasaIsimleri: [
        "Adenosin L.M. 5 mg/ml 2 ml 10 Flakon",
        "Adozin 3 mg/ ml 2 ml 1 Ampül",
        "Adozin 10 mg/2 ml 2 ml 10 Ampül",
        "Adozin 50 mg/10 ml 10 Flakon",
        "Adozin 250 mg/50 ml 10 Flakon"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Paroksismal Supraventriküler Taşikardi (PSVT)</h5>
            <p>Aksesuar bypass yollarıyla (Wolff-Parkinson-White Sendromu) ilişkili PSVT'nin sinüs ritmine çevrilmesi için endikedir.</p>
            <h6 class="dose-type-title">IV/IO Bolus (Adenocard)</h6>
            <ul class="dose-details-list">
                <li><strong>İlk Doz</strong><ul><li><strong>Doz:</strong> 6 mg (IVP/IO) (1-3 saniye üzerinde)</li><li><strong>Uygulama:</strong> Ardından hızla 20 mL SF ile flaşlama yapılır.</li></ul></li>
                <li><strong>İkinci Doz (Gerekirse)</strong><ul><li><strong>Doz:</strong> 12 mg (IVP)</li><li><strong>Sıklık:</strong> İlk dozdan sonra 1-2 dakika içinde dönüşüm olmazsa.</li></ul></li>
                <li><strong>Üçüncü Doz (Gerekirse)</strong><ul><li><strong>Doz:</strong> 12 mg (IVP) (Toplam 30 mg'a kadar).</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Stres Testi (Tanısal)</h5>
            <p>Yeterince egzersiz yapamayan hastalarda talyum-201 miyokard perfüzyon sintigrafisine yardımcı olarak endikedir.</p>
            <h6 class="dose-type-title">IV İnfüzyon (Adenoscan)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 140 mcg/kg/dakika (IV infüzyon)</li><li><strong>Süre:</strong> 6 dakika boyunca.</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Dozlama Hususları</h5>
            <ul class="dose-details-list simple-list">
                <li>PSVT için klinik olarak uygun olduğunda, adenozin uygulamasından önce uygun vagal manevralar (örn. Valsalva manevrası) denenmelidir.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Paroksismal Supraventriküler Taşikardi (PSVT) (ACLS'ye Göre)</h5>
            <h6 class="dose-type-title">IV/IO Bolus (<50 kg)</h6>
            <ul class="dose-details-list">
                <li><strong>İlk Doz</strong><ul><li><strong>Doz:</strong> 0.05 - 0.1 mg/kg (hızlı IVP/IO) (1-3 saniye üzerinde)</li><li><strong>Maksimum:</strong> 0.3 mg/kg/doz.</li><li><strong>Uygulama:</strong> Ardından hızla >5 mL %0.9 NaCl ile flaşlama yapılır.</li></ul></li>
                <li><strong>İkinci Doz (Gerekirse)</strong><ul><li><strong>Doz:</strong> 0.2 mg/kg (IVP/IO)</li><li><strong>Maksimum Kümülatif:</strong> 12 mg'ı aşmamalıdır.</li></ul></li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz ve Hususlar</h5>
            <ul class="dose-details-list simple-list">
                <li>Yaşlı hastalar adenozinin yan etkilerini daha fazla deneyimleyebilir ve daha hassas olabilirler.</li>
                <li><strong>PSVT (Adenocard):</strong> Yetişkin dozuyla aynıdır (6 mg IVP, ardından gerekirse 12 mg IVP).</li>
                <li><strong>Stres Testi (Adenoscan):</strong> Yetişkin dozuyla aynıdır (140 mcg/kg/dakika IV infüzyon, 6 dakika).</li>
            </ul>
        `
    }
},
{
    id: "furosemidContainer",
    isim: "Furosemid",
    piyasaIsimleri: [
        "Desal 40 mg 12 Tablet",
        "Desal 40 mg 50 Tablet",
        "Furoject 20 mg/2 ml 5 Ampül",
        "Furomid Ampül 20 mg 5 Adet",
        "Furoson 20 mg/2 ml 5 Ampül",
        "Furotab 40 mg 50 Tablet",
        "Lasix 40 mg 12 Tablet",
        "Lasix Ampül 20 mg/2 ml 5 Adet",
        "Lizik 40 mg 50 Tablet",
        "Medisal 20 mg/2 ml 5 Ampül",
        "TTS Furosemid 20 mg/2 ml 5 Ampül",
        "Uradex 20 mg/2 ml IM/IV 5 Ampül",
        "Urever 20 mg 5 Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Ödem (KKY, Siroz, Renal Hastalık)</h5>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> Başlangıç 20-80 mg (PO) günde bir kez.</li><li><strong>Titrasyon:</strong> Her 6-8 saatte bir 20-40 mg artırılabilir.</li><li><strong>Maksimum:</strong> 600 mg/gün.</li></ul></li>
            </ul>
            <h6 class="dose-type-title">IV/IM</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> Başlangıç 20-40 mg (IV/IM) tek doz.</li><li><strong>Titrasyon:</strong> Her 2 saatte bir 20 mg artırılabilir.</li><li><strong>Maksimum:</strong> Bireysel doz 200 mg'ı aşmamalıdır.</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Subkutan (SC) Oto-infüzör (Furoscix / Lasix ONYU)</h6>
            <ul class="dose-details-list">
                <li><strong>Toplam Doz:</strong> 80 mg SC (5 saat üzerinde).</li>
                <li><strong>Uygulama:</strong> İlk saat 30 mg, sonraki 4 saat boyunca saatte 12.5 mg.</li>
                <li><strong>Not:</strong> Acil durumlar veya akut pulmoner ödem için değildir; kronik kullanım için değil.</li>
            </ul>
            
            <h5 class="dose-condition-title">Akut Pulmoner Ödem / Hipertansif Kriz / Artmış KİBAS</h5>
            <h6 class="dose-type-title">IV</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 0.5-1 mg/kg (veya 40 mg) (IV) (1-2 dakika üzerinde).</li><li><strong>Tekrar:</strong> 1 saat içinde yeterli yanıt alınamazsa 80 mg'a çıkarılabilir.</li><li><strong>Maksimum:</strong> 160-200 mg/doz.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">ACLS (İleri Kardiyak Yaşam Desteği)</h5>
            <ul class="dose-details-list">
                <li><strong>Hiperkalemi:</strong> 40-80 mg (IV).</li>
                <li><strong>Hipermagnezemi:</strong> Gerekirse (PRN) her 3-4 saatte bir 20-40 mg (IV).</li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
            <h6 class="dose-type-title">Akut Böbrek Yetmezliği</h6>
            <ul class="dose-details-list simple-list">
                <li>İstenen yanıtı almak için 1-3 g/gün gerekebilir. Oligürik durumlarda kullanımdan kaçının.</li>
            </ul>
            <h6 class="dose-type-title">Karaciğer Yetmezliği</h6>
            <ul class="dose-details-list simple-list">
                <li>Özellikle yüksek dozlarda dikkatle izleyin.</li>
            </ul>
            
            <h5 class="dose-condition-title">Dozlama Hususları</h5>
            <ul class="dose-details-list simple-list">
                <li>Tiazidlere dirençli sıvı retansiyonu veya bozulmuş böbrek fonksiyonu için kullanılır.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Ödem</h5>
            <h6 class="dose-type-title">Bebekler ve Çocuklar</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç Dozu:</strong> 1-2 mg/kg (IV/IM/PO) tek doz.</li>
                <li><strong>Titrasyon:</strong> Her 6-8 saatte bir (PO) veya her 2 saatte bir (IV/IM) 1-2 mg/kg artırılır.</li>
                <li><strong>Maksimum:</strong> Bireysel doz 6 mg/kg'ı aşmamalıdır.</li>
            </ul>
            <h6 class="dose-type-type">Neonatlar (<28 gün)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 0.5-1 mg/kg (IV/IM)</li>
                <li><strong>Sıklık:</strong> Her 8-24 saatte bir.</li>
                <li><strong>Maksimum:</strong> Bireysel doz 2 mg/kg'ı aşmamalıdır.</li>
            </ul>
            
            <h5 class="dose-condition-title">Dirençli Hipertansiyon (1-17 Yaş)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 0.5-2 mg/kg (PO) q24hr veya q12hr.</li>
                <li><strong>Maksimum:</strong> Bireysel doz 6 mg/kg/doz'u aşmamalıdır.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>Başlangıç:</strong> 20 mg/gün (PO/IV/IM). Daha yavaş ayarlamalar için 10 mg/gün (PO) önerilir.</li>
                <li>Aşırı diürez, yaşlılarda dehidratasyona ve elektrolit kaybına neden olabilir.</li>
                <li>BUN artışı ve sodyum kaybı kafa karışıklığına neden olabilir; böbrek fonksiyonu ve elektrolitleri izleyin.</li>
            </ul>
        `
    }
},
{
    id: "gliserilTrinitratContainer",
    isim: "Gliseril Trinitrat (GTN / Nitrogliserin) IV",
    piyasaIsimleri: [
        "Nitroderm TTS 5 5 Flaster",
        "Nitroderm TTS 5 30 Flaster",
        "Nitroderm TTS 10 5 Flaster",
        "Nitroderm TTS 10 30 Flaster",
        "Nitrolingual Pump Sprey 0.4 mg",
        "Perlinganit 10 mg 10 Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Anjina (IV İnfüzyon)</h5>
            <p>Dil altı (SL) Nitrogliserin'e karşı hoşgörüsüz veya yanıt vermeyen hastalarda.</p>
            <h6 class="dose-type-title">Doz Titrasyonu</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç:</strong> 5 mcg/dakika.</li>
                <li><strong>Artış 1:</strong> Her 3-5 dakikada bir 5 mcg/dakika artırılır (20 mcg/dakika'ya kadar).</li>
                <li><strong>Artış 2:</strong> Ardından 10 mcg/dakika artırılır.</li>
                <li><strong>Artış 3:</strong> Daha sonra 20 mcg/dakika artırılabilir.</li>
            </ul>
            
            <h5 class="dose-condition-title">Diğer Endikasyonlar & Kullanımlar</h5>
            <ul class="dose-details-list simple-list">
                <li>Anjina pektoris, perioperatif hipertansiyon (HTN), MI sonrası KKY, intraoperatif hipotansiyon indüksiyonu.</li>
                <li><strong>Endikasyon Dışı:</strong> Hipertansif kriz, varis kanamaları (vazopressin ile), sempatomimetik kaynaklı kardiyopulmoner toksisiteler.</li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları (Böbrek Yetmezliği)</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>CrCl 10-50 mL/dk:</strong> Her 24-72 saatte bir uygulayın.</li>
                <li><strong>CrCl <10 mL/dk:</strong> Her 72-96 saatte bir uygulayın.</li>
            </ul>
            
            <h5 class="dose-condition-title">Dozlama Hususları</h5>
            <ul class="dose-details-list simple-list">
                <li>24 saatten uzun süren kesintisiz infüzyon tolerans (ilaç etkinliğinde azalma) oluşturur.</li>
                <li>PVC (polivinil klorür) uygulama setleri, ilacın tutulması nedeniyle daha yüksek dozlar gerektirebilir.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Konjestif Kalp Yetmezliği (Endikasyon Dışı)</h5>
            <h6 class="dose-type-title">IV İnfüzyon</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç:</strong> 0.25-0.5 mcg/kg/dakika.</li>
                <li><strong>Titrasyon:</strong> Gerekirse (PRN) her 3-5 dakikada bir 0.5-1 mcg/kg/dakika artırılabilir.</li>
                <li><strong>Olağan Aralığı:</strong> 1-5 mcg/kg/dakika.</li>
                <li><strong>Maksimum:</strong> 20 mcg/dakika'dan fazla olmamalıdır.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Başlangıç dozları düşük tutulmalı ve hipotansiyon riski nedeniyle yakından izlenmelidir.</li>
                <li>Doz titrasyonu, özellikle böbrek fonksiyon bozukluğu varsa (Bkz. Yetişkin Dozaj Modifikasyonları), yavaş yapılmalıdır.</li>
            </ul>
        `
    }
},
{
    id: "salbutamolContainer",
    isim: "Salbutamol (Albuterol)",
    piyasaIsimleri: [
        "Salres Şurup 2 mg/5 ml 150 ml",
        "Ventolin Şurup 2 mg 150 ml",
        "Ventosal Şurup 2 mg/5 ml 150 ml",
        "Astosal 2.5 mg/2.5 ml 20 Doz",
        "Brecur 2.5 mg 2.5 ml 20 Flakon",
        "Brecur 100 mcg Aerosol 200 Doz",
        "Ronkotol 2.5 mg/2.5 ml 20 Flakon",
        "Salres 2.5 mg/2.5 ml 20 Flakon",
        "Salres 100 mcg Aerosol 200 Doz",
        "Ventolin Nebules 2.5 mg/2.5 ml 20 Nebul",
        "Ventolin İnhaler 100 mcg 200 Doz",
        "Ventosal 2.5 mg/2.5 ml 20 Flakon",
        "Ventosal 100 mcg İnhaler"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Astım Semptomları ve Bronkospazm</h5>

            <h6 class="dose-type-title">İnhaler (100 mcg/doz)</h6>
            <ul class="dose-details-list">
                <li><strong>Semptom Giderme:</strong> 1-2 puf (nefes) her 4 saatte bir, 24 saatte maksimum 8 puf.</li>
                <li><strong>Önleyici (Egzersiz vb.):</strong> Tetikleyiciden 15 dakika önce 2 puf.</li>
            </ul>

            <h6 class="dose-type-title">Kuru Toz İnhaler (200 mcg/doz)</h6>
            <ul class="dose-details-list">
                <li><strong>Semptom Giderme:</strong> Günde 4 defaya kadar 1 inhalasyon.</li>
                <li><strong>Önleyici (Egzersiz vb.):</strong> Tetikleyiciden 10-15 dakika önce 1 inhalasyon.</li>
            </ul>
            
            <h6 class="dose-type-title">Oral Şurup (2 mg/5 ml)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 5 ml - 20 ml, günde 4 defaya kadar.</li>
            </ul>

            <h6 class="dose-type-title">Oral Tablet (2mg ve 4mg)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç Doz:</strong> 4 mg günde 3 veya 4 kez.</li>
                <li><strong>Maksimum:</strong> Doktor tarafından kademeli olarak günde 8 mg'a kadar (üç veya dört kez) artırılabilir.</li>
                <li><strong>Hassas Hastalar:</strong> Başlangıçta 2 mg, günde 3 veya 4 kez.</li>
            </ul>
            
            <h6 class="dose-type-title">Nebulizatör Çözeltisi (5 mg/ml) - Aralıklı Tedavi</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 0.5 ml - 1 ml çözelti (2.5 mg - 5 mg salbutamol).</li>
                <li><strong>Bazı Hastalar:</strong> 2 ml'ye kadar (10 mg salbutamol) gerekebilir.</li>
                <li><strong>Sıklık:</strong> Günde 4 defaya kadar verilebilir.</li>
            </ul>
            
            <h6 class="dose-type-title">Nebulizatör Çözeltisi - Sürekli Tedavi</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> Saatte 1 ila 2 mg salbutamol (5-20 mcg/dk infüzyon).</li>
            </ul>

            <h5 class="dose-condition-title">Şiddetli Bronkospazm ve Status Asthmaticus</h5>
            <h6 class="dose-type-title">SC veya IM Enjeksiyon (500 mcg/ml)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 500 mikrogram (8 mcg/kg vücut ağırlığı).</li>
                <li><strong>Tekrar:</strong> Gerektiğinde her 4 saatte bir tekrarlanır.</li>
            </ul>
            <h6 class="dose-type-title">IV İnfüzyon (5mg/5ml)</h6>
            <ul class="dose-details-list">
                <li><strong>Yavaş IV Enjeksiyon (Başlangıç):</strong> 250 mikrogram (4 mcg/kg vücut ağırlığı) yavaş enjekte edilir; gerekirse tekrarlanabilir.</li>
                <li><strong>Status Asthmaticus İnfüzyon Hızı:</strong> Saatte 3 ila 20 mcg/dk (hasta yanıtına göre ayarlanır).</li>
            </ul>

            <h5 class="dose-condition-title">Erken Doğum (Preterm Labor)</h5>
            <h6 class="dose-type-title">IV İnfüzyon (5mg/5ml)</h6>
            <ul class="dose-details-list">
                <li><strong>İnfüzyon Hızı:</strong> Uterin kasılmaları kontrol etmek için genellikle 10-45 mcg/dakika yeterlidir (kasılmaların gücüne ve sıklığına göre ayarlanır).</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Astım Semptomları ve Bronkospazm</h5>
            <h6 class="dose-type-title">İnhaler (100 mcg/doz)</h6>
            <ul class="dose-details-list">
                <li><strong>Semptom Giderme:</strong> 1 puf (gerekirse 2 pufa artırılır) her 4 saatte bir, 24 saatte maksimum 8 puf.</li>
                <li><strong>Önleyici (Egzersiz vb.):</strong> Tetikleyiciden 15 dakika önce 1 puf (gerekirse 2 pufa artırılır).</li>
            </ul>

            <h6 class="dose-type-title">Kuru Toz İnhaler (200 mcg/doz) (4-11 Yaş)</h6>
            <ul class="dose-details-list">
                <li><strong>Semptom Giderme:</strong> Günde 4 defaya kadar 1 inhalasyon.</li>
                <li><strong>Önleyici (Egzersiz vb.):</strong> Tetikleyiciden 10-15 dakika önce 1 inhalasyon.</li>
            </ul>

            <h6 class="dose-type-title">Oral Şurup (2 mg/5 ml)</h6>
            <ul class="dose-details-list">
                <li><strong>> 12 Yaş:</strong> 5 ml - 10 ml, günde 3 veya 4 kez.</li>
                <li><strong>6 - 12 Yaş:</strong> 5 ml, günde 3 veya 4 kez.</li>
                <li><strong>2 - 6 Yaş:</strong> 2.5 ml - 5 ml, günde 3 veya 4 kez.</li>
            </ul>
            
            <h6 class="dose-type-title">Oral Tablet (2mg ve 4mg)</h6>
            <ul class="dose-details-list">
                <li><strong>> 12 Yaş:</strong> 2 mg - 4 mg, günde 3 veya 4 kez.</li>
                <li><strong>6 - 12 Yaş:</strong> 2 mg, günde 3 veya 4 kez.</li>
                <li><strong>2 - 6 Yaş:</strong> 1 mg - 2 mg, günde 3 veya 4 kez.</li>
            </ul>
            
            <h6 class="dose-type-title">Nebulizatör Çözeltisi (5 mg/ml) - Aralıklı Tedavi (18 Ay - 12 Yaş)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 0.5 ml - 1 ml çözelti (2.5 mg - 5 mg salbutamol).</li>
                <li><strong>Sıklık:</strong> Günde 4 defaya kadar verilebilir.</li>
            </ul>

            <h5 class="dose-condition-title">Şiddetli Bronkospazm</h5>
            <h6 class="dose-type-title">IV İnfüzyon (5mg/5ml)</h6>
            <ul class="dose-details-list">
                <li><strong>Status Asthmaticus İnfüzyon Hızı:</strong> Çocuklar için genellikle 3-20 mcg/dk.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz ve Hassas Hastalar</h5>
            <h6 class="dose-type-title">Oral Şurup (2 mg/5 ml)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 5 ml, günde 3 defaya kadar.</li>
            </ul>
            <h6 class="dose-type-title">Oral Tablet (2mg ve 4mg)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç Doz:</strong> 2 mg, günde 3 veya 4 kez.</li>
            </ul>
            <ul class="dose-details-list simple-list">
                <li>Yaşlı hastalar veya bu ürüne karşı hassas olduğu bilinen hastalar için başlangıç dozları düşüktür.</li>
            </ul>
        `
    }
},
{
    id: "ipratropiumBromurContainer",
    isim: "İpratropium Bromür",
    piyasaIsimleri: [
        "İprabül 500 mcg/2 ml 20 Flakon",
        "İpratom 250 mcg/2 ml 20 Flakon",
        "İpratom 500 mcg/2 ml 20 Flakon",
        "Atrovent"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Kronik Obstrüktif Akciğer Hastalığı (KOAH)</h5>
            <p>Kronik bronşit ve amfizem dahil bronkospazmın idame tedavisi.</p>
            <h6 class="dose-type-title">İnhaler</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 2 puf (aktüasyon)</li><li><strong>Sıklık:</strong> Her 6 saatte bir (q6hr), ek olarak gerektiğinde puf yapılabilir (PRN).</li><li><strong>Maksimum:</strong> Günde 12 pufu aşmamalı.</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Nebulizatör</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 2.5 mL (500 mcg)</li><li><strong>Sıklık:</strong> Her 6-8 saatte bir (q6-8hr).</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Akut Astım Alevlenmesi (Endikasyon Dışı)</h5>
            <h6 class="dose-type-title">İnhaler</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 8 puf (aktüasyon)</li><li><strong>Sıklık:</strong> Gerektiğinde 3 saat boyunca her 20 dakikada bir (PRN).</li></ul></li>
            </ul>
            <h6 class="dose-type-title">Nebulizatör</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 500 mcg</li><li><strong>Sıklık:</strong> 3 doz için her 20 dakikada bir, ardından gerektiğinde (PRN).</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Dozlama Hususları</h5>
            <ul class="dose-details-list simple-list">
                <li>İlk kullanımdan önce havaya 2 test spreyi püskürtülerek pompalama (priming) yapılmalıdır; 3 günden fazla kullanılmadıysa tekrarlanmalıdır.</li>
                <li>Akut astım alevlenmesinin tedavisinde, kısa etkili beta agonist (SABA) ile birlikte uygulanmalıdır.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Akut Astım Alevlenmesi (Endikasyon Dışı - NIH Kılavuzları)</h5>
            <h6 class="dose-type-title">İnhaler</h6>
            <ul class="dose-details-list">
                <li><strong>< 5 Yaş:</strong> 1 saat boyunca gerekirse her 20 dakikada bir 2 inhalasyon.</li>
                <li><strong>5 - 12 Yaş:</strong> 3 saate kadar gerektiğinde her 20 dakikada bir 4-8 puf (aktüasyon).</li>
                <li><strong>≥ 12 Yaş:</strong> 3 saate kadar gerektiğinde her 20 dakikada bir 8 puf (aktüasyon).</li>
            </ul>
            <h6 class="dose-type-title">Nebulizatör</h6>
            <ul class="dose-details-list">
                <li><strong>< 5 Yaş:</strong> 1 saat boyunca gerekirse her 20 dakikada bir 0.25 mg (250 mcg).</li>
                <li><strong>5 - 12 Yaş:</strong> 3 doz için her 20 dakikada bir 250-500 mcg, ardından gerektiğinde (PRN).</li>
                <li><strong>≥ 12 Yaş:</strong> 3 doz için her 20 dakikada bir 500 mcg, ardından gerektiğinde (PRN).</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir dozaj ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
                <li>Antikolinerjik etkiler (örn. idrar retansiyonu, ağız kuruluğu) açısından yaşlı hastalar izlenmelidir.</li>
            </ul>
        `
    }
},
{
    id: "budesonidContainer",
    isim: "Budesonid",
    piyasaIsimleri: [
        "Budecort Steri-Neb 0.5 mg/ml İnhalasyon 20 Ampül",
        "Budefix 400 mcg 60 Kapsül",
        "Budenosin 0.5 mg/1 ml 20 Adet",
        "Budenosin 0.25 mg/1 ml Nebulizasyon Süspansiyonu",
        "Budenosin Discair 200 mcg 60 Doz",
        "Budenosin Discair 400 mcg 60 Doz",
        "Cortair 0.5 mg/ml 20 Flakon",
        "Cortair 0.25 mg/ml 20 Flakon",
        "Pulbien 0.5 mg/ml Nebulizasyon Süspansiyonu 20 Adet",
        "Pulbien 0.25 mg/ml Nebulizasyon Süspansiyonu 20 Adet",
        "Pulmicort 200 mcg 100 Doz Turbuhaler",
        "Pulmicort Nebulizer 0.25 mg/ml 20 Ampül",
        "Pulmicort Nebül Nebulizer 0.50 mg/ml 20 Ampül",
        "Pulmicort Turbuhaler 100 mcg 200 Doz",
        "Pulmicort Turbuhaler 400 mcg 100 Doz",
        "İnflacort 0.5 mg/ml Nebulizasyon Süspansiyonu 20 Adet",
        "İnflacort 0.25 mg/ml Nebulizasyon Süspansiyonu 20 Adet"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Astım (İdame Tedavisi)</h5>
            <h6 class="dose-type-title">İnhale Toz</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 360 mcg (PO)</li><li><strong>Sıklık:</strong> Her 12 saatte bir (q12hr).</li><li><strong>Başlangıç:</strong> Bazı hastalarda 180 mcg q12hr ile başlanabilir.</li><li><strong>Maksimum:</strong> 720 mcg q12hr'ı aşmamalı.</li></ul></li>
            </ul>
            
            <h5 class="dose-condition-title">Uygulama Notları</h5>
            <ul class="dose-details-list simple-list">
                <li>Süspansiyon formu, yeterli hava akışına sahip ve ağızlık veya uygun yüz maskesiyle donatılmış **jet nebulizatör** aracılığıyla uygulanmalıdır.</li>
                <li>**Ultrasonik nebulizatör** kullanılmamalıdır.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Astım (İdame Tedavisi) - Nebulize Süspansiyon</h5>
            <h6 class="dose-type-title">1 - 8 Yaş (Sadece Bronkodilatör Öncesi Tedavi)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 0.5 mg (Günde bir kez veya q12hr bölünmüş).</li><li><strong>Maksimum:</strong> 0.5 mg/gün.</li></ul></li>
            </ul>
            <h6 class="dose-type-title">1 - 8 Yaş (İnhale Kortikosteroid Öncesi Tedavi)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 0.5 mg (Günde bir kez veya q12hr bölünmüş).</li><li><strong>Maksimum:</strong> 1 mg/gün.</li></ul></li>
            </ul>
            <h6 class="dose-type-title">1 - 8 Yaş (Oral Kortikosteroid Öncesi Tedavi)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 1 mg (Günde bir kez veya q12hr bölünmüş).</li><li><strong>Maksimum:</strong> 1 mg/gün.</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Astım (İdame Tedavisi) - İnhale Toz</h5>
            <h6 class="dose-type-title">> 6 Yaş</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 180 mcg (PO) q12hr.</li><li><strong>Başlangıç:</strong> Bazı hastalarda 360 mcg q12hr ile başlanabilir.</li><li><strong>Maksimum:</strong> 360 mcg q12hr'ı aşmamalı.</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">< 1 Yaş / < 6 Yaş (İnhale Toz)</h5>
            <ul class="dose-details-list simple-list">
                <li>Güvenlik ve etkinlik belirlenmemiştir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir dozaj ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
                <li>Genel olarak, en düşük etkili dozun kullanılması ve yaşa bağlı olası böbrek/karaciğer fonksiyon değişikliklerinin izlenmesi önerilir.</li>
            </ul>
        `
    }
},
{
    id: "flutikazonInhaleContainer",
    isim: "Flutikazon (İnhale)",
    piyasaIsimleri: [
        "Breticasone 2 mg/2 ml 10 Nebül",
        "Flixair 0.5 mg/2 ml 10 Flakon",
        "Flixair 2 mg/2 ml 10 Flakon",
        "Flixon 50 mcg İnhalasyon Çözeltisi 120 Doz",
        "Flixon 125 mcg İnhaler 120 Doz",
        "Flixotide Diskus 100 mcg 60 Doz",
        "Flixotide Diskus 250 mcg 60 Doz",
        "Flixotide Inhaler 50 mcg 120 Doz",
        "Flixotide Nebules 0.5 mg/2 ml",
        "Flixotide Nebules 2 mg/2 ml",
        "Flixotide İnhaler 125 mcg 120 Doz",
        "Floben 0.5 mg/2 ml 10 Nebül",
        "Floben 2 mg/2 ml 10 Nebül Flakonu",
        "Flupronat 2 mg/2 ml 10 Flakon"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Astım (İdame Tedavisi)</h5>
            <p>Akut bronkospazmın giderilmesi için endike değildir, sadece idame tedavisi ve profilaksi amaçlıdır.</p>
            <h6 class="dose-type-title">İnhale Aerosol (Flovent HFA)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç Dozu (İKS kullanmayanlar)</strong><ul><li><strong>Doz:</strong> 88 mcg (2 x 44 mcg puf) (PO)</li><li><strong>Sıklık:</strong> Her 12 saatte bir (q12hr).</li></ul></li>
                <li><strong>İdame/Maksimum</strong><ul><li><strong>Titrasyon:</strong> 2 hafta sonra yetersiz yanıt varsa artırılabilir.</li><li><strong>Maksimum:</strong> 880 mcg (PO) q12hr'ı aşmamalı.</li></ul></li>
            </ul>

            <h6 class="dose-type-title">İnhale Toz (Flovent Diskus)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç Dozu (İKS kullanmayanlar)</strong><ul><li><strong>Doz:</strong> 100 mcg (PO)</li><li><strong>Sıklık:</strong> Her 12 saatte bir (q12hr).</li></ul></li>
                <li><strong>İdame/Maksimum</strong><ul><li><strong>Titrasyon:</strong> 2 hafta sonra yetersiz yanıt varsa artırılabilir.</li><li><strong>Maksimum:</strong> 1000 mcg (PO) q12hr'ı aşmamalı.</li></ul></li>
            </ul>
            
            <h6 class="dose-type-title">İnhale Toz (ArmonAir Digihaler)</h6>
            <ul class="dose-details-list">
                <li><strong>Daha Şiddetli Astım:</strong> 113-232 mcg (PO) q12hr.</li>
                <li><strong>Daha Az Şiddetli Astım/Yeni Başlayan:</strong> 55 mcg (PO) q12hr.</li>
                <li><strong>Maksimum:</strong> 232 mcg (PO) q12hr'ı aşmamalı.</li>
                <li><strong>İKS Değişikliği:</strong> Önceki İKS gücüne ve hastalığın şiddetine göre düşük (55 mcg), orta (113 mcg) veya yüksek (232 mcg) tek inhalasyon q12hr.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Astım (İdame Tedavisi)</h5>

            <h6 class="dose-type-title">İnhale Aerosol (Flovent HFA)</h6>
            <ul class="dose-details-list">
                <li><strong>4 - 11 Yaş:</strong> 88 mcg (2 x 44 mcg puf) (PO) q12hr.</li>
                <li><strong>≥ 12 Yaş:</strong> Yetişkin dozuyla aynıdır (Başlangıç 88 mcg q12hr, Maksimum 880 mcg q12hr).</li>
            </ul>
            
            <h6 class="dose-type-title">İnhale Toz (Flovent Diskus)</h6>
            <ul class="dose-details-list">
                <li><strong>4 - 11 Yaş (İKS kullanmayanlar)</strong><ul><li><strong>Başlangıç:</strong> 50 mcg (PO) q12hr.</li><li><strong>İdame:</strong> 2 hafta sonra yetersiz yanıt varsa 100 mcg q12hr'a artırılabilir.</li></ul></li>
                <li><strong>≥ 12 Yaş:</strong> Yetişkin dozuyla aynıdır (Başlangıç 100 mcg q12hr, Maksimum 1000 mcg q12hr).</li>
            </ul>
            
            <h6 class="dose-type-title">İnhale Toz (ArmonAir Digihaler)</h6>
            <ul class="dose-details-list">
                <li><strong>4 - 11 Yaş (Daha Az Şiddetli Astım/Yeni Başlayan):</strong> 30 mcg (PO) q12hr.</li>
                <li><strong>4 - 11 Yaş (İKS Değişikliği):</strong> Önceki İKS gücüne göre 30-55 mcg (PO) q12hr.</li>
                <li><strong>≥ 12 Yaş:</strong> Yetişkin dozuyla aynıdır (55-232 mcg q12hr).</li>
            </ul>
            
            <h5 class="dose-condition-title">< 4 Yaş</h5>
            <ul class="dose-details-list simple-list">
                <li>Güvenlik ve etkinlik belirlenmemiştir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir dozaj ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
                <li>Genel olarak, sistemik kortikosteroid yan etkileri açısından dikkatli olunmalı ve en düşük etkili doz kullanılmalıdır.</li>
            </ul>
        `
    }
},
{
    id: "tramadolContainer",
    isim: "Tramadol",
    piyasaIsimleri: [
        "Contramal 50 mg 20 Kapsül",
        "Contramal 100 mg 5 Ampül",
        "Contramal Damla 100 mg 10 ml",
        "Contramal Retard 100 mg 30 Tablet",
        "Ramadex 100 mg/2 ml 5 Ampül",
        "Tradolex 100 mg 5 Ampül",
        "Tramosel 100 mg/2 ml 5 Ampül",
        "Ultramex Ampül 100 mg/2 ml 5 Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Ağrı (Orta-Şiddetli)</h5>
            <h6 class="dose-type-title">Hemen Salınım (Kronik Ağrı)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç:</strong> Başlangıçta her sabah 25 mg (PO).</li>
                <li><strong>Titrasyon:</strong> Her 3 günde bir 25-50 mg/gün artırılır.</li>
                <li><strong>İdame:</strong> Gerekirse (PRN) her 4-6 saatte bir 50-100 mg (PO).</li>
                <li><strong>Maksimum:</strong> 400 mg/gün'ü aşmamalı.</li>
            </ul>
            <h6 class="dose-type-title">Hemen Salınım (Akut Ağrı)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 50-100 mg (PO) her 4-6 saatte bir (PRN).</li>
                <li><strong>Maksimum:</strong> 400 mg/gün'ü aşmamalı.</li>
            </ul>
            <h6 class="dose-type-title">Uzatılmış Salınım (ER)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç:</strong> Başlangıçta günde bir kez 100 mg (PO).</li>
                <li><strong>Titrasyon:</strong> Her 5 günde bir 100 mg/gün artırılır.</li>
                <li><strong>Maksimum:</strong> 300 mg/gün'ü aşmamalı.</li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
            <h6 class="dose-type-title">Şiddetli Böbrek Yetmezliği (CrCl <30 mL/dk)</h6>
            <ul class="dose-details-list simple-list">
                <li><strong>Oral Solüsyon/IR:</strong> Doz aralığını q12hr'a çıkarın; 200 mg/gün'ü aşmayın.</li>
                <li><strong>ER Formu:</strong> Önerilmez.</li>
            </ul>
            <h6 class="dose-type-title">Şiddetli Karaciğer Yetmezliği</h6>
            <ul class="dose-details-list simple-list">
                <li><strong>Oral Solüsyon/IR:</strong> Her 12 saatte bir 50 mg (PO).</li>
                <li><strong>ER Formu:</strong> Önerilmez.</li>
            </ul>
            <h6 class="dose-type-title">Diyaliz Hastaları</h6>
            <ul class="dose-details-list simple-list">
                <li>Diyaliz günlerinde normal dozu alabilirler (Dozun sadece %7'si hemodiyalizle uzaklaştırılır).</li>
            </ul>

            <h5 class="dose-condition-title">Dozlama Hususları</h5>
            <ul class="dose-details-list simple-list">
                <li>Başlangıçta ve doz artışlarını takiben ilk 24-72 saatte solunum depresyonu açısından yakından izleyin.</li>
                <li>Fiziksel bağımlılığı olan hastalarda aniden kesmeyin; yoksunluk belirtilerini önlemek için dozu kademeli olarak azaltın (örn. toplam günlük dozun %10-25'i).</li>
                <li>Diğer opioid ürünleriyle birlikte kullanmayın.</li>
                <li>Opioid aşırı doz riski nedeniyle **Nalokson** bulundurma ihtiyacını değerlendirin ve hastaları bilgilendirin.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Pediatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Güvenlik ve etkinlik belirlenmemiştir.</li>
                <li>CYP2D6 genotipine bağlı metabolizma değişkenliği nedeniyle çocuklarda yaşamı tehdit eden solunum depresyonu ve ölüm vakaları bildirilmiştir.</li>
                <li>12 yaş altı çocuklar ve 18 yaş altı bazı cerrahi sonrası hastalar için kullanımı önerilmez/kontrendikedir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz (>65 Yaş)</h5>
            <ul class="dose-details-list simple-list">
                <li>Doz aralığının alt sınırında başlanmalıdır.</li>
                <li><strong>>75 Yaş:</strong> 300 mg/gün'ü aşmamalıdır.</li>
                <li><strong>ER Formu:</strong> Dikkatli kullanılmalıdır (Bkz. Yetişkin Dozaj Modifikasyonları - Böbrek ve Karaciğer).</li>
            </ul>
        `
    }
},
{
    id: "metoklopramidContainer",
    isim: "Metoklopramid",
    piyasaIsimleri: [
        "Anti-Nausea 10 mg/2 ml 5 Ampül",
        "Emoject 10 mg/2 ml 5 Ampül",
        "Metoplon 10 mg/2 ml 5 Ampül",
        "Metpamid 10 mg 30 Tablet",
        "Metpamid Ampül 10 mg 5 Ampül",
        "Metpamid Şurup 1 mg 125 ml",
        "Nastifran 10 mg/2 ml 5 Ampül",
        "Primperan 10 mg/2 ml 6 Ampül",
        "Primsel 10 mg/2 ml 5 Ampül",
        "Turktıpsan Metoklopramid Hidroklorur 10 mg/2 ml 6 Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Kemoterapiye Bağlı Bulantı & Kusma (KBYB)</h5>
            <ul class="dose-details-list">
                <li><strong>Başlangıç</strong><ul><li><strong>Doz:</strong> 2 mg/kg (IV) (En az 15 dakika üzerinde infüzyon)</li><li><strong>Sıklık:</strong> Kemoterapiden 30 dakika önce.</li><li><strong>Tekrar:</strong> Başlangıç dozundan sonra q2hr 2 kez daha tekrarlanır.</li></ul></li>
                <li><strong>Kusma Bastırılırsa</strong><ul><li><strong>Doz:</strong> 1 mg/kg (IV)</li><li><strong>Sıklık:</strong> q3hr 3 doz için azaltılır.</li></ul></li>
                <li><strong>Kusma Bastırılamazsa</strong><ul><li>Aynı doz q3hr 3 doz için devam edilir.</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Diyabetik Gastroparezi</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 10 mg (IV/IM/PO)</li><li><strong>Sıklık:</strong> Yemeklerden 30 dakika önce ve yatarken q6hr.</li><li><strong>Not:</strong> Enjekte edilebilir form sadece şiddetli semptomlar varsa kullanılır.</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">İnce Bağırsak Entübasyonu / Üst GI Radyolojik İncelemesi</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 10 mg (IV)</li><li><strong>Uygulama:</strong> 1-2 dakika üzerinde.</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Gastroözofageal Reflü Hastalığı (GÖRH)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 10-15 mg (PO)</li><li><strong>Sıklık:</strong> Yemeklerden 30 dakika önce ve yatarken q6hr.</li><li><strong>Maksimum:</strong> 80 mg/gün'ü aşmamalı.</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Postoperatif Bulantı & Kusma (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz</strong><ul><li><strong>Doz:</strong> 10-20 mg (IM)</li><li><strong>Sıklık:</strong> Prosedürün sonuna yakın; gerekirse ameliyat sonrası q4-6hr tekrarlanabilir.</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
            <h6 class="dose-type-title">Böbrek Yetmezliği</h6>
            <ul class="dose-details-list simple-list">
                <li><strong>CrCl <40 mL/dk:</strong> Dozu %50 azaltın.</li>
                <li><strong>CrCl <10 mL/dk:</strong> Dozu %75 azaltın.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">İnce Bağırsak Entübasyonu / Üst GI Radyolojik İncelemesi</h5>
            <h6 class="dose-type-title">IV (1-2 Dakika Üzerinde)</h6>
            <ul class="dose-details-list">
                <li><strong>< 6 Yaş:</strong> 0.1 mg/kg (IV).</li>
                <li><strong>6 - 14 Yaş:</strong> 2.5-5 mg (IV).</li>
                <li><strong>≥ 14 Yaş:</strong> 10 mg (IV).</li>
            </ul>

            <h5 class="dose-condition-title">Gastroözofageal Reflü Hastalığı (GÖRH) (Endikasyon Dışı)</h5>
            <h6 class="dose-type-title">Oral/IV/IM</h6>
            <ul class="dose-details-list">
                <li><strong>Yenidoğan:</strong> 0.15 mg/kg (IV) q6hr.</li>
                <li><strong>Bebekler:</strong> 0.1 mg/kg (IV/IM/PO) q6-8hr (yemeklerden 30 dakika önce ve yatarken).</li>
                <li><strong>Maksimum:</strong> 0.3-0.75 mg/kg/gün'ü aşmamalı.</li>
            </ul>

            <h5 class="dose-condition-title">Diyabetik Gastroparezi (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>< 6 Yaş:</strong> 0.1 mg/kg (PO) q8hr (Max 0.1 mg/kg/doz).</li>
                <li><strong>≥ 6 Yaş:</strong> 0.5 mg/kg/gün (PO) q8hr bölünmüş.</li>
            </ul>

            <h5 class="dose-condition-title">Postoperatif Bulantı & Kusma (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 0.1-2 mg/kg (IV) q6-8hr PRN.</li>
            </ul>

            <h5 class="dose-condition-title">Kemoterapiye Bağlı Bulantı & Kusma (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 1-2 mg/kg (IV) (En az 15 dakika üzerinde infüzyon) kemodan 30 dakika önce; q2-4hr tekrarla.</li>
                <li><strong>Not:</strong> Ekstrapiramidal yan etki riskini azaltmak için difenhidramin ile ön tedavi önerilir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Yaşlı hastalar, özellikle böbrek fonksiyonu bozuksa, **diskinezi** (istemsiz hareketler) ve diğer ekstrapiramidal semptomlar açısından daha yüksek risk altındadır.</li>
                <li>Böbrek yetmezliği varsa doz mutlaka azaltılmalıdır (Bkz. Yetişkin Dozaj Modifikasyonları).</li>
            </ul>
        `
    }
},
{
    id: "metronidazolContainer",
    isim: "Metronidazol",
    piyasaIsimleri: [
        "Biofleks Metrosel %0.5 100 ml Setli",
        "Flagyl %0.5 100 ml Setsiz",
        "Flagyl Serum %0.5 100 ml Setli",
        "Metrosel Biofleks %0.5 100 ml Setsiz",
        "Neofleks %0.5 Metronidazol IV 100 ml Setsiz",
        "Polgyl %0.5 IV 100 ml (Setli)",
        "Polgyl %0.5 IV 100 ml Setsiz",
		"Flagyl 500 mg 20 Tablet",
		"Flagyl Şurup 125 mg/5 ml",
        "Nidazol 250 mg 20 Tablet",
        "Nidazol 500 mg 20 Tablet",
        "Nidazol Pediatrik Solüsyon 50 mg",
        "Nidazol Şurup 5 ml 200 mg 100 ml"
		
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Anaerobik Bakteriyel Enfeksiyonlar</h5>
            <h6 class="dose-type-title">IV/PO/Oral Süspansiyon</h6>
            <ul class="dose-details-list">
                <li><strong>Yükleme Dozu (IV):</strong> 15 mg/kg (Maksimum 4 g/gün).</li>
                <li><strong>İdame Dozu:</strong> 7.5 mg/kg (PO/IV, 1 saat üzerinde)</li>
                <li><strong>Sıklık:</strong> Her 6 saatte bir (q6hr) x 7-10 gün (şiddetli ise 2-3 hafta).</li>
                <li><strong>Oral Süspansiyon:</strong> 7.5 mg/kg (PO) q8hr (Maksimum 4 g/24 saat).</li>
            </ul>

            <h5 class="dose-condition-title">Bakteriyel Vajinoz</h5>
            <h6 class="dose-type-title">Hamile Olmayan Kadınlar</h6>
            <ul class="dose-details-list simple-list">
                <li>500 mg (PO) günde iki kez (GİBİ) x 7 gün VEYA</li>
                <li>2 g (PO) tek doz VEYA</li>
                <li>Uzatılmış Salınım: 750 mg (PO) günde bir kez x 7 gün.</li>
            </ul>
            <h6 class="dose-type-title">Hamile Kadınlar</h6>
            <ul class="dose-details-list simple-list">
                <li>500 mg (PO) GİBİ x 7 gün VEYA</li>
                <li>250 mg (PO) günde üç kez (TID) x 7 gün.</li>
            </ul>
            
            <h5 class="dose-condition-title">Trikomoniyazis</h5>
            <ul class="dose-details-list simple-list">
                <li>250 mg (PO) q8hr x 7 gün VEYA</li>
                <li>2 g (PO) tek doz VEYA</li>
                <li>Alternatif olarak 1g (PO) q12hr x 2 doz.</li>
                <li><strong>Not:</strong> 7 günlük tedavi, tek doz tedaviye göre daha yüksek iyileşme oranları sağlayabilir.</li>
            </ul>

            <h5 class="dose-condition-title">Amibiyazis</h5>
            <ul class="dose-details-list">
                <li><strong>Akut Bağırsak Amibiyazisi:</strong> 750 mg (PO) günde üç kez x 5-10 gün.</li>
                <li><strong>Amibik Karaciğer Apsesi:</strong> 500-750 mg (PO) günde üç kez x 5-10 gün.</li>
            </ul>
            
            <h5 class="dose-condition-title">Cerrahi Profilaksi (Kolorektal)</h5>
            <ul class="dose-details-list">
                <li><strong>Oral (PO):</strong> Ameliyattan önceki öğleden sonra ve akşam, 1 g (PO) q6-8hr x 3 doz.</li>
                <li><strong>İntravenöz (IV):</strong> 15 mg/kg (IV) (30-60 dk üzerinde) (Ameliyattan ~1 saat önce). İdame: 7.5 mg/kg (IV) (6 ve 12. saatte); cerrahiden sonra 12 saat içinde kesilir.</li>
            </ul>

            <h5 class="dose-condition-title">Endikasyon Dışı Kullanımlar</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>Giardiyazis:</strong> 500 mg (PO) q12hr x 5-7 gün.</li>
                <li><strong>H. Pylori Enfeksiyonu:</strong> 250-500 mg (PO) günde 4 kez (tetrasiklin ve bizmut ile kombine) x 14 gün.</li>
                <li><strong>Pelvik İnflamatuar Hastalık (PID):</strong> 500 mg (PO) q12hr x 14 gün (ofloksasin veya levofloksasin ile birlikte).</li>
                <li><strong>Cinsel Saldırı Sonrası Profilaksi:</strong> 2 g (PO) tek doz (diğer ilaçlarla birlikte 3'lü rejim).</li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
            <h6 class="dose-type-title">Şiddetli Karaciğer Yetmezliği (Child-Pugh C)</h6>
            <ul class="dose-details-list simple-list">
                <li>Dozu %50 azaltın.</li>
            </ul>
            <h6 class="dose-type-title">Böbrek Yetmezliği</h6>
            <ul class="dose-details-list simple-list">
                <li>Hafif-orta yetmezlikte doz ayarlaması gerekmez.</li>
                <li>Şiddetli yetmezlikte veya son dönem böbrek hastalığında birikim olabileceği için **izleme** gereklidir; hemodiyaliz sonrası ek doz gerekebilir.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Anaerobik Bakteriyel Enfeksiyonlar</h5>
            <h6 class="dose-type-title">Bebekler ve Çocuklar</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 30 mg/kg/gün (PO/IV) q6hr bölünmüş.</li>
                <li><strong>Maksimum:</strong> 4 g/gün.</li>
            </ul>
            <h6 class="dose-type-type">Yenidoğanlar (<28 gün) (Kilo ve Yaşa Bağlı Değişken)</h6>
            <ul class="dose-details-list simple-list">
                <li><strong>Örnek:</strong> 1.2-2 kg ( >7 gün): 15 mg/kg/gün IV/PO q12hr bölünmüş.</li>
            </ul>
            
            <h5 class="dose-condition-title">Spesifik Endikasyonlar</h5>
            <ul class="dose-details-list">
                <li><strong>Clostridium Difficile Koliti:</strong> 30 mg/kg/gün (IV/PO) q6hr bölünmüş (7-10 gün).</li>
                <li><strong>Amibiyazis:</strong> 35-50 mg/kg/gün (PO) q8hr bölünmüş (Max 750 mg/doz) (10 gün).</li>
                <li><strong>Giardiyazis:</strong> 15 mg/kg/gün (IV/PO) q8hr bölünmüş (5 gün).</li>
                <li><strong>Trikomoniyazis (<45 kg):</strong> 15 mg/kg/gün (IV/PO) q8hr bölünmüş (7 gün).</li>
                <li><strong>H. Pylori (Endikasyon Dışı):</strong> 15-20 mg/kg/gün (PO) q12hr bölünmüş (diğer ilaçlarla kombine) (4 hafta).</li>
            </ul>
            
            <h5 class="dose-condition-title">İntra-Abdominal Enfeksiyonlar (<4 ay)</h5>
            <ul class="dose-details-list simple-list">
                <li>Dozaj, gebelik sonrası tamamlanmış haftalara (PMA) göre yükleme ve idame dozları olarak ayrılır. (Örn: 34-40 hafta PMA: Yükleme 15 mg/kg IV, İdame 7.5 mg/kg IV q8hr).</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Yaşlılarda standart yetişkin dozu kullanılır.</li>
                <li>Şiddetli karaciğer yetmezliği (Child-Pugh C) varsa doz %50 azaltılmalıdır.</li>
                <li>Böbrek yetmezliği durumunda, metabolit birikimi riski nedeniyle yakından **monitörizasyon** gereklidir.</li>
            </ul>
        `
    }
},
{
    id: "ondansetronContainer",
    isim: "Ondansetron",
    piyasaIsimleri: [
        "Emeset 4 mg/2ml 1 Ampül",
        "Emeset 8 mg/4 ml 1 Ampül",
        "Kemoset 4 mg/2 ml 1 Ampül",
        "Kemoset 8 mg/4 ml 1 Ampül",
        "Laufran 4 mg/2 ml 1 Ampül",
        "Laufran 8 mg/4 ml 1 Ampül",
        "Nauzex 8 mg/4 ml IV 1 Ampül",
        "Ondaren 4 mg/2 ml IV 1 Ampül",
        "Ondaren 8 mg/4 ml IV 1 Ampül",
        "Onzyd 4 mg Ağızda Dağılan 10 Tablet",
        "Onzyd 8 mg Ağızda Dağılan 10 Tablet",
        "Osetron 4 mg/2 ml IM/IV 1 Ampül",
        "Osetron 8 mg/2 ml IM/IV 1 Ampül",
        "Santis 4 mg 10 Tablet",
        "Santis 8 mg 10 Tablet",
        "Vocheron 4 mg/2 ml 1 Ampül",
        "Vocheron 4 mg/2 ml 5 Ampül",
        "Vocheron 8 mg/4 ml 1 Ampül",
        "Vocheron 8 mg/4 ml 5 Ampül",
        "Zofer 4 mg 2 ml 1 Ampül",
        "Zofer 4 mg 10 Tablet",
        "Zofer 8 mg 4 ml 1 Ampül",
        "Zofer 8 mg 10 Tablet",
        "Zofran Zydis 8 mg 10 Tablet",
        "Zoltem 4 mg 6 Tablet",
        "Zoltem 8 mg 6 Tablet",
        "Zontron 4 mg/2 ml IV 1 Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Kemoterapiye Bağlı Bulantı & Kusma (KBYB) Profilaksisi</h5>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list">
                <li><strong>Orta Emetojenik Kemo:</strong> 8 mg kemoterapiden 30 dakika önce, ardından q12hr (1-2 gün).</li>
                <li><strong>Yüksek Emetojenik Kemo:</strong> 24 mg kemoterapiden 30 dakika önce (tek doz).</li>
            </ul>
            <h6 class="dose-type-title">İntravenöz (IV)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 0.15 mg/kg (15 dakika üzerinde) kemoterapiden 30 dakika önce.</li>
                <li><strong>Tekrar:</strong> İlk dozdan sonra 4. ve 8. saatte tekrarlanır.</li>
                <li><strong>Maksimum:</strong> 16 mg/doz (32 mg artık önerilmez).</li>
            </ul>

            <h5 class="dose-condition-title">Postoperatif Bulantı & Kusma (PO/IV/IM)</h5>
            <h6 class="dose-type-title">Profilaksi</h6>
            <ul class="dose-details-list">
                <li><strong>Parenteral:</strong> 4 mg (IV/IM) anesteziden hemen önce veya işlemden sonra.</li>
                <li><strong>Oral:</strong> 16 mg (PO) anesteziden 1 saat önce.</li>
                <li><strong>Not:</strong> >80 kg hastalar ek 4 mg IV'e ihtiyaç duyabilir.</li>
            </ul>

            <h5 class="dose-condition-title">Radyasyona Bağlı Bulantı & Kusma Profilaksisi</h5>
            <ul class="dose-details-list">
                <li><strong>Tüm Vücut Radyasyonu:</strong> 8 mg (PO) radyasyondan 1-2 saat önce, her gün.</li>
                <li><strong>Yüksek Doz Tek Fraksiyon (Karın):</strong> 8 mg (PO) 1-2 saat önce, sonra q8hr (1-2 gün).</li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>Böbrek Yetmezliği:</strong> Doz ayarlaması gerekmez.</li>
                <li><strong>Şiddetli Karaciğer Yetmezliği (Child-Pugh ≥10):</strong> Günde 8 mg'ı aşmamalıdır.</li>
            </ul>

            <h5 class="dose-condition-title">Diğer (Endikasyon Dışı)</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>Hiperemezis Gravidarum:</strong> 10 mg (IV) q8hr (PRN).</li>
                <li><strong>Spinal Opioid Kaşıntısı (Profilaksi):</strong> 4-8 mg (IV) spinal opioidden 20-30 dakika önce.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Kemoterapiye Bağlı Bulantı & Kusma Profilaksisi</h5>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list">
                <li><strong>4 - 12 Yaş:</strong> 4 mg kemodan 30 dk önce, sonra 4. ve 8. saatte, ardından q8hr (1-2 gün).</li>
                <li><strong>> 12 Yaş:</strong> 8 mg kemodan 30 dk önce, sonra q12hr (1-2 gün) VEYA 24 mg tek doz.</li>
            </ul>
            <h6 class="dose-type-title">İntravenöz (IV) (≥6 Ay)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 0.15 mg/kg (15 dakika üzerinde) kemoterapiden 30 dakika önce.</li>
                <li><strong>Tekrar:</strong> İlk dozdan sonra 4. ve 8. saatte tekrarlanır.</li>
                <li><strong>Maksimum:</strong> 16 mg/doz.</li>
            </ul>

            <h5 class="dose-condition-title">Postoperatif Bulantı & Kusma Profilaksisi (IV)</h5>
            <ul class="dose-details-list">
                <li><strong>1 Ay - 12 Yaş (<40 kg):</strong> 0.1 mg/kg (IV).</li>
                <li><strong>1 Ay - 12 Yaş (>40 kg):</strong> 4 mg (IV).</li>
                <li><strong>> 12 Yaş:</strong> 4 mg (IV/IM).</li>
            </ul>
            
            <h5 class="dose-condition-title">Akut Gastroenterit (Endikasyon Dışı - Tek Doz)</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>8-15 kg:</strong> 2 mg (PO) bir kez.</li>
                <li><strong>>15-30 kg:</strong> 4 mg (PO) bir kez.</li>
                <li><strong>>30 kg:</strong> 8 mg (PO) bir kez.</li>
                <li><strong>Not:</strong> Rutin kullanımı önerilmez, sadece şiddetli gastroenterit için düşünülebilir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Böbrek yetmezliğinde doz ayarlaması gerekmez.</li>
                <li>Şiddetli karaciğer yetmezliği (Child-Pugh ≥10) olan yaşlı hastalarda maksimum doz 8 mg/gün olmalıdır.</li>
            </ul>
        `
    }
},
{
    id: "pantoprazolContainer",
    isim: "Pantoprazol",
    piyasaIsimleri: [
        "Arinna 40 mg 28 Tablet",
        "Gastblok 40 mg 28 Tablet",
        "Gastrazol-l 40 mg IV Enjektabl 1 Flakon",
        "Pandev 20 mg 28 Enterik Kaplı Tablet",
        "Pandev 40 mg 1 Flakon",
        "Pandev 40 mg 14 Enterik Kaplı Tablet",
        "Pandev 40 mg 28 Enterik Kaplı Tablet",
        "Panocer 40 mg 14 Tablet",
        "Panocer 40 mg 28 Tablet",
        "Panref 20 mg 28 Enterik Tablet",
        "Panref 40 mg 14 Enterik Tablet",
        "Panref 40 mg 28 Enterik Tablet",
        "Pantactive 20 mg 28 Tablet",
        "Pantactive 40 mg 28 Tablet",
        "Pantges 40 mg 28 Tablet",
        "Panthec 20 mg 28 Enterik Tablet",
        "Panthec 40 mg 14 Enterik Tablet",
        "Panthec 40 mg 28 Enterik Tablet",
        "Panto 20 mg 28 Tablet",
        "Panto 40 mg 14 Tablet",
        "Panto 40 mg 28 Tablet",
        "Panto 40 mg IV Enjektabl 1 Flakon",
        "Pantozol 40 mg 1 Flakon",
        "Pantozol 40 mg 10 Flakon",
        "Pantpas 40 mg 1 Flakon",
        "Pantpas 40 mg 14 Tablet",
        "Pantpas 40 mg 30 Enterik Tablet",
        "Pasmol 40 mg 1 Flakon",
        "Plapant 40 mg 1 Flakon",
        "Progas 40 mg 1 Flakon",
        "Protaz 40 mg 1 Flakon",
        "Protech 40 mg 14 Enterik Tablet",
        "Protech 40 mg 28 Enterik Tablet",
        "Protinum 20 mg 28 Tablet",
        "Protinum 40 mg 14 Tablet",
        "Protinum 40 mg 28 Tablet",
        "Protonex 40 mg 28 Enterik Tablet",
        "Pulcet 20 mg 28 Tablet",
        "Pulcet 40 mg 14 Enterik Tablet",
        "Pulcet 40 mg 28 Enterik Tablet",
        "Stamic 40 mg 28 Enterik Tablet",
        "Ulcezol 40 mg 1 Flakon",
        "Ulcoreks 40 mg 14 Enterik Tablet",
        "Ulsepan 40 mg 28 Tablet",
        "Zolcer 40 mg 1 Flakon",
        "Zygosis 40 mg 1 Flakon"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">GÖRH ile İlişkili Erozif Özofajit</h5>
            <h6 class="dose-type-title">Oral Tedavi</h6>
            <ul class="dose-details-list">
                <li><strong>Tedavi:</strong> 40 mg (PO) günde bir kez (qDay) (8-16 hafta).</li>
                <li><strong>İyileşme İdamesi:</strong> 40 mg (PO) günde bir kez.</li>
            </ul>
            <h6 class="dose-type-title">İntravenöz (IV)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 40 mg (IV) (15 dakika üzerinde infüzyon) qDay (7-10 gün).</li>
                <li><strong>Not:</strong> Hasta oral alıma tolere edebildiğinde PO tedaviye geçilmelidir.</li>
            </ul>

            <h5 class="dose-condition-title">Zollinger-Ellison Sendromu</h5>
            <h6 class="dose-type-title">Oral Tedavi</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç:</strong> 40 mg (PO) günde bir kez.</li>
                <li><strong>Maksimum:</strong> Bazı hastalarda 240 mg/gün'e kadar çıkılabilir.</li>
            </ul>
            <h6 class="dose-type-title">İntravenöz (IV)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 80 mg (IV infüzyon) q8-12hr (7 güne kadar).</li>
                <li><strong>Not:</strong> Hasta oral alıma tolere edebildiğinde PO tedaviye geçilmelidir.</li>
            </ul>

            <h5 class="dose-condition-title">Peptik Ülser Hastalığı (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Duodenal Ülser:</strong> 40 mg (PO) qDay (2 hafta).</li>
                <li><strong>Gastrik Ülser:</strong> 40 mg (PO) qDay (4 hafta).</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">GÖRH ile İlişkili Erozif Özofajit (EE)</h5>
            <h6 class="dose-type-title">Oral Tedavi (≥5 Yaş)</h6>
            <ul class="dose-details-list">
                <li><strong>15 kg ila <40 kg:</strong> 20 mg (PO) qDay.</li>
                <li><strong>≥40 kg:</strong> 40 mg (PO) qDay.</li>
                <li><strong>Süre:</strong> Maksimum 8 hafta.</li>
            </ul>
            <h6 class="dose-type-title">İntravenöz (IV) Tedavi (≥3 Ay) (Maksimum 7 gün)</h6>
            <ul class="dose-details-list">
                <li><strong>3 Ay ila <1 Yaş (<12.5 kg):</strong> 0.8 mg/kg (IV) qDay.</li>
                <li><strong>3 Ay ila <1 Yaş (≥12.5 kg):</strong> 10 mg (IV) qDay.</li>
                <li><strong>1-17 Yaş (≤15 kg):</strong> 10 mg (IV) qDay.</li>
                <li><strong>1-17 Yaş (>15 kg ila ≤40 kg):</strong> 20 mg (IV) qDay.</li>
                <li><strong>1-17 Yaş (>40 kg):</strong> 40 mg (IV) qDay.</li>
            </ul>
            <h5 class="dose-condition-title">< 3 Ay</h5>
            <ul class="dose-details-list simple-list">
                <li>Güvenlik ve etkinlik belirlenmemiştir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir dozaj ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
                <li>Yaşlı hastaların çoğunda böbrek fonksiyonu azalmış olsa da, Pantoprazol öncelikle hepatik yolla metabolize edilir; bu nedenle ciddi karaciğer yetmezliği yoksa doz ayarlaması genellikle gerekli değildir.</li>
            </ul>
        `
    }
},
{
    id: "klopidogrelContainer",
    isim: "Klopidogrel",
    piyasaIsimleri: [
        "Atervix 75 mg 28 Tablet",
        "Baclan 75 mg 28 Tablet",
        "Clogan 75 mg 28 Tablet",
        "Clopra 75 mg 28 Tablet",
        "Diloxol 75 mg 28 Tablet",
        "Diporel 75 mg 28 Tablet",
        "Karum 75 mg 28 Tablet",
        "Klogel 75 mg 28 Tablet",
        "Opirel 75 mg 28 Tablet",
        "Pingel 75 mg 28 Tablet",
        "Planor 75 mg 28 Tablet",
        "Plavidol 75 mg 28 Tablet",
        "Plavix 75 mg 28 Tablet",
        "Plavix 75 mg 90 Tablet"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Akut Koroner Sendrom (AKS)</h5>
            <h6 class="dose-type-title">UA / NSTEMI (Stabil Olmayan Anjina / NSTEMI)</h6>
            <ul class="dose-details-list">
                <li><strong>Yükleme Dozu:</strong> 300 mg (PO). (Yükleme dozu yapılmaması antiplatelet etkiyi geciktirir).</li>
                <li><strong>İdame Dozu:</strong> 75 mg/gün (PO) (12 aya kadar).</li>
                <li><strong>Kombinasyon:</strong> Aspirin (75-100 mg/gün) ile birlikte kullanılır.</li>
            </ul>

            <h6 class="dose-type-title">STEMI (ST-Segment Yükselmeli MI)</h6>
            <ul class="dose-details-list">
                <li><strong>< 75 Yaş</strong><ul><li><strong>Yükleme Dozu:</strong> 300 mg.</li><li><strong>İdame Dozu:</strong> 75 mg/gün (PO) (14 günden 12 aya kadar).</li><li><strong>Kombinasyon:</strong> Aspirin (75-325 mg/gün) ile birlikte.</li></ul></li>
                <li><strong>> 75 Yaş</strong><ul><li><strong>Yükleme Dozu:</strong> **Yükleme Dozu YOK.**</li><li><strong>İdame Dozu:</strong> 75 mg/gün (PO) (14 günden 12 aya kadar).</li></ul></li>
            </ul>

            <h5 class="dose-condition-title">Yeni MI, İnme veya Yerleşik Periferik Arter Hastalığı</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 75 mg (PO) günde bir kez.</li>
                <li>**Not:** Yükleme dozu kullanılmaz. Aspirin'e alternatif veya Aspirin ile birlikte kullanılabilir (kanama riski düşük ise).</li>
            </ul>

            <h5 class="dose-condition-title">Kardiyoembolik İnme Profilaksisi</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 75 mg/gün (PO) (Oral antikoagülasyon adayı olmayan hastalarda).</li>
            </ul>

            <h5 class="dose-condition-title">Karotis Arter Stentleme (CAS) (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Prosedür Öncesi:</strong> 300 mg (PO) + Aspirin (81-325 mg) (CAS'tan 1 gün önce tek doz).</li>
                <li><strong>Prosedür Sonrası:</strong> 75 mg/gün (PO) + Aspirin (81-325 mg/gün) (en az 30 gün).</li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları ve Hususlar</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>Böbrek Yetmezliği:</strong> Doz ayarlaması gerekmez.</li>
                <li><strong>Karaciğer Yetmezliği:</strong> Dikkatli kullanılmalıdır; deneyim sınırlıdır.</li>
                <li><strong>CYP2C19 Zayıf Metabolizması:</strong> Klopidogrel'e karşı azalmış antiplatelet yanıt ile ilişkilidir.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Pediatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Kullanılması önerilmez.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz (>75 Yaş)</h5>
            <ul class="dose-details-list simple-list">
                <li>STEMI tedavisinde 75 yaş üzeri hastalara **Yükleme Dozu verilmez**.</li>
                <li>Kanama riski, yaş ile birlikte arttığından uzun süreli ikili antiplatelet tedavi (DAPT) dikkatle bireyselleştirilmelidir.</li>
            </ul>
        `
    }
},
{
    id: "tikagrelorContainer",
    isim: "Tikagrelor",
    piyasaIsimleri: [
        "Agrilor 90 mg 56 Tablet",
        "Brilinta 60 mg 56 Tablet",
        "Brilinta 90 mg 56 Tablet",
        "Camilla 90 mg 56 Tablet",
        "Talderol 90 mg 56 Tablet",
        "Tigrelo 90 mg 60 Tablet",
        "Tilanta 60 mg 56 Tablet",
        "Tilanta 90 mg 56 Tablet",
        "Tixalor 90 mg 56 Tablet"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Akut Koroner Sendrom (AKS) veya MI Öyküsü</h5>
            <h6 class="dose-type-title">ACS sonrası (MI, inme, KV ölüm riskini azaltma)</h6>
            <ul class="dose-details-list">
                <li><strong>Yükleme Dozu:</strong> 180 mg (PO) tek doz.</li>
                <li><strong>İdame Dozu (İlk 12 ay):</strong> 90 mg (PO) günde iki kez (BID).</li>
                <li><strong>İdame Dozu (1 yıldan sonra):</strong> 60 mg (PO) günde iki kez (BID).</li>
                <li><strong>Kombinasyon:</strong> Günlük **75-100 mg Aspirin** ile birlikte uygulanır. (100 mg üzeri Aspirin etkinliği azaltır.)</li>
            </ul>

            <h5 class="dose-condition-title">Koroner Arter Hastalığı (KAH) (Önleyici)</h5>
            <p>Yüksek riskli KAH hastalarında ilk MI veya inme riskini azaltmak için.</p>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 60 mg (PO) günde iki kez (BID).</li>
                <li><strong>Kombinasyon:</strong> Günlük **75-100 mg Aspirin** ile birlikte uygulanır.</li>
            </ul>
            
            <h5 class="dose-condition-title">Akut İskemik İnme veya Gecici İskemik Atak (GİA)</h5>
            <ul class="dose-details-list">
                <li><strong>Yükleme Dozu:</strong> 180 mg (PO) tek doz.</li>
                <li><strong>İdame Dozu:</strong> 90 mg (PO) günde iki kez (BID) (30 güne kadar).</li>
                <li><strong>Kombinasyon:</strong> Aspirin yükleme dozu (300-325 mg) ve günlük idame dozu (75-100 mg) ile birlikte.</li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
            <h6 class="dose-type-title">Böbrek Yetmezliği</h6>
            <ul class="dose-details-list simple-list">
                <li>Doz ayarlaması gerekmez. (Diyalizdeki Son Dönem Böbrek Yetmezliği hastaları dahil).</li>
            </ul>
            <h6 class="dose-type-title">Karaciğer Yetmezliği</h6>
            <ul class="dose-details-list simple-list">
                <li><strong>Hafif:</strong> Doz ayarlaması gerekmez.</li>
                <li><strong>Orta:</strong> Veriler sınırlıdır, dikkatli kullanılmalıdır.</li>
                <li><strong>Şiddetli:</strong> Kullanımından kaçınılmalıdır (Sistemik maruziyetin artması nedeniyle).</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Pediatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Güvenlik ve etkinlik belirlenmemiştir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir.</li>
                <li>Kanama ve trombotik olay riski, yaş ile birlikte arttığından, tedavi bireyselleştirilmelidir.</li>
            </ul>
        `
    }
},
{
    id: "kaptoprilContainer",
    isim: "Kaptopril",
    piyasaIsimleri: [
        "Kapril 25 mg 48 Tablet",
        "Kaptoril 25 mg 50 Tablet",
        "Kaptoril 50 mg 50 Tablet"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Akut Hipertansiyon</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 12.5-25 mg (PO); gerektiğinde tekrarlanabilir (PRN).</li>
            </ul>
            
            <h5 class="dose-condition-title">Hipertansiyon (Tek Başına veya Tiazid ile)</h5>
            <ul class="dose-details-list">
                <li><strong>Başlangıç:</strong> Başlangıçta 25 mg (PO) her 8-12 saatte bir. (Bazı hastalarda daha düşük başlanabilir).</li>
                <li><strong>İdame:</strong> 25-150 mg (PO) her 8-12 saatte bir.</li>
                <li><strong>Maksimum:</strong> 450 mg/gün.</li>
            </ul>

            <h5 class="dose-condition-title">Konjestif Kalp Yetmezliği (Diüretik ve Digitalis ile)</h5>
            <ul class="dose-details-list">
                <li><strong>Başlangıç:</strong> 6.25-12.5 mg (PO) her 8 saatte bir (q8hr).</li>
                <li><strong>Hedef Doz:</strong> 50 mg (PO) her 8 saatte bir.</li>
                <li><strong>Maksimum:</strong> 450 mg/gün.</li>
            </ul>

            <h5 class="dose-condition-title">Miyokard Enfarktüsü Sonrası Sol Ventrikül Disfonksiyonu</h5>
            <ul class="dose-details-list">
                <li><strong>Başlangıç:</strong> İlk olarak 6.25 mg (PO), ardından 12.5 mg (PO) q8hr.</li>
                <li><strong>Titrasyon:</strong> Sonraki birkaç gün içinde 25 mg (PO) q8hr'a çıkarılır.</li>
                <li><strong>Hedef Doz:</strong> 50 mg (PO) her 8 saatte bir.</li>
            </ul>

            <h5 class="dose-condition-title">Diyabetik Nefropati</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 25 mg (PO) her 8 saatte bir.</li>
            </ul>

            <h5 class="dose-condition-title">Dozlama Hususları</h5>
            <ul class="dose-details-list simple-list">
                <li>**Uygulama:** İlaç **aç karnına** alınmalıdır.</li>
                <li>Tam etkinin görülmesi haftalar sürebilir; düşük dozla başlanıp 1-2 haftada bir titre edilmelidir.</li>
                <li>Yüksek riskli hastalarda (HTN veya KKY olmasa bile) anjiyotensin dönüştürücü enzim (ACE) inhibitörüne başlanması düşünülebilir.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Hipertansiyon (Endikasyon Dışı)</h5>
            <h6 class="dose-type-title">Yenidoğanlar</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 0.05-0.1 mg/kg/doz (q8-24hr).</li>
                <li><strong>Titrasyon:</strong> 0.5 mg/kg/doz'a kadar titre edilebilir.</li>
            </ul>
            <h6 class="dose-type-title">Bebekler</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 0.15-0.3 mg/kg/doz.</li>
                <li><strong>Titrasyon:</strong> 1-4 bölünmüş dozda maksimum 6 mg/kg/gün'e kadar.</li>
            </ul>
            <h6 class="dose-type-title">Çocuklar</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 0.3-0.5 mg/kg/doz.</li>
                <li><strong>Titrasyon:</strong> q6-12hr bölünmüş maksimum 6 mg/kg/gün'e kadar.</li>
            </ul>
            <h6 class="dose-type-title">Adölesanlar</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 12.5-25 mg/doz (q8-12hr).</li>
                <li><strong>Titrasyon:</strong> Maksimum 450 mg/gün'e kadar (1-2 haftada bir 25 mg artırılarak).</li>
            </ul>
            <h5 class="dose-condition-title">Uygulama Notu</h5>
            <ul class="dose-details-list simple-list">
                <li>Aç karnına alınmalıdır.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Düşük başlangıç dozları düşünülmelidir.</li>
                <li>Böbrek fonksiyonundaki yaşa bağlı azalma nedeniyle doz titrasyonu yavaş yapılmalıdır.</li>
                <li>Hipertansiyon, KKY ve MI sonrası Sol Ventrikül Disfonksiyonu için dozajlar yetişkin dozlarıyla aynıdır ancak daha yavaş ve dikkatli titre edilmelidir.</li>
            </ul>
        `
    }
},
{
    id: "amlodipinContainer",
    isim: "Amlodipin",
    piyasaIsimleri: [
        "Amlodis 5 mg 20 Tablet",
        "Amlodis 10 mg 20 Tablet",
        "Amlokard 5 mg 30 Tablet",
        "Amlokard 5 mg 90 Tablet",
        "Amlokard 10 mg 30 Tablet",
        "Amlokard 10 mg 90 Tablet",
        "Dilopin 5 mg 20 Tablet",
        "Dilopin 5 mg 30 Tablet",
        "Dilopin 10 mg 20 Tablet",
        "Dilopin 10 mg 30 Tablet",
        "Monovas 5 mg 30 Tablet",
        "Monovas 5 mg 90 Tablet",
        "Monovas 10 mg 30 Tablet",
        "Monovas 10 mg 90 Tablet",
        "Nipidol 5 mg 20 Tablet",
        "Nipidol 5 mg 30 Tablet",
        "Nipidol 10 mg 20 Tablet",
        "Nipidol 10 mg 30 Tablet",
        "Norlopin 5 mg 20 Tablet",
        "Norlopin 10 mg 30 Tablet",
        "Normopres 5 mg 30 Tablet",
        "Normopres 10 mg 30 Tablet",
        "Norvasc 5 mg 30 Tablet",
        "Norvasc 5 mg 90 Tablet",
        "Norvasc 10 mg 30 Tablet",
        "Norvasc 10 mg 90 Tablet",
        "Penvasc 5 mg 30 Tablet",
        "Penvasc 10 mg 30 Tablet",
        "Vasocard 5 mg 30 Tablet",
        "Vasocard 10 mg 30 Tablet",
        "Vazkor 5 mg 20 Tablet",
        "Vazkor 5 mg 30 Tablet",
        "Vazkor 5 mg 90 Tablet",
        "Vazkor 10 mg 30 Tablet",
        "Vazkor 10 mg 90 Tablet"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Hipertansiyon, Anjina & Koroner Arter Hastalığı (KAH)</h5>
            <ul class="dose-details-list">
                <li>
                    <strong>Standart Doz</strong>
                    <ul>
                        <li><strong>Doz:</strong> Başlangıçta 5 mg/gün (PO).</li>
                        <li><strong>Titrasyon:</strong> Her 7-14 günde bir 2.5 mg/gün artırılabilir.</li>
                        <li><strong>İdame:</strong> 5-10 mg/gün.</li>
                        <li><strong>Maksimum:</strong> 10 mg/gün'ü aşmamalıdır.</li>
                    </ul>
                </li>
            </ul>
            
            <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
            <h6 class="dose-type-title">Böbrek Yetmezliği</h6>
            <ul class="dose-details-list simple-list">
                <li>Doz ayarlaması gerekmez (Farmakokinetiği böbrek yetmezliğinden önemli ölçüde etkilenmez).</li>
            </ul>
            <h6 class="dose-type-title">Karaciğer Yetmezliği</h6>
            <ul class="dose-details-list simple-list">
                <li>Karaciğer yetmezliği olan hastalar için daha düşük başlangıç dozu (**2.5 mg/gün PO**) düşünülmelidir.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Hipertansiyon (6-17 Yaş)</h5>
            <ul class="dose-details-list">
                <li>
                    <strong>Standart Doz</strong>
                    <ul>
                        <li><strong>Doz:</strong> 2.5-5 mg/gün (PO).</li>
                        <li><strong>Not:</strong> 5 mg/gün üzeri dozlar çalışılmamıştır.</li>
                    </ul>
                </li>
            </ul>
            <h5 class="dose-condition-title">< 6 Yaş</h5>
            <ul class="dose-details-list simple-list">
                <li>Güvenlik ve etkinlik belirlenmemiştir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Doz aralığının alt sınırında (**2.5-5 mg/gün PO** başlangıç) başlanmalıdır.</li>
                <li>Yaşlı hastalar, azalan renal, hepatik veya kardiyak fonksiyon sıklığı nedeniyle daha hassastır.</li>
                <li>Doz artışları yavaş ve dikkatli yapılmalıdır (Her 7-14 günde bir 2.5 mg).</li>
            </ul>
        `
    }
},
{
    id: "amiodaronContainer",
    isim: "Amiodaron HCL",
    piyasaIsimleri: [
        "Amidovin 150 mg/3 ml IV 6 Ampül",
        "Cordalin 150 mg 3 ml 6 Ampül",
        "Cordarone 150 mg 6 Ampül",
        "Cordarone BT 200 mg 30 Tablet"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Ventriküler Aritmiler (PO)</h5>
            <h6 class="dose-type-title">Oral Yükleme ve İdame</h6>
            <ul class="dose-details-list">
                <li><strong>Yükleme:</strong> 800-1600 mg (PO) qDay (1-3 hafta) (yanıt alınana kadar).</li>
                <li><strong>Azaltma:</strong> Yeterli aritmi kontrolünden sonra 600-800 mg/gün (1 ay).</li>
                <li><strong>İdame:</strong> 400 mg (PO) qDay.</li>
            </ul>

            <h5 class="dose-condition-title">Ventriküler Aritmiler (IV)</h5>
            <h6 class="dose-type-title">24 Saatlik Yükleme Protokolü (Toplam 1000 mg)</h6>
            <ul class="dose-details-list">
                <li><strong>Hızlı Yükleme:</strong> 150 mg (İlk 10 dakika üzerinde - 15 mg/dk).</li>
                <li><strong>Orta Hız Yükleme:</strong> Sonraki 6 saat boyunca 360 mg (1 mg/dk).</li>
                <li><strong>Yavaş İnfüzyon:</strong> Kalan 18 saat boyunca 540 mg (0.5 mg/dk).</li>
            </ul>
            <h6 class="dose-type-title">IV İdame</h6>
            <ul class="dose-details-list">
                <li><strong>İdame Hızı:</strong> 0.5 mg/dakika (Toplam 720 mg/24 saat).</li>
            </ul>
            
            <h5 class="dose-condition-title">ACLS: Nabızsız VF/VT (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>İlk Doz:</strong> 300 mg (IV veya IO puşe) (Defibrilasyon ve Epinefrin sonrası yanıtsızsa).</li>
                <li><strong>Tekrar (Gerekirse):</strong> 150 mg (IV) (q3-5min).</li>
            </ul>

            <h5 class="dose-condition-title">Stabil VT/Polimorfik VT (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Bolus:</strong> 150 mg (IV) (10 dakika üzerinde); q10min tekrarlanabilir.</li>
                <li><strong>İdame:</strong> 1 mg/dk (6 saat), ardından 0.5 mg/dk (18 saat).</li>
                <li><strong>Maksimum:</strong> 2.2 g/24 saati aşmamalı.</li>
            </ul>

            <h5 class="dose-condition-title">IV'den Oral'e Geçiş</h5>
            <ul class="dose-details-list simple-list">
                <li><strong><1 Hafta IV İnfüzyon:</strong> 800-1600 mg/gün PO.</li>
                <li><strong>1-3 Hafta IV İnfüzyon:</strong> 600-800 mg/gün PO.</li>
                <li><strong>>3 Hafta IV İnfüzyon:</strong> 400 mg/gün PO.</li>
            </ul>

            <h5 class="dose-condition-title">Formülasyon Uyarısı</h5>
            <ul class="dose-details-list simple-list">
                <li>Konvansiyonel IV preparatları (polisorbat 80 ve benzil alkol içerir).</li>
                <li>Yeni IV formülasyonları (Nexterone) bu koruyucuları içermez.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">İlaç Dirençli Aritmiler (PO)</h5>
            <ul class="dose-details-list">
                <li><strong>< 1 Yaş (Yüzey Alanı Bazlı):</strong> Yükleme 600-800 mg/1.73 m²; İdame 200-400 mg/1.73 m².</li>
                <li><strong>> 1 Yaş (Kilo Bazlı):</strong> Yükleme 10-15 mg/kg/gün; İdame 5 mg/kg/gün.</li>
            </ul>

            <h5 class="dose-condition-title">IV Uygulama (Genel)</h5>
            <ul class="dose-details-list">
                <li><strong>Yükleme Bolus:</strong> 5 mg/kg (IV) (30-60 dakika üzerinde).</li>
                <li><strong>İdame İnfüzyon:</strong> 0.005 mg/kg/dakika (Max 20 mcg/kg/dk).</li>
                <li><strong>Not:</strong> 24-48 saat içinde oral tedaviye geçiş düşünülmelidir.</li>
            </ul>

            <h5 class="dose-condition-title">Nabızsız VT veya VF (PALS Dozu)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 5 mg/kg (IV/IO) hızlı bolus (Max 300 mg/doz).</li>
                <li><strong>Tekrar:</strong> Akut tedavi sırasında 2 kez tekrarlanabilir (Maksimum 15 mg/kg).</li>
            </ul>

            <h5 class="dose-condition-title">Kritik Uyarı</h5>
            <ul class="dose-details-list simple-list">
                <li>Konvansiyonel IV amiodaron **benzil alkol** içerir. Yenidoğanlarda fatal "gasping sendromu" raporları bulunmaktadır.</li>
                <li>Hipotansiyon, bradikardi ve AV blok gibi dozla ilişkili yan etkiler yaygındır ve bazı vakalarda şiddetlidir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Yaşlı hastalar toksisiteye yatkın olabileceğinden, doz aralığının **alt sınırından** başlanması önerilir.</li>
                <li>Akciğer ve tiroid fonksiyonları dahil olmak üzere yan etkiler açısından yakından izlenmelidir.</li>
            </ul>
        `
    }
},
{
    id: "fenitoinSodyumContainer",
    isim: "Fenitoin Sodyum",
    piyasaIsimleri: [
        "Epanutin 100 mg 100 Kapsül",
        "Epdantoin 100 mg 100 Tablet",
        "Epitoin 250 mg/5 ml Ampül",
        "Toinex 250 mg/5 ml 5 Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Status Epileptikus</h5>
            <h6 class="dose-type-title">IV Uygulama</h6>
            <ul class="dose-details-list">
                <li><strong>Yükleme Dozu:</strong> 10-15 mg/kg VEYA 15-20 mg/kg (25-50 mg/dk hızında).</li>
                <li><strong>İdame Dozu:</strong> 100 mg (IV/PO) her 6-8 saatte bir (q6-8hr) (PRN).</li>
                <li><strong>Uygulama Hızı:</strong> IV uygulamada **50 mg/dakika** hızını aşmayın.</li>
            </ul>

            <h5 class="dose-condition-title">Antikonvülzan Tedavi (Tonik-Klonik ve Parsiyel Nöbetler)</h5>
            <h6 class="dose-type-title">Hemen Salınım (Tablet / Süspansiyon)</h6>
            <ul class="dose-details-list">
                <li><strong>Tablet Başlangıç:</strong> 100 mg (PO) günde üç kez (TID).</li>
                <li><strong>Süspansiyon Başlangıç:</strong> 125 mg (PO) günde üç kez (TID).</li>
                <li><strong>İdame:</strong> 300-400 mg/gün (Gerekirse 600 mg/gün'e artırılabilir).</li>
            </ul>
            <h6 class="dose-type-title">Uzatılmış Salınım (ER)</h6>
            <ul class="dose-details-list">
                <li><strong>Yükleme Dozu (Hızlı Etki İçin):</strong> 1 g (2 saat aralıklarla 400, 300, 300 mg olmak üzere 3 doza bölünür).</li>
                <li><strong>Tedavi (Yeni Başlayan):</strong> Başlangıçta 100 mg (PO) günde üç kez.</li>
            </ul>

            <h5 class="dose-condition-title">Dozlama Hususları</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>Titrasyon:</strong> Doz ayarlamaları gerektiğinde **7-10 günden** daha erken yapılmamalıdır.</li>
                <li><strong>Terapötik Aralık:</strong> 10-20 mcg/mL (Toplam) veya 1-2 mcg/mL (Serbest ilaç).</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Status Epileptikus</h5>
            <h6 class="dose-type-title">IV Uygulama</h6>
            <ul class="dose-details-list">
                <li><strong>Yükleme Dozu:</strong> 15-20 mg/kg (IV) (Tek veya bölünmüş doz).</li>
                <li><strong>Tekrar:</strong> Gerekirse yüklemeden 10 dakika sonra ek 5-10 mg/kg doz verilebilir.</li>
                <li><strong>IV Hızı:</strong> **1-3 mg/kg/dakika** hızını aşmayın.</li>
            </ul>

            <h5 class="dose-condition-title">Nöbet Kontrolü (Tonik-Klonik ve Komplike Parsiyel)</h5>
            <h6 class="dose-type-title">Başlangıç Dozu</h6>
            <ul class="dose-details-list">
                <li><strong>Yenidoğanlar:</strong> 5 mg/kg/gün (2 bölünmüş dozda).</li>
                <li><strong>6 Ay - 16 Yaş:</strong> 5 mg/kg/gün (2-3 bölünmüş dozda).</li>
            </ul>
            <h6 class="dose-type-title">İdame Dozu (Yaşa Göre Kılavuz)</h6>
            <ul class="dose-details-list simple-list">
                <li><strong>6 Ay-4 Yaş:</strong> 8-10 mg/kg/gün.</li>
                <li><strong>4-7 Yaş:</strong> 7.5-9 mg/kg/gün.</li>
                <li><strong>10-16 Yaş:</strong> 6-7 mg/kg/gün.</li>
                <li><strong>Maksimum:</strong> 300 mg/gün'ü aşmamalıdır.</li>
            </ul>
            <h5 class="dose-condition-title">Dozlama Hususları</h5>
            <ul class="dose-details-list simple-list">
                <li>**Potansiyel Toksik Doz (<6 yaş):** 20 mg/kg.</li>
                <li>Doz ayarlamaları **7-10 günden** daha erken yapılmamalıdır.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Yaşlı hastalar için düşük başlangıç dozları önerilir.</li>
                <li>Doz titrasyonu sırasında **MSS toksisitesi** (konfüzyon, ataksi) ve kardiyotoksisite (IV uygulama sırasında) riskine karşı dikkatli olunmalı ve hasta yakından izlenmelidir.</li>
            </ul>
        `
    }
},
{
    id: "pirasetamContainer",
    isim: "Pirasetam",
    piyasaIsimleri: [
        "Cerebrofil 1 gr 5 ml 12 Ampül",
        "Necetam 800 mg 30 Tablet",
        "Nootropil 1 gr 12 Ampül",
        "Nootropil 800 mg 30 Tablet",
        "Nootropil Şurup 200 ml",
        "Nootrover 1 g/5 ml 12 Ampül",
        "Nörotrop 1 g/5 ml 12 Ampül",
        "Opemin 800 mg 30 Tablet",
        "Opemin 1200 mg 40 Tablet",
        "Piramon 1 g/5 ml 12 Ampül",
        "Türktıpsan Pirasetam 1 g/5 ml 12 Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Vertigo (Baş Dönmesi)</h5>
            <h6 class="dose-type-title">Oral (PO) veya İntravenöz (IV)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz Aralığı:</strong> 2.4-4.8 g günlük.</li>
                <li><strong>Sıklık:</strong> 2-3 bölünmüş dozda.</li>
                <li><strong>IV Uygulama:</strong> Birkaç dakika süren enjeksiyon veya 24 saatlik sürekli infüzyon yoluyla.</li>
            </ul>

            <h5 class="dose-condition-title">Kortikal Miyoklonus</h5>
            <p>Monoterapi veya diğer anti-miyoklonik ilaçlarla kombinasyon halinde.</p>
            <h6 class="dose-type-title">Oral (PO) veya İntravenöz (IV)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç Dozu:</strong> Başlangıçta 7.2 g günlük (2 veya 3 bölünmüş dozda).</li>
                <li><strong>Titrasyon:</strong> Her 3-4 günde bir 4.8 g artırılır.</li>
                <li><strong>Maksimum:</strong> 24 g günlük (2-3 bölünmüş dozda).</li>
                <li><strong>Tedavinin Kesilmesi:</strong> Semptomlar kontrol altına alındıktan sonra dozu her 2 günde bir 1.2 g azaltın (Lance-Adams sendromu için 3-4 günde bir).</li>
            </ul>

            <h5 class="dose-condition-title">Bilişsel Bozukluk</h5>
            <h6 class="dose-type-title">Oral (PO) veya İntravenöz (IV)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz Aralığı:</strong> 1.2-4.8 g günlük.</li>
                <li><strong>Sıklık:</strong> 2-4 bölünmüş dozda.</li>
                <li><strong>Başlangıç Notu:</strong> Semptomların şiddetine bağlı olarak tedaviye 4.8 g günlük dozla başlanabilir.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Disleksi (8-13 Yaş)</h5>
            <p>Uygun önlemlerle (örn. konuşma terapisi) birlikte.</p>
            <h6 class="dose-type-title">Oral Solüsyon (200 mg/mL) veya Tablet (800 mg)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 3.2 g günlük.</li>
                <li><strong>Sıklık:</strong> 2 bölünmüş dozda.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz ve Hususlar</h5>
            <ul class="dose-details-list simple-list">
                <li>Böbrek fonksiyonunda yaşa bağlı azalma nedeniyle, yaşlı hastalarda doz ayarlaması (kreatinin klirensine göre) gerekebilir.</li>
                <li>Tedaviye düşük dozla başlanması önerilir.</li>
            </ul>
        `
    }
},
{
    id: "amoksisilinKlavulanikAsitContainer",
    isim: "Amoksisilin ve Klavulanik Asit",
    piyasaIsimleri: [
        "Aklav Bid Pediatrik Şurup 200 mg/28.5 mg",
        "Aklav Bid Pediatrik Şurup 200 mg/28.5 mg 100 ml",
        "Amoklavin BID 625 mg 10 Tablet",
        "Amoklavin BID 625 mg 14 Tablet",
        "Amoklavin BID 1000 mg 10 Tablet",
        "Amoklavin BID 1000 mg 14 Tablet",
        "Amoklavin BID Fort Şurup 400/57 140 ml",
        "Amoklavin BID Şurup 200/28 mg 70 ml",
        "Amoklavin BID Şurup 200/28 mg 100 ml",
        "Amoklavin BID Şurup 400/57 mg 35 ml",
        "Amoklavin BID Şurup 400/57 mg 70 ml",
        "Amoklavin BID Şurup 400/57 mg 100 ml",
        "Amoklavin Es 600/42.9 mg 150 ml",
        "Amoklavin Es Şurup 600/42.9 mg 100 ml",
        "Amoklavin İğne IV 1.2 g 1 Flakon",
        "Augmentin 200/28 70 ml Süspansiyon",
        "Augmentin 400/57 100 ml",
        "Augmentin 400/57 mg 70 ml",
        "Augmentin 500 mg/125 mg 10 Tablet",
        "Augmentin 500 mg/125 mg 14 Tablet",
        "Augmentin 875 mg/125 mg 10 Tablet",
        "Augmentin 875 mg/125 mg 14 Tablet",
        "Augmentin Bid 200/28 100 ml",
        "Augmentin Es 600/42.9 mg 100 ml Süspansiyon",
        "Bioment BID Forte Şurup 400/57 mg 70 ml",
        "Bioment BID Şurup 200/28 mg 70 ml",
        "Croxilex-BID Şurup 400/57 mg 140 ml",
        "Croxilex-Bid 200/28 Şurup 100 ml",
        "Croxilex-Bid 400/57 Şurup 100 ml",
        "Croxilex-Bid 625 mg 10 Tablet",
        "Croxilex-Bid 625 mg 14 Tablet",
        "Croxilex-Bid 1000 mg 10 Tablet",
        "Croxilex-Bid 1000 mg 14 Tablet",
        "Croxilex-Bid Fort Şurup",
        "Croxilex Şurup 200/28",
        "Klamoks 625 mg 10 Tablet",
        "Klamoks Bid 200 100 ml",
        "Klamoks Bid 400 100 ml",
        "Klamoks Bid 1000 mg 10 Tablet",
        "Klamoks Bid 1000 mg 14 Tablet",
        "Klamoks Bid Fort Şurup 70 ml",
        "Klamoks Bid Fort Şurup 140 ml",
        "Klamoks Bid Şurup 200 mg 70 ml",
        "Klamoks ES Şurup 600/42.9 mg 100 ml",
        "Klamoks Es 600/42.9 mg 150 ml",
        "Klavon Bid 1000 mg 10 Tablet",
        "Klavon Bid 1000 mg 14 Tablet",
        "Klavon ES Şurup 600/42.9 mg 100 ml",
        "Klavunat 625 mg 10 Tablet",
        "Klavunat Bid 200/28 mg Şurup 70 ml",
        "Klavunat Bid 200/28 mg Şurup 100 ml",
        "Klavunat Bid 400/57 mg Şurup 70 ml",
        "Klavunat Bid 400/57 mg Şurup 100 ml",
        "Klavunat Bid 1000 mg 10 Tablet",
        "Klavunat Bid 1000 mg 14 Tablet",
        "Klavunat Fort Şurup 100 ml",
        "Klavunat Şurup 156.2 mg 100 ml"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Alt Solunum Yolu Enfeksiyonları</h5>
            <h6 class="dose-type-title">Hafif-Orta</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 500/125 mg (PO) q12hr VEYA 250/125 mg (PO) q8hr (10 gün).</li>
            </ul>
            <h6 class="dose-type-title">Şiddetli (veya KOAH)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 875/125 mg (PO) q12hr VEYA 500/125 mg (PO) q8hr VEYA 2000 mg (2 ER tablet) PO q12hr (7-10 gün).</li>
            </ul>

            <h5 class="dose-condition-title">Akut Bakteriyel Sinüzit</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 2000 mg (2 ER tablet) PO q12hr (10 gün).</li>
            </ul>

            <h5 class="dose-condition-title">Isırık Yaraları, Erizipel, Piyelonefrit, Cilt Absesi</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 875 mg (PO) q12hr VEYA 500 mg (PO) q8hr (Süreye göre değişir).</li>
            </ul>

            <h5 class="dose-condition-title">Diyabetik Ayak (Hafif-Orta)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 2000 mg (2 ER tablet) PO q12hr (7-14 gün).</li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
            <h6 class="dose-type-title">Böbrek Yetmezliği</h6>
            <ul class="dose-details-list simple-list">
                <li><strong>CrCl <30 mL/dk:</strong> 875/125 mg tablet veya ER tablet **KULLANILMAZ**.</li>
                <li><strong>CrCl 10-30 mL/dk:</strong> 250-500/125 mg (PO) q12hr.</li>
                <li><strong>CrCl <10 mL/dk:</strong> 250-500/125 mg (PO) q24hr.</li>
                <li><strong>Hemodiyaliz:</strong> 250-500/125 mg (PO) q24hr (Diyaliz sırasında ve sonunda ek doz verilir).</li>
            </ul>
            <h6 class="dose-type-title">Karaciğer Yetmezliği</h6>
            <ul class="dose-details-list simple-list">
                <li>Dikkatli dozlayın; hepatik fonksiyonu düzenli olarak izleyin.</li>
            </ul>
            
            <h5 class="dose-condition-title">Uygulama Notları</h5>
            <ul class="dose-details-list simple-list">
                <li>Gastrointestinal rahatsızlığı önlemek için **yemeklerle** birlikte alın.</li>
                <li>Süspansiyon formu emilimi artırmak için yemeğin başlangıcında alınmalıdır.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Genel Dozaj (Amoksisilin Bileşenine Göre)</h5>
            <h6 class="dose-type-title">Yenidoğan ve Bebekler (<3 Ay)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 30 mg/kg/gün (q12hr bölünmüş).</li>
                <li><strong>Form:</strong> 125 mg/31.25 mg/5 mL süspansiyon kullanılmalıdır.</li>
            </ul>

            <h6 class="dose-type-title">Daha Şiddetli Enfeksiyonlar (Otitis Media, Sinüzit, ASYE) (>3 Ay, <40 kg)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz 1:</strong> 45 mg/kg/gün (PO) q12hr bölünmüş (200/28.5 mg/5 mL veya 400/57 mg/5 mL süspansiyon).</li>
                <li><strong>Doz 2:</strong> 40 mg/kg/gün (PO) q8hr bölünmüş (125/31.25 mg/5 mL veya 250/62.5 mg/5 mL süspansiyon).</li>
            </ul>
            
            <h6 class="dose-type-title">Daha Az Şiddetli Enfeksiyonlar (>3 Ay, <40 kg)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz 1:</strong> 25 mg/kg/gün (PO) q12hr bölünmüş.</li>
                <li><strong>Doz 2:</strong> 20 mg/kg/gün (PO) q8hr bölünmüş.</li>
            </ul>

            <h5 class="dose-condition-title">Önemli Kontraendikasyonlar</h5>
            <ul class="dose-details-list simple-list">
                <li><strong><40 kg Çocuklar:</strong> Amoksisilin-Klavulanat oranları farklı olduğundan, 250 mg/125 mg tablet KULLANILMAMALIDIR (aşırı klavulanik asit nedeniyle ciddi ishal riski).</li>
                <li><strong>Fenilketonüri:</strong> Aspartam içerdiği için 200/28.5 mg/5 mL ve 400/57 mg/5 mL süspansiyonları ve çiğnenebilir tabletleri KULLANILMAMALIDIR.</li>
                <li>**≥40 kg:** Yetişkin doz önerilerine göre dozlanır.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Böbrek fonksiyonu sıklıkla azaldığından, böbrek yetmezliği modifikasyonları (Bkz. Yetişkin Dozaj Modifikasyonları) dikkatle uygulanmalıdır.</li>
                <li>Oral formu alırken gastrointestinal tolerans yakından izlenmelidir.</li>
            </ul>
        `
    }
},
{
    id: "siprofloksasinContainer",
    isim: "Siprofloksasin",
    piyasaIsimleri: [
        "Ciflosin 200 mg IV Solüsyon 100 ml",
        "Ciflosin 500 mg 10 Tablet",
        "Ciflosin 750 mg 14 Tablet",
        "Ciprasid 500 mg 14 Tablet",
        "Ciprasid 750 mg 14 Tablet",
        "Cipro 200 mg IV 1 Flakon",
        "Cipro 250 mg 14 Tablet",
        "Cipro 400 mg/200 ml IV Flakon",
        "Cipro 500 mg 14 Tablet",
        "Cipro 750 mg 14 Tablet",
        "Ciproktan 200 mg/100 ml IV Flakon",
        "Ciproktan 400 mg/200 ml 1 Flakon",
        "Cipronatin 500 mg 14 Tablet",
        "Cipronatin 750 mg 14 Tablet",
        "Cipropol Serum %0.9 Sodyum Klorür 100 ml",
        "Cipropol Serum %0.9 Sodyum Klorür 200 ml",
        "Flotic 200 mg/100 ml IV 1 Flakon",
        "Flotic 400 mg/200 ml IV 1 Flakon",
        "Novarex 200 mg/100 ml 1 Flakon",
        "Roxin 500 mg 14 Tablet",
        "Roxin 750 mg 14 Tablet",
        "Selfleks Ciprasel 200 mg/100 ml IV 100 ml",
        "Sifloks 500 mg 14 Tablet",
        "Sifloks 750 mg 14 Tablet",
        "Siplone 500 mg 10 Tablet",
        "Siprosan 500 mg 14 Tablet"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Akut Sinüzit, Alt Solunum Yolu Enfeksiyonları, KBYA</h5>
            <p><strong>Kısıtlama:</strong> Florokinolonlar, mevcut başka tedavi seçeneği olmayan hastalara saklanmalıdır.</p>
            <ul class="dose-details-list">
                <li><strong>Hafif/Orta:</strong> 500 mg (PO) q12hr VEYA 400 mg (IV) q12hr (7-14 gün).</li>
                <li><strong>Şiddetli/Komplike (ASYE):</strong> 750 mg (PO) q12hr VEYA 400 mg (IV) q8hr (7-14 gün).</li>
            </ul>

            <h5 class="dose-condition-title">Kemik & Eklem Enfeksiyonları</h5>
            <ul class="dose-details-list">
                <li><strong>Hafif/Orta:</strong> 500 mg (PO) q12hr VEYA 400 mg (IV) q12hr (≥4-6 hafta).</li>
                <li><strong>Şiddetli/Komplike:</strong> 750 mg (PO) q12hr VEYA 400 mg (IV) q8hr (≥4-6 hafta).</li>
            </ul>

            <h5 class="dose-condition-title">İdrar Yolu Enfeksiyonları (İYE)</h5>
            <p><strong>Kısıtlama:</strong> Komplike olmayan İYE için florokinolonları başka tedavi seçeneği olmayan hastalara saklayın.</p>
            <ul class="dose-details-list">
                <li><strong>Akut Komplike Olmayan (IR):</strong> 250 mg (PO) q12hr (3 gün).</li>
                <li><strong>Şiddetli/Komplike:</strong> 500 mg (PO) q12hr VEYA 400 mg (IV) q12hr (7-14 gün).</li>
            </ul>

            <h5 class="dose-condition-title">Kronik Bakteriyel Prostatit</h5>
            <ul class="dose-details-list">
                <li><strong>Hafif/Orta:</strong> 500 mg (PO) q12hr VEYA 400 mg (IV) q12hr (28 gün).</li>
            </ul>

            <h5 class="dose-condition-title">Diğer Enfeksiyonlar</h5>
            <ul class="dose-details-list">
                <li><strong>Enfeksiyöz İshal:</strong> 500 mg (PO) q12hr (5-7 gün).</li>
                <li><strong>Ateşli Nötropeni (Ampirik):</strong> 400 mg (IV) q8hr (7-14 gün).</li>
                <li><strong>Komplike İntra-abdominal Enf.:</strong> 500 mg (PO) q12hr VEYA 400 mg (IV) q12hr (7-14 gün).</li>
                <li><strong>Nozokomiyal Pnömoni:</strong> 400 mg (IV) q8hr (10-14 gün).</li>
                <li><strong>Cilt Enfeksiyonları (Şiddetli):</strong> 750 mg (PO) q12hr VEYA 400 mg (IV) q8hr (7-14 gün).</li>
                <li><strong>Şarbon (Maruziyet Sonrası):</strong> 500 mg (PO) q12hr VEYA 400 mg (IV) q12hr (60 gün).</li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları (Böbrek Yetmezliği)</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>CrCl 30-50 mL/dk:</strong> IR: 250-500 mg (PO) q12hr; IV: 400 mg (IV) q8-12hr.</li>
                <li><strong>CrCl 5-29 mL/dk:</strong> IR: 250-500 mg (PO) q18hr; IV: 200-400 mg (IV) q12-24hr.</li>
                <li><strong>Diyaliz:</strong> Diyalizden sonra uygulayın. IR: 250-500 mg (PO) q24hr; IV: 200-400 mg (IV) q24hr.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Komplike İYE veya Piyelonefrit (≥1 Yaş)</h5>
            <ul class="dose-details-list">
                <li><strong>IV:</strong> 6-10 mg/kg q8hr (Max 400 mg/doz) (10-21 gün).</li>
                <li><strong>PO:</strong> 10-20 mg/kg q12hr (Max 750 mg q12hr) (10-21 gün).</li>
            </ul>

            <h5 class="dose-condition-title">Veba (Plague) (Doğumdan 17 Yaşa)</h5>
            <ul class="dose-details-list">
                <li><strong>PO:</strong> 15 mg/kg q8-12hr x 10-21 gün (Max 500 mg/doz).</li>
                <li><strong>IV:</strong> 10 mg/kg q8-12hr x 10-21 gün (Max 400 mg/doz).</li>
            </ul>

            <h5 class="dose-condition-title">İnhalasyon Şarbonu (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>IV (Maruziyet Sonrası):</strong> 10 mg/kg q12hr (Max 400 mg/doz) (60 gün).</li>
                <li><strong>PO (Maruziyet Sonrası):</strong> 15 mg/kg q12hr (Max 500 mg/doz) (60 gün).</li>
                <li><strong>Not:</strong> Penisilin duyarlılığı teyit edilir edilmez amoksisilin'e geçilmelidir.</li>
            </ul>
            
            <h5 class="dose-condition-title">Kistik Fibrozis (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>PO:</strong> 40 mg/kg/gün (q12hr bölünmüş) (Max 2 g/gün).</li>
                <li><strong>IV:</strong> 20-30 mg/kg/gün (q8-12hr bölünmüş) (Max 1.2 g/gün).</li>
            </ul>

            <h5 class="dose-condition-title">< 1 Yaş</h5>
            <ul class="dose-details-list simple-list">
                <li>Güvenlik ve etkinlik belirlenmemiştir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Yaşlı hastalarda, böbrek fonksiyonunda azalma sıklığı nedeniyle dozajın **kreatinin klirensine göre** ayarlanması önemlidir (Bkz. Yetişkin Dozaj Modifikasyonları).</li>
                <li>Santral sinir sistemi (MSS) ve tendon yan etkileri açısından yaşlı hastalar yakından izlenmelidir.</li>
            </ul>
        `
    }
},
{
    id: "trimetoprimSulfametoksazolContainer",
    isim: "Trimetoprim ve Sülfametoksazol (TMP/SMX)",
    piyasaIsimleri: [
        "Bactrim 30 Tablet",
        "Bactrim Ampül 400 mg/80 mg 1 Ampül",
        "Bactrim Forte 20 Tablet",
        "Bactrim Şurup 200 mg/40 mg 100 ml Süspansiyon",
        "Kemoprim 30 Tablet",
        "Kemoprim Fort 20 Tablet",
        "Kemoprim Süspansiyon 100 ml",
        "Metoprim 30 Tablet",
        "Metoprim Fort 20 Tablet",
        "Trimoks 30 Tablet",
        "Trimoks Fort 20 Tablet",
        "Trimoks Pediatrik Süspansiyon 100 ml"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Genel Enfeksiyonlar (Hafif-Orta)</h5>
            <h6 class="dose-type-title">Oral</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 1-2 DS (Çift Güçlü) tablet (PO)</li>
                <li><strong>Sıklık:</strong> Her 12-24 saatte bir.</li>
            </ul>
            <h6 class="dose-type-title">İntravenöz (IV)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 8-20 mg TMP/kg/gün (IV)</li>
                <li><strong>Sıklık:</strong> Her 6-12 saatte bir bölünmüş dozlarda.</li>
            </ul>

            <h5 class="dose-condition-title">Pneumocystis Jiroveci Pnömonisi (PJP/PCP)</h5>
            <h6 class="dose-type-title">Tedavi</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 15-20 mg TMP/kg/gün (PO/IV)</li>
                <li><strong>Sıklık:</strong> Her 6-8 saatte bir bölünmüş dozlarda (21 gün).</li>
            </ul>
            <h6 class="dose-type-title">Profilaksi (Önleme)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 80-160 mg TMP (PO)</li>
                <li><strong>Sıklık:</strong> Günde bir VEYA haftada 3 kez (ardışık veya gün aşırı).</li>
            </ul>

            <h5 class="dose-condition-title">Spesifik Enfeksiyonlar</h5>
            <ul class="dose-details-list">
                <li><strong>Kronik Bronşit Akut Alevlenmesi:</strong> 1 DS tablet (PO) q12hr x 10-14 gün.</li>
                <li><strong>Menenjit/Sepsis:</strong> 10-20 mg TMP/kg/gün (IV) q6-12hr bölünmüş. (Sepsis için 20 mg/kg/gün q6hr bölünmüş).</li>
                <li><strong>Şigelloz / Seyahat İshali:</strong> 1 DS tablet (PO) q12hr x 5 gün.</li>
                <li><strong>İYE (Piyelonefrit/Prostatit):</strong> 1 DS tablet (veya 2 normal tablet) PO q12hr x 14 gün (Kronik: 2-3 ay). Akut sistit: 3-5 gün.</li>
                <li><strong>Akne Vulgaris (Endikasyon Dışı):</strong> 1 DS tablet (veya 1 normal tablet) PO qDay veya q12hr (18 haftaya kadar).</li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları (Böbrek Yetmezliği)</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>CrCl >30 mL/dk:</strong> Doz ayarlaması gerekmez.</li>
                <li><strong>CrCl 15-30 mL/dk:</strong> Dozu %50 azaltın.</li>
                <li><strong>CrCl <15 mL/dk:</strong> Kullanılmamalıdır.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Akut Otitis Media / Hafif-Orta Enfeksiyonlar (>2 Ay)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 8 mg TMP/kg/gün (PO) (Otit için 6-10 mg TMP/kg/gün)</li>
                <li><strong>Sıklık:</strong> Her 12 saatte bir (q12hr) bölünmüş (10 gün).</li>
            </ul>

            <h5 class="dose-condition-title">Ciddi Enfeksiyonlar (Pnömoni, Sepsis, vb.) (>2 Ay)</h5>
            <ul class="dose-details-list">
                <li><strong>PO:</strong> 15-20 mg TMP/kg/gün (PO) q6hr bölünmüş.</li>
                <li><strong>IV:</strong> 8-12 mg TMP/kg/gün (IV) q6-12hr bölünmüş.</li>
            </ul>

            <h5 class="dose-condition-title">Pneumocystis Jiroveci Pnömonisi (PJP/PCP) (>2 Ay)</h5>
            <ul class="dose-details-list">
                <li><strong>Tedavi:</strong> 15-20 mg TMP/kg/gün (PO/IV) q6-8hr bölünmüş (21 gün).</li>
                <li><strong>Profilaksi:</strong> 150 mg TMP/m²/gün (PO) q12hr bölünmüş (Haftada 3 gün).</li>
            </ul>
            
            <h5 class="dose-condition-title">Şigelloz / İYE (>2 Ay)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 8 mg TMP/kg/gün (PO) q12hr bölünmüş.</li>
                <li><strong>Süre:</strong> Şigelloz 5 gün; İYE 7-14 gün.</li>
            </ul>

            <h5 class="dose-condition-title">Kritik Notlar</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>< 2 Ay:</strong> Kontrendikedir (Kullanılmamalıdır).</li>
                <li><strong>Toplum Kökenli MRSA Cilt Enf. (Endikasyon Dışı):</strong> 8-12 mg TMP/kg/gün (PO) q12hr bölünmüş (5-10 gün).</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Yaşlı hastalar, özellikle böbrek fonksiyonunda azalma ve folat eksikliği riski nedeniyle yan etkilere karşı daha hassastır.</li>
                <li>Dozaj, **kreatinin klirensine (CrCl)** göre ayarlanmalıdır (Bkz. Yetişkin Dozaj Modifikasyonları).</li>
                <li>Genellikle doz aralığının alt sınırında başlanması önerilir.</li>
            </ul>
        `
    }
},
{
    id: "betahistinContainer",
    isim: "Betahistin",
    piyasaIsimleri: [
        "Betaserc 8 mg 30 Tablet",
        "Betaserc 16 mg 30 Tablet",
        "Betaserc 24 mg 20 Tablet",
        "Betaserc 24 mg 60 Tablet",
        "Betaserc 24 mg 100 Tablet",
        "Moreserc 16 mg 30 Tablet",
        "Moreserc 24 mg 30 Tablet",
        "Moreserc 24 mg 60 Tablet",
        "Tinserc 8 mg 30 Tablet",
        "Tinserc 16 mg 30 Tablet",
        "Tinserc BID 24 mg 30 Tablet",
        "Tinserc BID 24 mg 60 Tablet",
        "Tinserc BID 24 mg 100 Tablet",
        "Vasoserc 8 mg 30 Tablet",
        "Vasoserc 16 mg 30 Tablet",
        "Vasoserc Bid 24 mg 30 Tablet",
        "Vasoserc Bid 24 mg 60 Tablet",
        "Vasoserc Bid 24 mg 90 Tablet"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Meniere Hastalığı (Vertigo, Tinnitus, İşitme Kaybı)</h5>
            <h6 class="dose-type-title">Betahistin Dihidroklorür Formu (PO)</h6>
            <ul class="dose-details-list">
                <li>
                    <strong>Başlangıç Dozu</strong>
                    <ul>
                        <li><strong>Doz:</strong> 8-16 mg</li>
                        <li><strong>Sıklık:</strong> Günde üç kez (tid).</li>
                    </ul>
                </li>
                <li>
                    <strong>İdame Dozu</strong>
                    <ul>
                        <li><strong>Doz:</strong> 24-48 mg günlük</li>
                        <li><strong>Sıklık:</strong> Bölünmüş dozlarda.</li>
                    </ul>
                </li>
            </ul>
            <h6 class="dose-type-title">Betahistin Mezilat Formu (PO)</h6>
            <ul class="dose-details-list">
                <li>
                    <strong>Standart Doz</strong>
                    <ul>
                        <li><strong>Doz:</strong> 6-12 mg</li>
                        <li><strong>Sıklık:</strong> Günde üç kez (tid).</li>
                    </ul>
                </li>
            </ul>
            <ul class="dose-details-list simple-list">
                <li>Dozlar hasta ihtiyacına göre ayarlanmalıdır.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Pediatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>18 yaş altı çocuklarda güvenlik ve etkinlik verileri yetersizdir. Kullanımı önerilmez.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır, ancak dikkatli olunmalıdır.</li>
            </ul>
        `
    }
},
{
    id: "sennosidContainer",
    isim: "Sennosid (Senna)",
    piyasaIsimleri: [
        "Laxeno 1.5 mg/ml 150 ml",
        "Laxeno 1.5 mg/ml Oral Çözelti 250 ml",
        "Laxeno Diet 1.5 mg/ml 150 ml",
        "Laxeno Diet 1.5 mg/ml 250 ml",
        "Sennalax 20 mg 20 Tablet",
        "Sennalax 20 mg 30 Tablet",
        "Sennotab 20 mg 40 Tablet",
        "X-M 20 mg 40 Tablet",
        "X-M Diet Çözelti 150 ml",
        "X-M Diet Çözelti 250 ml",
        "X-M Solüsyon 150 ml",
        "X-M Solüsyon 250 ml"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Kabızlık</h5>
            <h6 class="dose-type-title">Oral (Sennosid)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 15 mg (PO) günde bir kez.</li>
                <li><strong>Maksimum:</strong> Günde 70-100 mg (q12hr bölünmüş).</li>
                <li><strong>Süre:</strong> 1 haftadan uzun süre kullanılmamalıdır.</li>
            </ul>
            <h6 class="dose-type-title">Oral (Senna Yaprağı Ekstresi)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 362-1056 mg (PO) günde bir kez.</li>
            </ul>

            <h5 class="dose-condition-title">Bağırsak Hazırlığı (Prosedür Öncesi)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 130 mg (PO)</li>
                <li><strong>Zamanlama:</strong> Prosedürden önceki gün öğleden sonra 14:00-16:00 arasında.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Kabızlık (Sennosid)</h5>
            <h6 class="dose-type-title">Oral</h6>
            <ul class="dose-details-list">
                <li><strong>2-6 Yaş:</strong> 4.3-17.2 mg/gün (PO) (Maksimum 17.2 mg/gün).</li>
                <li><strong>6-12 Yaş:</strong> 6-50 mg/gün (PO) (Maksimum 50 mg/gün).</li>
                <li><strong>>12 Yaş:</strong> 12-100 mg/gün (PO) (Maksimum 100 mg/gün).</li>
            </ul>
            
            <h5 class="dose-condition-title">Senna Yaprağı Ekstresi</h5>
            <h6 class="dose-type-title">Oral</h6>
            <ul class="dose-details-list">
                <li><strong>2-6 Yaş:</strong> 166.5-666 mg/gün (PO).</li>
                <li><strong>6-12 Yaş:</strong> 333-999 mg/gün (PO).</li>
            </ul>
            <ul class="dose-details-list simple-list">
                <li>**Uyarı:** 1 haftadan uzun süre kullanılmamalıdır.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Yaşlı hastalar dehidrasyon ve elektrolit dengesizliğine daha duyarlı olduğundan, en düşük etkili dozun kullanılması ve sıvı/elektrolit durumunun izlenmesi önerilir.</li>
                <li>Tedavi süresi 1 haftadan kısa tutulmalıdır.</li>
            </ul>
        `
    }
},
{
    id: "flurbiprofenContainer",
    isim: "Flurbiprofen",
    piyasaIsimleri: [
        "Algopet 100 mg 15 Tablet",
        "Algopet SR 200 mg 16 Kapsül",
        "Fortine 100 mg 15 Tablet",
        "Majezik 100 mg 15 Tablet",
        "Majezik SR 200 mg Mikropellet 16 Kapsül",
        "Maxaljin 100 mg 15 Tablet",
        "Maximus 100 mg 15 Tablet",
        "Netfen SR 200 mg 16 Kapsül",
        "Projezik 100 mg 15 Tablet",
        "Zero-P 100 mg 15 Tablet",
        "Zero-P SR 200 mg 15 Kapsül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Romatoid Artrit ve Osteoartrit</h5>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list">
                <li>
                    <strong>Standart Doz</strong>
                    <ul>
                        <li><strong>Doz:</strong> 200-300 mg/gün</li>
                        <li><strong>Sıklık:</strong> Her 6-12 saatte bir (q6-12hr) bölünmüş.</li>
                        <li><strong>Maksimum:</strong> 100 mg/doz veya 300 mg/gün'ü aşmamalı.</li>
                    </ul>
                </li>
            </ul>
            
            <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
            <h6 class="dose-type-title">Böbrek Yetmezliği</h6>
            <ul class="dose-details-list simple-list">
                <li><strong>Şiddetli Yetmezlik:</strong> Kullanımı önerilmez.</li>
            </ul>
            
            <h5 class="dose-condition-title">Dozlama Hususları</h5>
            <ul class="dose-details-list simple-list">
                <li>Gastrointestinal (GI) yan etkilerden kaçınmak için **yemekle veya 8-12 oz su ile** alın.</li>
                <li>**Endikasyon Dışı:** Dismenore (adet sancısı).</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Pediatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>12 yaş altı çocuklar için kullanımı önerilmez.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>Standart Doz:</strong> 200-300 mg/gün (q6-12hr bölünmüş).</li>
                <li>Yaşlı hastalar NSAİİ'lerin GI ve renal toksisite gibi yan etkilerine karşı daha duyarlıdır.</li>
                <li>En düşük etkili doz, en kısa süre için kullanılmalıdır.</li>
            </ul>
        `
    }
},
{
    id: "bilastinContainer",
    isim: "Bilastin",
    piyasaIsimleri: [
        "Bilaxten 20 mg 20 Tablet",
        "Lasirin 20 mg 20 Tablet"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Alerjik Rinit (Mevsimsel ve Pereniyal) ve Ürtiker</h5>
            <h6 class="dose-type-title">Oral (Konvansiyonel Tablet)</h6>
            <ul class="dose-details-list">
                <li>
                    <strong>Standart Doz</strong>
                    <ul>
                        <li><strong>Doz:</strong> 20 mg</li>
                        <li><strong>Sıklık:</strong> Günde bir kez.</li>
                    </ul>
                </li>
            </ul>
            <h5 class="dose-condition-title">Tedavi Süresi Notları</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>Mevsimsel Alerjik Rinit:</strong> Semptomlar çözüldükten sonra kesilir; semptomlar tekrar ortaya çıkarsa yeniden başlanır.</li>
                <li><strong>Pereniyal Alerjik Rinit:</strong> Alerjen maruziyet süreleri boyunca tedaviye devam edilebilir.</li>
                <li><strong>Ürtiker:</strong> Tedavi süresi şikayetlerin türüne, süresine ve seyrine bağlı olarak değişebilir.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Alerjik Rinit ve Ürtiker (6-11 Yaş)</h5>
            <h6 class="dose-type-title">Oral (Ağızda Dağılan Tablet/Solüsyon)</h6>
            <ul class="dose-details-list">
                <li>
                    <strong>Yaş/Kilo:</strong> 6-11 yaş (En az 20 kg).
                    <ul>
                        <li><strong>Doz:</strong> 10 mg</li>
                        <li><strong>Sıklık:</strong> Günde bir kez.</li>
                    </ul>
                </li>
            </ul>
            <h5 class="dose-condition-title">≥12 Yaş</h5>
            <ul class="dose-details-list simple-list">
                <li>Yetişkin dozuyla aynıdır (20 mg günde bir kez).</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozu kullanılır.</li>
            </ul>
        `
    }
},
{
    id: "lansoprazolContainer",
    isim: "Lansoprazol",
    piyasaIsimleri: [
        "Arinna 40 mg 28 Tablet",
        "Aprazol 30 mg 14 Kapsül",
        "Aprazol 30 mg 28 Kapsül",
        "Degastrol 15 mg 28 Kapsül",
        "Degastrol 30 mg 14 Kapsül",
        "Degastrol 30 mg 28 Kapsül",
        "Helicol 30 mg 28 Mikropellet Kapsül",
        "Lansazol 30 mg 28 Mikropellet Kapsül",
        "Lansoprol 15 mg 28 Kapsül",
        "Lansoprol 30 mg 14 Kapsül",
        "Lansoprol 30 mg 28 Kapsül",
        "Lansor 15 mg 30 Kapsül",
        "Lansor 30 mg 14 Kapsül",
        "Lansor 30 mg 28 Kapsül",
        "Lansoter 30 mg 28 Kapsül",
        "Lanzedin 30 mg 14 Mikropellet Kapsül",
        "Lanzedin 30 mg 28 Mikropellet Kapsül",
        "Lapilori 30 mg 28 Mikropellet Kapsül",
        "Opagis 30 mg 14 Kapsül",
        "Opagis 30 mg 28 Mikropellet Kapsül",
        "Pepticer 30 mg 14 Kapsül",
        "Pepticer 30 mg 28 Kapsül",
        "Vogast 30 mg 28 Mikropellet Kapsül",
        "Zoprol 30 mg 28 Mikropellet Kapsül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Duodenal Ülser</h5>
            <ul class="dose-details-list">
                <li><strong>Aktif Ülser:</strong> 15 mg (PO) günde bir kez (4 hafta).</li>
                <li><strong>İdame:</strong> 15 mg (PO) günde bir kez.</li>
            </ul>

            <h5 class="dose-condition-title">Gastrik Ülser & NSAİİ İlişkili Ülser</h5>
            <ul class="dose-details-list">
                <li><strong>Gastrik Ülser:</strong> 30 mg (PO) günde bir kez (8 hafta).</li>
                <li><strong>NSAİİ İlişkili Ülser Tedavisi:</strong> 30 mg (PO) günde bir kez (8 hafta).</li>
                <li><strong>NSAİİ İlişkili Ülser Önleme:</strong> 15 mg (PO) günde bir kez (12 hafta).</li>
            </ul>

            <h5 class="dose-condition-title">Gastroözofageal Reflü Hastalığı (GÖRH)</h5>
            <ul class="dose-details-list">
                <li><strong>GÖRH (Non-erozif):</strong> 15 mg (PO) günde bir kez (8 hafta).</li>
                <li><strong>Erozif Özofajit (EE) Tedavisi:</strong> 30 mg (PO) günde bir kez (8-16 hafta).</li>
                <li><strong>EE İyileşme İdamesi:</strong> 15 mg (PO) günde bir kez.</li>
            </ul>

            <h5 class="dose-condition-title">Helicobacter Pylori Enfeksiyonu (Üçlü Terapi)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Rejim:</strong> Lansoprazol 30 mg + Amoksisilin 1 g + Klaritromisin 500 mg (PO)</li>
                <li><strong>Sıklık:</strong> Her 12 saatte bir (q12hr) (10-14 gün).</li>
            </ul>
            <ul class="dose-details-list simple-list">
                <li><strong>Penisilin Alerjisi:</strong> Lansoprazol 30 mg + Klaritromisin 500 mg + Metronidazol 500 mg (PO) q12hr (10-14 gün).</li>
            </ul>

            <h5 class="dose-condition-title">Hipersekretuar Durum (Zollinger-Ellison Sendromu)</h5>
            <ul class="dose-details-list">
                <li><strong>Başlangıç Dozu:</strong> 60 mg (PO) günde bir kez.</li>
                <li><strong>Not:</strong> Doz >120 mg/gün ise q12hr bölünmüş dozlarda uygulanır (180 mg q12hr'a kadar kullanılır).</li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
            <h6 class="dose-type-title">Şiddetli Karaciğer Yetmezliği (Child-Pugh C)</h6>
            <ul class="dose-details-list simple-list">
                <li>Doz 15 mg (PO) günde bir kez ile sınırlandırılmalıdır.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">GÖRH ve Erozif Özofajit (EE) (Oral - ≥1 Yaş)</h5>
            <ul class="dose-details-list">
                <li><strong><30 kg:</strong> 15 mg (PO) günde bir kez (8-12 hafta).</li>
                <li><strong>≥30 kg:</strong> 30 mg (PO) günde bir kez (8-12 hafta).</li>
                <li><strong>Not:</strong> Semptomlar devam ederse, 2 haftadan sonra doz 30 mg (PO) q12hr'a artırılabilir.</li>
            </ul>
            <h5 class="dose-condition-title">Non-erozif GÖRH (≥12 Yaş)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 15 mg (PO) günde bir kez (Maksimum 8 hafta).</li>
            </ul>
            <h5 class="dose-condition-title">< 1 Yaş</h5>
            <ul class="dose-details-list simple-list">
                <li>Güvenlik ve etkinlik belirlenmemiştir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik doz ayarlaması gerekmez (Hafif ve orta hepatik yetmezlikte olduğu gibi).</li>
                <li>Ancak ciddi karaciğer yetmezliği varsa (Child-Pugh C) doz 15 mg/gün ile sınırlandırılmalıdır.</li>
            </ul>
        `
    }
},
{
    id: "asetilsisteinContainer",
    isim: "Asetilsistein",
    piyasaIsimleri: [
        "Muconex-C 600 mg/200 mg 30 Efervesan Tablet",
        "Mucovit-C 600/200 mg 30 Efervesan Tablet",
        "Mucovit-C 900/300 mg 30 Efervesan Tablet",
        "Mucovit-C 1200/400 mg 30 Efervesan Tablet",
        "Nac-C 600/200 mg 30 Efervesan Tablet",
        "Nac-C 900/300 mg 30 Efervesan Tablet",
        "Nac-C 1200/400 mg 30 Efervesan Tablet",
        "ACT 300 mg/3 ml %10 5 Ampül",
        "Alles 600 mg 10 Efervesan Tablet",
        "Alles 600 mg 20 Efervesan Tablet",
        "Asetmus 300 mg/3 ml 10 Ampül",
        "Asist 300 mg 3 ml (%10) 10 Ampül",
        "Asist 900 mg 20 Saşe",
        "Asist 1200 mg Toz İçeren 20 Saşe",
        "Asist Plus 600 mg Toz İçeren 30 Saşe",
        "Asist Şurup %4 100 ml Granül",
        "Asist Şurup 60 g 150 ml Granül",
        "Bronpax 900 mg 20 Efervesan Tablet",
        "Cinetix 400 mg 30 Efervesan Tablet",
        "Cinetix 900 mg 20 Efervesan Tablet",
        "Cisteil 1200 mg 30 Saşe",
        "Extal 600 mg 10 Efervesan Tablet",
        "Extal 600 mg 20 Efervesan Tablet",
        "Extal 900 mg 20 Efervesan Tablet",
        "Extal Fort 1200 mg 20 Tablet",
        "Mentonex 900 mg 30 Saşe",
        "Mucinac 300 mg/3 ml Ampül",
        "Mucolator Pediatrik Şurup",
        "Mucolator Plus 600 mg 30 Saşe",
        "Mucolator Şurup Tozu 150 ml",
        "Mucomax 400 mg 30 Efervesan Tablet",
        "Mucomax 1200 mg 20 Efervesan Tablet",
        "Muconex 900 mg 20 Efervesan Tablet",
        "Muconex Fort 1200 mg 20 Efervesan Tablet",
        "Muconex Şurup 100 ml",
        "Muconex Şurup 150 ml",
        "Mucoplus 1200 mg 20 Efervesan Tablet",
        "Mucostop 600 mg 30 Saşe",
        "Mukolatin 600 mg 10 Saşe",
        "Mukolatin 600 mg 30 Saşe",
        "Mukozero 400 mg 30 Efervesan Tablet",
        "Mukozero 600 mg 20 Efervesan Tablet",
        "Mukozero 900 mg 20 Efervesan Tablet",
        "Mukozero 1200 mg 20 Efervesan Tablet",
        "Nac 200 mg 20 Efervesan Tablet",
        "Nac 600 mg 20 Efervesan Tablet",
        "Nac 900 mg 20 Efervesan Tablet",
        "Nacosel 300 mg/3 ml 10 Ampül",
        "Sistecs 300 mg/3 ml 10 Ampül",
        "Traktus 600 mg 10 Poşet"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Mukolitik Tedavi (Solunum Yolu Hastalıkları)</h5>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list">
                <li><strong>Granül/Oral Solüsyon:</strong> 200 mg günde 2-3 kez.</li>
                <li><strong>Efervesan Tablet:</strong> 600 mg günde bir kez.</li>
            </ul>
            <h6 class="dose-type-title">İnhalasyon/Solunum</h6>
            <ul class="dose-details-list">
                <li><strong>%10 Çözelti:</strong> 6-10 mL günde 3-4 kez VEYA 2-20 mL her 2-6 saatte bir.</li>
                <li><strong>%20 Çözelti:</strong> 3-5 mL günde 3-4 kez VEYA 1-10 mL her 2-6 saatte bir.</li>
            </ul>
            <h6 class="dose-type-title">Endotrakeal</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> %10 veya %20 çözeltiden 1-2 mL (doğrudan instilasyon) (saatte bir sıklıkla).</li>
                <li><strong>Trakeostomi Bakımı:</strong> %10 veya %20 çözeltiden 1-2 mL (1-4 saatte bir instilasyon).</li>
            </ul>

            <h5 class="dose-condition-title">Parasetamol Zehirlenmesi (Antidot)</h5>
            <h6 class="dose-type-title">Oral (PO) - 17 Dozlu Rejim</h6>
            <ul class="dose-details-list">
                <li><strong>Yükleme Dozu:</strong> 140 mg/kg.</li>
                <li><strong>İdame Dozu:</strong> 70 mg/kg her 4 saatte bir (toplam 17 doz).</li>
                <li><strong>Not:</strong> Uygulamadan sonra 1 saat içinde kusma olursa doz tekrarlanır.</li>
            </ul>
            <h6 class="dose-type-title">İntravenöz (IV) - 21 Saatlik Rejim</h6>
            <ul class="dose-details-list">
                <li><strong>1. İnfüzyon (1 Saat):</strong> 150 mg/kg (200 mL seyrelticide).</li>
                <li><strong>2. İnfüzyon (4 Saat):</strong> 50 mg/kg (500 mL seyrelticide).</li>
                <li><strong>3. İnfüzyon (16 Saat):</strong> 100 mg/kg (1000 mL seyrelticide).</li>
            </ul>
            
            <h5 class="dose-condition-title">Göz Kuruluğu (Oftalmik - %5 Damla)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 1 veya 2 damla (Konjonktival keseye).</li>
                <li><strong>Sıklık:</strong> Günde 3 veya 4 kez.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Mukolitik Tedavi (Oral)</h5>
            <h6 class="dose-type-title">Granül/Oral Solüsyon</h6>
            <ul class="dose-details-list">
                <li><strong>2-6 Yaş:</strong> 100 mg günde 2-4 kez.</li>
                <li><strong>>6 Yaş:</strong> Yetişkin dozuyla aynıdır (200 mg günde 2-3 kez VEYA 600 mg günde bir kez).</li>
            </ul>

            <h5 class="dose-condition-title">Parasetamol Zehirlenmesi (Antidot)</h5>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list simple-list">
                <li>Yetişkin dozuyla aynıdır: Yükleme 140 mg/kg, İdame 70 mg/kg her 4 saatte bir (17 doz).</li>
            </ul>
            <h6 class="dose-type-title">İntravenöz (IV) - 21 Saatlik Rejim (Seyreltme Hacmi Kiloya Göre Ayarlanır)</h6>
            <ul class="dose-details-list">
                <li><strong>5-20 kg:</strong> Seyreltme hacmi 3 mL/kg, 7 mL/kg, 14 mL/kg olarak ayarlanır (Dozlar: 150, 50, 100 mg/kg).</li>
                <li><strong>21-40 kg:</strong> Seyreltme hacmi 100 mL, 250 mL, 500 mL olarak ayarlanır (Dozlar: 150, 50, 100 mg/kg).</li>
                <li><strong>≥41 kg:</strong> Yetişkin dozuyla aynıdır (200 mL, 500 mL, 1000 mL seyreltme hacimleri).</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
                <li>IV uygulamada sıvı yüklenmesi veya alerjik reaksiyonlar açısından dikkatli olunmalıdır.</li>
            </ul>
        `
    }
},
{
    id: "esmololContainer",
    isim: "Esmolol",
    piyasaIsimleri: [
        "Brevibloc Premiks 10 mg/ml 250 ml",
        "Esmobloc 10 mg/ml 250 ml",
        "Kardoes Premix 2500 mg/250 ml"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">İntraoperatif Taşikardi/Hipertansiyon</h5>
            <h6 class="dose-type-title">Acil Kontrol</h6>
            <ul class="dose-details-list">
                <li><strong>Bolus:</strong> 80 mg (~1 mg/kg) (IVP) (30 saniye üzerinde).</li>
                <li><strong>İdame:</strong> Ardından 0.15-0.3 mg/kg/dakika (IV infüzyon) (Gerekirse).</li>
            </ul>
            <h6 class="dose-type-title">Postoperatif/Kademeli Kontrol (5 dakikalık titrasyon protokolü)</h6>
            <ul class="dose-details-list">
                <li><strong>Yükleme 1:</strong> 0.5 mg/kg (IV) (1 dakika üzerinde), ardından 0.05 mg/kg/dakika (4 dakika).</li>
                <li><strong>Yanıt Yetersizse:</strong> 2. yükleme dozu 0.5 mg/kg/dakika (1 dakika), ardından 0.1 mg/kg/dakika (IV) infüzyonu başlatılır.</li>
            </ul>

            <h5 class="dose-condition-title">Supraventriküler Taşikardi (SVT)</h5>
            <ul class="dose-details-list">
                <li><strong>Yükleme:</strong> 0.5 mg/kg (IV) (1 dakika üzerinde).</li>
                <li><strong>İdame (Başlangıç):</strong> 0.05 mg/kg/dakika (IV) (4 dakika), ardından 0.2 mg/kg/dakika'ya kadar 0.05 mg/kg artırılabilir.</li>
                <li><strong>Maksimum:</strong> Gerekirse 0.25-0.3 mg/kg/dakika'ya kadar daha yüksek idame dozları uygulanabilir.</li>
            </ul>
            
            <h5 class="dose-condition-title">Hipertansif Acil Durum</h5>
            <ul class="dose-details-list">
                <li><strong>Yükleme:</strong> 0.25-0.5 mg/kg (IVP) (1 dakika üzerinde).</li>
                <li><strong>İdame:</strong> 0.05-0.1 mg/kg/dakika (IV) (4 dakika).</li>
                <li><strong>Titrasyon:</strong> Gerekirse yükleme dozu tekrarlanabilir veya infüzyon 0.3 mg/kg/dakika'ya kadar artırılabilir.</li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
            <h6 class="dose-type-title">Böbrek Yetmezliği</h6>
            <ul class="dose-details-list simple-list">
                <li>Doz takviyesi gerekmez; diyaliz edilemez.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Supraventriküler Taşikardi / Postoperatif Hipertansiyon (Endikasyon Dışı)</h5>
            <h6 class="dose-type-title">IV Uygulama</h6>
            <ul class="dose-details-list">
                <li><strong>Yükleme:</strong> 500-600 mcg/kg (IV) (2 dakika üzerinde).</li>
                <li><strong>İdame:</strong> 200 mcg/kg/dakika (IV infüzyon) (Aralık 50-250 mcg/kg/dakika).</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Doz aralığının **alt sınırından** başlanması önerilir (azalmış renal, hepatik veya kardiyak fonksiyon riski nedeniyle).</li>
                <li>SVT için doz rejimleri yetişkinlerle aynıdır, ancak titrasyon sırasında hipotansiyon ve bradikardi açısından yakın izlem gerekir.</li>
            </ul>
        `
    }
},
{
    id: "famotidinContainer",
    isim: "Famotidin",
    piyasaIsimleri: [
        "Famodin 20 mg 60 Tablet",
        "Famodin 40 mg 30 Tablet",
        "Famoser 20 mg 60 Tablet",
        "Famoser 40 mg 30 Tablet",
        "Gasterol 40 mg 30 Tablet",
        "Gastrofam 40 mg 30 Tablet",
        "Nevofam-L 20 mg 2 Ampül",
        "Nevofam 20 mg 60 Tablet",
        "Nevofam 40 mg 30 Tablet",
        "Acidpass 10/800/165 mg 6 Çiğneme Tableti",
        "Acidpass Çiğneme Tableti 12 Tablet",
        "Famodin Plus 10 mg/800 mg/165 mg 12 Çiğneme Tablet",
        "Trigast 10 mg/800 mg/165 mg 12 Tablet",
        "Trigast Çiğneme Tableti 6 Tablet"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Duodenal Ülser</h5>
            <h6 class="dose-type-title">Akut Tedavi (8 Hafta)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 20 mg (PO/IV) q12hr VEYA 40 mg (PO) yatarken.</li>
            </ul>
            <h6 class="dose-type-title">İdame & Nüks Azaltma</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 20 mg (PO) yatarken (1 yıl boyunca veya klinik olarak endike).</li>
            </ul>

            <h5 class="dose-condition-title">Benign Gastrik Ülser</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 40 mg (PO) yatarken (8 haftaya kadar).</li>
            </ul>

            <h5 class="dose-condition-title">Gastroözofageal Reflü Hastalığı (GÖRH)</h5>
            <ul class="dose-details-list">
                <li><strong>Nonerozif GÖRH:</strong> 20 mg q12hr (6 haftaya kadar).</li>
                <li><strong>Erozif Özofajit:</strong> 20-40 mg (PO) q12hr (12 haftaya kadar).</li>
            </ul>

            <h5 class="dose-condition-title">Aşırı Salgı Durumları (Hipersekretuar)</h5>
            <ul class="dose-details-list">
                <li><strong>Başlangıç:</strong> 20 mg (PO/IV) q6hr.</li>
                <li><strong>Titrasyon:</strong> Maksimum 160 mg q6hr'a kadar artırılabilir.</li>
            </ul>
            
            <h5 class="dose-condition-title">Mide Ekşimesi (Heartburn)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 10-20 mg q12hr.</li>
                <li><strong>Not:</strong> Mide ekşimesine neden olabilecek yiyecekleri yemeden 15-60 dakika önce alınabilir.</li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
            <h6 class="dose-type-title">Böbrek Yetmezliği</h6>
            <ul class="dose-details-list simple-list">
                <li><strong>CrCl <50 mL/dk:</strong> Olağan dozun %50'si verilmeli VEYA doz aralığı q36-48hr'a uzatılmalıdır.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Peptik Ülser (1-17 Yaş)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 0.25 mg/kg (IV) q12hr VEYA 0.5 mg/kg (PO) yatarken.</li>
                <li><strong>Titrasyon:</strong> Günde bir kez 1 mg/kg VEYA günde iki kez 0.5 mg/kg'a artırılabilir (8 haftaya kadar).</li>
                <li><strong>Maksimum:</strong> 40 mg/gün'ü aşmamalıdır.</li>
            </ul>

            <h5 class="dose-condition-title">Gastroözofageal Reflü Hastalığı (GÖRH)</h5>
            <ul class="dose-details-list">
                <li><strong><3 Ay:</strong> 0.5 mg/kg (PO) günde bir kez (8 haftaya kadar 1 mg/kg'a artırılabilir).</li>
                <li><strong>3-12 Ay:</strong> 0.5 mg/kg (PO) q12hr (8 haftaya kadar günde iki kez 1 mg/kg'a artırılabilir).</li>
                <li><strong>1-17 Yaş (Özofajitli/Ülserli):</strong> 0.5 mg/kg günde iki kez (6-12 hafta).</li>
                <li><strong>Maksimum:</strong> Günde iki kez 40 mg'ı aşmamalıdır.</li>
            </ul>

            <h5 class="dose-condition-title">Mide Ekşimesi (>12 Yaş)</h5>
            <ul class="dose-details-list simple-list">
                <li>Yetişkin dozuyla aynıdır: 10-20 mg q12hr.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Yaşlı hastalar böbrek fonksiyonunda azalma eğiliminde olduğundan, doz ayarlaması (CrCl <50 mL/dk ise doz %50 azaltılır veya doz aralığı uzatılır) gereklidir.</li>
                <li>MSS (konfüzyon gibi) yan etkileri açısından izlenmelidir.</li>
            </ul>
        `
    }
},
{
    id: "nifuroksazidContainer",
    isim: "Nifuroksazid",
    piyasaIsimleri: [
        "Diafuryl 100 mg 12 Kapsül",
        "Diafuryl Fort 200 mg 16 Kapsül",
        "Diafuryl Şurup 5 ml 200 mg 60 ml",
        "Enfuryl Şurup 200 mg/5 ml 60 ml",
        "Erfulyn 100 mg 12 Kapsül",
        "Erfulyn Süspansiyon 200 mg 60 ml"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Kolit, İshal</h5>
            <h6 class="dose-type-title">Oral</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Günlük Doz:</strong> 800 mg (bölünmüş dozlarda).</li>
                <li><strong>Olağan Doz:</strong> Günde 4 kez 200 mg (3 gün boyunca).</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Pediatrik Doz (İshal)</h5>
            <ul class="dose-details-list simple-list">
                <li>Pediatrik dozajlar genellikle çocuğun yaşına ve kilosuna göre ayarlanır ve şurup formu kullanılır.</li>
                <li>Tipik olarak 6 aydan büyük çocuklarda 200 mg/gün (2 bölünmüş dozda) başlanır ve 3 gün sürer.</li>
                <li>**Kesin dozaj için spesifik ürün kılavuzlarına başvurulmalıdır.**</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozu kullanılır.</li>
                <li>Tedavi süresi kısa tutulmalıdır (maksimum 7 gün).</li>
            </ul>
        `
    }
},
{
    id: "azitromisinContainer",
    isim: "Azitromisin",
    piyasaIsimleri: [
        "Azax 500 mg 3 Tablet",
        "Azeltin 250 mg 6 Tablet",
        "Azeltin 500 mg 3 Tablet",
        "Azeltin Şurup 200 mg 15 ml",
        "Azeltin Şurup 200 mg 30 ml",
        "Azitro 250 mg 6 Tablet",
        "Azitro 500 mg 3 Tablet",
        "Azitro Şurup 200 mg/5 ml 15 ml",
        "Azitro Şurup 200 mg/5 ml 30 ml",
        "Azomax 500 mg 3 Tablet",
        "Azomax Şurup 5 ml 200 mg 15 ml Toz",
        "Azomax Şurup 5 ml 200 mg 30 ml Toz",
        "Azro 5 ml 200 mg 15 ml Süspansiyon",
        "Azro 5 ml 200 mg 30 ml Süspansiyon",
        "Azro 500 mg 3 Tablet",
        "Tremac 500 mg 3 Tablet",
        "Ziromin 500 mg 1 Flakon",
        "Ziromin Şurup 200 mg/5 ml",
        "Zitrasin 500 mg 3 Tablet",
        "Zitrasin 500 mg IV 1 Flakon",
        "Zitrasin Şurup 200 mg/5 ml 30 ml",
        "Zitromax 500 mg 3 Tablet",
        "Zitromax Pediatrik Şurup 15 ml",
        "Zitromax Şurup 200 mg 30 ml",
        "Zitrotek 500 mg 2 Tablet"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Toplum Kökenli Pnömoni (TKP), Farenjit/Tonsillit, Komplike Olmayan Cilt Enf.</h5>
            <h6 class="dose-type-title">5 Günlük Rejim (Oral)</h6>
            <ul class="dose-details-list">
                <li><strong>Gün 1:</strong> 500 mg (PO) tek doz.</li>
                <li><strong>Gün 2-5:</strong> 250 mg (PO) günde bir kez (qDay).</li>
            </ul>
            <h6 class="dose-type-title">IV/PO Sıralı Tedavi (TKP)</h6>
            <ul class="dose-details-list">
                <li><strong>IV:</strong> 500 mg (IV) qDay x 2 gün.</li>
                <li><strong>Takip:</strong> 500 mg (PO) qDay (7-10 günlük kürü tamamlamak için).</li>
            </ul>

            <h5 class="dose-condition-title">Akut Bakteriyel Sinüzit & KOAH Akut Alevlenmesi</h5>
            <h6 class="dose-type-title">3 Günlük Rejim (Oral)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 500 mg (PO)</li>
                <li><strong>Sıklık:</strong> Günde bir kez (qDay) x 3 gün.</li>
                <li><strong>KOAH Alternatif:</strong> 5 günlük rejim de kullanılabilir.</li>
            </ul>

            <h5 class="dose-condition-title">Cinsel Yolla Bulaşan Enfeksiyonlar (CYBE)</h5>
            <h6 class="dose-type-title">Tek Doz Rejimleri</h6>
            <ul class="dose-details-list">
                <li><strong>Non-gonokokal Üretrit/Servisit (Klamidya):</strong> 1 gram (PO) tek doz.</li>
                <li><strong>Gonokokal Üretrit/Servisit:</strong> 2 gram (PO) tek doz.</li>
                <li><strong>Genital Ülser (Şankroid):</strong> 1 gram (PO) tek doz.</li>
            </ul>

            <h5 class="dose-condition-title">Pelvik İnflamatuar Hastalık (PID)</h5>
            <h6 class="dose-type-title">IV/PO Sıralı Tedavi</h6>
            <ul class="dose-details-list">
                <li><strong>IV:</strong> 500 mg (IV) qDay x 1-2 gün.</li>
                <li><strong>Takip:</strong> 250 mg (PO) qDay (7 günlük kürü tamamlamak için).</li>
                <li><strong>Not:</strong> Anaerobik kapsaması için ek antimikrobiyal ajan ile kombine edilmelidir.</li>
            </ul>

            <h5 class="dose-condition-title">Mycobacterium Avium Kompleksi (MAC) Enfeksiyonları (HIV İleri Evre)</h5>
            <ul class="dose-details-list">
                <li><strong>Profilaksi:</strong> 1200 mg (PO) haftada bir (rifabutin ile tek başına veya kombine).</li>
                <li><strong>Tedavi:</strong> 600 mg (PO) qDay (etambutol ile kombine).</li>
            </ul>
            
            <h5 class="dose-condition-title">Kısıtlamalar</h5>
            <ul class="dose-details-list simple-list">
                <li>Azitromisin, kistik fibrozis, hastaneye yatış gerektiren orta-şiddetli hastalık veya immün yetmezlik gibi risk faktörleri olan hastalarda oral tedaviye uygun olmayan pnömoni için **kullanılmamalıdır**.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Akut Otitis Media (AOM) (≥6 Ay)</h5>
            <h6 class="dose-type-title">3 Alternatif Rejim</h6>
            <ul class="dose-details-list">
                <li><strong>1. Rejim:</strong> 30 mg/kg (PO) tek doz. VEYA</li>
                <li><strong>2. Rejim:</strong> 10 mg/kg (PO) qDay x 3 gün. VEYA</li>
                <li><strong>3. Rejim:</strong> Gün 1: 10 mg/kg (PO), Gün 2-5: 5 mg/kg (PO).</li>
            </ul>

            <h5 class="dose-condition-title">Toplum Kökenli Pnömoni (TKP) (≥6 Ay)</h5>
            <ul class="dose-details-list">
                <li><strong>5 Günlük Rejim:</strong> Gün 1: 10 mg/kg (PO) tek doz, Gün 2-5: 5 mg/kg (PO).</li>
            </ul>

            <h5 class="dose-condition-title">Akut Bakteriyel Sinüzit (≥6 Ay)</h5>
            <ul class="dose-details-list">
                <li><strong>3 Günlük Rejim:</strong> 10 mg/kg (PO) qDay x 3 gün.</li>
            </ul>

            <h5 class="dose-condition-title">Farenjit/Tonsillit (≥2 Yaş)</h5>
            <ul class="dose-details-list">
                <li><strong>5 Günlük Rejim:</strong> 12 mg/kg (PO) qDay x 5 gün.</li>
                <li><strong>Maksimum:</strong> 500 mg/gün'ü aşmamalı.</li>
            </ul>
            
            <h5 class="dose-condition-title">Kedi Tırmığı Hastalığı (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>≤45 kg:</strong> 10 mg/kg (Max 500 mg/doz) tek doz, ardından 4 gün boyunca 5 mg/kg (Max 250 mg/doz) qDay.</li>
            </ul>

            <h5 class="dose-condition-title">Kritik Notlar</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>< 6 Ay:</strong> Güvenlik ve etkinlik belirlenmemiştir.</li>
                <li>1g/5 mL oral süspansiyon tek dozu pediatrik kullanım için değildir; 100 mg/5 mL veya 200 mg/5 mL süspansiyon kullanılmalıdır.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
                <li>Yaşlı hastalar, pnömoni gibi ciddi enfeksiyonlarda oral tedaviye uygun olmayabilir ve bu durumda oral azitromisin **kullanılmamalıdır**.</li>
                <li>Yaşlılar QT uzaması gibi kardiyak yan etkilere karşı daha duyarlı olabilir.</li>
            </ul>
        `
    }
},
{
    id: "ferroglikokolSulfatContainer",
    isim: "Ferroglikokol Sülfat (Elemental Demir)",
    piyasaIsimleri: [
        "Ferro Sanol Duodenal 20 Kapsül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Demir Eksikliği Anemisi</h5>
            <h6 class="dose-type-title">Tedavi (Elemental Demir Bazlı)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 100-200 mg (PO)</li>
                <li><strong>Sıklık:</strong> Her 12 saatte bir (q12hr) bölünmüş.</li>
                <li><strong>Not:</strong> Uzatılmış salınımlı form günde bir kez uygulanabilir.</li>
            </ul>
            <h6 class="dose-type-title">Profilaksi (Önleme - Elemental Demir Bazlı)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 60 mg (PO) günde bir kez.</li>
            </ul>

            <h5 class="dose-condition-title">Önerilen Günlük Alım Miktarı (RDA - Elemental Demir)</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>19-50 Yaş Erkekler:</strong> 8 mg/gün.</li>
                <li><strong>19-50 Yaş Kadınlar:</strong> 18 mg/gün.</li>
                <li><strong>Hamile Kadınlar:</strong> 27 mg/gün.</li>
                <li><strong>Emziren Kadınlar:</strong> 9 mg/gün.</li>
                <li><strong>>50 Yaş (Her İki Cinsiyet):</strong> 8 mg/gün.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Demir Eksikliği Anemisi Tedavisi (Elemental Demir Bazlı)</h5>
            <h6 class="dose-type-title">Tedavi</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 3-6 mg Fe/kg/gün (PO)</li>
                <li><strong>Sıklık:</strong> Her 8 saatte bir (q8hr) bölünmüş.</li>
            </ul>
            
            <h5 class="dose-condition-title">Profilaksi (Elemental Demir Bazlı)</h5>
            <ul class="dose-details-list">
                <li><strong>4 Ay ve Üzeri (Sadece Anne Sütü):</strong> 1 mg/kg/gün (PO).</li>
                <li><strong>6 Ay - 2 Yaş (Anemi Prevalansı Yüksek Alanlar):</strong> 2 mg/kg/gün (PO).</li>
                <li><strong>2 - 5 Yaş (Anemi Prevalansı Yüksek Alanlar):</strong> 2 mg/kg/gün (PO) (Maksimum 30 mg/gün).</li>
                <li><strong>>5 Yaş (Anemi Prevalansı Yüksek Alanlar):</strong> 30 mg/gün (Folik asit ile).</li>
                <li><strong>Adölesanlar (Anemi Prevalansı Yüksek Alanlar):</strong> 60 mg/gün (Folik asit ile).</li>
            </ul>

            <h5 class="dose-condition-title">Önerilen Günlük Alım Miktarı (RDA - Elemental Demir)</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>0-6 Ay:</strong> 0.27 mg/gün.</li>
                <li><strong>6-12 Ay:</strong> 11 mg/gün.</li>
                <li><strong>1-3 Yaş:</strong> 7 mg/gün.</li>
                <li><strong>8-13 Yaş:</strong> 8 mg/gün.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Yaşlı hastalar için RDA 8 mg/gün'dür.</li>
                <li>Anemi tedavisi için yetişkin dozu (100-200 mg Elemental Demir) kullanılır, ancak gastrointestinal yan etkiler (kabızlık gibi) açısından yakın izlem önerilir.</li>
            </ul>
        `
    }
},
{
    id: "nikardipinContainer",
    isim: "Nikardipin",
    piyasaIsimleri: [
        "Ninax 25 mg/10 ml 1 Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Hipertansiyon</h5>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 20-40 mg (PO)</li>
                <li><strong>Sıklık:</strong> Her 8 saatte bir (q8hr).</li>
            </ul>
            <h6 class="dose-type-title">İntravenöz (IV) İnfüzyon</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç:</strong> 5 mg/saat (yavaş infüzyon).</li>
                <li><strong>Titrasyon:</strong> Her 15 dakikada bir 2.5 mg/saat artırılabilir.</li>
                <li><strong>Maksimum:</strong> 15 mg/saat.</li>
            </ul>

            <h5 class="dose-condition-title">Kronik Stabil Anjina</h5>
            <ul class="dose-details-list">
                <li><strong>Doz Aralığı:</strong> 20-40 mg (PO) q8hr.</li>
                <li><strong>Titrasyon Notu:</strong> Kararlı plazma konsantrasyonu için doz artışları arasında 3 gün beklenmelidir.</li>
                <li><strong>Olağan Aralık:</strong> 60-120 mg/gün.</li>
            </ul>

            <h5 class="dose-condition-title">IV'den Oral'e Geçiş Eşdeğerliği (PO q8hr)</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>20 mg PO:</strong> 0.5 mg/saat IV infüzyon.</li>
                <li><strong>30 mg PO:</strong> 1.2 mg/saat IV infüzyon.</li>
                <li><strong>40 mg PO:</strong> 2.2 mg/saat IV infüzyon.</li>
                <li>**Not:** IV kesilmeden 1 saat önce PO dozuna başlanır.</li>
            </ul>
            
            <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
            <h6 class="dose-type-title">Böbrek Yetmezliği</h6>
            <ul class="dose-details-list simple-list">
                <li><strong>Oral:</strong> Başlangıç 20 mg PO q8hr; her 3 günde bir etkiye göre titre edilir.</li>
                <li><strong>IV:</strong> Dikkatli kullanılmalıdır (Doz ayarlama kılavuzları mevcut değil).</li>
            </ul>
            <h6 class="dose-type-title">Karaciğer Yetmezliği</h6>
            <ul class="dose-details-list simple-list">
                <li><strong>Oral:</strong> Başlangıç 20 mg PO q12hr; her 3 günde bir etkiye göre titre edilir.</li>
                <li><strong>IV:</strong> Dikkatli kullanılmalıdır (Doz ayarlama kılavuzları mevcut değil).</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Hipertansiyon (Endikasyon Dışı)</h5>
            <h6 class="dose-type-title">İntravenöz (IV)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 0.5-3 mcg/kg/dakika (IV).</li>
                <li><strong>Not:</strong> FDA onaylı değildir; veri sınırlıdır.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Doz aralığının **alt ucunda** başlanması ve hastanın yakından izlenmesi önerilir.</li>
                <li>Yaşla birlikte böbrek ve karaciğer fonksiyonundaki olası azalma nedeniyle dikkatli kullanılmalıdır.</li>
            </ul>
        `
    }
},
{
    id: "nifedipinContainer",
    isim: "Nifedipin",
    piyasaIsimleri: [
        "Adalat Crono 30 mg 20 Tablet",
        "Nidicard 10 mg 30 Kapsül",
        "Nidilat 10 mg 30 Kapsül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Anjina</h5>
            <h6 class="dose-type-title">Konvansiyonel (Hemen Salınım)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç Dozu:</strong> 10 mg (PO) her 8 saatte bir (q8hr).</li>
                <li><strong>İdame:</strong> 10-20 mg (PO) q8hr VEYA 20-30 mg (PO) q6-8hr.</li>
                <li><strong>Maksimum:</strong> 180 mg/gün.</li>
            </ul>
            <h6 class="dose-type-title">Uzatılmış Salınım (ER)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç Dozu:</strong> 30-60 mg (PO) günde bir kez.</li>
                <li><strong>Titrasyon:</strong> Gerektiğinde her 7-14 günde bir artırılabilir.</li>
                <li><strong>Maksimum:</strong> 120 mg/gün.</li>
            </ul>

            <h5 class="dose-condition-title">Hipertansiyon</h5>
            <h6 class="dose-type-title">Uzatılmış Salınım (ER)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç Dozu:</strong> 30-60 mg (PO) günde bir kez.</li>
                <li><strong>Titrasyon:</strong> Gerektiğinde her 7-14 günde bir artırılabilir.</li>
                <li><strong>Maksimum:</strong> 90 mg/gün (Adalat CC) VEYA 120 mg/gün (Procardia XL).</li>
            </ul>

            <h5 class="dose-condition-title">Pulmoner Hipertansiyon</h5>
            <ul class="dose-details-list">
                <li><strong>Başlangıç Dozu:</strong> 30 mg (ER) (PO) q12hr.</li>
                <li><strong>Titrasyon:</strong> 120-240 mg/gün'e kadar artırılabilir (izlenmelidir).</li>
            </ul>

            <h5 class="dose-condition-title">Raynaud Fenomeni (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 30-120 mg (ER) (PO) günde bir kez.</li>
            </ul>
            
            <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>Siroz:</strong> Doz ayarlaması düşünülmelidir.</li>
                <li><strong>Diyaliz (PD/HD):</strong> Ek doza gerek yoktur.</li>
            </ul>
            
            <h5 class="dose-condition-title">Uygulama Notu</h5>
            <ul class="dose-details-list simple-list">
                <li>İlaç **aç karnına** alınmalıdır.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Hipertansiyon (Endikasyon Dışı)</h5>
            <h6 class="dose-type-title">Uzatılmış Salınım (ER)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 0.25-0.5 mg/kg/gün (PO) (1 veya 2 günlük dozda).</li>
                <li><strong>Maksimum:</strong> 3 mg/kg/gün (120 mg/gün) aşılmamalıdır.</li>
            </ul>
            <h5 class="dose-condition-title">Uyarılar</h5>
            <ul class="dose-details-list simple-list">
                <li>FDA tarafından çocuklarda onaylanmamıştır.</li>
                <li>**<6 yaş için potansiyel toksik doz: 2 mg/kg.**</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>**Konvansiyonel (Hemen Salınım) ürünlerden kaçınılmalıdır** (Hipotansiyon ve miyokardiyal iskemi riski).</li>
                <li>Uzatılmış salınım formlarında yetişkin doz aralığının **alt sınırında** başlanması ve yakından izlenmesi önerilir.</li>
            </ul>
        `
    }
},
{
    id: "atropinContainer",
    isim: "Atropin",
    piyasaIsimleri: [
        "Atropin Biosel 0.5 mg 10 Ampül",
        "Atropin Biosel 0.25 mg 10 Ampül",
        "Atropin Biosel 1 mg 10 Ampül",
        "Atropin Drogsan 0.5 mg 10 Ampül",
        "Atropin Drogsan 1 mg 10 Ampül",
        "Atropin Galen 0.5 mg 10 Ampül",
        "Atropin Galen 0.25 mg 10 Ampül",
        "Atropin Galen 1 mg 10 Ampül",
        "Atropin Sülfat 0.5 mg 10 Ampül",
        "Atropin Sülfat 0.25 mg 10 Ampül",
        "Atropin Sülfat 1 mg 10 Ampül",
        "Atropin Sülfat Onfarma 0.5 mg/1 ml 10 Ampül",
        "Atropin Sülfat Onfarma 0.25 mg/1 ml 10 Ampül",
        "Atropin Sülfat Onfarma 1 mg/1 ml 10 Ampül",
        "Türktıpsan Atropin Sülfat 0.5 mg/ml",
        "Türktıpsan Atropin Sülfat 1 mg/ml"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Sinüs Bradikardisi (ACLS)</h5>
            <h6 class="dose-type-title">IV Uygulama</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 0.5-1 mg VEYA 0.04 mg/kg (IV).</li>
                <li><strong>Tekrar:</strong> Her 5 dakikada bir tekrarlanabilir (Maksimum toplam 3 mg).</li>
                <li><strong>Endotrakeal (ET):</strong> IV dozunun 2-3 katı (3-5 mL SF veya steril suda seyreltilir).</li>
            </ul>

            <h5 class="dose-condition-title">Organofosfat veya Karbamat Zehirlenmesi</h5>
            <h6 class="dose-type-title">IM Otoenjektör (2 mg/doz)</h6>
            <ul class="dose-details-list">
                <li><strong>Hafif Semptomlar (2 veya daha fazla):</strong> 1 enjeksiyon (2 mg) IM. 10-15 dakika beklenir. Semptomlar düzelmezse veya kötüleşirse 2 ek enjeksiyon IM yapılır.</li>
                <li><strong>Şiddetli Semptomlar (Bilinç kaybı, Solunum sıkıntısı vb.):</strong> Hemen arka arkaya 3 enjeksiyon (6 mg) IM uygulanır.</li>
            </ul>
            <h6 class="dose-type-title">IV Tedavi</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 1-2 mg IV/IM/IO/ET (Hafif zehirlenmede 0.5 mg).</li>
                <li><strong>Tekrar:</strong> Atropinizasyon belirtileri (kuru akciğer) görülene kadar her 5-10 dakikada bir tekrarlanır.</li>
            </ul>

            <h5 class="dose-condition-title">Anestezi Ön İlaç</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 0.4-0.6 mg (IV/IM/SC)</li>
                <li><strong>Zamanlama:</strong> Anesteziden 30-60 dakika önce; gerektiğinde q4-6hr tekrarlanır.</li>
            </ul>

            <h5 class="dose-condition-title">Bronkospazm</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 0.025 mg/kg (2.5 mL SF içinde)</li>
                <li><strong>Sıklık:</strong> Her 6-8 saatte bir (nebulizatör ile).</li>
                <li><strong>Maksimum:</strong> 2.5 mg/doz.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Sinüs Bradikardisi</h5>
            <h6 class="dose-type-title">IV/IO Bolus</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 0.02 mg/kg (IV/IO) (q5min 2-3 doza kadar).</li>
                <li><strong>Minimum Tek Doz:</strong> 0.1 mg.</li>
                <li><strong>Maksimum Tek Doz:</strong> 0.5 mg (çocuklar), 1 mg (adölesanlar).</li>
                <li><strong>Maksimum Toplam Doz:</strong> 1 mg (çocuklar), 2 mg (adölesanlar).</li>
            </ul>

            <h5 class="dose-condition-title">Organofosfat veya Karbamat Zehirlenmesi</h5>
            <h6 class="dose-type-title">IV/IM/IO/ET Tedavi</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 0.03-0.05 mg/kg (IV/IM/IO/ET)</li>
                <li><strong>Tekrar:</strong> Etki görülene kadar q10-20min (ardından en az 24 saat q1-4hr).</li>
            </ul>
            <h6 class="dose-type-title">IM Otoenjektör (Ağırlığa Göre Şiddetli Semptom)</h6>
            <ul class="dose-details-list simple-list">
                <li><strong>>41 kg:</strong> 2 mg/doz IM (3 enjeksiyon).</li>
                <li><strong>18-41 kg:</strong> 1 mg/doz IM (3 enjeksiyon).</li>
                <li><strong>6.8-18 kg:</strong> 0.5 mg/doz IM (3 enjeksiyon).</li>
                <li>**<6.8 kg:** Otoenjektör önerilmez; bradiaritmiler için 0.05 mg/kg Atropin uygulanır.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir; standart yetişkin dozları kullanılır.</li>
                <li>Yaşlı hastalar, **MSS etkileri** (konfüzyon, ajitasyon) ve **idrar retansiyonu** gibi antikolinerjik yan etkilere karşı daha duyarlı olabilir.</li>
            </ul>
        `
    }
},
{
    id: "deferoksaminContainer",
    isim: "Deferoksamin",
    piyasaIsimleri: [
        "Desferal 500 mg 10 Flakon"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Akut Demir Zehirlenmesi</h5>
            <h6 class="dose-type-title">İntramüsküler (IM) (Şokta Olmayan Hastalar)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç:</strong> İlk olarak 1 g (IM).</li>
                <li><strong>Takip:</strong> Ardından 2 doz için her 4 saatte bir (Q4hr) 500 mg.</li>
                <li><strong>Ek Doz:</strong> Klinik yanıta bağlı olarak 500 mg her 4-12 saatte bir uygulanabilir.</li>
                <li><strong>Maksimum:</strong> 24 saatte 6 g.</li>
            </ul>
            <h6 class="dose-type-title">İntravenöz (IV) (Kardiyovasküler Çöküntü/Şok Durumu)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç:</strong> 1 g yavaş IV infüzyon.</li>
                <li><strong>İnfüzyon Hızı (İlk Doz):</strong> 15 mg/kg/saat'i geçmemelidir.</li>
                <li><strong>İnfüzyon Hızı (Sonraki Dozlar):</strong> 125 mg/saat'ten daha hızlı infüzyon yapılmamalıdır.</li>
            </ul>

            <h5 class="dose-condition-title">Kronik Demir Yüklenmesi</h5>
            <h6 class="dose-type-title">Subkutan (SC)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 1-2 g (20-40 mg/kg/gün) (SC).</li>
                <li><strong>Uygulama:</strong> Sürekli mini-infüzyon sağlayan küçük portatif bir pompa kullanılarak 8-24 saat üzerinde.</li>
            </ul>
            <h6 class="dose-type-title">İntravenöz (IV)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 40-50 mg/kg/gün (IV) (8-12 saat üzerinde) (Haftada 5-7 gün).</li>
                <li><strong>Maksimum Hız:</strong> 15 mg/kg/saat'i geçmemelidir.</li>
                <li><strong>Maksimum Doz:</strong> 60 mg/kg/gün'den az olmalıdır.</li>
            </ul>
            <h6 class="dose-type-title">İntramüsküler (IM)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 0.5-1 g (IM) günde bir kez (QD).</li>
                <li><strong>Maksimum:</strong> 1 g QD.</li>
            </ul>

            <h5 class="dose-condition-title">Ek Bilgiler</h5>
            <ul class="dose-details-list simple-list">
                <li>İlaç, kan transfüzyonundan önce veya sonra uygulanabilir (birlikte uygulanmamalıdır).</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Akut Demir Zehirlenmesi (≥3 Yaş)</h5>
            <h6 class="dose-type-title">IM veya IV (Hafif ve Şok Durumuna Göre)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç (Şoksuz):</strong> İlk olarak 1 g (IM), ardından 2 doz için Q4hr 500 mg.</li>
                <li><strong>Başlangıç (Şok):</strong> 1 g yavaş IV infüzyon.</li>
                <li><strong>Alternatif Kilo Bazlı Doz:</strong> 20 mg/kg (IM/IV), ardından 2 kez 10 mg/kg (IM/IV) Q4hr, ardından klinik duruma göre 10 mg/kg IM/IV Q4-12hr.</li>
                <li><strong>Maksimum:</strong> 24 saatte 6 g.</li>
                <li><strong>İnfüzyon Hızı:</strong> İlk doz 15 mg/kg/saat'i, sonraki dozlar 125 mg/saat'i geçmemelidir.</li>
            </ul>

            <h5 class="dose-condition-title">Kronik Demir Yüklenmesi (≥3 Yaş)</h5>
            <h6 class="dose-type-title">Subkutan (SC)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 1-2 g (20-40 mg/kg/gün) (SC) (8-24 saat üzerinde).</li>
            </ul>
            <h6 class="dose-type-title">İntravenöz (IV)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 40-50 mg/kg/gün (IV) (8-12 saat üzerinde) (Haftada 5-7 gün).</li>
                <li><strong>Maksimum Hız:</strong> 15 mg/kg/saat'i geçmemelidir.</li>
                <li><strong>Maksimum Doz:</strong> 60 mg/kg/gün'den az olmalıdır.</li>
            </ul>
            <h6 class="dose-type-title">İntramüsküler (IM)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 0.5-1 g (IM) günde bir kez (QD).</li>
                <li><strong>Maksimum:</strong> 1 g QD.</li>
            </ul>
            
            <h5 class="dose-condition-title">Uyarı</h5>
            <ul class="dose-details-list simple-list">
                <li>< 3 yaş çocuklar için güvenlik ve etkinlik belirlenmemiştir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
                <li>Azalmış renal veya kardiyak fonksiyon sıklığı nedeniyle dozaj titrasyonu sırasında dikkatli olunmalı ve hasta yakından izlenmelidir.</li>
            </ul>
        `
    }
},
{
    id: "dimenhidrinatContainer",
    isim: "Dimenhidrinat",
    piyasaIsimleri: [
        "Anti EM 50 mg 12 Tablet",
        "Dramamine 50 mg 5 Ampül",
        "Dramamine 50 mg 12 Tablet"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Hareket Hastalığını Önleme (Motion Sickness)</h5>
            <h6 class="dose-type-title">Oral (PO) / IV / IM</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 50-100 mg</li>
                <li><strong>Sıklık:</strong> Her 4-6 saatte bir (q4-6hr) (Harekete maruz kalmadan 30 dakika önce).</li>
                <li><strong>Maksimum:</strong> 400 mg/gün'ü aşmamalıdır.</li>
                <li><strong>IV Uygulama:</strong> 50 mg, 10 mL SF içinde 2 dakika üzerinde.</li>
            </ul>

            <h5 class="dose-condition-title">Meniere Hastalığı (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>İdame (PO):</strong> 25-50 mg (PO) her 8 saatte bir (q8hr).</li>
                <li><strong>Akut Atak (IM):</strong> 50 mg (IM) tek doz.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Hareket Hastalığını Önleme</h5>
            <h6 class="dose-type-title">Genel Kilo Bazlı Doz (IV/IM)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 1.25 mg/kg VEYA 37.5 mg/m² (IV/IM)</li>
                <li><strong>Sıklık:</strong> Her 6 saatte bir (q6hr).</li>
                <li><strong>Maksimum:</strong> 300 mg/gün'ü aşmamalıdır.</li>
            </ul>
            <h6 class="dose-type-title">Yaşa Göre Oral Doz (PO)</h6>
            <ul class="dose-details-list">
                <li><strong>2-6 Yaş:</strong> 12.5-25 mg (PO) q6-8hr (Max 75 mg/gün).</li>
                <li><strong>6-12 Yaş:</strong> 12.5-25 mg (PO) q6-8hr (Max 150 mg/gün).</li>
                <li><strong>>12 Yaş:</strong> Yetişkin dozuyla aynıdır (50-100 mg q4-6hr).</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Standart yetişkin dozu kullanılır (50-100 mg PO/IV/IM q4-6hr).</li>
                <li>Antikolinerjik yan etkiler (konfüzyon, idrar retansiyonu) açısından yaşlı hastalar yakından izlenmelidir.</li>
            </ul>
        `
    }
},
{
    id: "dobutaminContainer",
    isim: "Dobutamin",
    piyasaIsimleri: [
        "Dobcard 250 mg/20 ml 10 Ampül",
        "Dobutabag 1000 mcg/ml 250 ml Pvc Torba",
        "Dobutabag 2000 mcg/ml 250 ml Pvc Torba",
        "Dobutabag 4000 mcg/ml 250 ml Pvc Torba",
        "Mekard 250 mg/20 ml IV 10 Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Kardiyak Dekompansasyon (Kalp Yetersizliği) & Düşük Kardiyak Debi (Endikasyon Dışı)</h5>
            <h6 class="dose-type-title">IV Sürekli İnfüzyon</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç Dozu:</strong> 0.5-1 mcg/kg/dakika.</li>
                <li><strong>Titrasyon/İdame:</strong> 2-20 mcg/kg/dakika.</li>
                <li><strong>Maksimum:</strong> 40 mcg/kg/dakika'yı aşmamalıdır.</li>
                <li><strong>Not:</strong> İstenilen etkiye göre titre edilir.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Kardiyak Dekompansasyon</h5>
            <h6 class="dose-type-title">IV Sürekli İnfüzyon</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç Dozu:</strong> 0.5-1 mcg/kg/dakika.</li>
                <li><strong>Titrasyon/İdame:</strong> 2-20 mcg/kg/dakika.</li>
                <li><strong>Maksimum:</strong> 40 mcg/kg/dakika'yı aşmamalıdır.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozaj aralığı kullanılır.</li>
                <li>Yaşlı hastalar, özellikle aritmi ve hipotansiyon gibi kardiyovasküler yan etkilere karşı daha duyarlı olabilir, bu nedenle yakın hemodinamik izlem zorunludur.</li>
            </ul>
        `
    }
},
{
    id: "dopaminContainer",
    isim: "Dopamin",
    piyasaIsimleri: [
        "Dopadren 200 mg/5 ml 5 Ampül",
        "Dopamine DBL 200 mg/5 ml IV Ampül",
        "Dopasel 200 mg/5 ml Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Hemodinamik Durumlar (IV Sürekli İnfüzyon)</h5>
            <p>Hipotansiyon, düşük kardiyak debi ve vital organ perfüzyonunun düşük olduğu durumların tedavisinde kullanılır (Septik şokta volüm genişletme sonrası hipotansiyon devam eden hastalar).</p>
            <h6 class="dose-type-title">Dozaj Aralığına Göre Etkiler</h6>
            <ul class="dose-details-list">
                <li><strong>Düşük Doz (Dopaminerjik Etki)</strong><ul><li><strong>Doz:</strong> 1-5 mcg/kg/dakika.</li><li><strong>Etki:</strong> İdrar çıkışını ve renal kan akımını artırabilir.</li></ul></li>
                <li><strong>Orta Doz (Beta1 Etkisi)</strong><ul><li><strong>Doz:</strong> 5-15 mcg/kg/dakika.</li><li><strong>Etki:</strong> Renal kan akımını, kardiyak debiyi ve kalp kasılma gücünü artırabilir.</li></ul></li>
                <li><strong>Yüksek Doz (Alfa Etkisi)</strong><ul><li><strong>Doz:</strong> 20-50 mcg/kg/dakika.</li><li><strong>Etki:</strong> Kan basıncını artırabilir ve vazokonstriksiyonu uyarır (Taşiaritmi riskini artırabilir).</li></ul></li>
            </ul>
            <h5 class="dose-condition-title">Titrasyon</h5>
            <ul class="dose-details-list simple-list">
                <li>Optimum yanıt alınana kadar 10-30 dakikalık aralıklarla 1-4 mcg/kg/dakika artırılabilir.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Hemodinamik Durumlar (Hipotansiyon Tedavisi)</h5>
            <h6 class="dose-type-title">IV Sürekli İnfüzyon</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç Dozu:</strong> 1-5 mcg/kg/dakika.</li>
                <li><strong>Titrasyon/İdame:</strong> 5-20 mcg/kg/dakika'ya çıkarılır.</li>
                <li><strong>Maksimum:</strong> 50 mcg/kg/dakika'yı aşmamalıdır.</li>
                <li><strong>Not:</strong> İstenilen yanıta göre titre edilir.</li>
            </ul>
            <h5 class="dose-condition-title">Ek Endikasyon (Endikasyon Dışı)</h5>
            <ul class="dose-details-list simple-list">
                <li>Prematüre yenidoğanlarda intraventriküler kanamayı önleme (Yetim ilaç tanımı).</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozaj aralığı kullanılır.</li>
                <li>Yaşlı hastalar, özellikle aritmi ve aşırı vazokonstriksiyon (yüksek doz) gibi yan etkilere karşı daha duyarlı olabilir. Yakın hemodinamik izlem zorunludur.</li>
            </ul>
        `
    }
},
{
    id: "enoksaparinContainer",
    isim: "Enoksaparin",
    piyasaIsimleri: [
        "Axeparin Anti XA 4000 IU/0.4 ml 10 Enjektör",
        "Axeparin Anti XA 6000 IU/0.6 ml 10 Enjektör",
        "Clexane 4000 Anti-XA IU/0.4 ml 2 Enjektör",
        "Clexane 4000 Anti-XA IU/0.4 ml 10 Enjektör",
        "Clexane 6000 Anti-XA IU/0.6 ml Enjektör",
        "Clexane 8000 Anti-XA IU/0.8 ml Enjektör",
        "Clexane 10000 Anti-XA IU/1 ml Enjektör",
        "Enox 2000 Anti-XA IU/0.2 ml 2 Enjektör",
        "Enox 4000 Anti-XA IU/0.4 ml 10 Enjektör",
        "Enox 6000 Anti-XA IU/0.6 ml 2 Enjektör",
        "Enox 8000 Anti-XA IU/0.8 ml 2 Enjektör",
        "Oksapar 2000 Anti-XA IU/0.2 ml 2 Enjektör",
        "Oksapar 4000 Anti-XA IU/0.4 ml 10 Enjektör",
        "Oksapar 6000 Anti-XA IU/0.6 ml 2 Enjektör",
        "Oksapar 8000 Anti-XA IU/0.8 ml 2 Enjektör",
        "Venaperta 2000 Anti-XA IU/0.2 ml 2 Enjektör",
        "Venaperta 4000 Anti-XA IU/0.4 ml 10 Enjektör",
        "Venaperta 6000 Anti-XA IU/0.6 ml 2 Enjektör",
        "Venaperta 10000 Anti-XA IU/1 ml 2 Enjektör"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Derin Ven Trombozu (DVT) Profilaksisi</h5>
            <h6 class="dose-type-title">Abdominal Cerrahi & Kısıtlı Hareketlilik</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 40 mg (SC) günde bir kez (qDay).</li>
                <li><strong>Zamanlama:</strong> Abdominal cerrahi için ameliyattan 2 saat önce başlanır.</li>
            </ul>
            <h6 class="dose-type-title">Kalça/Diz Protezi</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 30 mg (SC) q12hr (ameliyattan 12-24 saat sonra başlanır) VEYA 40 mg (SC) qDay (ameliyattan 9-15 saat önce başlanır).</li>
            </ul>

            <h5 class="dose-condition-title">DVT Tedavisi (Yatan/Ayaktan Hasta)</h5>
            <p>Warfarin sodyum ile birlikte uygulanır.</p>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 1 mg/kg (SC) her 12 saatte bir (q12hr) VEYA 1.5 mg/kg (SC) günde bir kez (yatan hastalar için).</li>
                <li><strong>Tedavi Süresi:</strong> En az 5 gün ve terapötik INR (2.0-3.0) elde edilene kadar devam edilir.</li>
            </ul>
            
            <h5 class="dose-condition-title">Akut Koroner Sendromlar (UA, NSTEMI, STEMI)</h5>
            <h6 class="dose-type-title">UA & NSTEMI</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 1 mg/kg (SC) q12hr.</li>
                <li><strong>Kombinasyon:</strong> Aspirin (100-325 mg/gün PO) ile eş zamanlı uygulanır.</li>
                <li><strong>Süre:</strong> Klinik stabilizasyona kadar devam edilir (Genellikle 2-8 gün).</li>
            </ul>
            <h6 class="dose-type-title">STEMI (<75 Yaş)</h6>
            <ul class="dose-details-list">
                <li><strong>Yükleme Dozu:</strong> 30 mg IV bolus (tek doz) + 1 mg/kg SC (tek doz) (Kümülatif yükleme dozu 100 mg'ı geçmemeli).</li>
                <li><strong>İdame:</strong> 1 mg/kg (SC) q12hr.</li>
            </ul>
            <h6 class="dose-type-title">STEMI (>75 Yaş)</h6>
            <ul class="dose-details-list">
                <li>**IV Bolus YOK.**</li>
                <li><strong>İdame:</strong> 0.75 mg/kg (SC) q12hr (İlk 2 doz için max 75 mg/doz).</li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları (Şiddetli Böbrek Yetmezliği: CrCl <30 mL/dk)</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>Profilaksi (Tüm Endikasyonlar):</strong> 30 mg (SC) qDay.</li>
                <li><strong>Tedavi (DVT, UA, NSTEMI):</strong> 1 mg/kg (SC) qDay.</li>
                <li><strong>STEMI Tedavisi (<75 Yaş):</strong> 30 mg IV bolus + 1 mg/kg SC, ardından 1 mg/kg SC qDay.</li>
                <li><strong>STEMI Tedavisi (>75 Yaş):</strong> Başlangıç bolus yok; idame 1 mg/kg SC qDay.</li>
            </ul>

            <h5 class="dose-condition-title">Uygulama Notları</h5>
            <ul class="dose-details-list simple-list">
                <li>Dozaj, göbek deliği çevresinde sağ ve sol ön ve arka abdominal duvarları değiştirerek **derin SC** olarak uygulanır.</li>
                <li>Düşük vücut ağırlığı (<45 kg kadın, <57 kg erkek) olan hastalarda kanama/yan etki belirtileri açısından dikkatli izlenmelidir.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Derin Ven Trombozu (DVT) (Endikasyon Dışı)</h5>
            <h6 class="dose-type-title">Profilaksi (Anti-Faktor Xa'ya Göre Titre Edilir)</h6>
            <ul class="dose-details-list">
                <li><strong>< 2 Ay:</strong> 0.75 mg/kg (SC) q12hr.</li>
                <li><strong>≥ 2 Ay:</strong> 0.5 mg/kg (SC) q12hr.</li>
            </ul>
            <h6 class="dose-type-title">Tedavi (Anti-Faktor Xa'ya Göre Titre Edilir)</h6>
            <ul class="dose-details-list">
                <li><strong>< 2 Ay:</strong> 1.5 mg/kg (SC) q12hr.</li>
                <li><strong>≥ 2 Ay:</strong> 1 mg/kg (SC) q12hr.</li>
            </ul>
            <h5 class="dose-condition-title">Kritik Not</h5>
            <ul class="dose-details-list simple-list">
                <li>Çoklu doz flakon benzil alkol içerir; bu, prematüre bebeklerde **gasping sendromu** ile ilişkilidir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Yaşlılarda (özellikle 1.5 mg/kg/gün veya 1 mg/kg q12hr dozlarında) **kanama riski artmıştır**.</li>
                <li>Şiddetli böbrek yetmezliği varsa dozaj mutlaka azaltılmalıdır (Bkz. Yetişkin Modifikasyonları).</li>
                <li><45 kg vücut ağırlığı olan yaşlı hastalar doz ayarlaması gerektirebilir.</li>
            </ul>
        `
    }
},
{
    id: "fentanilContainer",
    isim: "Fentanil",
    piyasaIsimleri: [
        "Talinat 0.5 mg/10 ml 1 Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Anestezi Ön İlaç ve Yardımcı</h5>
            <h6 class="dose-type-title">Ön İlaç (Premedikasyon)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 50-100 mcg/doz (IM veya yavaş IV)</li>
                <li><strong>Zamanlama:</strong> Ameliyattan 30-60 dakika önce.</li>
            </ul>
            <h6 class="dose-type-title">Bölgesel Anesteziye Yardımcı</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 25-100 mcg/doz (yavaş IV, 1-2 dakika üzerinde).</li>
            </ul>
            <h6 class="dose-type-title">Genel Anesteziye Yardımcı (Büyük Cerrahi)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç:</strong> 2-20 mcg/kg/doz.</li>
                <li><strong>İdame İnfüzyon:</strong> 1-2 mcg/kg/saat (IV). (İnfüzyon cerrahi bitiminden 30-60 dk önce kesilir).</li>
            </ul>

            <h5 class="dose-condition-title">Analjezi (Ağrı Yönetimi - Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Akut Bolus:</strong> 1-2 mcg/kg (IV bolus) VEYA 25-100 mcg/doz (Gerekirse).</li>
                <li><strong>Şiddetli Ağrı (PRN):</strong> 50-100 mcg/doz (IV/IM) her 1-2 saatte bir.</li>
                <li><strong>Sürekli İnfüzyon:</strong> 1-2 mcg/kg/saat VEYA 25-200 mcg/saat.</li>
                <li><strong>PCA (Hasta Kontrollü Analjezi):</strong> 20 mcg talep dozu (5-10 dk kilitlenme süresi) ve ≤50 mcg/saat temel hız (Bazal).</li>
            </ul>

            <h5 class="dose-condition-title">Dozlama Hususları</h5>
            <ul class="dose-details-list simple-list">
                <li>**Nalokson Erişimi:** Opioid aşırı doz riski nedeniyle hastanın ve hane halkının Nalokson'a erişimi değerlendirilmelidir.</li>
                <li>Önceki opioid maruziyeti olan hastalar daha yüksek başlangıç dozlarını tolere edebilir.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Cerrahi Ön İlaç (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>1-12 Yaş:</strong> 0.5-2 mcg/kg (IV) (İşlemden 3 dk önce); q1-2hr tekrarlanabilir.</li>
                <li><strong>>12 Yaş:</strong> 0.5-2 mcg/kg/doz (Max 50 mcg/doz); 5 dakikada bir tekrarlanabilir.</li>
            </ul>
            <h5 class="dose-condition-title">Sürekli Sedasyon/Analjezi</h5>
            <ul class="dose-details-list">
                <li><strong>İdame:</strong> 0.5-2 mcg/kg/saat (IV infüzyon) (İstenen etkiye göre titre edilir).</li>
            </ul>
            <h5 class="dose-condition-title">Anesteziye Yardımcı (>2 Yaş)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 2-3 mcg/kg (IV/IM) q1-2hr (PRN).</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Yaşlı hastalar, genç hastalara göre **Fentanil etkilerine iki kat daha duyarlıdır**.</li>
                <li>İlaç uygulanırken hastanın kilosu ve fiziksel durumu dikkate alınmalıdır.</li>
                <li>Solunum depresyonu ve MSS yan etkileri (konfüzyon gibi) açısından yakından izlenmelidir.</li>
            </ul>
        `
    }
},
{
    id: "flumazenilContainer",
    isim: "Flumazenil",
    piyasaIsimleri: [
        "Denaksat 0.5 mg/5 ml IV 5 Ampül",
        "Denaksat 1 mg/10 ml IV 5 Ampül",
        "Fluxate 0.5 mg/5 ml IV 5 Ampül",
        "Mazenil 0.5 mg 5 Ampül",
        "Mazenil 1 mg 5 Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Bilinçli Sedasyon ve Genel Anestezi Reversalı</h5>
            <h6 class="dose-type-title">IV Uygulama</h6>
            <ul class="dose-details-list">
                <li><strong>İlk Doz:</strong> 0.2 mg (IV) (15 saniye üzerinde).</li>
                <li><strong>Tekrar:</strong> 45 saniye sonra yanıt yoksa, 0.2 mg tekrar (1 dakika üzerinde); 1 dakikalık aralıklarla tekrarlanabilir (Maksimum 4 doz/1 mg).</li>
                <li><strong>Resedasyon:</strong> Tekrar sedasyon oluşursa, 20 dakikalık aralıklarla dozlar tekrarlanabilir. (Max 1 mg/doz VEYA 3 mg/saat).</li>
            </ul>

            <h5 class="dose-condition-title">Benzodiazepin Aşırı Dozu</h5>
            <h6 class="dose-type-title">IV Uygulama</h6>
            <ul class="dose-details-list">
                <li><strong>İlk Doz:</strong> 0.2 mg (IV) (15-30 saniye üzerinde).</li>
                <li><strong>İkinci Doz:</strong> 30 saniye sonra yanıt yoksa, 1 dakika sonra 0.3 mg (IV) (30 saniye üzerinde).</li>
                <li><strong>Tekrar Dozları:</strong> Yanıt yoksa, 1 dakikalık aralıklarla 0.5 mg (IV) (30 saniye üzerinde) tekrarlanır (Maksimum kümülatif 3 mg/saat).</li>
                <li><strong>Not:</strong> 5 mg toplam dozdan sonra 5 dakika içinde yanıt yoksa, sedasyonun benzodiazepinlerden kaynaklanma olasılığı düşüktür.</li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
            <h6 class="dose-type-title">Karaciğer Yetmezliği</h6>
            <ul class="dose-details-list simple-list">
                <li>İlk doz ayarlaması gerekmez; ancak sonraki dozların sıklığı veya miktarı azaltılmalıdır.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Benzodiazepin Sedasyonunun Reversalı</h5>
            <h6 class="dose-type-title">IV Uygulama</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç Dozu:</strong> 0.01 mg/kg (IV) (15 saniye üzerinde).</li>
                <li><strong>Tekrar:</strong> 45 saniye sonra ve ardından her dakika tekrarlanabilir.</li>
                <li><strong>Maksimum Kümülatif:</strong> 4 doz için 0.05 mg/kg VEYA 1 mg (hangisi düşükse).</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
                <li>Karaciğer yetmezliği veya benzodiazepinlere aşırı duyarlılık riski olan yaşlı hastalarda doz titrasyonu sırasında dikkatli olunmalıdır.</li>
            </ul>
        `
    }
},
{
    id: "glukagonContainer",
    isim: "Glukagon",
    piyasaIsimleri: [
        "GlucaGen HypoKit",
        "Gvoke Kit",
        "Gvoke HypoPen",
        "Gvoke PFS",
        "Gvoke VialDx"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Şiddetli Hipoglisemi</h5>
            <h6 class="dose-type-title">SC/IM/IV Uygulama</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 1 mg (IM/SC) VEYA 1 mg (IV) (Tıbbi gözetim altında).</li>
                <li><strong>Tekrar:</strong> Acil yardım beklenirken 15 dakikada bir tekrarlanabilir.</li>
                <li><strong>Takip:</strong> Hastanın yanıtı yoksa veya hemen mümkünse dekstroz (glukoz) verilmelidir.</li>
            </ul>

            <h5 class="dose-condition-title">Tanısal Yardımcı (Radyolojik İncelemeler)</h5>
            <p>GIS hareketini geçici olarak engellemek için.</p>
            <h6 class="dose-type-title">IV Uygulama (1 Dakika Üzerinde)</h6>
            <ul class="dose-details-list">
                <li><strong>Mide, Duodenum, İnce Bağırsak:</strong> 0.2-0.5 mg (IV).</li>
                <li><strong>Kolon:</strong> 0.5-0.75 mg (IV).</li>
            </ul>
            <h6 class="dose-type-title">IM Uygulama (GlucaGen HypoKit)</h6>
            <ul class="dose-details-list">
                <li><strong>Mide, Duodenum, İnce Bağırsak:</strong> 1-2 mg (IM).</li>
                <li><strong>Kolon:</strong> 1-2 mg (IM).</li>
            </ul>
            <ul class="dose-details-list simple-list">
                <li><strong>Uyarı:</strong> 1 mg üzeri IV bolus dozları bulantı ve kusmaya neden olabilir.</li>
                <li>Tanısal işlemden sonra, açlıkta olan hastalara oral karbonhidrat verilmelidir.</li>
            </ul>

            <h5 class="dose-condition-title">Beta-Bloker & Kalsiyum Kanal Blokeri Toksisitesi (Endikasyon Dışı)</h5>
            <h6 class="dose-type-title">IV Uygulama</h6>
            <ul class="dose-details-list">
                <li><strong>Yükleme Dozu:</strong> 50-150 mcg/kg (IVP) (1 dakika üzerinde).</li>
                <li><strong>İdame İnfüzyon:</strong> 3-5 mg/saat VEYA 50-100 mcg/kg/saat (Yeterli klinik yanıt elde edilene kadar titre edilir).</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Şiddetli Hipoglisemi (≥2 Yaş)</h5>
            <h6 class="dose-type-title">GlucaGen HypoKit (SC/IM)</h6>
            <ul class="dose-details-list">
                <li><strong><25 kg VEYA <6 Yaş (Kilo Bilinmiyorsa):</strong> 0.5 mg (SC/IM).</li>
                <li><strong>≥25 kg VEYA ≥6 Yaş (Kilo Bilinmiyorsa):</strong> 1 mg (SC/IM).</li>
                <li><strong>Tekrar:</strong> Gerekirse 15 dakikada bir tekrarlanabilir.</li>
            </ul>
            <h6 class="dose-type-title">Gvoke Kit/HypoPen/PFS (SC)</h6>
            <ul class="dose-details-list">
                <li><strong>2 ila <12 Yaş (<45 kg):</strong> 0.5 mg (SC) (Gerekirse 15 dakikada tekrar).</li>
                <li><strong>≥12 Yaş:</strong> 1 mg (SC) (Gerekirse 15 dakikada tekrar).</li>
            </ul>
            <ul class="dose-details-list simple-list">
                <li>İlk uygulamadan hemen sonra acil servis aranmalıdır.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
            </ul>
        `
    }
},
{
    id: "haloperidolContainer",
    isim: "Haloperidol",
    piyasaIsimleri: [
        "Norodol 5 mg 5 Ampül",
        "Norodol 5 mg 50 Tablet",
        "Norodol 10 mg 5 Ampül",
        "Norodol 10 mg 30 Tablet",
        "Norodol 20 mg 20 Tablet",
        "Norodol Damla 20 ml (2 mg/ml)",
        "Norodol Dekanoat 50 mg/ml IM 1 ml 1 Ampül",
        "Norodol Dekanoat 50 mg/ml IM 3 ml 1 Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Şizofreni, Psikoz ve Davranışsal Bozukluklar</h5>
            <h6 class="dose-type-title">Oral (PO) - Başlangıç</h6>
            <ul class="dose-details-list">
                <li><strong>Orta Şiddet:</strong> 0.5-2 mg q8-12hr.</li>
                <li><strong>Şiddetli:</strong> 3-5 mg q8-12hr.</li>
                <li><strong>Maksimum:</strong> 30 mg/gün'ü aşmamalı.</li>
            </ul>
            <h6 class="dose-type-title">IM Laktat (Hızlı Etkili)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 2-5 mg q4-8hr (Gerekirse akut ajitasyonda q1hr).</li>
                <li><strong>Maksimum:</strong> 20 mg/gün'ü aşmamalı.</li>
            </ul>
            <h6 class="dose-type-title">IM Dekanoat (Depo)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç:</strong> Aylık IM doz, günlük PO dozunun 10-20 katı (Max 100 mg).</li>
                <li><strong>İdame:</strong> Aylık doz, günlük PO dozunun 10-15 katı.</li>
            </ul>
            <h6 class="dose-type-title">IV (Yoğun Bakım Deliryumu - Endikasyon Dışı)</h6>
            <ul class="dose-details-list">
                <li><strong>Kullanım:</strong> Sadece **Haloperidol Laktat** IV uygulanır (Dekanoat formu IV KULLANILMAZ).</li>
                <li><strong>Başlangıç:</strong> 2-10 mg (ajitasyon derecesine bağlı).</li>
                <li><strong>Titrasyon:</strong> Yanıt yetersizse, bolus dozu q15-30min iki katına çıkarılarak tekrarlanabilir. Sakinleşme sağlandığında, son bolus dozunun %25'i q6hr uygulanır.</li>
                <li><strong>İzleme:</strong> EKG ve QT aralığı izlenmelidir (QT uzaması ve Torsades de Pointes riski).</li>
            </ul>

            <h5 class="dose-condition-title">Tourette Bozukluğu</h5>
            <ul class="dose-details-list">
                <li><strong>Başlangıç:</strong> 0.5-2 mg (PO) q8-12hr.</li>
                <li><strong>Şiddetli:</strong> 3-5 mg (PO) q8-12hr'a titre edilir.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Şizofreni, Psikoz/Sedasyon (3-12 Yaş)</h5>
            <ul class="dose-details-list">
                <li><strong>Başlangıç:</strong> 0.25-0.5 mg/gün (PO) q8-12hr bölünmüş.</li>
                <li><strong>İdame:</strong> 0.05-0.15 mg/kg/gün (PO) q8-12hr bölünmüş.</li>
                <li>**6-12 Yaş IM Laktat:** 1-3 mg IM q4-8hr (Max 0.15 mg/kg/gün).</li>
            </ul>
            
            <h5 class="dose-condition-title">Tourette Bozukluğu (3-12 Yaş)</h5>
            <ul class="dose-details-list">
                <li><strong>Başlangıç:</strong> 0.5 mg/gün (PO).</li>
                <li><strong>İdame:</strong> 0.05-0.075 mg/kg/gün (PO) q8-12hr bölünmüş (en düşük etkili seviye).</li>
            </ul>
            
            <h5 class="dose-condition-title">Akut Ajitasyon (>12 Yaş)</h5>
            <ul class="dose-details-list">
                <li><strong>Oral:</strong> 0.5-3 mg (PO), 1 saat sonra tekrarlanabilir.</li>
                <li><strong>IM:</strong> 2-5 mg (IM), 1 saat sonra tekrarlanabilir.</li>
            </ul>
            
            <h5 class="dose-condition-title">< 3 Yaş</h5>
            <ul class="dose-details-list simple-list">
                <li>Güvenlik ve etkinlik belirlenmemiştir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz ve Hususlar</h5>
            <ul class="dose-details-list simple-list">
                <li>Daha düşük başlangıç dozları (**0.25-0.5 mg PO q8-12hr**) ve daha kademeli ayarlamalar önerilir.</li>
                <li>IV uygulama için (Endikasyon Dışı) **0.25-0.5 mg IV q4hr** kullanılabilir; **sürekli EKG izlemi** zorunludur.</li>
                <li>Yaşlılar, tardif diskinezi ve IV uygulama ile kardiyovasküler/enfeksiyöz ölümler açısından daha yüksek risk altındadır.</li>
                <li>**Demansla ilişkili psikozda onaylanmamıştır.**</li>
            </ul>
        `
    }
},
{
    id: "heparinContainer",
    isim: "Heparin",
    piyasaIsimleri: [
        "Biemparin 25000 IU/5 ml IV 1 Flakon",
        "Heparin Sodyum Panpharma 10 Flakon",
        "Heparinum 25000 IU/5 ml IV 1 Flakon",
        "Heparx 25000 IU/5 ml SC 1 Adet",
        "Hexarin 25000 IU/5 ml IV/SC 1 Adet",
        "Koparin 25000 IU/5 ml 1 Flakon",
        "Nevparin 25000 IU 1 Flakon",
        "Poliparin 25000 IU/5 ml 1 Flakon",
        "Seloparin 25000 IU/5 ml 1 Flakon",
        "Vasparin 25000 IU 1 Flakon"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">DVT & PE (Derin Ven Trombozu & Pulmoner Emboli)</h5>
            <h6 class="dose-type-title">Profilaksi (Önleme)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart:</strong> 5000 Ünite (SC) q8-12hr VEYA 7500 Ünite (SC) q12hr.</li>
            </ul>
            <h6 class="dose-type-title">Tedavi</h6>
            <ul class="dose-details-list">
                <li><strong>Bolus + İnfüzyon:</strong> 80 Ünite/kg (IV bolus), ardından 18 Ünite/kg/saat (IV sürekli infüzyon).</li>
                <li><strong>Hedef:</strong> Doz, **aPTT 50-70 saniye** aralığında tutacak şekilde ayarlanır.</li>
                <li><strong>Alternatif SC:</strong> 250 Ünite/kg (alternatif olarak 17,500 Ünite) SC, ardından 250 Ünite/kg q12hr.</li>
            </ul>

            <h5 class="dose-condition-title">Akut Koroner Sendromlar (AKS)</h5>
            <h6 class="dose-type-title">Unstabil Anjina/NSTEMI</h6>
            <ul class="dose-details-list">
                <li><strong>Bolus:</strong> 60-70 Ünite/kg (IV bolus) (Max 5000 Ünite).</li>
                <li><strong>İdame:</strong> 12-15 Ünite/kg/saat (IV infüzyon) (Max 1000 Ünite/saat).</li>
            </ul>
            <h6 class="dose-type-title">STEMI (Fibrinolitik Alan Hasta)</h6>
            <ul class="dose-details-list">
                <li><strong>Bolus:</strong> 60 Ünite/kg (IV bolus) (Max 4000 Ünite).</li>
                <li><strong>İdame:</strong> 12 Ünite/kg/saat (Max 1000 Ünite/saat) (IV sürekli infüzyon).</li>
            </ul>
            <h6 class="dose-type-title">PCI (aPTT'ye Göre)</h6>
            <ul class="dose-details-list">
                <li><strong>GPIIb/IIIa İnhibitörsüz:</strong> 70-100 Ünite/kg IV bolus (Hedef ACT 250-300 sn).</li>
                <li><strong>GPIIb/IIIa İnhibitörlü:</strong> 50-70 Ünite/kg IV bolus (Hedef ACT >200 sn).</li>
            </ul>
            
            <h5 class="dose-condition-title">Kateter Açıklığı (Flushing)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 100 Ünite/mL konsantrasyon kullanılır; kateter lümenini dolduracak kadar hacimde uygulanır.</li>
                <li><strong>Sıklık:</strong> Periferik heparin kilitleri tipik olarak q6-8hr yıkanır.</li>
            </ul>

            <h5 class="dose-condition-title">Dozlama Hususları</h5>
            <ul class="dose-details-list simple-list">
                <li>Pek çok farklı konsantrasyon mevcuttur; ilaç hatalarını önlemek için **aşırı dikkatli** olun.</li>
                <li><strong>Karaciğer Yetmezliği:</strong> Dikkatli kullanılmalı; doz ayarlaması gerekebilir.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Venöz Tromboembolik Tedavi (Endikasyon Dışı)</h5>
            <h6 class="dose-type-title">IV Tedavi (aPTT'ye Göre Titre Edilir)</h6>
            <ul class="dose-details-list">
                <li><strong>< 1 Yaş (Yükleme + İdame):</strong> 75 Ünite/kg (IV yükleme), ardından 28 Ünite/kg/saat (IV idame).</li>
                <li><strong>> 1 Yaş (Yükleme + İdame):</strong> 75 Ünite/kg (IV yükleme), ardından 20 Ünite/kg/saat (IV idame).</li>
            </ul>
            
            <h5 class="dose-condition-title">Kateter Açıklığı (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong><10 kg Bebekler:</strong> 10 Ünite/mL.</li>
                <li><strong>>10 kg Çocuklar/Bebekler:</strong> 10-100 Ünite/mL.</li>
            </ul>

            <h5 class="dose-condition-title">Kritik Not</h5>
            <ul class="dose-details-list simple-list">
                <li>Yenidoğanlarda ve bebeklerde koruyucu **benzil alkol** içeren heparin kullanılmamalıdır (Gasping sendromu ve ölüm riski nedeniyle). Koruyucusuz heparin kullanılmalıdır.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir; standart yetişkin dozları kullanılır.</li>
                <li>Yaşlı hastalar, kanama komplikasyonları açısından daha yüksek risk altındadır; bu nedenle dozaj titrasyonu sırasında (aPTT takibi) ekstra dikkatli olunmalıdır.</li>
            </ul>
        `
    }
},
{
    id: "hidrokortizonContainer",
    isim: "Hidrokortizon",
    piyasaIsimleri: [
        "Genkort 10 mg 30 Tablet",
        "Genkort 10 mg 60 Tablet",
        "Hydrocort-Liyo 100 mg IM/IV"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">İnflamasyon</h5>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 20-240 mg (PO) günde bir kez.</li>
            </ul>
            <h6 class="dose-type-title">IV/IM</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 100-500 mg/doz (IV/IM)</li>
                <li><strong>Sıklık:</strong> Her 2, 4, veya 6 saatte bir.</li>
            </ul>

            <h5 class="dose-condition-title">Status Asthmaticus</h5>
            <ul class="dose-details-list">
                <li><strong>Başlangıç:</strong> İlk 24 saat için 1-2 mg/kg (IV) q6hr.</li>
                <li><strong>İdame:</strong> 0.5-1 mg/kg (IV) q6hr.</li>
            </ul>

            <h5 class="dose-condition-title">Kronik Adrenal Yetmezlik (Replasman Tedavisi)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 15-25 mg/gün (PO) q8-12hr bölünmüş.</li>
                <li><strong>Not:</strong> Mümkün olan en düşük doz kullanılarak bireyselleştirilmelidir.</li>
            </ul>

            <h5 class="dose-condition-title">Akut Adrenal Kriz (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Yükleme:</strong> 100 mg (IV bolus).</li>
                <li><strong>Takip:</strong> 24 saat üzerinde sürekli infüzyon VEYA q6hr bölünmüş olarak 200 mg.</li>
                <li><strong>Stabilizasyon Sonrası:</strong> 6 doz için 50 mg (PO) q8hr, ardından bölünmüş dozlarda 30-50 mg/gün'e düşürülür.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">İnflamasyon (<12 Yaş)</h5>
            <ul class="dose-details-list">
                <li><strong>PO:</strong> 2.5-10 mg/kg/gün (q6-8hr bölünmüş).</li>
                <li><strong>IM/IV:</strong> 1-5 mg/kg/gün (q12-24hr bölünmüş).</li>
            </ul>

            <h5 class="dose-condition-title">Status Asthmaticus</h5>
            <ul class="dose-details-list">
                <li><strong>IV Tedavi:</strong> 1-2 mg/kg (IV) q6hr (Max 250 mg).</li>
                <li><strong>IV İdame:</strong> 2 mg/kg/gün (IV) q6hr bölünmüş VEYA 0.5-1 mg/kg (IV) q6hr.</li>
            </ul>

            <h5 class="dose-condition-title">Adrenokortikal Yetmezlik (Fizyolojik Replasman)</h5>
            <ul class="dose-details-list">
                <li><strong>Başlangıç Dozu:</strong> 8-10 mg/m²/gün (PO) q8-12hr bölünmüş.</li>
                <li><strong>Titrasyon:</strong> En düşük olası doz kullanılarak bireyselleştirilir.</li>
            </ul>

            <h5 class="dose-condition-title">Akut Adrenal Kriz</h5>
            <h6 class="dose-type-title">>1 Ay - 1 Yaş</h6>
            <ul class="dose-details-list">
                <li><strong>Bolus:</strong> 25 mg (IV bolus).</li>
                <li><strong>Takip:</strong> 50 mg/m²/gün (Sürekli IV damla VEYA q6-8hr bölünmüş).</li>
            </ul>
            <h6 class="dose-type-title">1 - 12 Yaş</h6>
            <ul class="dose-details-list">
                <li><strong>Bolus:</strong> 50-100 mg (Hızlı IV bolus).</li>
                <li><strong>Takip:</strong> 50 mg/m²/gün (Sürekli IV damla VEYA q6-8hr bölünmüş).</li>
            </ul>
            
            <h5 class="dose-condition-title">Dozlama Hususları</h5>
            <ul class="dose-details-list simple-list">
                <li>Akut ateşli hastalık, cerrahi veya majör travma gibi **stres** dönemlerinde **yüksek dozlar** gerekebilir.</li>
                <li>Tedavi sırasında linear büyüme ve kilo alımı izlenmelidir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
                <li>Uzun süreli kullanımda kemik yoğunluğu kaybı ve diğer steroid yan etkileri açısından yakından izlenmelidir.</li>
            </ul>
        `
    }
},
{
    id: "kalsiyumGlukonatContainer",
    isim: "Kalsiyum Glukonat",
    piyasaIsimleri: [], // Piyasa ismi belirtilmemiştir.
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Kalsiyum Takviyesi (Elemental Kalsiyum Bazlı)</h5>
            <ul class="dose-details-list">
                <li><strong>19-50 Yaş:</strong> 1000 mg/gün (PO) q8-12hr bölünmüş.</li>
                <li><strong>>50 Yaş:</strong> 1200 mg/gün (PO) q8-12hr bölünmüş.</li>
                <li><strong>Hamile/Emziren:</strong> 1000 mg/gün (PO) q8-12hr bölünmüş.</li>
                <li><strong>Not:</strong> Yemeklerden tercihen 1-2 saat sonra alınmalıdır.</li>
            </ul>

            <h5 class="dose-condition-title">Hipokalsemi Tedavisi</h5>
            <h6 class="dose-type-title">Hafif (İyonize Ca 1-1.2 mmol/L)</h6>
            <ul class="dose-details-list simple-list">
                <li><strong>PO:</strong> 1-3 g/gün bölünmüş dozlarda.</li>
                <li><strong>IV:</strong> 1-2 g (2 saat üzerinde).</li>
            </ul>
            <h6 class="dose-type-title">Şiddetli (İyonize Ca <1 mmol/L)</h6>
            <ul class="dose-details-list">
                <li><strong>Hipokalsemik Tetani:</strong> 100-300 mg elemental kalsiyum (~3 g Kalsiyum Glukonat) IV (5-10 dakika üzerinde).</li>
                <li><strong>Takip:</strong> Ardından 0.5 mg/kg/saat sürekli IV infüzyon (2 mg/kg/saat'e artırılabilir).</li>
            </ul>

            <h5 class="dose-condition-title">Endikasyon Dışı Kullanımlar (Acil)</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>Kardiyak Arrest:</strong> Sadece **hiperkalemi, hipokalsemi veya hipermagnezemi** varlığında 1.5-3 g IV (2-5 dakika üzerinde).</li>
                <li><strong>Kalsiyum Kanal Blokeri (KKB) Aşırı Dozu:</strong> 60 mg/kg IV (5 dakika üzerinde) q10-20min PRN (Max 3-4 g/doz). VEYA 60-120 mg/kg/saat IV infüzyon.</li>
                <li><strong>Hiperkalemi/Hipermagnezemi:</strong> 1.5-3 g IV (2-5 dakika üzerinde).</li>
            </ul>

            <h5 class="dose-condition-title">Hidroflorik Asit (HF) Yanığı (Endikasyon Dışı)</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>Topikal:</strong> %2.5-5 Kalsiyum Glukonat jel (q30min, ardından q4hr) uygulanır.</li>
                <li><strong>SC:</strong> %10 Kalsiyum Glukonat, Max 0.5 mL/cm² cilt alanına.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Kalsiyum Takviyesi (Elemental Kalsiyum Bazlı)</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>1-3 Yaş:</strong> 500 mg/gün (PO).</li>
                <li><strong>4-8 Yaş:</strong> 800 mg/gün (PO).</li>
                <li><strong>9-18 Yaş:</strong> 1300 mg/gün (PO).</li>
            </ul>

            <h5 class="dose-condition-title">Hipokalsemi Tedavisi</h5>
            <h6 class="dose-type-title">Hafif</h6>
            <ul class="dose-details-list simple-list">
                <li><strong>Yenidoğan:</strong> 500-1500 mg/kg/gün (PO) q4-6hr bölünmüş.</li>
                <li><strong>Bebek/Çocuk:</strong> 500-725 mg/kg/gün (PO) q6-8hr bölünmüş.</li>
            </ul>
            <h6 class="dose-type-title">Şiddetli</h6>
            <ul class="dose-details-list">
                <li><strong>Yenidoğan:</strong> 200-800 mg/kg/gün (IV sürekli infüzyon VEYA q6hr aralıklı).</li>
                <li><strong>Bebek/Çocuk:</strong> 200-500 mg/kg/gün (IV sürekli infüzyon VEYA q6hr aralıklı).</li>
                <li><strong>Hipokalsemik Tetani:</strong> 100-200 mg/kg IV (10 dakika üzerinde).</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Kalsiyum takviyesi için önerilen günlük alım 1200 mg/gün'dür.</li>
                <li>İzleme: Renal yetmezlik riski nedeniyle IV uygulama sırasında kalsiyum seviyeleri ve böbrek fonksiyonu yakından izlenmelidir.</li>
            </ul>
        `
    }
},
{
    id: "ketaminContainer",
    isim: "Ketamin",
    piyasaIsimleri: [
        "Ketalar 500 mg 1 Flakon"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Anestezi İndüksiyonu</h5>
            <h6 class="dose-type-title">Yükleme Dozu</h6>
            <ul class="dose-details-list">
                <li><strong>IV:</strong> 1-4.5 mg/kg (yavaş IV tek doz).</li>
                <li><strong>IV (Yardımcı İlaçlı):</strong> 0.5-2 mg/kg (yavaş IV tek doz).</li>
                <li><strong>IM:</strong> 6.5-13 mg/kg (IM tek doz).</li>
                <li><strong>IM (Yardımcı İlaçlı):</strong> 4-10 mg/kg (IM tek doz).</li>
            </ul>
            <h6 class="dose-type-title">İdame</h6>
            <ul class="dose-details-list">
                <li><strong>Bolus:</strong> IV indüksiyon dozunun %50'si (Gerekirse).</li>
                <li><strong>Sürekli İnfüzyon:</strong> 0.1-0.5 mg/dakika (IV).</li>
            </ul>

            <h5 class="dose-condition-title">Dirençli Depresyon (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 0.5 mg/kg (IV infüzyon)</li>
                <li><strong>Sıklık:</strong> Haftada iki kez (Maksimum 6 hafta).</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Sedasyon/Analjezi (≥3 Ay - Endikasyon Dışı)</h5>
            <h6 class="dose-type-title">İntramüsküler (IM)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 4-5 mg/kg (IM) tek doz.</li>
                <li><strong>Tekrar:</strong> Sedasyon yetersizse 5-10 dakika sonra tekrarlanabilir (Aralık 2-5 mg/kg).</li>
            </ul>
            <h6 class="dose-type-title">İntravenöz (IV)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 1.5-2 mg/kg (30-60 saniye üzerinde).</li>
                <li><strong>Tekrar:</strong> Başlangıç sedasyonu yetersizse, q5-15min 0.5-2 mg/kg artan dozlar uygulanabilir.</li>
            </ul>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 6-10 mg/kg (PO) tek doz (İşlemden 30 dakika önce içecek ile karıştırılır).</li>
            </ul>
            
            <h5 class="dose-condition-title">Anestezi İndüksiyonu (≥16 Yaş)</h5>
            <ul class="dose-details-list simple-list">
                <li>Yetişkin dozlarıyla aynıdır.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
                <li>Halüsinasyonlar ve deliryum gibi psikolojik yan etkiler açısından yaşlı hastalar daha yakından izlenmelidir.</li>
            </ul>
        `
    }
},
{
    id: "lidokainContainer",
    isim: "Lidokain",
    piyasaIsimleri: [
        "Jetokain Simplex 20 mg/ml 10 Ampül",
        "Jetokain Sprey 100 mg/ml 50 ml",
        "Joymax Sprey %10",
        "Lidon 40 mg/2 ml 10 Ampül",
        "Lincaine Sprey %10 50 ml",
        "Locanest Sprey %10 50 ml",
        "Precoxin Sprey %10 40 ml",
        "Vemcaine Pump Sprey %10 50 ml"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Ventriküler Aritmiler / Nabızsız Ventriküler Taşikardi (VF/VT)</h5>
            <p>Defibrilasyon, KPR ve vazopressör uygulamasından sonra.</p>
            <h6 class="dose-type-title">IV Bolus</h6>
            <ul class="dose-details-list">
                <li><strong>İlk Doz:</strong> 1-1.5 mg/kg (yavaş IV bolus, 2-3 dakika üzerinde).</li>
                <li><strong>Tekrar (Refrakter VF/VT):</strong> 5-10 dakika içinde 0.5-0.75 mg/kg dozlar tekrarlanabilir (Maksimum toplam doz 3 mg/kg).</li>
            </ul>
            <h6 class="dose-type-title">Sürekli İnfüzyon</h6>
            <ul class="dose-details-list">
                <li><strong>İdame:</strong> Perfüzyonun geri dönüşünden sonra 1-4 mg/dakika (IV).</li>
                <li><strong>Tekrarlayan Aritmi:</strong> İnfüzyon sırasında 0.5 mg/kg bolus uygulanır.</li>
            </ul>
            <h6 class="dose-type-title">Alternatif Uygulama (IV Mümkün Değilse)</h6>
            <ul class="dose-details-list simple-list">
                <li><strong>Endotrakeal Tüp (ET):</strong> 2-3.75 mg/kg (IV dozunun 2 ila 2.5 katı önerilir) (5-10 mL SF veya steril suda seyreltilir).</li>
                <li><strong>Intraosseöz (IO):</strong> Uygulanabilir.</li>
            </ul>
            
            <h5 class="dose-condition-title">Hemodinamik Olarak Stabil Monomorfik VT</h5>
            <ul class="dose-details-list">
                <li><strong>Bolus:</strong> 1-1.5 mg/kg; 5-10 dakika içinde 0.5-0.75 mg/kg tekrar (Toplam 3 mg/kg'a kadar).</li>
                <li><strong>Devam:</strong> Ardından 1-4 mg/dakika sürekli infüzyon.</li>
            </ul>
            
            <h5 class="dose-condition-title">Diğer Kullanımlar</h5>
            <ul class="dose-details-list simple-list">
                <li>IV uygulamanın veya EKG monitörizasyonunun mümkün olmadığı durumlarda **IM doz** endikedir.</li>
                <li>**İzleme:** EKG monitörizasyonu zorunludur.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Ventriküler Aritmiler</h5>
            <h6 class="dose-type-title">IV/IO/ET Bolus</h6>
            <ul class="dose-details-list">
                <li><strong>Bolus:</strong> 0.5-1 mg/kg (Max 100 mg).</li>
                <li><strong>Takip:</strong> Sürekli infüzyon ile devam edilir. Bolus ile infüzyon başlangıcı >15 dakika gecikirse, toplam 5 mg/kg'a ulaşmak için q5-10min ek bolus uygulanır.</li>
            </ul>
            <h6 class="dose-type-title">Sürekli İnfüzyon</h6>
            <ul class="dose-details-list">
                <li><strong>İdame:</strong> 20-50 mcg/kg/dakika (IV).</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir.</li>
                <li>Metabolizma ve eliminasyon yavaşlayabileceğinden, **toksisite riskini** azaltmak için başlangıç dozları düşük tutulmalı ve dikkatle titre edilmelidir.</li>
                <li>Konfüzyon ve nöbet gibi merkezi sinir sistemi (MSS) yan etkileri açısından izlenmelidir.</li>
            </ul>
        `
    }
},
{
    id: "magnezyumSulfatContainer",
    isim: "Magnezyum Sülfat",
    piyasaIsimleri: [
        "Magnezyum Sülfat %15 10 ml 10 Ampül (Galen)",
        "Magnezyum Sülfat %15 10 ml 10 Ampül (Onfarma)",
        "Magnezyum Sülfat %15 10 ml 10 Ampül",
        "Turktıpsan Magnezyum Sülfat 4 g/100 ml IV (Setsiz)",
        "Turktıpsan Magnezyum Sülfat 40 g/1000 ml IV (1000 Setsiz)",
        "Turktıpsan Magnezyum Sülfat 1500 mg/10 ml 10 Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Hipomagnezemi</h5>
            <h6 class="dose-type-title">Hafif</h6>
            <ul class="dose-details-list">
                <li><strong>IM:</strong> 1 g (IM) her 6 saatte bir (q6hr) x 4 doz.</li>
            </ul>
            <h6 class="dose-type-title">Şiddetli (Semptomatik)</h6>
            <ul class="dose-details-list">
                <li><strong>IV:</strong> 4-8 g (IV) (4-5 dakika üzerinde Max 4 g/dk).</li>
            </ul>

            <h5 class="dose-condition-title">Gebelik Toksemisi (Preeklampsi/Eklampsi)</h5>
            <p>Preeklampsi ile ilişkili nöbetleri önlemek ve eklampsi nöbetlerini kontrol altına almak için.</p>
            <ul class="dose-details-list">
                <li><strong>IV Yükleme:</strong> 4-5 g (IV) (250 mL SF/D5W içinde seyreltilmiş).</li>
                <li><strong>Takip:</strong> Başlangıç IV dozundan sonra 1-2 g/saat (IV) VEYA her kalçaya bölünmüş olarak 10 g IM.</li>
            </ul>
            
            <h5 class="dose-condition-title">Torsades de Pointes (TdP)</h5>
            <ul class="dose-details-list">
                <li><strong>Nabızlı TdP (ACLS):</strong> 1-2 g yavaş IV (50-100 mL D5W'de seyreltilmiş) (5-60 dakika üzerinde), ardından 0.5-1 g/saat IV infüzyon.</li>
                <li><strong>Kardiyak Arrest TdP (ACLS):</strong> 1-2 g yavaş IV (10 mL D5W'de seyreltilmiş) (5-20 dakika üzerinde).</li>
            </ul>
            
            <h5 class="dose-condition-title">Erken Doğum Eylemi (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Yükleme Dozu:</strong> 4-6 g IV (20 dakika üzerinde).</li>
                <li><strong>İdame Dozu:</strong> 2-4 g/saat IV (kasılmalar durduktan sonra 12-24 saat).</li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>Şiddetli Böbrek Yetmezliği:</strong> 48 saatte **20 g'ı aşmamalıdır**.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Hipomagnezemi</h5>
            <h6 class="dose-type-title">IV / IM</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 25-50 mg/kg (IV/IM) (q4-6hr x 3-4 doz).</li>
                <li><strong>Oral (PO):</strong> 100-200 mg/kg (PO) q6hr.</li>
            </ul>

            <h5 class="dose-condition-title">Akut Nefrit</h5>
            <ul class="dose-details-list">
                <li><strong>Hafif:</strong> 100 mg/kg (IM) q4-6hr PRN.</li>
                <li><strong>Şiddetli:</strong> 100-200 mg/kg IV (%1-3 solüsyon olarak) (Toplam doz 1 saat içinde; yarısı ilk 15-20 dakikada).</li>
            </ul>

            <h5 class="dose-condition-title">Bronkospazm (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 25-50 mg/kg (IV) (10-20 dakika üzerinde).</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
                <li>Yaşlı hastalar böbrek fonksiyonunda azalmaya daha yatkın olduğundan, **renal yetmezlik modifikasyonlarına** (48 saatte Max 20 g) kesinlikle uyulmalı ve yakından izlenmelidir.</li>
            </ul>
        `
    }
},
{
    id: "mannitolContainer",
    isim: "Mannitol",
    piyasaIsimleri: [
        "Mannitol Serum %20 PVC Setli 100 ml",
        "Mannitol Serum %20 PVC Setli 150 ml",
        "Mannitol Serum %20 PVC Setli 500 ml",
        "Mannitol Serum %20 PVC Setsiz 100 ml",
        "Mannitol Serum %20 PVC Setsiz 150 ml",
        "Mannitol Serum %20 PVC Setsiz 500 ml",
        "Mannitol Serum %20 Şişe Setli 500 ml",
        "Mannitol Serum %20 Şişe Setsiz 500 ml",
        "Neofleks %5 3000 ml (Setsiz)",
        "Neofleks Mannitol %5 3000 ml (Setli)",
        "Polifleks Mannitol Serum 500 ml (Setli)",
        "Polifleks Mannitol Serum 500 ml (Setsiz)"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Artmış İntrakraniyal Basınç (İKB)</h5>
            <h6 class="dose-type-title">IV Uygulama</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 0.25 g/kg (IV).</li>
                <li><strong>Tekrar:</strong> Her 6-8 saatte bir tekrarlanabilir (q6-8hr).</li>
            </ul>

            <h5 class="dose-condition-title">Artmış İntraoküler Basınç (İOB)</h5>
            <h6 class="dose-type-title">IV Uygulama</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 1.5-2 g/kg (IV) tek doz.</li>
                <li><strong>Ameliyat Öncesi Kullanım:</strong> Maksimum İOB azalması için ameliyattan 1-1.5 saat önce uygulanmalıdır.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Artmış İntrakraniyal Basınç (İKB)</h5>
            <ul class="dose-details-list">
                <li><strong>Başlangıç Dozu:</strong> İlk olarak 0.25-1 g/kg (IV).</li>
                <li><strong>İdame Dozu:</strong> 0.25-0.5 g/kg (IV) her 4-6 saatte bir (q4-6hr).</li>
            </ul>

            <h5 class="dose-condition-title">Artmış İntraoküler Basınç (İOB)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> %20'lik solüsyondan 1.5-2 g/kg (7.5-10 mL/kg) tek doz.</li>
                <li><strong>Uygulama:</strong> 30-60 dakika üzerinde IV infüzyon.</li>
                <li><strong>Ameliyat Öncesi Kullanım:</strong> Maksimum İOB azalması için ameliyattan 1-1.5 saat önce uygulanmalıdır.</li>
            </ul>
            
            <h5 class="dose-condition-title">Dozlama Hususları</h5>
            <ul class="dose-details-list simple-list">
                <li>İnfüzyon sırasında ve sonrasında **sıvı ve elektrolitler**, serum ozmolaritesi, böbrek, kalp ve akciğer fonksiyonları izlenmelidir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
                <li>Yaşlı hastalar böbrek ve kalp fonksiyonlarında azalmaya daha duyarlı olduğundan, dehidrasyon ve sıvı yüklenmesi açısından yakından izlenmelidir.</li>
            </ul>
        `
    }
},
{
    id: "meperidinContainer",
    isim: "Meperidin (Petidin)",
    piyasaIsimleri: [
        "Aldolan Gerot 100 mg 5 Ampül",
        "Petisel 100 mg/2 ml 5 Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Ağrı Yönetimi</h5>
            <p>**Uyarı:** Meperidin, ilk tercih edilen analjezik olarak önerilmez (Normeperidin metaboliti nörotoksiktir). Akut ağrıda kullanımı ≤48 saat ile sınırlandırılmalı, kronik ağrı için oral yol önerilmez.</p>
            <h6 class="dose-type-title">PO / IM / SC</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 50-150 mg (PO/IM/SC) (Yanıt derecesine göre ayarlanır).</li>
                <li><strong>Sıklık:</strong> Her 3-4 saatte bir (q3-4hr) (Gerekirse).</li>
                <li><strong>Maksimum:</strong> 24 saatte **600 mg'ı** aşmamalıdır.</li>
            </ul>
            <h6 class="dose-type-title">Diğer Kullanımlar</h6>
            <ul class="dose-details-list">
                <li><strong>Preoperatif:</strong> 50-100 mg (IM/SC) (Anesteziden 30-90 dakika önce).</li>
                <li><strong>Sürekli İnfüzyon:</strong> 15-35 mg/saat.</li>
                <li><strong>Obstetrik Analjezi:</strong> 50-100 mg (IM/SC) q1-3hr (Gerekirse).</li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
            <ul class="dose-details-list simple-list">
                <li>**Böbrek Yetmezliği:** **Kullanımdan Kaçının** (Normeperidin birikimi nedeniyle).</li>
                <li>**Karaciğer Yetmezliği:** Başlangıçta daha düşük doz düşünülmelidir (Sirozda artmış opioid etki olası).</li>
            </ul>
            
            <h5 class="dose-condition-title">Dozlama Hususları</h5>
            <ul class="dose-details-list simple-list">
                <li>Opioid aşırı doz riski nedeniyle **Nalokson** erişimi değerlendirilmelidir.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Ağrı Yönetimi</h5>
            <p>**Uyarı:** İlk tercih edilen analjezik olarak önerilmez.</p>
            <h6 class="dose-type-title">PO / IM / SC</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 1-1.8 mg/kg (PO/IM/SC).</li>
                <li><strong>Sıklık:</strong> Her 3-4 saatte bir (q3-4hr) (Gerekirse).</li>
                <li><strong>Maksimum:</strong> Bireysel doz **100 mg'ı** aşmamalıdır.</li>
            </ul>
            <h6 class="dose-type-title">Preoperatif</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 1.1-2.2 mg/kg (IM/SC) (Anestezi başlangıcından 30-90 dakika önce).</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <p>**Kritik Uyarı:** Yaşlı hastalarda **tercih edilen ilaç değildir**.</p>
            <ul class="dose-details-list simple-list">
                <li>**Doz Sınırı (Akut Ağrı):** 50 mg PO q4hr VEYA 25 mg IM q4hr (Tedavi 1-2 doz ile sınırlandırılmalıdır).</li>
                <li>Normeperidin metabolitinin birikmesi nedeniyle santral sinir sistemi (MSS) etkileri artar.</li>
                <li>Toplam günlük doz mutlaka azaltılmalıdır.</li>
            </ul>
        `
    }
},
{
    id: "morfinSulfatContainer",
    isim: "Morfin Sülfat",
    piyasaIsimleri: [
        "Morfia 15 mg 30 Tablet",
        "Morfia 30 mg 30 Tablet",
        "Morfia CR 15 mg 20 Tablet",
        "Morfia CR 30 mg 20 Tablet",
        "Morfin HCL 0.01 g 10 Ampül",
        "Morphine HCL 0.01 g 10 Ampül",
        "Morphine HCL 0.02 g 5 Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Akut Ağrı (Opioid Kullanmamış Hastalar)</h5>
            <h6 class="dose-type-title">Oral (Hemen Salınım - IR)</h6>
            <ul class="dose-details-list">
                <li><strong>Tablet:</strong> 15-30 mg (PO) her 4 saatte bir (q4hr) PRN.</li>
                <li><strong>Oral Solüsyon:</strong> 10-20 mg (PO) q4hr PRN.</li>
                <li><strong>Fitil (PR):</strong> 10-20 mg her 4 saatte bir.</li>
            </ul>
            <h6 class="dose-type-title">Parenteral (SC/IM/IV)</h6>
            <ul class="dose-details-list">
                <li><strong>SC/IM:</strong> 5-10 mg q4hr PRN (Doz aralığı 5-20 mg).</li>
                <li><strong>IV:</strong> 2.5-5 mg (4-5 dakika üzerinde infüze edilir) q3-4hr PRN (Doz aralığı 4-10 mg).</li>
            </ul>

            <h5 class="dose-condition-title">Kronik Şiddetli Ağrı (Uzatılmış Salınım - ER/LA)</h5>
            <p>**Uyarı:** ER/LA formülasyonları, alternatiflerin yetersiz olduğu, gün boyu süren şiddetli ağrı için ayrılmıştır.</p>
            <h6 class="dose-type-title">MS Contin (ER Tablet)</h6>
            <ul class="dose-details-list">
                <li><strong>Opioid Kullanmamış:</strong> 15 mg (PO) q8 saat VEYA q12 saat başlanır.</li>
                <li><strong>Opioid Toleranslı:</strong> Önceki günlük ihtiyaca göre bireyselleştirilir.</li>
                <li>**Kritik Not:** Tablet bütün yutulmalıdır; kırılmamalı, çiğnenmemeli veya ezilmemelidir.</li>
            </ul>

            <h5 class="dose-condition-title">Nöroaksiyal Uygulama (Koruyucu İçermeyen Solüsyon)</h5>
            <ul class="dose-details-list">
                <li><strong>Epidural (Tek Doz - Lomber):</strong> Günde bir kez 5-10 mg.</li>
                <li><strong>İntratekal (IT) (Tek Doz - Opioid Kullanmamış):</strong> 0.1-0.3 mg (Nalokson infüzyonu ile birlikte).</li>
                <li><strong>IT (Sürekli İnfüzyon - Opioid Toleranslı):</strong> 24 saat boyunca 1-10 mg (Max 20 mg/24 saat).</li>
            </ul>
            
            <h5 class="dose-condition-title">Dozlama Hususları</h5>
            <ul class="dose-details-list simple-list">
                <li>IV uygulaması için opioid antagonisti **hemen mevcut olmalıdır**.</li>
                <li>**Nalokson Erişimi:** Opioid aşırı doz riski nedeniyle hastanın ve hane halkının Nalokson'a erişimi değerlendirilmelidir.</li>
                <li>**PO Çözeltisi (100 mg/5 mL):** Sadece opioid toleransı olan hastalar için uygundur.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Analjezi/Siyanotik Tetraloji</h5>
            <h6 class="dose-type-title">Yenidoğanlar (<30 Gün)</h6>
            <ul class="dose-details-list">
                <li><strong>IM/SC:</strong> 0.3-1.2 mg/kg/gün (4 saate bölünmüş).</li>
                <li><strong>Yavaş IV:</strong> 0.005-0.03 mg/kg/saat.</li>
            </ul>
            <h6 class="dose-type-title">Bebekler ve Çocuklar</h6>
            <ul class="dose-details-list">
                <li><strong>PO Solüsyon:</strong> 0.2-0.5 mg/kg (q4-6hr PRN).</li>
                <li><strong>IM/SC:</strong> 0.05-0.2 mg/kg (q2-4hr PRN) (Max 15 mg/doz).</li>
            </ul>
            <h6 class="dose-type-title">Sürekli İnfüzyon (Ağrı)</h6>
            <ul class="dose-details-list">
                <li><strong>Yenidoğanlar:</strong> 0.01-0.02 mg/kg/saat (IV).</li>
                <li><strong>Postoperatif Ağrı:</strong> 0.01-0.04 mg/kg/saat (IV).</li>
            </ul>
            
            <h5 class="dose-condition-title">Kritik Not</h5>
            <ul class="dose-details-list simple-list">
                <li>Narkotik-indükli solunum depresyonu açısından yenidoğanlar ve bebekler yakından izlenmelidir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Doz aralığının **en düşük sınırını** göz önünde bulundurun.</li>
                <li>Yaşlı hastalarda solunum depresyonu ve MSS yan etkileri (konfüzyon gibi) riski artmıştır.</li>
                <li>Böbrek veya karaciğer yetmezliği olanlarda yan etkiler açısından izleme yapılmalıdır.</li>
                <li>Epidural veya intratekal uygulamada aşırı dikkatli olunması gerekir; daha düşük dozlar genellikle yeterlidir.</li>
            </ul>
        `
    }
},
{
    id: "pralidoksimContainer",
    isim: "Pralidoksim",
    piyasaIsimleri: [
        "Contrathion %2 10 Flakon ve Çözücü"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Organofosfat Zehirlenmesi (Atropin ile Birlikte)</h5>
            <h6 class="dose-type-title">IV İnfüzyon (15-30 Dakika Üzerinde)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç Bolus:</strong> 1-2 g IV (10-20 mg/mL).</li>
                <li><strong>Tekrar:</strong> Gerekirse 1 saat sonra tekrarlanır, ardından her 12 saatte bir (q12hr) PRN.</li>
                <li><strong>Alternatif İnfüzyon:</strong> 30 mg/kg IV (20 dakika üzerinde), ardından 4-8 mg/kg/saat (IV sürekli infüzyon).</li>
                <li><strong>Sıvı Kısıtlaması Gerekiyorsa:</strong> 50 mg/mL konsantrasyonda 5 dakika üzerinde verilir.</li>
            </ul>
            <h6 class="dose-type-title">IM (Erişim Yoksa) - Otoenjektör Kullanımı</h6>
            <ul class="dose-details-list">
                <li><strong>Hafif Semptom:</strong> 600 mg IM x 3 doz (15 dakika arayla).</li>
                <li><strong>Şiddetli Semptom:</strong> 600 mg IM x 3 doz (hızlı ardışık).</li>
                <li><strong>Maksimum:</strong> İlk seri için toplam 1800 mg. Semptomlar devam ederse 1 saat sonra tekrarlanabilir.</li>
            </ul>

            <h5 class="dose-condition-title">Asetilkolinesteraz İnhibitörü Toksisitesi (Neostigmin, Piridostigmin)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 1-2 g IV, ardından gerektiğinde 250 mg artışlar ile her 5 dakikada bir (q5min) PRN.</li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>Böbrek Yetmezliği:</strong> Doz azaltılmalıdır (Üretici tarafından spesifik öneri sağlanmamıştır).</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Organofosfat Zehirlenmesi (<16 Yaş)</h5>
            <h6 class="dose-type-title">IV Bolus + İnfüzyon</h6>
            <ul class="dose-details-list">
                <li><strong>Bolus:</strong> 20-50 mg/kg/doz (Max 2 g/doz) IV.</li>
                <li><strong>İdame İnfüzyon:</strong> 10-20 mg/kg/saat IV sürekli infüzyon.</li>
                <li><strong>Tekrar:</strong> Kas zayıflığı geçmezse 1 saat sonra bolus tekrarlanabilir.</li>
            </ul>
            <h6 class="dose-type-title">IM Uygulama (Otoenjektör)</h6>
            <ul class="dose-details-list">
                <li><strong><40 kg:</strong> 15 mg/kg/doz IM x 3 doz (Hafif semptomda q15min arayla, şiddetli semptomda hızlı ardışık).</li>
                <li><strong>>40 kg:</strong> 600 mg IM x 3 doz (Yetişkin dozuyla aynı).</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>İlaç dikkatli uygulanmalı; azalan renal, hepatik ve kardiyak fonksiyon olasılığı göz önünde bulundurulmalıdır.</li>
                <li>Böbrek yetmezliği varsa doz azaltılmalıdır.</li>
            </ul>
        `
    }
},
{
    id: "propofolContainer",
    isim: "Propofol",
    piyasaIsimleri: [
        "Propofol-PF %1 200 mg/20 ml 5 Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Anestezi İndüksiyonu</h5>
            <h6 class="dose-type-title">ASA I/II (<55 Yaş)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 40 mg (IVP) (10 saniyede bir) (2-2.5 mg/kg IV).</li>
            </ul>
            <h6 class="dose-type-title">ASA III/IV VEYA Halsiz (>55 Yaş)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 20 mg (IVP) (10 saniyede bir) (1-1.5 mg/kg).</li>
                <li><strong>Uyarı:</strong> Hızlı bolus uygulamayın (Kardiyorespiratuvar depresyon riskini artırır).</li>
            </ul>
            
            <h5 class="dose-condition-title">Anestezi İdamesi</h5>
            <ul class="dose-details-list">
                <li><strong>IV İnfüzyon:</strong> 0.1-0.2 mg/kg/dakika (IV) (<55 Yaş).</li>
                <li><strong>IV İnfüzyon (Yaşlı/Halsiz):</strong> 0.05-0.1 mg/kg/dakika (IV).</li>
                <li><strong>Aralıklı Bolus:</strong> 25-50 mg artışlarla (Cerrahi stimülasyona yanıtı gösteren vital bulgularda değişiklik olduğunda).</li>
            </ul>

            <h5 class="dose-condition-title">MAC Sedasyon (Minimalden Bilinçli Sedasyona)</h5>
            <h6 class="dose-type-title">Başlatma</h6>
            <ul class="dose-details-list">
                <li><strong>IV İnfüzyon:</strong> 0.1-0.15 mg/kg/dakika (IV) (3-5 dakika) VEYA yavaş enjeksiyonla 0.5 mg/kg (3-5 dakika).</li>
                <li><strong>Titrasyon:</strong> İstenilen klinik etkiye göre titre edilir.</li>
            </ul>
            <h6 class="dose-type-type">İdame</h6>
            <ul class="dose-details-list">
                <li><strong>Değişken Hızlı İnfüzyon:</strong> İlk 10-15 dakikada 0.025-0.075 mg/kg/dakika, ardından 25-50 mcg/kg/dakika'ya düşürülür.</li>
                <li><strong>Aralıklı Bolus:</strong> 10-20 mg artışlarla.</li>
            </ul>

            <h5 class="dose-condition-title">Yoğun Bakım (YB) Sedasyon</h5>
            <h6 class="dose-type-title">IV İnfüzyon</h6>
            <ul class="dose-details-list">
                <li><strong>Başlatma:</strong> 0.005 mg/kg/dakika (En az 5 dakika).</li>
                <li><strong>Titrasyon:</strong> İstenen seviyeye ulaşılana kadar 5-10 mcg/kg/dakika artışlarla.</li>
                <li><strong>İdame:</strong> 0.005-0.05 mg/kg/dakika (Bireyselleştirilir ve titre edilir).</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Anestezi İndüksiyonu (3-16 Yaş, ASA I/II)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 2.5-3.5 mg/kg (IVP) (20-30 saniye üzerinde).</li>
                <li><strong>Not:</strong> Daha küçük hastalar daha yüksek indüksiyon dozları gerektirebilir. ASA III/IV hastalar için daha düşük doz önerilir.</li>
            </ul>

            <h5 class="dose-condition-title">Anestezi İdamesi (2 Ay - 16 Yaş)</h5>
            <ul class="dose-details-list">
                <li><strong>IV İnfüzyon:</strong> 0.125-0.3 mg/kg/dakika (IV).</li>
                <li><strong>Not:</strong> 5 yaş ve altındaki çocuklar, daha büyük çocuklara göre daha yüksek infüzyon hızları gerektirebilir.</li>
            </ul>
            <h5 class="dose-condition-title">< 3 Yaş</h5>
            <ul class="dose-details-list simple-list">
                <li>Anestezi indüksiyonu için önerilmez.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz (>55 Yaş veya Halsiz)</h5>
            <ul class="dose-details-list simple-list">
                <li>Anestezi indüksiyonu için IV doz: **1-1.5 mg/kg** (20 mg IVP ile başlanır).</li>
                <li>MAC Sedasyonu için doz, olağan yetişkin dozunun yaklaşık **%80'i** kadar azaltılmalıdır.</li>
                <li>**Hızlı bolus uygulaması kesinlikle kullanılmamalıdır** (Kardiyorespiratuvar depresyon riski).</li>
                <li>İdame infüzyonu için daha düşük hızlar önerilir (0.05-0.1 mg/kg/dakika).</li>
            </ul>
        `
    }
},
{
    id: "protaminSulfatContainer",
    isim: "Protamin Sülfat",
    piyasaIsimleri: [
        "Pamintu 10 mg/ml 5 ml 1 Flakon",
        "Prolfat 50 mg/5 ml IV 1 Adet",
        "Promin 5000 IU/5 ml IV 1 Ampül",
        "Protamin Icn 5000 IU/5 ml IV Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Heparin Nötralizasyonu</h5>
            <h6 class="dose-type-title">Genel Oran ve Uygulama</h6>
            <ul class="dose-details-list">
                <li><strong>Oran:</strong> 1-1.5 mg Protamin / 100 USP Ünite Heparin.</li>
                <li><strong>Uygulama:</strong> Yavaş IV infüzyon (Max 50 mg).</li>
                <li><strong>İzleme:</strong> Dozdan 5-15 dakika sonra ve 2-8 saat sonra **aPTT** izlenir.</li>
            </ul>
            <h6 class="dose-type-title">Heparin Dozu Üzerinden Geçen Süreye Göre Protamin Dozu (mg/100 Ünite Heparin)</h6>
            <ul class="dose-details-list simple-list">
                <li><strong><30 dakika:</strong> 1-1.5 mg.</li>
                <li><strong>30-120 dakika:</strong> 0.5-0.75 mg.</li>
                <li><strong>>2 saat:</strong> 0.25-0.375 mg.</li>
            </ul>
            
            <h5 class="dose-condition-title">Düşük Molekül Ağırlıklı Heparin (DMAH) Aşırı Dozu (Enoksaparin/Dalteparin/Tinzaparin)</h5>
            <ul class="dose-details-list">
                <li><strong><8 Saat İçinde Aşırı Doz:</strong> 1 mg Protamin / 1 mg Enoksaparin (veya 100 Ünite Dalteparin/Tinzaparin).</li>
                <li><strong>>8 Saat Sonra VEYA Kanama Devam Ediyorsa:</strong> 0.5 mg Protamin / 1 mg Enoksaparin (veya 100 Ünite Dalteparin/Tinzaparin).</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Heparin Nötralizasyonu (Endikasyon Dışı)</h5>
            <h6 class="dose-type-title">Genel Oran ve Uygulama</h6>
            <ul class="dose-details-list">
                <li><strong>Oran:</strong> Yaklaşık 1 mg Protamin / 100 Ünite Heparin.</li>
                <li><strong>Maksimum:</strong> 50 mg/doz'u aşmamalıdır.</li>
            </ul>
            <h6 class="dose-type-title">Heparin Dozu Üzerinden Geçen Süreye Göre Protamin Dozu (mg/100 Ünite Heparin)</h6>
            <ul class="dose-details-list simple-list">
                <li><strong><30 dakika:</strong> 1 mg.</li>
                <li><strong>30-120 dakika:</strong> 0.5-0.75 mg.</li>
                <li><strong>>2 saat:</strong> 0.25-0.375 mg.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Azalmış renal, hepatik ve kardiyak fonksiyon olasılığı nedeniyle dikkatli uygulanmalıdır.</li>
                <li>Kanama riski ve renal eliminasyon göz önüne alınarak dozaj ayarlanması düşünülmelidir.</li>
            </ul>
        `
    }
},
{
    id: "regulerInsulinContainer",
    isim: "Regüler İnsülin",
    piyasaIsimleri: [],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Tip 1 Diabetes Mellitus (DM)</h5>
            <h6 class="dose-type-title">Subkutan (SC) Enjeksiyon</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç Dozu:</strong> 0.2-0.4 Ünite/kg/gün (q8hr veya daha sık bölünmüş).</li>
                <li><strong>İdame Dozu:</strong> 0.5-1 Ünite/kg/gün (q8hr veya daha sık bölünmüş).</li>
                <li><strong>Not:</strong> Günlük toplam insülin ihtiyacının yaklaşık %25-50'si kısa etkili insülin (regüler insülin) olarak kullanılır.</li>
            </ul>

            <h5 class="dose-condition-title">Tip 2 Diabetes Mellitus (DM)</h5>
            <h6 class="dose-type-title">SC Enjeksiyon (Öğün Öncesi)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç Dozu:</strong> Günde 10 Ünite VEYA 0.1-0.2 Ünite/kg/gün (akşam veya q12hr bölünmüş).</li>
                <li><strong>İki Kez Günlük Rejim:</strong> Sabah 2/3 toplam insülin (Regüler:NPH oranı 1:2); Akşam 1/3 toplam insülin (Regüler:NPH oranı 1:1).</li>
            </ul>
            
            <h5 class="dose-condition-title">Şiddetli Hiperglisemi / Diyabetik Ketoasidoz (DKA) (Endikasyon Dışı)</h5>
            <h6 class="dose-type-title">IV İnfüzyon</h6>
            <ul class="dose-details-list">
                <li><strong>Bolus:</strong> 0.1 Ünite/kg (IV bolus).</li>
                <li><strong>İdame İnfüzyon:</strong> 0.1 Ünite/kg/saat (IV sürekli).</li>
                <li><strong>Titrasyon:</strong> Kan şekeri 250 mg/dL'ye ulaştığında infüzyon 0.05-0.1 Ünite/kg/saat'e düşürülür.</li>
            </ul>

            <h5 class="dose-condition-title">Hiperkalemi (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 5-10 Ünite IV insülin, 50 mL %50 Dekstroz (25 g glukoz) içinde 15-30 dakika üzerinde infüze edilir.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Tip 1 Diabetes Mellitus (DM)</h5>
            <h6 class="dose-type-title">SC Enjeksiyon</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç Dozu:</strong> 0.2-0.4 Ünite/kg/gün (q8hr veya daha sık bölünmüş).</li>
                <li><strong>İdame Dozu:</strong> 0.5-1 Ünite/kg/gün (q8hr veya daha sık bölünmüş).</li>
                <li><strong>Adölesanlar:</strong> Ergenlik döneminde 1.5 Ünite/kg/gün'e kadar gerekebilir.</li>
            </ul>

            <h5 class="dose-condition-title">Şiddetli Hiperglisemi / Diyabetik Ketoasidoz (DKA) (Endikasyon Dışı)</h5>
            <h6 class="dose-type-title">IV İnfüzyon</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 0.05-0.1 Ünite/kg/saat (ketoasidoz düzelene kadar).</li>
                <li><strong>Not:</strong> Kan şekeri 250-300 mg/dL'ye ulaştığında hipoglisemiyi önlemek için IV sıvılara %5 Dekstroz eklenmelidir.</li>
            </ul>
            
            <h5 class="dose-condition-title">Hiperkalemi (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 0.1 Ünite/kg insülin, 400 mg/kg glukoz ile (IV) uygulanır.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir; standart yetişkin dozları kullanılır.</li>
                <li>Yaşlı hastalar hipoglisemi riskine daha duyarlı olduğundan, başlangıç dozları düşük tutulmalı ve böbrek/karaciğer fonksiyonundaki değişiklikler yakından izlenerek doz ayarlamaları dikkatli yapılmalıdır.</li>
            </ul>
        `
    }
},
{
    id: "rokuronyumContainer",
    isim: "Roküronyum",
    piyasaIsimleri: [
        "Esmeron 50 mg/5 ml 10 Flakon",
        "Muscobloc 50 mg/5 ml 5 Flakon",
        "Muscuron 50 mg/5 ml 5 Flakon",
        "Myocron 50 mg/5 ml 1 Flakon"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Hızlı Sekans İntübasyonu (RSI)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 0.6-1.2 mg/kg (IV) tek doz.</li>
            </ul>

            <h5 class="dose-condition-title">Trakeal İntübasyon</h5>
            <h6 class="dose-type-title">Yükleme</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 0.45-0.6 mg/kg (IV).</li>
            </ul>
            <h6 class="dose-type-title">İdame</h6>
            <ul class="dose-details-list">
                <li><strong>Bolus:</strong> 0.1-0.2 mg/kg (IV) PRN tekrar. VEYA</li>
                <li><strong>Sürekli İnfüzyon:</strong> 0.01-0.012 mg/kg/dakika (IV).</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Trakeal İntübasyon</h5>
            <h6 class="dose-type-title">3 Ay - 14 Yaş</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç:</strong> 0.6 mg/kg (IV).</li>
                <li><strong>İdame Bolus:</strong> 0.075-0.125 mg/kg (IV). VEYA</li>
                <li><strong>Sürekli İnfüzyon:</strong> 0.012 mg/kg/dakika (IV).</li>
            </ul>
            <h6 class="dose-type-title">>14 Yaş</h6>
            <ul class="dose-details-list simple-list">
                <li>Yetişkin dozlarıyla aynıdır.</li>
            </ul>
            <h5 class="dose-condition-title">< 3 Ay</h5>
            <ul class="dose-details-list simple-list">
                <li>Güvenlik ve etkinlik belirlenmemiştir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır (0.45-0.6 mg/kg IV).</li>
                <li>Ancak, yaşlı hastalarda nöromüsküler blokajın süresi uzayabileceğinden dikkatli izleme ve daha düşük idame dozları önerilir.</li>
            </ul>
        `
    }
},
{
    id: "sefuroksimContainer",
    isim: "Sefuroksim",
    piyasaIsimleri: [
        "Aksef 500 mg 10 Tablet",
        "Aksef 500 mg 14 Tablet",
        "Aksef 500 mg 20 Tablet",
        "Aksef 750 mg IM 1 Flakon",
        "Aksef İğne 750 mg IM/IV 1 Flakon",
        "Cefaks 250 mg 10 Tablet",
        "Cefaks 250 mg 14 Tablet",
        "Cefaks 250 mg IV/IM 1 Flakon",
        "Cefaks 500 mg 10 Tablet",
        "Cefaks 500 mg 14 Tablet",
        "Cefaks 500 mg 20 Tablet",
        "Cefaks 500 mg IM 1 Flakon",
        "Cefaks 750 mg IM 1 Flakon",
        "Cefaks 750 mg IV/IM 1 Flakon",
        "Cefaks Şurup 125 mg/5 ml 50 ml",
        "Cefaks Şurup 125 mg/5 ml 100 ml",
        "Cefaks Şurup Hazırlamak İçin Granül 100 ml",
        "Cefrox 750 mg IM Flakon",
        "Cefurol 500 mg 10 Tablet",
        "Cefurol 500 mg 14 Tablet",
        "Cefurol 500 mg 20 Tablet",
        "Enfexia 250 mg 10 Tablet",
        "Enfexia 500 mg 10 Tablet",
        "Enfexia 500 mg 14 Tablet",
        "Enfexia 500 mg 20 Tablet",
        "Multisef 250 mg 1 Flakon ve Ampül",
        "Multisef 500 mg 1 Flakon",
        "Multisef 750 mg IM 1 Flakon",
        "Powercef 250 mg 10 Tablet",
        "Powercef 500 mg 10 Tablet",
        "Seffur 750 mg IM/IV 1 Flakon",
        "Seffur 750 mg IM 1 Flakon",
        "Zannacef 750 mg IM/IV",
        "Zannacef 750 mg IM 1 Flakon ve Çözücü",
        "İnceptum 500 mg 10 Tablet",
        "İnceptum 500 mg 20 Tablet"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Farenjit/Tonsillit & Akut Sinüzit</h5>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 250 mg (PO)</li>
                <li><strong>Sıklık:</strong> Her 12 saatte bir (q12hr) (10 gün).</li>
            </ul>

            <h5 class="dose-condition-title">Kronik Bronşit Akut Alevlenmesi, Komplike Olmayan Pnömoni, Cilt/Yumuşak Doku, Komplike Olmayan İYE</h5>
            <h6 class="dose-type-title">PO</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 250-500 mg (PO) q12hr (5-10 gün). (İYE için 125-250 mg q12hr).</li>
            </ul>
            <h6 class="dose-type-title">IV/IM</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 750 mg (IV/IM) q8hr. (Klinik olarak mümkün olur olmaz oral tedaviye geçilmelidir).</li>
            </ul>

            <h5 class="dose-condition-title">Gonore</h5>
            <ul class="dose-details-list">
                <li><strong>Komplike Olmayan:</strong> 1 g (PO) tek doz VEYA 1.5 g (IM) tek doz (1 g Probenesid PO ile).</li>
                <li><strong>Dissemine:</strong> 750 mg (IV/IM) q8hr.</li>
            </ul>

            <h5 class="dose-condition-title">Erken Lyme Hastalığı</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 500 mg (PO) q12hr (20 gün).</li>
            </ul>
            
            <h5 class="dose-condition-title">Şiddetli veya Komplike Enfeksiyonlar</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 1.5 g (IV/IM) q8hr.</li>
                <li><strong>Yaşamı Tehdit Eden Durumlar:</strong> q6hr uygulanabilir.</li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları (Böbrek Yetmezliği)</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>CrCl 10-30 mL/dk:</strong> Doz q24hr uygulanır.</li>
                <li><strong>CrCl <10 mL/dk:</strong> Doz q48hr uygulanır.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Akut Otitis Media & Sinüzit (3 Ay - 12 Yaş)</h5>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 30 mg/kg/gün (Süspansiyon PO) q12hr bölünmüş (Max 1000 mg/gün).</li>
            </ul>
            <h6 class="dose-type-type">IV/IM</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 75-150 mg/kg/gün (IV/IM) q8hr bölünmüş (Max 6 g/gün).</li>
            </ul>

            <h5 class="dose-condition-title">Farenjit/Tonsillit (3 Ay - 12 Yaş)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 20 mg/kg/gün (PO) q12hr bölünmüş (Max 500 mg/gün).</li>
            </ul>

            <h5 class="dose-condition-title">Şiddetli veya Ciddi Enfeksiyonlar (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong><6 Gün, <2 kg:</strong> 100 mg/kg/gün (IV/IM) q12hr bölünmüş.</li>
                <li><strong>>7 Gün:</strong> 150 mg/kg/gün (IV/IM) q8hr bölünmüş.</li>
            </ul>
            <h5 class="dose-condition-title">< 3 Ay</h5>
            <ul class="dose-details-list simple-list">
                <li>Güvenlik ve etkinlik belirlenmemiştir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
                <li>Ancak, böbrek fonksiyonunda azalma eğilimi nedeniyle **CrCl <30 mL/dk** ise dozaj mutlaka ayarlanmalıdır (Bkz. Yetişkin Dozaj Modifikasyonları).</li>
            </ul>
        `
    }
},
{
    id: "traneksamikAsitContainer",
    isim: "Traneksamik Asit",
    piyasaIsimleri: [
        "Tranexel %5 A/H 10 Ampül",
        "Tranexel %10 A/H 10 Ampül",
        "Transamine %10 A/H 10 Ampül",
        "Transamine 500 mg 50 Tablet",
        "Transamine Ampül %5 5 ml 250 mg 10 Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Hemofili Hastalarında Diş Çekimi</h5>
            <p>Diş çekimi sırasında ve sonrasında kanamayı azaltmak/önlemek ve replasman tedavisi ihtiyacını azaltmak için (kısa süreli kullanım: 2-8 gün).</p>
            <h6 class="dose-type-title">IV Uygulama (Gerçek Vücut Ağırlığı Kullanılır)</h6>
            <ul class="dose-details-list">
                <li><strong>Diş Çekiminden Hemen Önce:</strong> 10 mg/kg (IV) tek doz.</li>
                <li><strong>Diş Çekiminden Sonra:</strong> 10 mg/kg (IV) günde 3-4 kez (2-8 gün boyunca).</li>
            </ul>

            <h5 class="dose-condition-title">CABG (Koroner Arter Baypas Greftleme - Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 10-15 mg/kg IV (20 dakika üzerinde), ardından 1 mg/kg/saat sürekli infüzyon (6-10 saat).</li>
            </ul>
            
            <h5 class="dose-condition-title">Dozaj Modifikasyonları (Böbrek Yetmezliği)</h5>
            <p>Diş Çekimi İçin IV Uygulama Sıklığı (10 mg/kg Dozu İçin):</p>
            <ul class="dose-details-list simple-list">
                <li><strong>SCr 1.36-2.83 mg/dL:</strong> Günde iki kez (BID) IV.</li>
                <li><strong>SCr 2.83-5.66 mg/dL:</strong> Günde bir kez (Daily) IV.</li>
                <li><strong>SCr >5.66 mg/dL:</strong> Her 48 saatte bir (q48hr) IV VEYA Her 24 saatte bir 5 mg/kg IV.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Hemofili Hastalarında Diş Çekimi</h5>
            <h6 class="dose-type-title">IV Uygulama (Gerçek Vücut Ağırlığı Kullanılır)</h6>
            <ul class="dose-details-list">
                <li><strong>Diş Çekiminden Hemen Önce:</strong> 10 mg/kg (IV) tek doz.</li>
                <li><strong>Diş Çekiminden Sonra:</strong> 10 mg/kg (IV) günde 3-4 kez (2-8 gün boyunca).</li>
            </ul>
            
            <h5 class="dose-condition-title">Dozaj Modifikasyonları (Böbrek Yetmezliği)</h5>
            <ul class="dose-details-list simple-list">
                <li>Çocuklar için CrCl bazlı doz ayarlamaları yetişkinlerle aynıdır (SCr seviyelerine göre).</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
                <li>Yaşlı hastalar böbrek fonksiyonunda azalmaya daha yatkın olduğundan, dozajın serum kreatinin (SCr) seviyelerine göre ayarlanması kritik öneme sahiptir (Bkz. Yetişkin Dozaj Modifikasyonları).</li>
            </ul>
        `
    }
},
{
    id: "naloksonContainer",
    isim: "Nalokson",
    piyasaIsimleri: [
        "Naloxone Hidroklorür 0.4 mg/ ml 10 Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Opioid Aşırı Dozu Reversalı</h5>
            <p>Doğal ve sentetik opioidlerin neden olduğu opioid depresyonunun (solunum depresyonu dahil) tam veya kısmi tersine çevrilmesi.</p>
            <h6 class="dose-type-title">IV/IM/SC Uygulama</h6>
            <ul class="dose-details-list">
                <li><strong>Standart Doz:</strong> 0.4-2 mg (IV/IM/SC).</li>
                <li><strong>Tekrar:</strong> Her 2-3 dakikada bir tekrarlanır.</li>
                <li><strong>Maksimum Kümülatif:</strong> 10 mg'ı aşmamalıdır.</li>
                <li><strong>Endotrakeal (ET):</strong> İlk IV dozunun 2-2.5 katı (0.8-5 mg).</li>
            </ul>
            <h6 class="dose-type-title">Kronik Opioid Kötüye Kullanımı (Akut yoksunluğu önlemek için)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> En küçük dozlar (0.1-0.2 mg) kullanılır (Solunum depresyonu tersine çevrilene kadar titre edilir).</li>
            </ul>
            <h6 class="dose-type-title">Yüksek Doz (Zimhi - IM/SC)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 5 mg (IM/SC) (Uyluğun anterolateral tarafına).</li>
                <li><strong>Acil Durum:</strong> İlk kullanımdan hemen sonra acil tıbbi yardım istenmelidir.</li>
            </ul>

            <h5 class="dose-condition-title">Terapötik Opioid Dozlarında Solunum Depresyonu Reversalı (Postoperatif)</h5>
            <ul class="dose-details-list">
                <li><strong>Başlangıç:</strong> 0.1-0.2 mg (IV) (İstenilen düzelme elde edilene kadar q2-3min tekrarlanabilir).</li>
                <li><strong>Düşük Doz Tedavisi:</strong> 0.04-0.4 mg (IV/IM/SC) başlanır.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Akut Opioid Aşırı Dozu</h5>
            <h6 class="dose-type-title">IV/IM/SC/ET Uygulama</h6>
            <ul class="dose-details-list">
                <li><strong>≤20 kg VEYA <5 Yaş:</strong> 0.1 mg/kg/doz (Max 2 mg/doz) (q2-3min tekrarlanır).</li>
                <li><strong>>20 kg VEYA ≥5 Yaş:</strong> 2 mg (q2-3min tekrarlanır).</li>
            </ul>
            <h6 class="dose-type-title">Postanestezi Opioid Reversalı</h6>
            <ul class="dose-details-list">
                <li><strong>Yenidoğanlar:</strong> 0.01 mg/kg (IV/IM/SC). Gerekirse 0.1 mg/kg sonraki doz verilir.</li>
                <li><strong>Çocuklar:</strong> 0.01 mg/kg (IV) tek doz. Gerekirse 0.1 mg/kg ile tekrarlanabilir.</li>
            </ul>
            <h6 class="dose-type-title">ET Uygulama</h6>
            <ul class="dose-details-list simple-list">
                <li>IV dozunun 2-3 katı önerilir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
                <li>Yaşlı hastalarda opioid aşırı dozunda doz titrasyonu, solunum depresyonunu tersine çevirmeye odaklanmalı ve akut yoksunluk sendromu riskini azaltmak için dikkatli yapılmalıdır.</li>
            </ul>
        `
    }
},
{
    id: "biperidenContainer",
    isim: "Biperiden",
    piyasaIsimleri: [
        "Akineton 2 mg 100 Tablet",
        "Akineton İğne 5 mg/ml 5 Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Parkinson Hastalığı</h5>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç:</strong> İlk gün 1 mg (PO), ardından her 3-5 günde bir 2 mg artırılarak 6-10 mg/gün'e ulaşılır.</li>
                <li><strong>İdame:</strong> 5-15 mg/gün (PO) q6-8hr bölünmüş.</li>
                <li><strong>Levodopa ile Kullanım:</strong> Genellikle bölünmüş dozlarda 3-6 mg/gün kullanılır.</li>
                <li><strong>SR Ürün:</strong> Normal salınımlı üründe stabilize olduktan sonra SR ürüne geçilir.</li>
            </ul>

            <h5 class="dose-condition-title">İlaç Kaynaklı Ekstrapiramidal Semptomlar (EPS)</h5>
            <ul class="dose-details-list">
                <li><strong>Başlangıç:</strong> 1 mg/gün (PO).</li>
                <li><strong>İdame:</strong> Gerektiğinde 5-15 mg/gün (PO) q6-8hr bölünmüş aralığına artırılır.</li>
            </ul>
            
            <h5 class="dose-condition-title">Dozlama Hususları</h5>
            <ul class="dose-details-list simple-list">
                <li>**Uyarı:** SR (Sürekli Salınımlı) ürün ezilmemelidir.</li>
                <li>**İzleme:** Göz İçi Basıncı (IOP) izlenmelidir.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Pediatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Çocuklarda güvenlik ve etkinlik belirlenmemiştir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Parkinson hastalığını tedavi ederken ilk olarak non-antikolinerjik antiparkinson ajanlar düşünülmelidir.</li>
                <li>**EPS önlenmesi için önerilmez.**</li>
                <li>**Parkinsonizm:** 5-15 mg/gün (PO) q6-8hr bölünmüş.</li>
            </ul>
        `
    }
},
{
    id: "klorpromazinContainer",
    isim: "Klorpromazin",
    piyasaIsimleri: [
        "Largactil 25 mg 10 Ampül",
        "Largactil 100 mg 30 Tablet"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Şizofreni, Psikotik Bozukluklar</h5>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç:</strong> 30-75 mg/gün (q6-12hr bölünmüş).</li>
                <li><strong>İdame:</strong> Genellikle 200 mg/gün (Bazı hastalarda 800 mg/gün'e kadar çıkılabilir).</li>
            </ul>
            <h6 class="dose-type-title">IV/IM</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç:</strong> İlk olarak 25 mg (IM/IV), ardından 1-4 saat sonra 25-50 mg (Gerekirse).</li>
                <li><strong>Titrasyon:</strong> Kontrol altına alınana kadar q4-6hr'da 400 mg'a kadar artırılabilir. (Olağan doz 300-800 mg/gün).</li>
            </ul>

            <h5 class="dose-condition-title">Bulantı ve Kusma</h5>
            <ul class="dose-details-list">
                <li><strong>PO:</strong> 10-25 mg q4-6hr PRN.</li>
                <li><strong>IV/IM:</strong> 25-50 mg q4-6hr PRN.</li>
            </ul>

            <h5 class="dose-condition-title">Diğer Endikasyonlar</h5>
            <ul class="dose-details-list">
                <li><strong>Preoperatif Endişe:</strong> 25-50 mg PO (Ameliyattan 2-3 saat önce) VEYA 12.5-25 mg IM (1-2 saat önce).</li>
                <li><strong>İnatçı Hıçkırık:</strong> 25-50 mg PO q6-8hr. (Başarısız olursa 25-50 mg IM q3-4hr, ardından yavaş IV infüzyon).</li>
                <li><strong>Akut İntermittan Porfiri:</strong> 25-50 mg PO q6-8hr.</li>
                <li><strong>Migren Baş Ağrısı (Endikasyon Dışı):</strong> 5-50 mg IV (Tek doz).</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Davranış Bozuklukları, Hiperaktivite (≥6 Ay)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 50-100 mg/gün (PO/IM) VEYA 0.55 mg/kg q4-6hr PRN.</li>
                <li><strong>Hastanede Yatan Büyük Çocuklar:</strong> 200 mg/gün veya daha fazlası gerekebilir.</li>
            </ul>
            
            <h5 class="dose-condition-title">Bulantı ve Kusma (≥6 Ay)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 0.5-1 mg/kg (PO/IM) q6-8hr PRN.</li>
            </ul>
            
            <h5 class="dose-condition-title">Preoperatif Endişe (≥6 Ay)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 0.55 mg/kg (PO/IM) (Ameliyattan 1-2 saat önce).</li>
            </ul>

            <h5 class="dose-condition-title">< 6 Ay</h5>
            <ul class="dose-details-list simple-list">
                <li>Güvenlik ve etkinlik belirlenmemiştir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Daha düşük başlangıç dozları (**0.25-0.5 mg PO q8-12hr**) ve daha kademeli ayarlamalar önerilir.</li>
                <li>IM laktat formu için: Normal yetişkin dozlarına göre daha düşük dozlar ve daha uzun doz aralıkları önerilir.</li>
                <li>Yaşlılar, tardif diskinezi, ortostatik hipotansiyon ve sedasyon gibi yan etkiler açısından daha yüksek risk altındadır.</li>
            </ul>
        `
    }
},
{
    id: "fomepizolContainer",
    isim: "Fomepizol",
    piyasaIsimleri: [], // Piyasa ismi belirtilmemiştir.
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Metanol & Etilen Glikol Zehirlenmesi (IV İnfüzyon)</h5>
            <h6 class="dose-type-title">Standart Rejim</h6>
            <ul class="dose-details-list">
                <li><strong>Yükleme Dozu:</strong> 15 mg/kg (30 dakika üzerinde IV infüzyon).</li>
                <li><strong>Takip:</strong> 4 doz için her 12 saatte bir (q12hr) 10 mg/kg IV.</li>
                <li><strong>Sürdürme:</strong> Ardından doz 15 mg/kg'a artırılır (q12hr).</li>
                <li><strong>Tedavi Sonu:</strong> Etilen glikol veya metanol seviyeleri **<20 mg/dL** olana kadar tedavi edilir.</li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları (Hemodiyaliz Durumu)</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>Diyaliz Sırasında:</strong> Her 4 saatte bir VEYA 1-1.5 mg/kg/saat sürekli IV infüzyon uygulanır.</li>
                <li><strong>Diyaliz Tamamlandığında (<1 saat):</strong> Doz verilmez.</li>
                <li><strong>Diyaliz Tamamlandığında (1-3 saat):</strong> Bir sonraki programlanmış dozun %50'si verilir.</li>
                <li><strong>Diyaliz Tamamlandığında (>3 saat):</strong> Bir sonraki programlanmış doz verilir.</li>
                <li><strong>İdame:</strong> Son uygulanan dozdan 12 saat sonra bir sonraki programlanmış doza geçilir.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Metanol & Etilen Glikol Zehirlenmesi (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Yükleme Dozu:</strong> 15 mg/kg IV.</li>
                <li><strong>Takip:</strong> 4 doz için her 12 saatte bir (q12hr) 10 mg/kg IV.</li>
                <li><strong>Sürdürme:</strong> Ardından doz 15 mg/kg'a artırılır (q12hr).</li>
                <li><strong>Tedavi Sonu:</strong> Etilen glikol veya metanol seviyeleri <20 mg/dL olana kadar tedavi edilir.</li>
            </ul>
            <h5 class="dose-condition-title">Böbrek Yetmezliği</h5>
            <ul class="dose-details-list simple-list">
                <li>Hemodiyaliz dozaj modifikasyonları yetişkinlerle aynıdır.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
                <li>Tedavi ve izleme hemodiyaliz gerekliliği açısından yakından takip edilmelidir.</li>
            </ul>
        `
    }
},
{
    id: "bVitaminKompleksiContainer",
    isim: "B Vitamin Kompleksi (Yüksek Doz B1)",
    piyasaIsimleri: [
        "Bemiks 2ml ampul",
        "Beheptal 2ml ampul"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Wernicke Ensefalopatisi (IV Yüksek Doz B1 Tedavisi)</h5>
            <h6 class="dose-type-title">Akut Tedavi (İlk 2 Gün)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 500 mg (20 Ampul)</li>
                <li><strong>Uygulama:</strong> 500 mL İzotonik içine konulur ve **30 dakika üzerinde** IV infüzyon uygulanır.</li>
            </ul>
            <h6 class="dose-type-title">Ara Tedavi (Sonraki 5 Gün)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 250 mg (10 Ampul)</li>
                <li><strong>Uygulama:</strong> 500 mL İzotonik içine konulur ve **30 dakika üzerinde** IV infüzyon uygulanır.</li>
            </ul>
            <h6 class="dose-type-title">İdame Doz</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 100 mg (PO) günde bir kez.</li>
                <li><strong>Süre:</strong> Eksiklik tamamlanana kadar önerilir.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Pediatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik dozaj genellikle pediyatrik nöroloji veya beslenme uzmanı tarafından belirlenir ve yetişkin dozlarından farklıdır.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin Wernicke Ensefalopatisi rejimi kullanılır.</li>
                <li>Ancak IV sıvı yüklemesi ve kardiyovasküler durum açısından dikkatli izlem önerilir.</li>
            </ul>
        `
    }
},
{
    id: "aspirinContainer",
    isim: "Aspirin (Asetilsalisilik Asit)",
    piyasaIsimleri: [
        "Coraspin 100 mg 30 Tablet",
        "Coraspin 300 mg 30 Tablet",
        "Dispril 300 mg 24 Tablet",
        "Ecopirin 100 mg 30 Tablet",
        "Ecopirin 150 mg 30 Tablet",
        "Ecopirin 300 mg 30 Tablet",
        "Ecopirin Pro 81 mg 30 Tablet",
        "Aspirin 100 mg 20 Tablet",
        "Aspirin 500 mg 20 Tablet",
        "Opon 500 mg 20 Tablet"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Ağrı ve Ateş (Hemen Salınım)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 325-650 mg (PO) q4hr VEYA 500-1000 mg (PO) q4-6hr. (Max 4 g/gün).</li>
                <li><strong>Rektal:</strong> 300-600 mg (PR) q4hr (Max 10 gün).</li>
            </ul>

            <h5 class="dose-condition-title">Akut Koroner Sendrom (AKS - STEMI, UA, NSTEMI)</h5>
            <h6 class="dose-type-title">Akut Semptomlar (İlk Uygulama)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 160-325 mg (PO) (Enterik olmayan tablet çiğnenmelidir).</li>
                <li><strong>IV Mümkün Değilse:</strong> 300-600 mg (PR) supozituvar.</li>
            </ul>
            <h6 class="dose-type-title">İdame (Sekonder Koruma)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 81-325 mg (PO) günde bir kez (Tercih edilen doz).</li>
            </ul>
            
            <h5 class="dose-condition-title">İskemik İnme ve TİA (Geçici İskemik Atak)</h5>
            <ul class="dose-details-list">
                <li><strong>Başlangıç:</strong> İnme/TİA başlangıcından sonraki 48 saat içinde 160-325 mg (PO).</li>
                <li><strong>İdame:</strong> 75-100 mg (PO) günde bir kez.</li>
                <li>**Uyarı:** Alteplaz uygulamasından sonraki 24 saat içinde Aspirin KULLANILMAZ.</li>
            </ul>

            <h5 class="dose-condition-title">Birincil ASCVD Önlemesi (40-70 Yaş)</h5>
            <ul class="dose-details-list simple-list">
                <li>Daha yüksek ASCVD riski olan, ancak kanama riski artmamış seçilmiş yetişkinlerde düşük doz (75-100 mg PO qDay) düşünülebilir.</li>
                <li>**>70 Yaş:** Rutin olarak birincil önleme için düşük doz Aspirin UYGULANMAMALIDIR.</li>
            </ul>

            <h5 class="dose-condition-title">Anti-İnflamatuvar</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>Doz:</strong> 2.1-7.3 g/gün (PO) bölünmüş dozlarda (Serum salisilat konsantrasyonları izlenmelidir).</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Ağrı ve Ateş</h5>
            <h6 class="dose-type-title">Oral / Rektal</h6>
            <ul class="dose-details-list">
                <li><strong><50 kg:</strong> 10-15 mg/kg (PO) q4hr (Max 60-80 mg/kg/gün).</li>
                <li><strong>≥50 kg:</strong> 325-650 mg (PO/PR) q4-6hr PRN (Max 4 g/gün).</li>
            </ul>
            <h6 class="dose-type-title">Jüvenil Romatoid Artrit (JRA)</h6>
            <ul class="dose-details-list">
                <li><strong><25 kg:</strong> 60-100 mg/kg/gün (PO) q6-8hr bölünmüş.</li>
            </ul>

            <h5 class="dose-condition-title">Kawasaki Hastalığı</h5>
            <ul class="dose-details-list">
                <li><strong>Ateşli Faz:</strong> 80-100 mg/kg/gün (PO) q6hr bölünmüş (Ateş düştükten sonra 48-72 saat).</li>
                <li><strong>İdame:</strong> 3-6 mg/kg/gün (PO) tek doz.</li>
            </ul>
            
            <h5 class="dose-condition-title">Kritik Not</h5>
            <ul class="dose-details-list simple-list">
                <li>Viral enfeksiyon (grip, suçiçeği) sırasında kullanımı **Reye Sendromu** riski taşır.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>**Birincil Önleme:** >70 yaş için rutin düşük doz Aspirin önerilmemektedir.</li>
                <li>Sekonder önleme ve akut durumlar için düşük dozlar kullanılır (81-325 mg/gün).</li>
                <li>Böbrek ve karaciğer yetmezliği olanlarda kanama riski ve toksisite açısından dikkatli izleme önerilir.</li>
            </ul>
        `
    }
},
{
    id: "sefdinirContainer",
    isim: "Sefdinir",
    piyasaIsimleri: [
        "Becefist 600 mg 10 Tablet",
        "Cefdifix 600 mg 7 Tablet",
        "Cefdifix 600 mg 10 Tablet",
        "Cefdifix 600 mg 14 Tablet",
        "Cefdifix Şurup 125 mg/5 ml 100 ml",
        "Cefdifix Şurup 250 mg/5 ml 100 ml",
        "Ceforist 300 mg 10 Kapsül",
        "Ceforist 300 mg 20 Kapsül",
        "Ceforist 600 mg 10 Tablet",
        "Ceforist 600 mg 14 Tablet",
        "Ceforist Şurup 125 mg/5 ml 100 ml",
        "Ceforist Şurup 250 mg/5 ml 100 ml",
        "Ceftinex 250 mg/5 ml 100 ml Oral Süspansiyon İçin Kuru Toz",
        "Ceftinex 300 mg 10 Tablet",
        "Ceftinex 300 mg 20 Tablet",
        "Ceftinex 600 mg 7 Tablet",
        "Ceftinex 600 mg 10 Tablet",
        "Ceftinex 600 mg 14 Tablet",
        "Ceftinex Şurup 100 ml",
        "Cempes 300 mg 10 Kapsül",
        "Cempes 300 mg 20 Kapsül",
        "Cempes 600 mg 7 Tablet",
        "Cempes 600 mg 10 Tablet",
        "Cempes 600 mg 14 Tablet",
        "Cempes Şurup 125 mg/5 ml 100 ml",
        "Cempes Şurup 250 mg/5 ml 100 ml",
        "Clasem 300 mg 10 Kaspül",
        "Clasem 300 mg 20 Kaspül",
        "Clasem 600 mg 7 Tablet",
        "Clasem 600 mg 10 Tablet",
        "Clasem 600 mg 14 Tablet",
        "Elucef 300 mg 20 Efervesan Tablet",
        "Encef 300 mg 10 Kapsül",
        "Encef 300 mg 20 Kapsül",
        "Encef 600 mg 10 Tablet",
        "Encef 600 mg 14 Tablet",
        "Encef Şurup 125 mg/5 ml 100 ml",
        "Encef Şurup 250 mg/5 ml 100 ml",
        "Rodinir 300 mg 10 Kapsül",
        "Rodinir 300 mg 20 Kapsül",
        "Rodinir Şurup 125 mg/5 ml 100 ml",
        "Rodinir Şurup 250 mg/5 ml 100 ml",
        "Tamcef 300 mg Kapsül",
        "Tamcef Şurup 125 mg/5 ml",
        "Tamcef Şurup 250 mg/5 ml 100 ml"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Toplum Kökenli Pnömoni (TKP), Akut Sinüzit, Komplike Olmayan Cilt Enf.</h5>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 300 mg (PO) q12hr (10 gün).</li>
                <li><strong>Akut Sinüzit Alternatif:</strong> 600 mg (PO) q24hr (10 gün).</li>
            </ul>

            <h5 class="dose-condition-title">Solunum Yolu Enfeksiyonları (Farenjit/Tonsillit ve Kronik Bronşit Akut Alevlenmesi)</h5>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 300 mg (PO) q12hr (5-10 gün) VEYA 600 mg (PO) q24hr (10 gün).</li>
            </ul>
            
            <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
            <h6 class="dose-type-title">Böbrek Yetmezliği (CrCl <30 mL/dk)</h6>
            <ul class="dose-details-list simple-list">
                <li><strong>Doz:</strong> 300 mg/gün (PO)'u aşmamalıdır.</li>
            </ul>
            <h6 class="dose-type-title">Karaciğer Yetmezliği</h6>
            <ul class="dose-details-list simple-list">
                <li>Doz ayarlaması gerekmez.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Akut Bakteriyel Otitis Media, Farenjit/Tonsillit, Akut Sinüzit (6 Ay - 12 Yaş)</h5>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list">
                <li><strong>Standart:</strong> 7 mg/kg (PO) q12hr (5-10 gün). VEYA</li>
                <li><strong>Alternatif:</strong> 14 mg/kg (PO) q24hr (10 gün).</li>
            </ul>

            <h5 class="dose-condition-title">Cilt/Yumuşak Doku Enfeksiyonları (6 Ay - 12 Yaş)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 7 mg/kg (PO) q12hr (10 gün).</li>
            </ul>
            <h5 class="dose-condition-title">≥12 Yaş VEYA >43 kg</h5>
            <ul class="dose-details-list simple-list">
                <li>Yetişkin dozlarıyla aynıdır.</li>
            </ul>

            <h5 class="dose-condition-title">Uygulama Notları</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>Demir Takviyeleri:</strong> Demir emilimini bozduğundan Sefdinir, demir takviyelerinden **en az 2 saat önce veya sonra** verilmelidir.</li>
                <li>**Kızıl Dışkı:** Sefdinir veya parçalanma ürünleri ile demir arasında emilmeyen bir kompleks oluşumu nedeniyle dışkıda kırmızımsı renk görülebilir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
                <li>Azalmış böbrek fonksiyonu sıklığı nedeniyle, **CrCl <30 mL/dk** olan yaşlı hastalarda dozajın **300 mg/gün** ile sınırlandırılması kritik öneme sahiptir.</li>
            </ul>
        `
    }
},
{
    id: "sefiksimContainer",
    isim: "Sefiksim",
    piyasaIsimleri: [
        "Cefdia 400 mg 5 Tablet",
        "Cefdia 400 mg 10 Tablet",
        "Cefixima 400 mg 5 Tablet",
        "Cefixima 400 mg 10 Tablet",
        "Cephix Çocuk Şrubu için Kuru Toz 100 mg/5 ml 50 ml",
        "Fixef 400 mg 5 Tablet",
        "Fixef 400 mg 10 Tablet",
        "Fixef Pediatrik Şurup 100 mg/5 ml 50 ml",
        "Fixef Şurup 100 mg/5 ml 100 ml",
        "Molcef 200 mg 20 Tablet",
        "Molcef 400 mg 10 Tablet",
        "Molcef Şurup 100 mg/5 ml 100 ml",
        "Suprax-DT 400 mg 5 Tablet",
        "Suprax-DT 400 mg 10 Tablet",
        "Suprax 400 mg 5 Tablet",
        "Suprax 400 mg 10 Tablet",
        "Suprax Şurup 100 mg 50 ml",
        "Suprax Şurup 100 mg 100 ml",
        "Zimaks 400 mg 10 Tablet",
        "Zimaks Şurup 100 mg 50 ml",
        "Zimaks Şurup 100 mg 100 ml"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Akut Bronşit Alevlenmeleri, Otitis Media, Farenjit/Tonsillit, Komplike Olmayan İYE</h5>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 400 mg/gün (PO)</li>
                <li><strong>Sıklık:</strong> Tek günlük doz VEYA q12hr bölünmüş.</li>
                <li><strong>Not:</strong> Streptekok (S. pyogenes) enfeksiyonlarında tedavi en az 10 gün sürdürülmelidir.</li>
            </ul>

            <h5 class="dose-condition-title">Komplike Olmayan Gonore (Alternatif Tedavi)</h5>
            <p>**Uyarı:** Artık CDC tarafından birinci basamak tedavi olarak endike değildir.</p>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 400 mg (PO) tek doz.</li>
                <li><strong>Kombinasyon:</strong> Artı **Azitromisin 1 g PO tek doz** (tercih edilen) VEYA Doksisiklin 100 mg PO q12hr x 7 gün.</li>
            </ul>
            
            <h5 class="dose-condition-title">Tifo Ateşi (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 15-20 mg/kg/gün (Max 100-200 mg BID).</li>
                <li><strong>Süre:</strong> 7-14 gün.</li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları (Böbrek Yetmezliği)</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>CrCl 21-60 mL/dk:</strong> 260 mg/gün (PO).</li>
                <li><strong>CrCl ≤20 mL/dk:</strong> 200 mg/gün (PO).</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Akut Bronşit Alevlenmeleri, Otitis Media, Farenjit/Tonsillit, Komplike Olmayan İYE (6 Ay - 12 Yaş, ≤45 kg)</h5>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 8 mg/kg/gün (PO)</li>
                <li><strong>Sıklık:</strong> Tek günlük doz VEYA q12hr bölünmüş.</li>
            </ul>
            
            <h5 class="dose-condition-title">Komplike Olmayan Gonore (>12 Yaş, >45 kg)</h5>
            <ul class="dose-details-list simple-list">
                <li>Yetişkin dozuyla aynıdır: 400 mg PO tek doz (Azitromisin 1 g ile kombine).</li>
            </ul>

            <h5 class="dose-condition-title">Tifo Ateşi (Endikasyon Dışı)</h5>
            <ul class="dose-details-list simple-list">
                <li>15-20 mg/kg/gün (Max 100-200 mg BID) x 7-14 gün.</li>
            </ul>

            <h5 class="dose-condition-title">< 6 Ay</h5>
            <ul class="dose-details-list simple-list">
                <li>Güvenlik ve etkinlik belirlenmemiştir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
                <li>Azalmış böbrek fonksiyonu sıklığı nedeniyle, **CrCl 60 mL/dk ve altı** olan yaşlı hastalarda dozaj mutlaka ayarlanmalıdır (Bkz. Yetişkin Dozaj Modifikasyonları).</li>
            </ul>
        `
    }
},
{
    id: "seftibutenContainer",
    isim: "Seftibuten",
    piyasaIsimleri: [
        "Wincef 400 mg 10 Tablet",
        "Wincef Şurup 90 mg/5 ml 100 ml"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Solunum Yolu Enfeksiyonları (KOAH Alevlenmesi), Otitis Media, Farenjit/Tonsillit, Komplike Olmayan İYE (Endikasyon Dışı)</h5>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 400 mg (PO)</li>
                <li><strong>Sıklık:</strong> Günde bir kez (qDay) (10 gün).</li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları (Böbrek Yetmezliği)</h5>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list simple-list">
                <li><strong>CrCl 30-49 mL/dk:</strong> 200 mg (PO) qDay. VEYA 4.5 mg/kg qDay.</li>
                <li><strong>CrCl 5-29 mL/dk:</strong> 100 mg (PO) qDay. VEYA 2.25 mg/kg qDay.</li>
                <li><strong>Hemodiyaliz:</strong> Diyalizden sonra ek doz verilmelidir.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Enfeksiyonlar (6-12 Yaş VEYA <45 kg)</h5>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 9 mg/kg (PO)</li>
                <li><strong>Sıklık:</strong> Günde bir kez (qDay).</li>
                <li><strong>Maksimum:</strong> 400 mg/gün (10 gün).</li>
            </ul>
            <h5 class="dose-condition-title">>12 Yaş VEYA >45 kg</h5>
            <ul class="dose-details-list simple-list">
                <li>Yetişkin dozuyla aynıdır (400 mg PO qDay).</li>
            </ul>
            <h5 class="dose-condition-title">< 6 Ay</h5>
            <ul class="dose-details-list simple-list">
                <li>Güvenlik ve etkinlik belirlenmemiştir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
                <li>Azalmış böbrek fonksiyonu sıklığı nedeniyle, **CrCl 49 mL/dk ve altı** olan yaşlı hastalarda dozaj mutlaka ayarlanmalıdır (Bkz. Yetişkin Dozaj Modifikasyonları).</li>
            </ul>
        `
    }
},
{
    id: "omeprazolContainer",
    isim: "Omeprazol",
    piyasaIsimleri: [
        "Demeprazol 20 mg 14 Kapsül",
        "Erbinna 40 mg 1 Flakon",
        "Eselan 40 mg IV Flakon",
        "Loseprol 40 mg 1 Flakon",
        "Omeprazid 20 mg 14 Kapsül",
        "Omeprol 20 mg 28 Kapsül",
        "Omeprol 40 mg 1 Flakon",
        "Omeref 40 mg 1 Flakon",
        "Omesek 20 mg 14 Mikropellet Kapsül",
        "Omesek 20 mg 28 Kapsül",
        "Omex 40 mg IV Flakon",
        "Omheal 40 mg 28 Kapsül",
        "Omheal 20 mg 14 Kapsül",
        "Prosek 20 mg 14 Kapsül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Duodenal Ülser & GÖRH</h5>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 20 mg (PO) günde bir kez (4-8 hafta).</li>
            </ul>

            <h5 class="dose-condition-title">Gastrik Ülser & Erozi̇f Özofajit (EE)</h5>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list">
                <li><strong>Gastrik Ülser:</strong> 40 mg (PO) günde bir kez (4-8 hafta).</li>
                <li><strong>Erozif Özofajit Tedavisi:</strong> 20 mg (PO) günde bir kez (4-8 hafta).</li>
                <li><strong>EE İdamesi:</strong> 20 mg (PO) günde bir kez (1 yıla kadar).</li>
            </ul>

            <h5 class="dose-condition-title">Helicobacter Pylori Enfeksiyonu (Üçlü Terapi Örneği)</h5>
            <ul class="dose-details-list">
                <li><strong>Omeprazol:</strong> 20 mg (PO) her 12 saatte bir (q12hr).</li>
                <li><strong>Amoksisilin:</strong> 1000 mg (PO) q12hr.</li>
                <li><strong>Klaritromisin:</strong> 500 mg (PO) q12hr.</li>
                <li><strong>Süre:</strong> 10-14 gün.</li>
            </ul>

            <h5 class="dose-condition-title">Aşırı Salgı Durumları (Zollinger-Ellison Sendromu)</h5>
            <ul class="dose-details-list">
                <li><strong>Başlangıç Dozu:</strong> 60 mg (PO) günde bir kez.</li>
                <li><strong>Maksimum:</strong> 360 mg/gün'e kadar çıkılabilir (Doz >80 mg ise bölünerek verilmelidir).</li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
            <ul class="dose-details-list simple-list">
                <li>**Karaciğer Yetmezliği:** Doz azaltılması önerilir (özellikle idame tedavisi için).</li>
                <li>**Böbrek Yetmezliği:** Doz ayarlaması gerekmez.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">GÖRH & Erozi̇f Özofajit Tedavisi (PO)</h5>
            <h6 class="dose-type-title">≥1 Yaş</h6>
            <ul class="dose-details-list">
                <li><strong>5-10 kg:</strong> 5 mg (PO) günde bir kez.</li>
                <li><strong>10-20 kg:</strong> 10 mg (PO) günde bir kez.</li>
                <li><strong>>20 kg:</strong> 20 mg (PO) günde bir kez.</li>
                <li><strong>Tedavi Süresi:</strong> 4-8 hafta.</li>
            </ul>
            <h6 class="dose-type-title">Yenidoğanlar (Endikasyon Dışı)</h6>
            <ul class="dose-details-list simple-list">
                <li><strong>Refrakter Ülser/Özofajit:</strong> 0.5-1.5 mg/kg (PO) qDay (8 haftaya kadar).</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması gerekmez. Standart yetişkin dozları kullanılır.</li>
                <li>Karaciğer yetmezliği riski varsa (azalmış metabolizma) doz ayarlaması düşünülmelidir.</li>
            </ul>
        `
    }
},
{
    id: "efedrinContainer",
    isim: "Efedrin",
    piyasaIsimleri: [
        "Efedrin Hidroklorür 0.05 g Biosel 100 Ampül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Hipotansiyon (Anestezi Sırasında)</h5>
            <h6 class="dose-type-title">IV Bolus (Akovaz, Corphedra, Emerphed, Jenerikler)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç Dozu:</strong> 5-10 mg (IV bolus).</li>
                <li><strong>Tekrar:</strong> Kan basıncı hedefine göre gerektiğinde ek boluslar uygulanır.</li>
                <li><strong>Maksimum Kümülatif:</strong> 50 mg'ı aşmamalıdır.</li>
            </ul>
            <h6 class="dose-type-title">IV Bolus (Rezipres)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç Dozu:</strong> 4.7-9.4 mg (IV bolus).</li>
                <li><strong>Maksimum Kümülatif:</strong> 47 mg'ı aşmamalıdır.</li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>Böbrek Yetmezliği:</strong> İlaç ve metabolitleri idrarla atıldığından, renal yetmezliği olan hastalarda eliminasyon yarı ömrü uzayabilir. Advers reaksiyonlar için dikkatli izlem yapılmalıdır.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Pediatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Çocuklarda güvenlik ve etkinlik belirlenmemiştir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Daha düşük hepatik, renal veya kardiyak fonksiyon sıklığı nedeniyle doz aralığının **alt sınırından** başlanmalıdır.</li>
                <li>İlaç böbrekler tarafından atıldığından, böbrek fonksiyonu izlenerek doz dikkatli seçilmelidir.</li>
            </ul>
        `
    }
},
{
    id: "naproksenContainer",
    isim: "Naproksen",
    piyasaIsimleri: [
        "A-Nox Fort 550 mg 20 Tablet",
        "Aleve 220 mg 20 Tablet",
        "Apraljin Forte 550 mg 10 Tablet",
        "Apraljin Forte 550 mg 20 Tablet",
        "Apranax 275 mg 10 Tablet",
        "Apranax 275 mg 20 Tablet",
        "Apranax Fort 550 mg 10 Tablet",
        "Apranax Fort 550 mg 20 Tablet",
        "Aprodent Fort 550 mg 20 Tablet",
        "Aprol 275 mg 10 Tablet",
        "Aprol Fort 550 mg 10 Tablet",
        "Aprol Fort 550 mg 20 Tablet",
        "Aprowell Forte 550 mg 10 Tablet",
        "Aprowell Forte 550 mg 20 Tablet",
        "Exvile 220 mg 20 Tablet",
        "Napren S Forte 550 mg 20 Tablet",
        "Naproff Forte 550 mg 10 Tablet",
        "Naprosyn CR 750 mg 10 Tablet",
        "Naprosyn EC 250 mg 20 Tablet",
        "Naprosyn EC Fort 500 mg 20 Tablet",
        "Naprosyn Fitil 500 mg 10 Adet",
        "İnaprol Fort 500 mg 20 Tablet"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Ağrı ve Dismenore</h5>
            <h6 class="dose-type-title">Hemen Salınım (IR)</h6>
            <ul class="dose-details-list">
                <li><strong>Başlangıç:</strong> 500 mg (PO) ilk doz, ardından 250 mg (PO) q6-8hr VEYA 500 mg (PO) q12hr PRN.</li>
                <li><strong>Maksimum:</strong> 1. gün **1250 mg/gün**, sonraki günler **1000 mg/gün** naproksen bazını aşmamalıdır.</li>
            </ul>
            <h6 class="dose-type-title">Uzatılmış Salınım (ER)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 750-1000 mg (PO) qDay. (Geçici olarak 1500 mg/gün'e çıkarılabilir).</li>
            </ul>

            <h5 class="dose-condition-title">Romatoid Artrit, Osteoartrit, Ankilozan Spondilit</h5>
            <h6 class="dose-type-title">PO</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 500-1000 mg/gün (PO) q12hr bölünmüş. (ER formülasyonu qDay).</li>
            </ul>

            <h5 class="dose-condition-title">Akut Gut</h5>
            <ul class="dose-details-list">
                <li><strong>IR:</strong> İlk 750 mg (PO), ardından atak geçene kadar 250 mg q8hr.</li>
                <li><strong>ER:</strong> İlk 1000-1500 mg qDay, ardından atak geçene kadar 1000 mg qDay.</li>
            </ul>

            <h5 class="dose-condition-title">Dozlama Hususları</h5>
            <ul class="dose-details-list simple-list">
                <li>Gastrointestinal (GI) etkilerden kaçınmak için **yemekle veya 8-12 oz su ile** alın.</li>
                <li>220 mg Naproksen Sodyum = 200 mg Naproksen Bazı.</li>
                <li><strong>Böbrek Yetmezliği (CrCl <30 mL/dk):</strong> Kullanımı **önerilmez**.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Jüvenil İdiyopatik Artrit (JIA) (>2 Yaş)</h5>
            <h6 class="dose-type-title">Oral Süspansiyon</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 10 mg/kg/gün (PO) q12hr bölünmüş.</li>
                <li><strong>Maksimum:</strong> 15 mg/kg/gün'ü aşmamalıdır.</li>
            </ul>

            <h5 class="dose-condition-title">Ağrı (Kanser Ağrısı - Endikasyon Dışı) (>2 Yaş)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 5-7 mg/kg (PO) q8-12hr (Max 1000 mg/gün).</li>
            </ul>

            <h5 class="dose-condition-title">>12 Yaş</h5>
            <ul class="dose-details-list simple-list">
                <li>Yetişkin dozlarıyla aynıdır.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
                <li>GI ve renal yan etkiler açısından daha yüksek risk altındadır. En düşük etkili doz, en kısa süre için kullanılmalıdır.</li>
            </ul>
        `
    }
},
{
    id: "erdosteinContainer",
    isim: "Erdostein",
    piyasaIsimleri: [
        "Berdolit 300 mg 20 Kapsül",
        "Erdobil 175 mg/5 ml 100 ml",
        "Erdobil 175 mg/5 ml 200 ml",
        "Erdobil 300 mg 20 Kapsül",
        "Erdostin 300 mg 20 Kapsül",
        "Erdostin Şurup 175 mg/5 ml 100 ml",
        "Erdostin Şurup 175 mg/5 ml 200 ml",
        "Evosten 300 mg 20 Kapsül",
        "Evosten Şurup Tozu 175 mg/5 ml 100 ml",
        "Evosten Şurup Tozu 175 mg/5 ml 200 ml"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Akut/Kronik Solunum Yolu Hastalıkları (Aşırı Mukus Üretimi)</h5>
            <h6 class="dose-type-title">Oral (Kapsül VEYA Dağılabilir Tablet)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 300 mg</li>
                <li><strong>Sıklık:</strong> Günde iki veya üç kez (bid veya tid).</li>
                <li><strong>Not:</strong> Kronik bronşitin akut alevlenmelerinde tedavi süresi **10 günü** aşmamalıdır.</li>
            </ul>
            <h6 class="dose-type-title">Oral (Süspansiyon)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 350 mg</li>
                <li><strong>Sıklık:</strong> Günde iki kez (bid).</li>
            </ul>

            <h5 class="dose-condition-title">Dozaj Modifikasyonları</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>Böbrek Yetmezliği (CrCl <25 mL/dk):</strong> **Kontrendikedir (Kullanılmamalıdır)**.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Solunum Yolu Hastalıkları (Oral Süspansiyon)</h5>
            <ul class="dose-details-list">
                <li><strong>15 - <20 kg:</strong> 175 mg günde iki kez (bid).</li>
                <li><strong>20 - 30 kg:</strong> 175 mg günde üç kez (tid).</li>
                <li><strong>>30 kg:</strong> Yetişkin dozuyla aynıdır (Genellikle 300 mg bid/tid).</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
                <li>Ancak yaşlı hastalarda böbrek fonksiyonu sıklıkla azaldığından, tedaviye başlamadan önce CrCl <25 mL/dk olmadığından emin olunmalıdır.</li>
            </ul>
        `
    }
},	
{
    id: "oksimetazolinContainer",
    isim: "Oksimetazolin HCL",
    piyasaIsimleri: [
        "Burazin Sprey %0.025 Pediatrik Doz Ayarlı",
        "Burazin Sprey 10 ml",
        "Oxygo Burun Spreyi %0.05",
        "Oxynaz Burun Spreyi %0.05",
        "Oxynaz Pediatrik Burun Spreyi %0.01",
        "Rhinfant Burun Spreyi %0.05 10 ml",
        "Rhinfant Pediatrik Burun Spreyi %0.01",
        "Rhinfant Pediatrik Burun Spreyi %0.025 10 ml",
        "İliadin Damla 10 ml",
        "İliadin Merck Burun Spreyi 10 ml",
        "İliadin Sprey 10 ml"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Nazal Konjesyon (Burun Tıkanıklığı)</h5>
            <h6 class="dose-type-title">Topikal Nazal (%0.05)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> Her burun deliğine 2-3 damla/sprey.</li>
                <li><strong>Sıklık:</strong> Her 12 saatte bir (q12hr).</li>
                <li><strong>Uyarı:</strong> 24 saatte 2 dozu **aşmamalıdır** ve **3-5 günden fazla** kullanılmamalıdır (Rebound konjesyon riski).</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Nazal Konjesyon (Burun Tıkanıklığı)</h5>
            <h6 class="dose-type-title">Topikal Nazal Uygulama</h6>
            <ul class="dose-details-list">
                <li><strong>2-5 Yaş (%0.025):</strong> Her burun deliğine 2-3 sprey (q10-12hr). (Max 2 doz/24 saat; Max 3 gün).</li>
                <li><strong>≥6 Yaş (%0.05):</strong> Her burun deliğine 2-3 damla/sprey (q10-12hr). (Max 2 doz/24 saat; Max 3 gün).</li>
            </ul>
            <h5 class="dose-condition-title">< 2 Yaş</h5>
            <ul class="dose-details-list simple-list">
                <li>Güvenlik ve etkinlik belirlenmemiştir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
                <li>Ancak, sistemik emilimin potansiyel kardiyovasküler yan etkileri (hipertansiyon) açısından dikkatli izlem önerilir.</li>
            </ul>
        `
    }
},
{
    id: "ksilometazolinContainer",
    isim: "Ksilometazolin HCL",
    piyasaIsimleri: [
        "Nasovine Nazal Sprey",
        "Nasovine Pediatrik Burun Spreyi",
        "Olvin Burun Spreyi 1 mg/ml 10 ml",
        "Otrivine Burun Spreyi 10 ml",
        "Otrivine Care Burun Spreyi (Doz Ayarlı)",
        "Otrivine Menthol Sprey 10 ml",
        "Otrivine Pediatrik Sprey 10 ml",
        "Zolin Sprey 10 ml"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Nazal Konjesyon (Burun Tıkanıklığı)</h5>
            <h6 class="dose-type-title">Topikal Nazal (%0.05 VEYA %0.1) (>12 Yaş)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> Her burun deliğine 2-3 damla/sprey.</li>
                <li><strong>Sıklık:</strong> Her 8-10 saatte bir (q8-10hr).</li>
                <li><strong>Uyarı:</strong> Günde **3 dozu aşmamalıdır** ve **5 günden fazla** kullanılmamalıdır (Rebound konjesyon riski).</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Nazal Konjesyon (Burun Tıkanıklığı)</h5>
            <h6 class="dose-type-title">Topikal Nazal (%0.05) (2-12 Yaş)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> Her burun deliğine 2-3 damla/sprey.</li>
                <li><strong>Sıklık:</strong> Her 8-10 saatte bir (q8-10hr).</li>
                <li><strong>Maksimum:</strong> 24 saatte 3 dozu aşmamalıdır.</li>
            </ul>
            <h5 class="dose-condition-title">< 2 Yaş</h5>
            <ul class="dose-details-list simple-list">
                <li>Kullanımı önerilmez.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
                <li>Ancak, sistemik emilimin potansiyel kardiyovasküler yan etkileri (hipertansiyon) açısından dikkatli izlem önerilir.</li>
            </ul>
        `
    }
},
{
    id: "klorheksidinContainer",
    isim: "Klorheksidin",
    piyasaIsimleri: [
        "Anzibel 5 mg/4 mg/3 mg Meyan Ballı 20 Pastil",
        "Anzibel 5 mg/4 mg/3 mg Zencefilli 20 Pastil",
        "Septix Pastil 5 mg/1 mg Limon Aromalı 20 Pastil",
        "Septix Pastil 5 mg/1 mg Mentol Aromalı 20 Pastil",
        "Septix Sprey 2mg/ml + 0.5 mg/ml Mentollü Sprey 30 ml"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Jinjivit (Diş Eti İltihabı)</h5>
            <h6 class="dose-type-title">Oral Çözelti (Gargara)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 15 mL gargara (PO)</li>
                <li><strong>Sıklık:</strong> Her 12 saatte bir (q12hr).</li>
            </ul>

            <h5 class="dose-condition-title">Scaling & Root Planing'e Yardımcı</h5>
            <h6 class="dose-type-title">Periodontal Cep Çipi (PerioChip)</h6>
            <ul class="dose-details-list">
                <li><strong>Uygulama:</strong> Periodontal cebe (derinliği >5 mm) 1-8 çip.</li>
                <li><strong>Tekrar:</strong> Her 3 ayda bir tekrarlanır.</li>
            </ul>

            <h5 class="dose-condition-title">Oral Mukozit (Endikasyon Dışı)</h5>
            <ul class="dose-details-list simple-list">
                <li>Kemik iliği transplantasyonu için kullanılan sitoredüktif tedaviyle ilişkili oral mukozitin hafifletilmesi.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Pediatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Çocuklarda güvenlik ve etkinlik belirlenmemiştir.</li>
                <li>Oral durulama ürünleri, yutma riski nedeniyle çocuklar için önerilmez.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
            </ul>
        `
    }
},
{
    id: "simetikonContainer",
    isim: "Simetikon",
    piyasaIsimleri: [
        "Metigast 140 mg 40 Kapsül",
        "Metigast Damla 100 mg/ml",
        "Metsikon 69.19 mg/ml Süspansiyon 30 ml",
        "Metsil Damla 66.6 mg 30 ml",
        "Metsil Fort 80 mg 50 Tablet",
        "Metsil Şurup 5 ml 40 mg 150 ml",
        "Sab Simplex Gaz Giderici Damla 30 ml",
        "Simfix Şurup 100 mg/ml",
        "Dolospas 40 mg/80 mg 30 Tablet",
        "Pinix 40 mg/80 mg 30 Tablet",
        "Simflat 40 mg/80 mg 30 Tablet",
        "Meteospasmyl 60 mg/300 mg 40 Kapsül",
        "Meteospasmyl 60 mg/300 mg 80 Kapsül",
        "Spazzi 60 mg/300 mg 40 Kapsül"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Gastrointestinal Sistemde Gaz Tutulması</h5>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 40-360 mg (PO).</li>
                <li><strong>Sıklık:</strong> Öğünlerden sonra ve yatmadan önce her 6 saatte bir (q6hr) PRN.</li>
                <li><strong>Maksimum:</strong> 500 mg/gün'ü aşmamalıdır.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Gastrointestinal Sistemde Gaz Tutulması</h5>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list">
                <li><strong><2 Yaş:</strong> 20 mg (0.3 mL) (PO) q6hr (Max 240 mg/gün).</li>
                <li><strong>2-12 Yaş:</strong> 40 mg (0.6 mL) (PO) q6hr (Max 480 mg/gün).</li>
                <li><strong>>12 Yaş:</strong> Yetişkin dozuyla aynıdır (Max 500 mg/gün).</li>
            </ul>
            <h5 class="dose-condition-title">Uygulama Notu</h5>
            <ul class="dose-details-list simple-list">
                <li>Dozlar öğünlerden sonra ve yatmadan önce verilmelidir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
            </ul>
        `
    }
},
{
    id: "pinaveryumContainer",
    isim: "Pinaveryum Bromür",
    piyasaIsimleri: [
        "Arpin 50 mg 40 Tablet",
        "Arpin 50 mg 80 Tablet",
        "Arpin 100 mg 40 Tablet",
        "Arpin 100 mg 80 Tablet",
        "Dicetel 50 mg 40 Tablet",
        "Dicetel 50 mg 80 Tablet",
        "Disaver 50 mg 40 Tablet",
        "Disaver 50 mg 80 Tablet",
        "Pinades 50 mg 40 Tablet",
        "Pinades 50 mg 80 Tablet",
        "Pinades 100 mg 40 Tablet",
        "Pinades 100 mg 80 Tablet",
        "Pingastro 50 mg 40 Tablet",
        "Pingastro 50 mg 80 Tablet",
        "Pivertel 50 mg 40 Tablet",
        "Pivertel 50 mg 80 Tablet",
        "Pivertel 100 mg 40 Tablet",
        "Pivertel 100 mg 80 Tablet",
        "Solopina 50 mg 40 Tablet",
        "Solopina 50 mg 80 Tablet",
        "Solopina 100 mg 40 Tablet",
        "Solopina 100 mg 80 Tablet",
        "Upslack 50 mg 40 Tablet",
        "Upslack 50 mg 80 Tablet",
        "Upslack 100 mg 40 Tablet",
        "Zonpas 50 mg 40 Tablet",
        "Zonpas 50 mg 80 Tablet"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Gastrointestinal Sistem Spazmı</h5>
            <h6 class="dose-type-title">Oral (PO)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 50 mg</li>
                <li><strong>Sıklık:</strong> Günde üç kez (tid).</li>
                <li><strong>Maksimum:</strong> 300 mg/gün.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Pediatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Çocuklarda güvenlik ve etkinlik belirlenmemiştir.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozu kullanılır.</li>
            </ul>
        `
    }
},
{
    id: "psodoefedrinContainer",
    isim: "Psödoefedrin HCL",
    piyasaIsimleri: [
        "Eksofed 60 mg 30 Tablet",
        "Eksofed Şurup 30 mg/5 ml 150 ml",
        "Rinogest Şurup 30 mg/5 ml 100 ml",
        "Sudafed Tablet 60 mg 30 Adet",
        "Sudafed Şurup 30 mg 150 ml",
        "Actifed 60 mg 30 Tablet",
        "Actifed Şurup 150 ml",
        "Axivol Plus 60/2.5 mg 20 Efervesan Tablet",
        "Axivol Plus 120/2.5 mg 20 Efervesan Tablet",
        "Clarinase Repetabs 20 Tablet",
        "Deloday Plus 60 mg/2.5 mg Efervesan Tablet",
        "Deloday Plus 120 mg/2.5 mg Efervesan Tablet",
        "Droflu Cold 20 Tablet",
        "Duact 30 Kapsül",
        "Nurofen Cold FLU 24 Tablet",
        "Parasinus 30 Tablet",
        "Sudafed Expektoran Şurup 150 ml",
        "Vicks VapoRub Buharlaşan Merhem (Vazelin) 38 g",
        "Vicks Vapodry Şurup 120 ml",
        "Apireks Cold 200 mg/30 mg 24 Tablet",
        "Bikaramin Cold Şurup 100-15-1 mg/5 ml 100 ml",
        "Coldaway C 200/30/300 mg 24 Tablet",
        "Coldaway C 200/30/300 mg 30 Tablet",
        "Coldaway Cold & FLU 24 Tablet",
        "Coldaway Plus Şurup 100 mg/15 mg/1 mg/5 ml 100 ml",
        "Coldfen Zero 200 mg/2 mg 24 Tablet",
        "Coldfen Şurup 100 ml",
        "Dolorin Cold 30 Tablet",
        "Dolorin Cold 200 mg/30 mg 30 Tablet",
        "Droflu Cold Plus Şurup 100 ml",
        "Famtrec 800 mg/26.6 mg 30 Tablet",
        "Forflu 200 mg/30 mg 30 Tablet",
        "Forflu Pediyatrik Şurup 100 mg+15 mg+1 mg/5 ml 100 ml",
        "Gribex Cold & Flu 200 mg/30 mg/4 mg 24 Tablet",
        "Gribex Cold & Flu 200 mg/30 mg/4 mg 30 Tablet",
        "Gribo Cold 30 Tablet",
        "Ibucold C 200 mg/30 mg/300 mg 30 Tablet",
        "Orofen Cold & Flu 200 mg/30 mg Tablet",
        "Pedifen Cold Flu Şurup 100 ml",
        "İbucold 200 mg/30 mg 30 Tablet",
        "İbucold Şurup 100 mg+15 mg+1 mg/5 ml",
        "İburamin Cold 24 Tablet",
        "İburamin Cold Şurup 100 ml",
        "İburamin Zero 24 Tablet"
        
        

    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Nazal Konjesyon (Burun Tıkanıklığı)</h5>
            <h6 class="dose-type-title">Hemen Salınım (IR)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 60 mg (PO)</li>
                <li><strong>Sıklık:</strong> Her 4-6 saatte bir (q4-6hr) PRN.</li>
            </ul>
            <h6 class="dose-type-title">Uzatılmış Salınım (ER)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 120 mg (PO) q12hr VEYA 240 mg (PO) q24hr.</li>
            </ul>

            <h5 class="dose-condition-title">Priapizm (Endikasyon Dışı)</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 60-120 mg (PO) tek doz.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Nazal Konjesyon (Burun Tıkanıklığı)</h5>
            <h6 class="dose-type-title">Oral (IR)</h6>
            <ul class="dose-details-list">
                <li><strong>2-6 Yaş:</strong> 5-30 mg (PO) q4-6hr PRN.</li>
                <li><strong>6-12 Yaş:</strong> 30 mg (PO) q4-6hr VEYA 4 mg/kg/gün (q6hr bölünmüş). (Max 120 mg/gün).</li>
            </ul>
            <h5 class="dose-condition-title">>12 Yaş</h5>
            <ul class="dose-details-list simple-list">
                <li>Yetişkin dozuyla aynıdır.</li>
            </ul>

            <h5 class="dose-condition-title">Kritik Not</h5>
            <ul class="dose-details-list simple-list">
                <li>**<2 Yaş:** Güvenlik ve etkinlik belirlenmemiştir.</li>
                <li>**<6 Yaş için potansiyel toksik doz: 11 mg/kg.**</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
                <li>Kardiyovasküler (hipertansiyon, taşikardi) ve MSS yan etkileri açısından yaşlı hastalar dikkatle izlenmelidir.</li>
            </ul>
        `
    }
},
{
    id: "askorbikAsitContainer",
    isim: "Askorbik Asit (C Vitamini)",
    piyasaIsimleri: [
        "Acmel 500 mg/5 ml 5 Ampül",
        "Antoksi-C 500 mg/5 ml IV",
        "Cevimax 1000 mg 20 Efervesan Tablet",
        "Redoxon 500 mg 5 Ampül",
        "Türktıpsan Vitamin C 500 mg/5 ml IM/IV 5 Ampül",
        "Vitabiol C 5 ml 500 mg 5 Ampül",
        "Vagi-C 250 mg 6 Vajinal Tablet"
    ],
    dozajlar: {
        yetiskin: `
            <h5 class="dose-condition-title">Önerilen Günlük Alım Miktarı (RDA)</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>Erkekler:</strong> 90 mg/gün.</li>
                <li><strong>Kadınlar:</strong> 75 mg/gün.</li>
                <li><strong>Hamile:</strong> 85 mg/gün (Max 2000 mg/gün).</li>
                <li><strong>Emziren:</strong> 120 mg/gün (Max 2000 mg/gün).</li>
            </ul>

            <h5 class="dose-condition-title">Askorbik Asit Eksikliği (Skorbüt)</h5>
            <h6 class="dose-type-title">Oral Tedavi</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 250 mg (PO) günde dört kez (QID) x 1 hafta.</li>
            </ul>
            <h6 class="dose-type-title">IV Tedavi (Oral Yol Mümkün Değilse)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 200 mg (IV) günde bir kez (Max 7 gün).</li>
                <li><strong>Not:</strong> Skorbüt semptomları düzelene kadar tekrar tedavi edilebilir.</li>
            </ul>

            <h5 class="dose-condition-title">İdrar Asitlendirme</h5>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 4-12 g/gün (PO/IV) günde üç veya dört kez bölünmüş.</li>
            </ul>
            
            <h5 class="dose-condition-title">Dozlama Hususları</h5>
            <ul class="dose-details-list simple-list">
                <li>Böbrek yetmezliği olan hastalarda dikkatli kullanılmalıdır.</li>
            </ul>
        `,
        cocuk: `
            <h5 class="dose-condition-title">Önerilen Günlük Alım Miktarı (RDA)</h5>
            <ul class="dose-details-list simple-list">
                <li><strong>0-6 Ay:</strong> 40 mg/gün.</li>
                <li><strong>1-3 Yaş:</strong> 15 mg/gün.</li>
                <li><strong>8-13 Yaş:</strong> 45 mg/gün.</li>
            </ul>

            <h5 class="dose-condition-title">Askorbik Asit Eksikliği (Skorbüt)</h5>
            <h6 class="dose-type-title">Oral Tedavi (Bebek/Çocuk)</h6>
            <ul class="dose-details-list">
                <li><strong>Doz:</strong> 100 mg (PO) günde üç kez (TID) x 1 hafta, ardından düzelene kadar 100 mg qDay.</li>
            </ul>
            <h6 class="dose-type-title">IV Tedavi (Oral Yol Mümkün Değilse)</h6>
            <ul class="dose-details-list">
                <li><strong>5 Ay - <12 Ay:</strong> 50 mg (IV) qDay.</li>
                <li><strong>1 Yaş - <11 Yaş:</strong> 100 mg (IV) qDay.</li>
                <li><strong>≥11 Yaş:</strong> 200 mg (IV) qDay. (Max 7 gün).</li>
            </ul>
            
            <h5 class="dose-condition-title">İdrar Asitlendirme</h5>
            <ul class="dose-details-list simple-list">
                <li>500 mg/gün (PO/IV) TID/QID bölünmüş.</li>
            </ul>
        `,
        yasli: `
            <h5 class="dose-condition-title">Geriatrik Doz</h5>
            <ul class="dose-details-list simple-list">
                <li>Spesifik bir doz ayarlaması belirtilmemiştir. Standart yetişkin dozları kullanılır.</li>
                <li>Böbrek fonksiyonunda azalma olasılığı nedeniyle, yüksek dozlarda dikkatli olunmalı ve renal fonksiyon izlenmelidir (okzalat nefropatisi riski).</li>
            </ul>
        `
    }
},


];


// ===================================================================
// VERİ TABANI SONU
// ===================================================================


// ===================================================================
// YENİ YAPI BÖLÜM 2: DİNAMİK LOGIC
// Bu kod, üstteki veritabanını okur ve sayfayı oluşturur.
// ===================================================================

// Global değişkenler (değişmedi)
let currentSearchResults = [];
let selectedResultIndex = -1;
let autocompleteItems = [];
let selectedAutocompleteIndex = -1;

/**
 * Sayfa yüklendiğinde çalışan ana fonksiyon.
 * Tüm sistemi başlatır.
 */
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. İlaç kartlarını `ilacVeritabani` dizisinden oluştur ve DOM'a ekle
    buildDrugCards(); 
    
    // 2. Autocomplete listesini `ilacVeritabani` dizisinden doldur
    initializeAutocomplete(); 
    
    // 3. Dinamik olarak oluşturulan akordiyonlara event listener'ları ata
    setupAccordionListeners(); 
    
    // 4. Arama ile ilgili tüm event listener'ları kur
    setupSearchListeners(); 
    
    // 5. Klavye ile gezinme özelliklerini kur
    setupKeyboardNavigation();
    setupAutocompleteKeyboardNav();
    
    
    // YENİ EKLENEN LOGO SIFIRLAMA İŞLEVİ:
    const logoText = document.querySelector('header h1.logo-text');
    const logoImage = document.querySelector('.logo-image');

    // EtkenMED yazısını ve amblemi tıklanabilir yap ve resetPage fonksiyonunu ata
    if (logoText) {
        logoText.addEventListener('click', resetPage);
        logoText.style.cursor = 'pointer'; 
    }

    if (logoImage) {
        logoImage.addEventListener('click', resetPage);
        logoImage.style.cursor = 'pointer';
    }
});



/**
 * `ilacVeritabani` dizisindeki her ilaç için HTML kartlarını oluşturur
 * ve `#drugsContainer` içine yerleştirir.
 */
function buildDrugCards() {
    const container = document.getElementById('drugsContainer');
    if (!container) return;
    
    let allDrugsHTML = '';

    ilacVeritabani.forEach(ilac => {
        // 1. Piyasa İsimleri listesini oluştur
        const piyasaIsimleriHTML = ilac.piyasaIsimleri
            .map(isim => `<li>${isim}</li>`)
            .join('');
        
        // 2. Dozajlar için alt akordiyonları oluştur
        const dozajlarHTML = buildDozajAccordionHTML(ilac.dozajlar);

        // 3. Ana ilaç kartı şablonunu oluştur
        allDrugsHTML += `
            <div class="drug-container" id="${ilac.id}">
                <h2>${ilac.isim}</h2>
                
                <div class="accordion piyasa-isimleri">
                    <div class="accordion-header">
                        <h3><i class="fas fa-prescription"></i> Piyasa İsimleri</h3>
                        <span class="icon"><i class="fas fa-chevron-down"></i></span>
                    </div>
                    <div class="accordion-content">
                        <div class="accordion-inner">
                            <ul>
                                ${piyasaIsimleriHTML.length > 0 ? piyasaIsimleriHTML : '<li><i>(Piyasa ismi bilgisi bulunamadı)</i></li>'}
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion">
                    <div class="accordion-header">
                        <h3><i class="fas fa-capsules"></i> Dozajlar</h3>
                        <span class="icon"><i class="fas fa-chevron-down"></i></span>
                    </div>
                    <div class="accordion-content">
                        <div class="accordion-inner">
                            ${dozajlarHTML.length > 0 ? dozajlarHTML : '<p>Bu etken madde için dozaj bilgisi girilmemiştir.</p>'}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    // Oluşturulan tüm HTML'i ana konteynere tek seferde bas
    container.innerHTML = allDrugsHTML;
}

/**
 * Bir ilacın dozaj nesnesini (yetiskin, cocuk, yasli) alır
 * ve alt akordiyon HTML'ini döndürür.
 */
function buildDozajAccordionHTML(dozajlar) {
    let html = '';
    
    const dozMap = {
        yetiskin: "Yetişkin",
        cocuk: "Çocuk",
        yasli: "Yaşlı (Geriatrik)"
    };

    // Belirlenen sırada (yetişkin, çocuk, yaşlı) işle
    ['yetiskin', 'cocuk', 'yasli'].forEach(key => {
        // Sadece `ilacVeritabani` içinde o doz için veri varsa (null değilse)
        // alt akordiyonu oluştur.
        if (dozajlar[key]) { 
            html += `
                <div class="sub-accordion">
                    <div class="sub-accordion-header dose-${key}">
                        <h4>${dozMap[key]}</h4>
                        <span class="icon"><i class="fas fa-chevron-down"></i></span>
                    </div>
                    <div class="sub-accordion-content">
                        <div class="sub-accordion-inner">
                            ${dozajlar[key]} </div>
                    </div>
                </div>
            `;
        }
    });
    
    return html;
}

/**
 * Arama çubuğu, buton ve autocomplete listesi için
 * tüm event listener'ları kurar.
 */
function setupSearchListeners() {
    const searchInput = document.getElementById('searchInput');
    const autocompleteItemsDiv = document.getElementById('autocompleteItems');
    const searchButton = document.getElementById('searchButton');

    // Arama önerilerini göster
    searchInput.addEventListener('focus', () => {
        const value = searchInput.value.toLowerCase();
        
    });
    
    // Input değiştiğinde filtrele
    searchInput.addEventListener('input', () => {
        filterAutocompleteItems(searchInput.value.toLowerCase());
    });
    
    // Öneriye tıklandığında seç
    autocompleteItemsDiv.addEventListener('click', (e) => {
        if (e.target.tagName === 'DIV') {
            const searchTerm = e.target.textContent;
            searchInput.value = searchTerm;
            autocompleteItemsDiv.style.display = 'none';
            searchDrug(searchTerm); // Tam arama fonksiyonunu tetikle
        }
    });
    
    // Enter ile arama
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && searchInput.value.trim() !== "") {
            autocompleteItemsDiv.style.display = 'none';
            searchDrug(searchInput.value);
        }
    });
    
    // Butona tıklandığında arama
    searchButton.addEventListener('click', () => {
        if (searchInput.value.trim() !== "") {
            autocompleteItemsDiv.style.display = 'none';
            searchDrug(searchInput.value);
        }
    });
    
    // Sayfa dışına tıklandığında autocomplete'i gizle
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !autocompleteItemsDiv.contains(e.target)) {
            autocompleteItemsDiv.style.display = 'none';
        }
    });
function resetPage(e) {
    // Eğer logo bir bağlantıysa, sayfanın yeniden yüklenmesini (varsayılan davranışı) engeller.
    if (e) {
        e.preventDefault();
    }
    
    const drugContainer = document.querySelector('.drug-container');
    const searchInput = document.querySelector('.search-input');
    const autocompleteItemsDiv = document.querySelector('.autocomplete-items');

    // 1. İlaç konteynırını (sonucu) gizle
    if (drugContainer) {
        drugContainer.style.display = 'none';
    }

    // 2. Arama kutusunu temizle
    if (searchInput) {
        searchInput.value = '';
    }

    // 3. Otomatik tamamlama sonuçlarını gizle
    if (autocompleteItemsDiv) {
        autocompleteItemsDiv.style.display = 'none';
    }

    // 4. Sayfayı en üste kaydırarak sıfırla
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}
}

/**
 * Dinamik olarak oluşturulmuş tüm ana ve alt akordiyonlara
 * tıklama (aç/kapa) özelliklerini atar.
 */
function setupAccordionListeners() {
    // Ana akordiyon fonksiyonelliği
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = header.classList.toggle('active');
            content.classList.toggle('active');

            // YENİLİK: Akordiyon açıldığında sayfayı kaydır
            if (isActive) {
                // Önce akordiyonu ekranın üstüne getir
                header.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start', 
                    inline: 'nearest' 
                });
                
                // Ardından 100 piksel daha aşağı kaydır (daha fazla boşluk için)
                // Kaydırma işlemi için zamanlamanın bitmesini beklemeye gerek kalmadan anında ek kaydırmayı uygulayalım.
                window.scrollBy(0, -1000); // Eğer üst kısım (header) kalmasını istiyorsanız, eksi değer ile yukarı kaydırmayı iptal edebilirsiniz. 
                
                // Eğer akordiyon başlığının üstünde daha fazla boşluk bırakılmasını istiyorsanız:
                // header.scrollIntoView({ behavior: 'smooth', block: 'center' });
                // window.scrollBy(0, -100); // Bu 50 piksellik boşluk bırakır. 
                
                // YUKARIDAKİ ÖNERİ ÇALIŞMAYABİLİR. En kesin yöntem budur:
                const offset = header.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: offset - 200, // 100 piksel daha yukarıda (başlığın altında daha fazla boşluk)
                    behavior: 'smooth'
                });
            }
            
            // Ana akordiyon kapanınca içindeki alt menüleri sıfırla
            if (!isActive) { 
                const subHeaders = content.querySelectorAll('.sub-accordion-header');
                const subContents = content.querySelectorAll('.sub-accordion-content');
                
                subHeaders.forEach(subHeader => subHeader.classList.remove('active'));
                subContents.forEach(subContent => subContent.classList.remove('active'));
            }
        });
    });
    
    // Alt akordiyon fonksiyonelliği
    document.querySelectorAll('.sub-accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = header.classList.toggle('active'); // isActive'i tanımla
			const parentInner = header.closest('.accordion-inner');
            if (parentInner) {
			  parentInner.querySelectorAll('.sub-accordion-header').forEach(h => {
			     h.classList.remove('active');
				 h.nextElementSibling.classList.remove('active');
               });
			}
            // YENİLİK: Alt akordiyon açıldığında sayfayı kaydır
            if (isActive) {
			     header.classList.add('active');
				 content.classList.add('active');
                // Ana akordiyon için uygulanan aynı kaydırma mantığı (daha fazla boşluk için)
                const offset = header.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: offset - 100, // 100 piksel daha yukarıda kalmasını sağlayarak başlığın altında boşluk bırakır
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Autocomplete (otomatik tamamlama) kutusunu
 * `ilacVeritabani` dizisinden gelen verilerle doldurur.
 */
function initializeAutocomplete() {
    const autocompleteContainer = document.getElementById('autocompleteItems');
    autocompleteContainer.innerHTML = ''; // Önce temizle
    
    ilacVeritabani.forEach(ilac => {
        // 1. Etken madde ismini ekle
        const drugElement = document.createElement('div');
        drugElement.textContent = ilac.isim;
        drugElement.setAttribute('data-id', ilac.id);
        autocompleteContainer.appendChild(drugElement);
        
        // 2. Tüm piyasa isimlerini ekle
        ilac.piyasaIsimleri.forEach(isim => {
            const piyasaElement = document.createElement('div');
            piyasaElement.textContent = isim;
            piyasaElement.setAttribute('data-id', ilac.id);
            autocompleteContainer.appendChild(piyasaElement);
        });
    });
}

/**
 * Autocomplete listesini girilen değere göre filtreler.
 */
function filterAutocompleteItems(value) {
    const autocompleteItemsDiv = document.getElementById('autocompleteItems');
    const items = autocompleteItemsDiv.getElementsByTagName('div');
	if (!value.trim()) {
        autocompleteItemsDiv.style.display = 'none';
        selectedAutocompleteIndex = -1; 
        return;
    }
	
    let anyMatch = false;
    
    for (let i = 0; i < items.length; i++) {
        const itemText = items[i].textContent.toLowerCase();
        if (itemText.includes(value)) {
            items[i].style.display = '';
            anyMatch = true;
        } else {
            items[i].style.display = 'none';
        }
    }
    autocompleteItemsDiv.style.display = value && anyMatch ? 'block' : 'none';
}

/**
 * Arama fonksiyonu. Artık DOM yerine `ilacVeritabani`'ni arar,
 * ardından ilgili DOM elementini gösterir/vurgular.
 */
function searchDrug(name) {
    // 1. Tüm kartları gizle ve vurgulamayı kaldır
    const allDrugContainers = document.querySelectorAll('.drug-container');
    allDrugContainers.forEach(container => {
        container.style.display = 'none';
        container.classList.remove('highlighted');
    });
    
    const searchTerm = name.toLowerCase().trim();
    if (!searchTerm) {
        currentSearchResults = [];
        selectedResultIndex = -1;
        return;
    }
    
    let found = false;
    currentSearchResults = []; // Bu dizi, bulunan HTMLelement'leri tutar
    
    // 2. DOM yerine `ilacVeritabani`'ni ara
    ilacVeritabani.forEach(ilac => {
        const drugName = ilac.isim.toLowerCase();
        const piyasaIsimleri = ilac.piyasaIsimleri.map(li => li.toLowerCase());
        
        const exactMatch = drugName === searchTerm || piyasaIsimleri.some(isim => isim === searchTerm);
        const partialMatch = drugName.includes(searchTerm) || piyasaIsimleri.some(isim => isim.includes(searchTerm));
        
        // 3. Eşleşme varsa, ilgili DOM elementini bul ve göster
        if (exactMatch || partialMatch) {
            const container = document.getElementById(ilac.id); 
            if (container) {
                container.style.display = 'block';
                currentSearchResults.push(container); // Vurgulama/navigasyon için listeye ekle
                found = true;
            }
        }
    });
    
    // 4. Sıralama (Bu kısım değişmedi, çünkü `currentSearchResults` hala DOM elementleri tutuyor)
    currentSearchResults.sort((a, b) => {
        const aName = a.querySelector('h2').textContent.toLowerCase();
        const bName = b.querySelector('h2').textContent.toLowerCase();
        const aPiyasa = Array.from(a.querySelectorAll('.piyasa-isimleri li'))
            .map(li => li.textContent.toLowerCase());
        const bPiyasa = Array.from(b.querySelectorAll('.piyasa-isimleri li'))
            .map(li => li.textContent.toLowerCase());
        
        const aExact = aName === searchTerm || aPiyasa.includes(searchTerm);
        const bExact = bName === searchTerm || bPiyasa.includes(searchTerm);
        
        if (aExact && !bExact) return -1;
        if (!aExact && bExact) return 1;
        return 0;
    });
    
    // 5. Sonucu vurgula veya hata ver
    if (currentSearchResults.length > 0) {
        selectedResultIndex = 0;
        highlightSelectedResult();
    }
    
    if (!found) {
        alert('Aradığınız ilaç bulunamadı. Lütfen farklı bir anahtar kelime deneyin.');
        currentSearchResults = [];
        selectedResultIndex = -1;
    }
}

/**
 * Bulunan sonucu mavi çerçeve ile vurgular ve en üste kaydırır.
 * (Değişmedi)
 */
function highlightSelectedResult() {
    document.querySelectorAll('.drug-container').forEach(container => {
        container.classList.remove('highlighted');
        container.style.border = 'none';
        container.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    });
    
    if (currentSearchResults[selectedResultIndex]) {
        const selected = currentSearchResults[selectedResultIndex];
        selected.classList.add('highlighted');
        selected.style.border = '2px solid #3498db';
        selected.style.boxShadow = '0 4px 15px rgba(52, 152, 219, 0.3)';
        
        selected.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
        });
    }
}

/**
 * Arama sonuçları arasında (mavi vurgulu) klavye (yukarı/aşağı) ile gezinmeyi sağlar.
 * (Değişmedi)
 */
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        if (currentSearchResults.length === 0) return;
        
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                selectedResultIndex = Math.min(selectedResultIndex + 1, currentSearchResults.length - 1);
                highlightSelectedResult();
                break;
                
            case 'ArrowUp':
                e.preventDefault();
                selectedResultIndex = Math.max(selectedResultIndex - 1, 0);
                highlightSelectedResult();
                break;
                
            case 'Escape':
                document.querySelectorAll('.drug-container').forEach(container => {
                    container.classList.remove('highlighted');
                    container.style.border = 'none';
                    container.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                });
                selectedResultIndex = -1;
                break;
        }
    });
}

/**
 * Autocomplete listesinde (açılır menü) klavye (yukarı/aşağı) ile gezinmeyi sağlar.
 * (Değişmedi, en son hata düzeltmesi dahil)
 */
function setupAutocompleteKeyboardNav() {
    const searchInput = document.getElementById('searchInput');
    const autocompleteItemsDiv = document.getElementById('autocompleteItems');
    
    searchInput.addEventListener('keydown', (e) => {
        const items = autocompleteItemsDiv.getElementsByTagName('div');
        autocompleteItems = Array.from(items).filter(item => item.style.display !== 'none');
        
        if (autocompleteItems.length === 0) return;
        
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                selectedAutocompleteIndex = Math.min(selectedAutocompleteIndex + 1, autocompleteItems.length - 1);
                highlightAutocompleteItem();
                break;
                
            case 'ArrowUp':
                e.preventDefault();
                selectedAutocompleteIndex = Math.max(selectedAutocompleteIndex - 1, 0);
                highlightAutocompleteItem();
                break;
                
            case 'Enter':
                if (selectedAutocompleteIndex >= 0) {
                    e.preventDefault();
                    autocompleteItems[selectedAutocompleteIndex].click();
                }
                break;
                
            case 'Escape':
                autocompleteItemsDiv.style.display = 'none';
                selectedAutocompleteIndex = -1;
                break;
        }
    });
    
    function highlightAutocompleteItem() {
        autocompleteItems.forEach(item => item.style.backgroundColor = '');
        if (autocompleteItems[selectedAutocompleteIndex]) {
            autocompleteItems[selectedAutocompleteIndex].style.backgroundColor = '#e9ecef';
            autocompleteItems[selectedAutocompleteIndex].scrollIntoView({ block: 'nearest' });
        }
    }
    
    searchInput.addEventListener('focus', () => {
        selectedAutocompleteIndex = -1;
    });
	
	function resetPage() {
    const drugContainer = document.querySelector('.drug-container');
    const searchInput = document.querySelector('.search-input');
    const autocompleteItemsDiv = document.querySelector('.autocomplete-items');

    // 1. İlaç konteynırını (sonucu) gizle
    if (drugContainer) {
        drugContainer.style.display = 'none';
    }

    // 2. Arama kutusunu temizle
    if (searchInput) {
        searchInput.value = '';
    }

    // 3. Otomatik tamamlama sonuçlarını gizle
    if (autocompleteItemsDiv) {
        autocompleteItemsDiv.style.display = 'none';
    }

    // 4. Sayfayı en üste kaydır
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Yumuşak kaydırma
    });
}
// Logoya veya başlığa tıklanınca sayfayı yenile
document.querySelector('.logo-image').addEventListener('click', () => {
    location.reload();
});

document.querySelector('.logo-text').addEventListener('click', () => {
    location.reload();
});



}

// =====================
// ALFABETİK POPUP LOGIC
// =====================

// Türk alfabesi (I ve İ dahil)
const turkceAlfabe = ["A","B","C","Ç","D","E","F","G","Ğ","H","I","İ","J","K","L","M","N","O","Ö","P","R","S","Ş","T","U","Ü","V","Y","Z"];

document.getElementById('alphabetButton').addEventListener('click', () => {
    showAlphabetPopup();
});

function showAlphabetPopup() {
    // Arka plan
    const overlay = document.createElement('div');
    overlay.classList.add('alphabet-popup-overlay');

    // Popup kutusu
    const popup = document.createElement('div');
    popup.classList.add('alphabet-popup');
    popup.innerHTML = `
        <h3>Etken Maddeleri Alfabetik Sırayla Görüntüle</h3>
        <div class="alphabet-list">
            ${turkceAlfabe.map(harf => `<button>${harf}</button>`).join('')}
        </div>
        <ul class="alphabet-drug-list"></ul>
    `;

    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    const drugList = popup.querySelector('.alphabet-drug-list');

    // Harfe tıklanınca ilaçları filtrele
    popup.querySelectorAll('.alphabet-list button').forEach(btn => {
        btn.addEventListener('click', () => {
            const secilenHarf = btn.textContent.toLowerCase();
            const bulunanIlaclar = ilacVeritabani
                .filter(ilac => ilac.isim.toLowerCase().startsWith(secilenHarf))
                .map(ilac => `<li data-id="${ilac.id}">${ilac.isim}</li>`)
                .join('');

            drugList.innerHTML = bulunanIlaclar || `<li><i>Bu harfle başlayan ilaç yok.</i></li>`;
        });
    });

    // İlaca tıklanınca popup kapanır ve o ilacı gösterir
    drugList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI' && e.target.dataset.id) {
        const targetId = e.target.dataset.id;
        const targetDrug = document.getElementById(targetId);

        if (targetDrug) {
            // Popup’ı kapat
            document.body.removeChild(overlay);

            // Tüm ilaçları gizle
            document.querySelectorAll('.drug-container').forEach(drug => {
                drug.style.display = 'none';
                drug.classList.remove('highlighted');
            });

            // Arama kutusunu temizle
            const searchInput = document.getElementById('searchInput');
            if (searchInput) searchInput.value = '';

            // Seçilen ilacı göster ve vurgula
            targetDrug.style.display = 'block';
            targetDrug.classList.add('highlighted');

            // Görünür konuma kaydır
            setTimeout(() => {
                targetDrug.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 200);
        }
    }
});


    // Arka plana tıklanırsa kapat
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });
}

/* ============================================= */
/* === İÇERİK ARAMA MODAL FONKSİYONLARI === */
/* ============================================= */

// Gerekli DOM elementlerini seç
const contentSearchInput = document.getElementById('contentSearchInput');
const contentSearchButton = document.getElementById('contentSearchButton');
const modal = document.getElementById('resultsModal');
const closeModalBtn = document.getElementById('closeModalButton');
const modalResultsList = document.getElementById('modalResultsList');
const modalTitle = document.getElementById('modalTitle');

// Modal'ı açan ve kapatan fonksiyonlar
function openModal() {
    modal.style.display = 'flex';
}
function closeModal() {
    modal.style.display = 'none';
}

// Kapatma butonuna tıklandığında veya overlay'e tıklandığında modal'ı kapat
closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Yeni arama kutusunda Enter'a basıldığında veya butona tıklandığında
contentSearchButton.addEventListener('click', performContentSearch);
contentSearchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        performContentSearch();
    }
});

// HTML etiketlerini temizleyen yardımcı fonksiyon
function stripHtml(html) {
   let doc = new DOMParser().parseFromString(html, 'text/html');
   return doc.body.textContent || "";
}

// Metni vurgulayan yardımcı fonksiyon (Türkçe karakter uyumlu)
function highlight(text, term) {
    // Aranan terimdeki özel regex karakterlerini escape'le (güvenlik için)
    const escapedTerm = term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    
    // 'giu' bayrakları:
    // g = global (tüm eşleşmeler)
    // i = case-insensitive (büyük/küçük harf duyarsız)
    // u = unicode (Türkçe 'İ'/'i' gibi karakterleri doğru eşleştirmek için)
    const regex = new RegExp(`(${escapedTerm})`, 'giu'); 
    
    return text.replace(regex, '<strong>$1</strong>');
}

// Asıl arama fonksiyonu (Türkçe karakter uyumlu)
// Asıl arama fonksiyonu (Türkçe karakter uyumlu + Tıklama için ID eklendi)
function performContentSearch() {
    const searchTerm = contentSearchInput.value.trim();
    const searchTermLower = searchTerm.toLocaleLowerCase('tr-TR');
    
    modalResultsList.innerHTML = '';

    if (searchTerm.length < 2) {
        modalTitle.textContent = 'Lütfen en az 2 karakter girin.';
        openModal();
        return;
    }

    let resultsFound = [];

    ilacVeritabani.forEach(drug => {
        const drugName = drug.isim;

        // 1. Piyasa İsimlerinde Ara
        drug.piyasaIsimleri.forEach(piyasaIsmi => {
            if (piyasaIsmi.toLocaleLowerCase('tr-TR').includes(searchTermLower)) {
                resultsFound.push({
                    drug: drugName,
                    id: drug.id, // <-- GÜNCELLEME 1 (ID eklendi)
                    section: 'Piyasa İsmi',
                    text: highlight(piyasaIsmi, searchTerm) 
                });
            }
        });

        // 2. Dozajlarda Ara
        const sections = ['yetiskin', 'cocuk', 'yasli'];
        const sectionNames = {
            yetiskin: 'Yetişkin Doz',
            cocuk: 'Pediatrik Doz',
            yasli: 'Geriatrik Doz'
        };

        sections.forEach(section => {
            const htmlContent = drug.dozajlar[section];
            const textContent = stripHtml(htmlContent); 
            const textContentLower = textContent.toLocaleLowerCase('tr-TR'); 

            if (textContentLower.includes(searchTermLower)) {
                const index = textContentLower.indexOf(searchTermLower); 
                const start = Math.max(0, index - 200);
                const end = Math.min(textContent.length, index + searchTerm.length + 40);
                let snippet = textContent.substring(start, end);

                if (start > 0) snippet = '...' + snippet;
                if (end < textContent.length) snippet = snippet + '...';

                resultsFound.push({
                    drug: drugName,
                    id: drug.id, // <-- GÜNCELLEME 2 (ID eklendi)
                    section: sectionNames[section],
                    text: highlight(snippet, searchTerm) 
                });
            }
        });
    });

    displayModalResults(resultsFound, searchTerm);
}

// Sonuçları modal içinde göster (Tıklama özelliği eklendi)
function displayModalResults(results, term) {
    if (results.length === 0) {
        modalTitle.textContent = `'${term}' için sonuç bulunamadı.`;
    } else {
        modalTitle.textContent = `'${term}' için ${results.length} sonuç bulundu:`;
    }

    results.forEach(result => {
        const li = document.createElement('li');
        li.className = 'result-item';
        li.style.cursor = 'pointer'; // <-- GÜNCELLEME 3 (Tıklanabilir olduğunu gösterir)
        
        li.innerHTML = `
            <div class="result-drug-name">${result.drug}</div>
            <div class="result-section">(${result.section})</div>
            <div class="result-snippet">${result.text}</div>
        `;
        
        // <-- GÜNCELLEME 4: Tıklama olayını ekle -->
        li.addEventListener('click', () => {
            navigateToDrug(result.id);
        });
        
        modalResultsList.appendChild(li);
    });

    openModal();
}

/* === YENİ EKLENEN İLACA GİTME FONKSİYONU === */
function navigateToDrug(drugId) {
    // 1. Modal'ı (popup) kapat
    closeModal();
    
    // 2. Ana sayfadaki tüm ilaç konteynerlerini bul
    const allDrugContainers = document.querySelectorAll('.drug-container');
    
    // 3. Hepsini gizle ve mevcut vurgulamaları kaldır
    allDrugContainers.forEach(container => {
        container.style.display = 'none';
        container.classList.remove('highlighted');
    });
    
    // 4. Sadece tıklanan ilacın konteynerini ID ile bul
    const targetDrug = document.getElementById(drugId);
    
    if (targetDrug) {
        // 5. Onu görünür yap
        targetDrug.style.display = 'block';
        
        // 6. Onu vurgula (style.css'teki .highlighted stilini uygular)
        targetDrug.classList.add('highlighted');
        
        // 7. Sayfayı ona doğru kaydır
        targetDrug.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
    
    // 8. Ana (büyük) arama kutusunu temizle ve otomatik tamamlamayı kapat
    document.getElementById('searchInput').value = '';
    document.getElementById('autocompleteItems').style.display = 'none';
}