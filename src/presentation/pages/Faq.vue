<script setup lang="ts">
import Container from "@/presentation/components/Container.vue";
import Navbar from "@/presentation/components/Navbar.vue";
</script>

<template>
  <Navbar />
  <Container class="mt-12">
    <div class="flex flex-col items-center">
      <div class="flex flex-col items-center">
        <h1 class="text-4xl text-center">Frequently Asked Questions</h1>
        <div class="mb-6 h-1 w-full rounded my-2 bg-emerald-500" />
      </div>
      <div>
        <div class="my-8">
          <h3 class="text-md text-emerald-400 mb-1">
            What are the conditions for being a staff?
          </h3>
          <div class="flex justify-center h-1 w-7 rounded mb-6 bg-emerald-500" />
          <ul class="list-decimal mx-4">
            <li>
              You should be able to maintain a good relationship with other members. Do not start or participate in any types of argue.
            </li>
            <li>
              Do not humiliate anyone.
            </li>
            <li>
              This is a volunteer position, so you should be able to work without any payment and shouldn't expect any return.
            </li>
            <li>
              Knowing how to code is not required to be a staff, but it is a plus. There are lots of positions that is not related to coding, coding is an additional concept.
            </li>
          </ul>
        </div>
        <div class="my-8">
          <h3 class="text-md text-emerald-400 mb-1">
            What are the conditions for being able to see codes?
          </h3>
          <div class="h-1 w-7 rounded my-2 bg-emerald-500 mb-6" />
          <div>
            <p>You have to be joined to our Discord server in order to see codes.</p>
            <br />
            <p>
              <b>Normal Codes</b>
              - No conditions other than joining server, everyone can see them.
            </p>
            <p>
              <b class="text-red-400">Community Codes</b>
              - No conditions other than joining server, everyone can see them.
            </p>
            <p>
              <b class="text-yellow-400">Gold Codes</b>
              - You should get Gold Codes role in our server by inviting 10 people.
            </p>
            <p>
              <b class="text-cyan-400">Diamond Codes</b>
              - You should get Diamond Codes role in our server by inviting 20 people.
            </p>
            <p>
              <b class="text-green-500">Emerald Codes</b>
              - You should get Emerald Codes role in our server by inviting 30 people.
            </p>
          </div>
        </div>
        <div class="my-8">
          <h3 class="text-md text-emerald-400 mb-1">
            What are we doing with data collected from this website?
          </h3>
          <div class="h-1 w-7 rounded my-2 bg-emerald-500 mb-6" />
          <div>
            <p>
              We are using Discord OAuth2 to authenticate our users. 
              We are only being able to access data that is provided by 
              Discord whic is your username, avatar and id. We can not access your 
              Discord profile or anything with those data.
            </p>
            <p>
              We can not acces your personal data. We are just storing your 
              Discord id in order to provide extra metadata 
              to codes that you shared. (Who published, who coded etc.)
            </p>
            <p>
              If you have any problem with this, feel free to contact with us.
            </p>
          </div>
        </div>
        <div class="my-8">
          <h3 class="text-md text-emerald-400 mb-1">
            My code is shared without my permission, what should I do?
          </h3>
          <div class="h-1 w-7 rounded my-2 bg-emerald-500 mb-6" />
          <div>
            <p>
              If you think that your code is shared without your permission and you 
              can prove that this code is belongs to you, 
              you can contact with us. We will remove the code as soon as possible.
            </p>
            <br />
            <p class="text-red-500 underline">
              If the same situation repeated, required acts will be 
              done on user who shared your code without your permission.
            </p>
          </div>
        </div>
        <div class="my-8">
          <h3 class="text-md text-emerald-400 mb-1">
            I am complaining about a staff, to whom can I complain?
          </h3>
          <div class="h-1 w-7 rounded my-2 bg-emerald-500 mb-6" />
          <div>
            <p>
              If you have witnessed that a staff is behaving inappropriately 
              and you want to report it, you can contact us and submit your complaint.
            </p>
            <p>
              In order to create a fair and healthy 
              environment, we are trying to act same for everyone including staffs and members. 
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
