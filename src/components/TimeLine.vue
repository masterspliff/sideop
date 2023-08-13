<template>
    <div class="relative m-8">
        <!-- Horizontal Line -->
        <svg class="w-full mx-auto max-w-7xl" height="4" viewBox="0 0 100 4" preserveAspectRatio="none">
    <!-- Background Line -->
    <line x1="0" y1="2" x2="100" y2="2" stroke="#A0AEC0" stroke-width="4" class="neon-blue"/>
  <!-- Active Line -->
<line 
  x1="0" y1="2" x2="100" y2="2" 
  stroke="#16A34A" 
  stroke-width="4" 
  :stroke-dasharray="100" 
  :stroke-dashoffset="100 - timelineWidth" 
  style="transition: stroke-dashoffset 0.8s ease-in-out"
/>

</svg>



        <!-- Timeline Points -->
        <div class="flex justify-between relative z-10 -m-0.5 mx-auto max-w-7xl">
            <!-- Starting Point -->
            <div class="flex flex-col items-center cursor-pointer group" @click="selectYear(startingPoint.year)" ref="startingPoint">
                <div :class="pointClass(startingPoint.year)" class="absolute -top-4"></div>
                <div class="text-xl font-semibold mb-2 mt-4 group-hover:text-green-600">{{ startingPoint.year }}</div>
            </div>

        <!-- Milestones -->
        <div v-for="milestone in milestones" :key="milestone.year" class="flex flex-col items-center cursor-pointer group " @click="selectYear(milestone.year)" :ref="milestone.year">
                
                <!-- Point Class -->
                <div :class="pointClass(milestone.year)" class="absolute -top-4"></div>





                <!-- Year Text -->
                <div :class="[selectedYear === milestone.year ? 'text-green-800' : '', 'text-xl font-semibold mb-2 mt-4 group-hover:text-green-600']">{{ milestone.year }}</div>
    </div>
        </div>

        <!-- Content Box wrapped in a transition tag -->
        <transition :name="SwipeEffect">
            <div class="mt-8 bg-gradient-to-r from-gray-100 to-gray-200 p-4 sm:p-6 rounded-lg shadow-lg mx-auto max-w-7xl">
                <h2 class="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">{{ selectedYear }}</h2>
                <hr class="border-gray-300 my-2 border-t-2">
                <h3 class="text-lg sm:text-xl text-gray-600 mb-4">{{ selectedYear }}</h3>
                <div class="text-justify text-base sm:text-lg leading-relaxed text-gray-700">
                    <p v-if="selectedYear === startingPoint.year">{{ startingPoint.description }}</p>
                    <p v-else>{{ milestones.find(m => m.year === selectedYear).description }}</p>
                </div>
            </div>
        </transition>
    </div>
</template>


<script>
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

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
    },
    data() {
        return {
            selectedYear: this.startingPoint.year,
            timelineWidth: 0,
            prevSelectedYear: null
        }
    },
    mounted() {
        this.debouncedUpdateViewportWidth = debounce(this.updateViewportWidth, 150);
        window.addEventListener('resize', this.debouncedUpdateViewportWidth);
        this.updateTimelineWidth();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.debouncedUpdateViewportWidth);
    },
    methods: {
        selectYear(year) {
            this.prevSelectedYear = this.selectedYear;
            this.selectedYear = year;
            if (year === this.startingPoint.year) {
                this.timelineWidth = 0;
            } else {
                this.updateTimelineWidth();
            }
        },
        pointClass(year) {
            let classes = ['rounded-full', 'h-8', 'w-8', 'border-4', 'absolute', '-top-4', 'transition-colors', 'duration-300', 'group-hover:border-green-600', 'group-hover:bg-green-600'];
            
            if (this.selectedYear === year) {
                classes.push('border-green-600', 'bg-green-600', 'neon-green');
            } else if (this.milestonesPassed.includes(year) || year === this.startingPoint.year) {
                classes.push('border-green-600', 'bg-white');
            } else {
                classes.push('border-gray-500', 'bg-gray-500');
            }
            
            return classes;
        },
        updateTimelineWidth() {
            if (this.selectedYear === this.startingPoint.year) {
                this.timelineWidth = 0;
            } else {
                const index = this.milestones.findIndex(m => m.year === this.selectedYear);
                const totalMilestones = this.milestones.length;
                this.timelineWidth = (index + 1) / totalMilestones * 100;
            }
        },
        updateViewportWidth() {
            this.updateTimelineWidth();
        }
    },
    computed: {
        milestonesPassed() {
            return this.milestones.filter(m => this.timelineWidth >= this.yearToWidth[m.year]).map(m => m.year);
        },
        SwipeEffect() {
            if (!this.prevSelectedYear) return 'slide-left';
            const prevIndex = this.milestones.findIndex(m => m.year === this.prevSelectedYear);
            const currentIndex = this.milestones.findIndex(m => m.year === this.selectedYear);
            return prevIndex < currentIndex ? 'slide-left' : 'slide-right';
        },
        yearToWidth() {
            const totalMilestones = this.milestones.length;
            const widthPerMilestone = 100 / totalMilestones;

            let widths = {
                'Start': 0
            };

            this.milestones.forEach((milestone, index) => {
                widths[milestone.year] = widthPerMilestone * (index + 1);
            });

            return widths;
        }
    }
}


</script>

<style scoped>


/* Slide Left Transition */
.slide-left-enter-active, .slide-left-leave-active {
    transition: transform 0.5s;
}
.slide-left-enter, .slide-left-leave-to {
    transform: translateX(100%);
}

/* Slide Right Transition */
.slide-right-enter-active, .slide-right-leave-active {
    transition: transform 0.5s;
}
.slide-right-enter, .slide-right-leave-to {
    transform: translateX(-100%);
}
</style>
