<template>
    <LessonComponent v-for="lesson in lessons" :key="lesson.id" :lesson="lesson" :progress="user.progress[lesson.id]"
        @click="startLesson(lesson.id)" />
</template>

<script>
import LessonComponent from '../components/LessonComponent.vue';
import lessonsData from '../../assets/Lessones.json';
import User from '../models/User';

export default {
    name: 'LessonsView',
    data() {
        return {
            lessons: lessonsData.lessons,
            user: User.loadFromLocalStorage()
        };
    },
    components: {
        LessonComponent
    },
    methods: {
        startLesson(lessonId) {
            let user = User.loadFromLocalStorage();
            user.lastLesson = lessonId;
            user.saveToLocalStorage();
            this.$router.push({ name: 'Playing', params: { id: lessonId } });
        }
    }
};
</script>

<style scoped></style>
