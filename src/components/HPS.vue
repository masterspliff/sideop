<template>
  <div class="timeline-container">
    <div class="events-wrapper" ref="horizontalContainer">
      <button 
        v-for="(event, index) in events" 
        :key="event.id"
        class="event-card"
        :class="{
          'active': index === selectedIndex,
        }"
        @click="selectEvent(index)"
        :aria-label="`Event ${index + 1}: ${event.title}`"
      >
        <div class="card-content">
          <img :src="event.imageUrl" :alt="event.title" class="event-image">
          <div class="event-details">
            <h3 class="event-title">{{ event.title }}</h3>
            <p class="event-description">{{ event.description }}</p>
            <span class="event-date">{{ event.date }}</span>
          </div>
        </div>
      </button>
    </div>
    <div class="buttons-container">
      <button 
        @click="previousEvent" 
        class="navigation-button" 
        :disabled="isFirstEvent"
        aria-label="Previous Event"
      >
        Previous
      </button>
      <button 
        @click="nextEvent" 
        class="navigation-button" 
        :disabled="isLastEvent"
        aria-label="Next Event"
      >
        Next
      </button>
    </div>
    <div v-if="selectedIndex !== null" class="detail-container">
      <div class="detail-content">
        <p>{{ selectedEventDetail }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import eventsData from '@/data/eventsData';
import { debounce } from 'lodash';
import { nextTick } from 'vue';

export default {
  name: 'HorizontalTimelineComponent',

  data() {
    return {
      events: eventsData,
      selectedIndex: 0,
    };
  },

  computed: {
    isFirstEvent() {
      return this.selectedIndex <= 0;
    },
    isLastEvent() {
      return this.selectedIndex >= this.events.length - 1;
    },
    selectedEventDetail() {
      if (this.selectedIndex !== null) {
        return this.events[this.selectedIndex].detailedDescription || "No details provided.";
      }
      return "";
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.centerSelectedEvent();
    });
    const debouncedResize = debounce(this.centerSelectedEvent, 200);
    window.addEventListener('resize', debouncedResize);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.centerSelectedEvent);
  },

  methods: {
    centerSelectedEvent() {
      nextTick(() => {
        const container = this.$refs.horizontalContainer;
        const selectedCard = container.children[this.selectedIndex];
        const containerCenter = container.offsetWidth / 2;
        const cardCenter = selectedCard.offsetWidth / 2;
        const scrollAmount = selectedCard.offsetLeft + cardCenter - containerCenter;
        container.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
        });
      });
    },
    selectEvent(index) {
      this.selectedIndex = index;
      this.centerSelectedEvent();
    },
    previousEvent() {
      if (this.selectedIndex > 0) {
        this.selectedIndex -= 1;
        this.centerSelectedEvent();
      }
    },
    nextEvent() {
      if (this.selectedIndex < this.events.length - 1) {
        this.selectedIndex += 1;
        this.centerSelectedEvent();
      }
    }
  },
};

</script>


<style>
.timeline-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

.events-wrapper {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 40px;
  justify-content: flex-start;
  margin-bottom: 20px;
}

.events-wrapper::before,
.events-wrapper::after {
  content: '';
  flex: 1;
}

.events-wrapper::before {
  width: 50%; /* Half the width of the container */
}

/* Hide scrollbar for all devices */
.events-wrapper::-webkit-scrollbar {
  display: none;
}

.events-wrapper {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.event-card {
  flex: 0 0 auto; /* Disable flex-grow and set flex-basis to auto */
  width: 300px; /* Adjust as needed */
  transition: transform 0.3s ease;
  cursor: pointer;
  min-width: 350px; /* Ensure each card is at least 300px wide */
  margin-right: 200px; /* Provide space between cards */
}

.event-card.active {
  transform: scale(1.1);
}

.event-card:last-child {
  margin-right: 0; /* Remove margin for the last card */
}

.card-content {
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  position: relative;
}

.event-card.active .card-content::before {
  content: "";
  position: absolute;
  top: -5px;
  right: -5px;
  bottom: -5px;
  left: -5px;
  border-radius: 15px;
  box-shadow: 0 0 5px rgb(39, 85, 39), 0 0 20px rgb(8, 82, 8);
  z-index: -1;
}

.event-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.event-details {
  padding: 15px;
}

.event-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.event-description {
  font-size: 0.9rem;
  color: #666;
}

.event-date {
  font-size: 0.8rem;
  color: #999;
}

.navigation-button {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
}

.navigation-button:disabled {
  color: #ccc;
  cursor: not-allowed;
}

.buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px; /* Add padding to the sides */
}

.detail-container {
  max-width: 100%;
  box-sizing: border-box;
  padding: 20px;
  animation: fadeIn 0.5s;
}

.detail-content {
  background: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

</style>
