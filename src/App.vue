<template>
  <header class="header">
    <h1 class="header__title">The Best Solution</h1>
    <div class="header__interactive">
      <button class="header__button">Join Now</button>
      <span class="header__arrow">&darr;</span>
    </div>
  </header>
  <router-view></router-view>
  <main>
    <section class="services">
      <h2 class="services__title">Services</h2>
      <div class="services__grid">
        <Service title="cloud" :description="plainText" icon="cloud" />
        <Service title="Cloud" :description="plainText" icon="gears" />
        <Service title="Cloud" :description="plainText" icon="user-tie" />
      </div>
    </section>

    <section class="faqs">
      <h2 class="faqs__title">FAQs</h2>
      <div class="faqs__interactive">
        <div class="faqs__interactive_questions">
          <Question
            v-for="(question, index) in questions"
            :question="question.question"
            :isActive="currentQuestion === index"
            :key="question.id"
            @click="onQuestionClick(question.id, index)"
          />
        </div>
        <div class="faqs__interactive_answers">
          <Answer :currentAnswer="currentAnswer" />
        </div>
      </div>
    </section>

    <section class="testa">
      <h2 class="testa__title">Testimonials</h2>
      <Carousel
        class="testa__carousel"
        :wrap-around="true"
        :breakpoints="{ 480: { itemsToShow: 1 }, 1280: { itemsToShow: 3 } }"
      >
        <Slide v-for="slide in testimonials" :key="slide">
          <Testimonial
            :author="slide.author"
            :avatar="slide.avatar"
            :company="slide.company"
            :position="slide.position"
            :quote="slide.quote"
            class="carousel__item"
          />
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </section>
  </main>

  <ContactForm />

  <footer class="footer">
    <hr class="footer__line" />
    <p class="footer__author">&copy;Utopia-Tech 2022</p>
  </footer>
</template>

<script setup>
  import Service from './components/Service.vue';
  import { ref, computed } from 'vue';
  import Question from './components/Question.vue';
  import Answer from './components/Answer.vue';
  import questions from './assets/questions.json';
  import answers from './assets/answers.json';
  import testimonials from './assets/testimonials.json';
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
  import Testimonial from './components/Testimonial.vue';
  import ContactForm from './components/ContactForm.vue';

  const questionsData = questions;
  const answersData = answers;
  const testimonialsData = testimonials;
  let currentAnswer = ref({});
  let currentQuestion = ref(false);
  const plainText = ref(
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facere aut inventore rerum eaque dolorem omnis itaque? Nihil minus ipsam distinctio natus atque animi, dolor consectetur soluta minima sint nesciunt!'
  );

  function onQuestionClick(id, index) {
    currentAnswer.value = computed(() => {
      return answersData.find((answer) => answer.id === id);
    });
    currentQuestion.value = index;
  }
</script>

<style scoped>
  .header {
    height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .header__title {
    font-size: 75px;
    margin: 0 0 45px 0;
    line-height: 1;
  }
  /* .header__interactive {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  } */
  .header__button {
    width: 9rem;
    padding: 10px 15px;
    background-color: transparent;
    border: 3px solid black;
    font-size: 20px;
  }
  .header__button:hover + .header__arrow {
    display: block;
  }
  .header__arrow {
    font-size: 2rem;
    display: none;
    position: absolute;
    top: 100%;
    left: 45%;
  }
  .services {
    margin: 70px 0 0;
  }
  .services__title {
    font-size: 45px;
  }

  .services__grid {
    margin: 1rem 0 0;
    padding: 1rem;
    display: grid;
    max-width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  .faqs {
    margin: 70px 0 0;
    color: #ff60f2;
  }

  .faqs__title {
    font-size: 45px;
  }

  .faqs__interactive {
    margin: 1rem 0 0;
    border: 3px solid #ff60f2;
    display: flex;
    justify-content: space-between;
  }

  .faqs__interactive_questions {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .faqs__interactive_answers {
    padding: 1rem 0 0;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    text-align: center;
  }

  .testa {
    margin: 70px 0 0;
    color: #ff60f2;
  }

  .testa__title {
    font-size: 45px;
  }
  .testa__carousel {
    margin: 1.25rem;
  }

  .footer {
    margin: 70px 0 0;
    color: #ff60f2;
  }
  .footer__author {
    margin: 1rem 0 0;
  }
  @media screen and (max-width: 600px) {
    .services__grid {
      grid-template-columns: 1fr;
    }
  }
</style>
