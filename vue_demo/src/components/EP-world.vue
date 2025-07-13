<template>
    <div>
        {{ tittle }}
        {{ count }}
    </div>
</template>
<script lang="ts" setup>
import { onBeforeMount } from 'vue';

const props = withDefaults(defineProps<{
    tittle: string;
    count?: number;
}>(), {
    count: 0
});
// const varName = ref<string>('empty')
// onMounted(() => {
//     console.log('title onMounted ---->', props.tittle)
//     varName.value = props.tittle
// })

// onBeforeMount(()=>{
//     console.log('title onBeforeMount ---->', props.tittle)
//     })
//     const clickhere = ( newTitle)


// const clickhere = (newTitle: string = '') => {
//     console.log( newTitle)
//     varName.value = newTitle
// }
</script>