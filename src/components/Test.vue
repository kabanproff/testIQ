<script setup>

import ProgressBar from "./ProgressBar.vue";
import {ref} from "vue";

const completed = ref(0);

const questions = [
  {
    question: 'Ваш пол:',
    type: 'text',
    answers: [
      {
        text: 'мужчина',
        value: 'male'
      },
      {
        text: 'женщина',
        value: 'female'
      }
    ]
  },
  {
    question: 'Укажите ваш возраст: ',
    type: 'text',
    answers: [
      {
        text: 'До 18',
        value: '1'
      },
      {
        text: 'От 18 до 28',
        value: '2'
      },
      {
        text: 'От 29 до 35',
        value: '3'
      },
      {
        text: 'От 36',
        value: '4'
      }
    ]
  },
  {
    question: 'Выберите лишнее:',
    type: 'text',
    answers: [
      {
        text: 'Дом',
        value: '1'
      },
      {
        text: 'Шалаш',
        value: '2'
      },
      {
        text: 'Бунгало',
        value: '3'
      },
      {
        text: 'Скамейка',
        value: '4'
      },
      {
        text: 'Хижина',
        value: '5'
      }
    ]
  },

  {
    question: 'Продолжите числовой ряд:\n 18  20  24  32  ',
    type: 'text',
    answers: [
      {
        text: '62',
        value: '1'
      },
      {
        text: '48',
        value: '2'
      },
      {
        text: '74',
        value: '3'
      },
      {
        text: '57',
        value: '4'
      },
      {
        text: '60',
        value: '5'
      },
      {
        text: '77',
        value: '6'
      }
    ]
  },
  {
    question: 'Выберите цвет, который сейчас наиболее Вам приятен:',
    type: 'colors',
    answers: [
      {
        color: '#A8A8A8',
        value: '#A8A8A8'
      },
      {
        color: '#0000A9',
        value: '#0000A9'
      },
      {
        color: '#00A701',
        value: '#00A701'
      },
      {
        color: '#F60100',
        value: '#F60100'
      },
      {
        color: '#FDFF19',
        value: '#FDFF19'
      },
      {
        color: '#A95403',
        value: '#A95403'
      },
      {
        color: '#000000',
        value: '#000000'
      },
      {
        color: '#850068',
        value: '#850068'
      },
      {
        color: '#46B2AC',
        value: '#46B2AC'
      }
    ]
  },
  {
    question: 'Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:',
    type: 'colors',
    answers: [
      {
        color: '#A8A8A8',
        value: '#A8A8A8'
      },
      {
        color: '#46B2AC',
        value: '#46B2AC'
      },
      {
        color: '#A95403',
        value: '#A95403'
      },
      {
        color: '#00A701',
        value: '#00A701'
      },
      {
        color: '#000000',
        value: '#000000'
      },
      {
        color: '#F60100',
        value: '#F60100'
      },
      {
        color: '#850068',
        value: '#850068'
      },
      {
        color: '#FDFF19',
        value: '#FDFF19'
      },
      {
        color: '#0000A9',
        value: '#0000A9'
      },
    ]
  },
  {
    question: 'Какой из городов лишний?',
    type: 'text',
    answers: [
      {
        text: 'Вашингтон',
        value: '1'
      },
      {
        text: ' Лондон',
        value: '2'
      },
      {
        text: 'Париж',
        value: '3'
      },
      {
        text: 'Нью-Йорк',
        value: '4'
      },
      {
        text: 'Москва',
        value: '5'
      },
      {
        text: 'Оттава',
        value: '6'
      }
    ]
  },
  {
    question: 'Выберите правильную фигуру из четырёх пронумерованных.',
    image: 'assets/images/questions/question-1.jpg',
    type: 'text',
    answers: [
      {
        text: '1',
        value: '1'
      },
      {
        text: '2',
        value: '2'
      },
      {
        text: '3',
        value: '3'
      },
      {
        text: '4',
        value: '4'
      },
    ]
  },
  {
    question: 'Вам привычнее и важнее:',
    type: 'text',
    answers: [
      {
        text: 'Наслаждаться\n каждой минутой \n проведенного времени',
        value: '1'
      },
      {
        text: 'Быть устремленными \n мыслями в будущее',
        value: '2'
      },
      {
        text: 'Учитывать в ежедневной \n практике прошлый опыт',
        value: '3'
      },
    ]
  },
  {
    question: 'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ',
    type: 'text',
    image: 'assets/images/questions/question-2.jpg',
    answers: [
      {
        text: 'Оно остроконечное',
        value: '1'
      },
      {
        text: 'Оно устойчиво',
        value: '2'
      },
      {
        text: 'Оно-находится в состоянии равновесия',
        value: '3'
      },
    ]
  },
  {
    question: 'Вставьте подходящее число',
    type: 'text',
    image: 'assets/images/questions/question-3.jpg',
    answers: [
      {
        text: '34',
        value: '34'
      },
      {
        text: '36',
        value: '36'
      },
      {
        text: '53',
        value: '53'
      },
      {
        text: '44',
        value: '44'
      },
      {
        text: '66',
        value: '66'
      },
      {
        text: '42',
        value: '42'
      },
    ]
  },
];

const next = () => {
    completed.value = completed.value++;
  },
// setInterval(
//   () => (completed.value = Math.floor(Math.random() * 100) + 1),
//   2000
// );
</script>

<template>
  <ProgressBar :completed="completed"/>
</template>

<style scoped>

</style>


