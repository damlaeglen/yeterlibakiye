var hesapA ={
ad: 'Sena Turan',
hesapNo : '12345678',
bakiye : 2000,
ekHesap : 1000
}

var hesapB ={
    ad: 'Kenan Topal',
    hesapNo : '12345675',
    bakiye : 3000,
    ekHesap : 2000
    }



    function paraCek(hesap,miktar){
        console.log(`Merhaba ${hesap.ad}`);

        if(hesap.bakiye >= miktar){
            hesap.bakiye = hesap.bakiye - miktar;
            console.log('paranızı alabilirisniz.');
        }else{
            var toplam = hesap.bakiye + hesap.ekHesap;

            if(toplam>=miktar){
                if(confirm('ek hasabınızı kullanmak ister miisniz?')){
                    console.log('paranızı alabilirsiniz');
                    var bakiye = hesap.bakiye;
                    var ekhesap = miktar - bakiye;
                    hesap.bakiye = 0;
                    hesap.ekhesap = hesap.ekhesap - ekhesap;

                } else{
                    console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} TL bulunmaktadır.`);
                }
            }else{
                console.log('üzgünüz bakiyeniz yetersiz:(')
            }
        }

    }
    paraCek(hesapB,3000);
    paraCek(hesapB,1000);