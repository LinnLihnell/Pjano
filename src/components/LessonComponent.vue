<template>
    <div class="card">
        <div v-if="lesson" class="lesson">
            <img :src="`/assets/${lesson.image}`" alt="Lesson Image" />
            <h2>{{ lesson.lesson_name }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LessonComponent',
    props: {
        lesson: {
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped>
.lesson {
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
}

.lesson img {
    max-width: 100%;
    height: auto;
    width: 55px;
    height: 55px;
    border-radius: 5px;
}
</style>
