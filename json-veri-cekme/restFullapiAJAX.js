
//ilgili btona ulaştım
let btn = document.getElementById('bilgicek');
//Butona event(olay) vereceğim
btn.addEventListener('click', olay)
//click event teki olay adlı fonksiyonu tanımlıyorum
function olay() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {//Onload:sorgu sonlandığında
        if (xhr.readyState === 4 && xhr.status === 200) {
            let cevap = JSON.parse(xhr.responseText);
            console.log(cevap)
            //şimdi bu cevap değişkenini html dosyamdaki aktarmak istediğim noktaya aktaracağım.
            //aktaracağımız etiketin innerHTML'sine gönderilecek bilgileri html değişkeni içinde tanımlıyorum
            //Eğer istersek Tabloyu html sayfamızda oluştururuz 
            //bilgileri göndereceğimiiz yer (tbody) olarak ayarlarız. ve burada html değişkeni içine 
            //sadece <tr><td>${cevap.name}</td></tr> yazmamız da yerterli olacaktır.
            let html="";//direk tanımlayıp braksaydık.tablonun en üstüne undefined dönüyor.
            // bu kötü görüntüyü gidermek için tanımladım ama içini boş braktım
            cevap.person.forEach(person => {
                 html += `
                     <tr>
                         <td>${person.name}</td>
                         <td>${person.phone}</td>
                    </tr>`;
            });
            //json bilgilerini göndermek istediğim div'i seçiyorum
            let div = document.querySelector('.body');
            div.innerHTML = html;
        }
    }
    xhr.open('GET', 'restFullapiAJAX.json', false);

    xhr.send()

}

