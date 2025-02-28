<template>
    <div v-if="lesson" class="card">
        <div class="lesson">
            <img :src="`/assets/${lesson.image}`" alt="Lesson Image" />
            <h2>{{ lesson.lesson_name }}</h2>
        </div>
        <div v-if="progress !== undefined" class="progress">
            <div class="progress-bar" role="progressbar" :style="{ width: progress + '%' }" aria-valuemin="0"
                aria-valuemax="100"></div>
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
        },
        progress: {
            type: Number,
            required: false
        }
    }
};
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px;
}

.lesson {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 80%;
    margin: 10px auto;
}

.card:hover {
    background-color: #f9f9f9b0;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.card:hover img {
    transform: scale(1.2);
}

.card img {
    max-width: 100%;
    height: auto;
    width: 55px;
    height: 55px;
    border-radius: 5px;
    transition: transform 0.3s ease;
}

.card h2 {
    margin-left: 10px;
    transition: margin-left 0.3s ease;
}

.card:hover h2 {
    margin-left: 20px;
}

.progress {
    width: 80%;
    margin: auto;
}
</style>
