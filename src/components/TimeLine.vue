<template>
    <div class="w-full md:w-1/2 p-4">
        <div class="relative m-8">
            <!-- Vertical Line -->
            <div class="border-r-2 border-gray-500 absolute h-full left-4 top-4"></div>
            
            <!-- Starting Point -->
            <div class="flex items-start mb-8">
                <div class="bg-gray-500 rounded-full h-8 w-8 mt-1"></div>
                <div class="flex-1 ml-4 font-medium text-gray-700">
                    <div class="text-xl font-semibold">{{ startingPoint.year }}</div>
                    <p class="mt-1">{{ startingPoint.description }}</p>
                </div>
            </div>
 
            <!-- Milestones -->
            <div v-for="milestone in milestones" :key="milestone.year" class="flex items-start mb-8">
                <div class="bg-gray-500 rounded-full h-8 w-8 mt-1"></div>
                <div class="flex-1 ml-4 font-medium text-gray-700">
                    <div class="text-xl font-semibold">{{ milestone.year }}</div>
                    <p class="mt-1">{{ milestone.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        milestones: {
            type: Array,
            required: true
        },
        startingPoint: {
            type: Object,
            required: true,
            default: () => ({ year: 'Start', description: 'Beginning of the timeline' })
        }
    }
}
</script>

<style scoped>
/* You can add additional styling here if needed */
</style>
