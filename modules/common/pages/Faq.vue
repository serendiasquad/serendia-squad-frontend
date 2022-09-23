<script setup lang="ts">
import Navbar from "@/common/components/Navbar.vue";
import Container from "@/common/components/Container.vue";
</script>

<template>
  <Navbar />
  <Container class="mt-12">
    <div class="flex flex-col items-center">
      <div class="flex flex-col items-center">
        <h1 class="text-4xl text-center">Sıkça Sorulan Sorular</h1>
        <div class="mb-6 h-1 w-1/2 rounded my-2 bg-emerald-500" />
      </div>
      <div>
        <div class="my-8">
          <h3 class="text-md text-emerald-400 mb-1">
            Yetkili olmanın şartları nelerdir?
          </h3>
          <div class="flex justify-center h-1 w-7 rounded mb-6 bg-emerald-500" />
          <ul class="list-decimal mx-4">
            <li>
              İnsanlarla anlaşamayacak, sorunlara, tartışmalara sebep olacak bir
              kişiliğe sahip olmamalısınız.
            </li>
            <li>
              İnsanlarla kesinlikle aşağılayıcı şekilde konuşmalarda bulunmamalı
              seviyenizi korumalısınız.
            </li>
            <li>
              Yetkililer gönüllü olarak, kendi istekleriyle yetkili
              olduklarından ötürü bizlerden herhangi bir karşılık beklentisi
              içerisinde olmamaları gerekir.
            </li>
            <li>
              Sunucumuzda yetkili olmak isteyenlerin kodlama bilmesi zorunlu
              değildir. Her kitleden insan bulunabilir ve sorumluluk alabilir.
              Kodlama konsepti sunucumuzun sadece ek bir konseptidir.
            </li>
          </ul>
        </div>
        <div class="my-8">
          <h3 class="text-md text-emerald-400 mb-1">
            Kodlara ulaşmak için gereken şartlar nedir?
          </h3>
          <div class="h-1 w-7 rounded my-2 bg-emerald-500 mb-6" />
          <div>
            <p>Kodlara erişebilmeniz için sunucumuzda bulunmanız gereklidir.</p>
            <br />
            <p>
              <b>Normal Kodlar</b>
              - Şart yok, herkes ulaşabilir.
            </p>
            <p>
              <b class="text-red-400">Sizden Gelenler</b>
              - Şart yok, herkes ulaşabilir.
            </p>
            <p>
              <b class="text-yellow-400">Altın Kodlar</b>
              - 10 davet yaparak Gold Codes rolünü almış olmalısınız.
            </p>
            <p>
              <b class="text-cyan-400">Elmas Kodlar</b>
              - 20 davet yaparak Diamond Codes rolünü almış olmalısınız.
            </p>
            <p>
              <b class="text-green-500">Zümrüt Kodlar</b>
              - 30 davet yaparak Emerald Codes rolünü almış olmalısınız.
            </p>
          </div>
        </div>
        <div class="my-8">
          <h3 class="text-md text-emerald-400 mb-1">
            Siteden alınan veriler ile ne yapıyoruz?
          </h3>
          <div class="h-1 w-7 rounded my-2 bg-emerald-500 mb-6" />
          <div>
            <p>
              Sitemizde Discord'a ait olan OAuth2 girişini kullandığımız için
              erişebildiğimiz veriler sadece Discord tarafından bize verilmiş
              olan verilerdir. (Kullanıcı ID, Avatar, Kullanıcı Adı)
            </p>
            <p>
              Kesinlikle herhangi bir kişisel verinize erişimimiz
              bulunmamaktadır. Verileriniz, paylaşılan kodlarda ek detay
              (Paylaşan, Kodlayan) vermek amacıyla kullanılmaktadır.
            </p>
            <p>
              Bu konuda herhangi bir sorun yaşarsanız bizimle iletişime
              geçmekten çekinmeyin.
            </p>
          </div>
        </div>
        <div class="my-8">
          <h3 class="text-md text-emerald-400 mb-1">
            İzinsiz bir şekilde kodum paylaşılmış, ne yapabilirim?
          </h3>
          <div class="h-1 w-7 rounded my-2 bg-emerald-500 mb-6" />
          <div>
            <p>
              Eğer sitemizde paylaşılan kodun size ait olduğunu düşünüyorsanız
              bunu ilgili yetkililere kanıtladığınız takdirde paylaşılan kod
              silinecektir.
            </p>
            <br />
            <p class="text-red-500 underline">
              Eğer ki aynı durum tekrarlanırsa sizden izinsiz bir şekilde
              kodunuzu paylaşan kişiye uygun görülen ceza verilecektir.
            </p>
          </div>
        </div>
        <div class="my-8">
          <h3 class="text-md text-emerald-400 mb-1">
            Bir yetkiliden şikayetçiyim, kime şikayet edebilirim?
          </h3>
          <div class="h-1 w-7 rounded my-2 bg-emerald-500 mb-6" />
          <div>
            <p>
              Eğer bir yetkilinin uygun olmayan bir davranış sergilediğine şahit
              olduysanız ve bunu bildirmek istiyorsanız bize ulaşıp şikayetinizi
              iletebilirsiniz.
            </p>
            <p>
              Sunucumuzun düzenini korumak ve adil bir ortam oluşturmak adına;
              yetkililer ve üyeler arasında ayrım yapılmaz.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
