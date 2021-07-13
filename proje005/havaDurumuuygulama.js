const url = "https://api.openweathermap.org/data/2.5/";
const key = "a1c59a7c6d5762a8bbe07a5563ac22c5";

//şehre göre bilgi döktüreceğim için inputtan gelen şehir bilgisini yakalamam gerek

$(!document).ready(function () {

    $('#sehir').keypress(function (e) {
        var inputval=$('#sehir').val();
        if (e.keyCode===13) {
            let sorgu=`${url}weather?q=${inputval}&appid=${key}&units=metric&lang=tr`;
            console.log(sorgu);
            
            fetch(sorgu)
            .then(donenDeger=>{
                let a=donenDeger.json()//çekilen bilgiyi obje türüne döndürdüm.
                return a;
            })
            .then(sonuc=>{
                //console.log(sonuc);//json methodu dogru çalışıyor mu onu kontrol ettik.

                //şehir bilgisini çektik.
                let city=document.querySelector('.city');
                city.innerText=`${sonuc.name},${sonuc.sys.country}`;

                //Sıcaklık bilgisini çektik.
                let sıcaklık=document.querySelector('.sicaklik');
                sıcaklık.innerHTML=`${Math.round(sonuc.main.temp)}°C`;

                //gösterge bilgisini çektik.
                let gösterge=document.querySelector('.gosterge');
                gösterge.innerHTML=`${sonuc.weather[0].description}`;

                //min - max sıcaklık değerlerini çektik.
                let min_max=document.querySelector('.min-max');
                min_max.innerHTML=`${Math.round(sonuc.main.temp_min)}°C / ${Math.round(sonuc.main.temp_max)}°C`;

                //resim alanını çektik.
                let resim=document.querySelector('.resim');
                //resim.innerHTML=`${sonuc.weather[0].icon}`;
                if (resim.innerHTML==='04n') {
                    resim.className='denemeresim';
                }

            })
        }

        
        
        
        
        
    })
    
})



 
