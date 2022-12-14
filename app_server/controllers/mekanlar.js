var express = require('express');
var router = express.Router();

const anaSayfa=function(req,res){
  res.render('anasayfa',{
    'title':'Anasayfa',
    "sayfaBaslik":{
        "siteAd":"MekanBul",
        "slogan":"Civardaki Meknaları Keşfet!"
    },
    "mekanlar":[
      {
        "ad":"Starbucks",
        "adres":"Centrum Garden AVM",
        "puan":"4",
        "imkanlar":["Dünya Kahveleri","Kekler","Pastalar"],
        "mesafe":"10km"
      },
      {
        "ad":"Gloria Jean's",
        "adres":"Iyaş AVM",
        "puan":"3",
        "imkanlar":["Dünya Kahveleri","Kekler","Pastalar"],
        "mesafe":"7km"
      },
      {
        "ad":"MacBear",
        "adres":"Sdü Doğu Kampüsü",
        "puan":"3",
        "imkanlar":["Dünya Kahveleri","Kekler","Pastalar"],
        "mesafe":"5km"
      }
    ]
  } 
  );
}

const mekanBilgisi=function(req,res){
  res.render('mekanbilgisi',
  {
    'title':'Mekan Bilgisi',
    "mekanBaslik":"Starbucks",
    "mekanDetay":{
      "ad":"starbucks",
      "adres":"Centrum Garden AVM",
      "puan":"4",
      "imkanlar":["Dünya Kahveleri","Kekler","Pastalar"],
      "koordinatlar":{
        "enlem":"37.7",
        "boylam":"30.5"
      },
      "saatler":[
        {
        "gunler":"Pazartesi-Cuma",
        "acilis":"9:00",
        "kapanis":"23:00",
        "kapali":false
      },
      {
        "gunler":"Cumartesi-Pazar",
        "acilis":"10:00",
        "kapanis":"22:00",
        "kapali":false
      }
    ],
    "yorumlar":[{
      "yorumYapan":"Beyza Isik",
      "puan":"4",
      "tarih":"20 Ekim 2022",
      "yorumMetni":"Kahveler iyi."
    }]
    }
  } );
}

const yorumEkle=function(req,res){
  res.render('yorumekle',{'title':'Yorum Ekle'} );
}

module.exports={
  anaSayfa,
  mekanBilgisi,
  yorumEkle
};