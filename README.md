##FORMLARLA ÇALIŞMAK - BOLUM SONU EGZERSİZİ -2


 * 1: Formu Seç
 * 2: Input Bilgisini UL icerisine Ekle
 * 3: Form İçindeki Bilgiyi sıfırla
 * 4: Eğer forma  Bilgigirilmez ise kullanıcıyı uyar 
 
```
 //Dinamik olarak input oluşturmak için;
var myInput=document.createElement("input");

//Input'umuzu oluşturduktan sonra gerekli olan özellik eklemelerini yapıyoruz.
myInput.setAttribute("id", "inputumuz");
myInput.setAttribute("type","text");
myInput.setAttribute("value","Buraya Yazın");

//Böylece input ve özellikleri oluşturuldu. Şimdi HTML içine bu input'u yerleştiriyoruz.
//Body içine bir div oluşturalım. (Daha sonra input'u buraya atayacağız.)
var myDiv = document.createElement("div"); 

//appendChild fonksiyonu ile input'u bu div'e ekleyelim.
myDiv.appendChild(myInput);

/**Input Değerini Alma
Artık input'umuz oluştu ve değerini alabiliriz. */
var inputDeger = document.getElementById("inputumuz").value

//Değeri alert olarak ekranda göstermek için;
window.alert(inputDeger)  // Değerimiz burada yazacak

```