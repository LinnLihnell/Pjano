<script>
import { provide } from "vue";

export default {
    created() {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.buffers = {};

        this.keys.forEach(key => {
            this.loadSound(key.pianoKey, key.sound);
        });

        const playSound = (key) => {
            if (this.audioContext.state === 'suspended') {
                this.audioContext.resume();
            }

            const buffer = this.buffers[key];
            if (buffer) {
                const source = this.audioContext.createBufferSource();
                source.buffer = buffer;
                source.connect(this.audioContext.destination);
                source.start(0);
            }
        };
        provide("playSound", playSound);
    },
    data() {
        return {
            keys: [
                { pianoKey: 'C', sound: '/assets/sounds/C3.wav' },
                { pianoKey: 'C#', sound: '/assets/sounds/Csharp3.wav' },
                { pianoKey: 'D', sound: '/assets/sounds/D3.wav' },
                { pianoKey: 'D#', sound: '/assets/sounds/Dsharp3.wav' },
                { pianoKey: 'E', sound: '/assets/sounds/E3.wav' },
                { pianoKey: 'F', sound: '/assets/sounds/F3.wav' },
                { pianoKey: 'F#', sound: '/assets/sounds/Fsharp3.wav' },
                { pianoKey: 'G', sound: '/assets/sounds/G3.wav' },
                { pianoKey: 'G#', sound: '/assets/sounds/Gsharp3.wav' },
                { pianoKey: 'A', sound: '/assets/sounds/A3.wav' },
                { pianoKey: 'A#', sound: '/assets/sounds/Asharp3.wav' },
                { pianoKey: 'B', sound: '/assets/sounds/B3.wav' }
            ]
        };
    },
    methods: {
        loadSound(key, path) {
            fetch(path)
                .then(response => response.arrayBuffer())
                .then(arrayBuffer => this.audioContext.decodeAudioData(arrayBuffer))
                .then(audioBuffer => {
                    this.buffers[key] = audioBuffer;
                })
                .catch(error => console.error(`Error loading sound ${path}:`, error));
        }
    }
};
</script>

<template>
    <slot></slot>
</template>
