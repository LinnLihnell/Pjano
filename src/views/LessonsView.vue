<template>
    <LessonComponent class="lesson" v-for="lesson in lessons" :key="lesson.id" :lesson="lesson" />
</template>

<script>
import LessonComponent from '../components/LessonComponent.vue';
import lessonsData from '../../assets/Lessones.json';

export default {
    name: 'LessonsView',
    data() {
        return {
            lessons: lessonsData.lessons
        };
    },
    components: {
        LessonComponent
    }
};
</script>

<style scoped></style>
