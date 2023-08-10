<template>
	<section class="cd-horizontal-timeline">
	  <div class="timeline">
		<div class="events-wrapper" ref="eventsWrapper">
		  <div class="events">
			<ol>
			  <li v-for="event in timelineEvents" :key="event.date">
				<!-- Added click event listener to handle when an event is clicked -->
				<a href="#0" :data-date="event.date" @click.prevent="handleEventClick($event)">{{ formatDate(event.date) }}</a>
			  </li>
			</ol>
			<!-- Added ref attribute for filling-line -->
			<span class="filling-line" ref="fillingLine" aria-hidden="true"></span>
		  </div>
		</div>
		<div :class="computedClass">
		  <!-- Added ref attribute for timelineNavigation -->
		  <ul class="cd-timeline-navigation" ref="timelineNavigation">
			<li><a href="#0" class="prev inactive" @click.prevent="handlePrevClick">Prev</a></li>
			<li><a href="#0" class="next" @click.prevent="handleNextClick">Next</a></li>
		  </ul>
		</div>
	  </div>
	  <!-- Added ref attribute for eventsContent -->
	  <div class="events-content" ref="eventsContent">
		<ol>
		  <li v-for="event in timelineEvents" :key="event.date" :data-date="event.date">
			<h2>{{ event.title }}</h2>
			<em>{{ event.fullDate }}</em>
			<p>{{ event.description }}</p>
		  </li>
		</ol>
	  </div>
	</section>
  </template>
  
  
  <script>
export default {
  data() {
	return {
    // ... other data properties
    timelineEvents: [
      {
        date: 'start',
        title: 'Start',
        fullDate: 'Beginning of the timeline',
        description: ''
      },
      {
        date: '1996',
        title: '1996',
        fullDate: '1996',
        description: 'Started as an internal research project.'
      },
      {
        date: '2000',
        title: '2000',
        fullDate: '2000',
        description: 'Composhield A/S was formed.'
      },
      {
        date: '2007',
        title: '2007',
        fullDate: '2007',
        description: 'Formed a joint-venture, AMTANK Armor LLC.'
      },
      {
        date: 'history',
        title: 'History',
        fullDate: '',
        description: 'Composhield A/S started in 1996 as an internal research project in the company Giantcode A/S. From 1996 and until the forming of the company Composhield A/S, several project teams were developing new protection technologies for the future. All efforts were purely put into research as the strategy was to develop unique patented technologies before any commercialization. All research was done in close cooperation with international universities, armed forces, and some of the largest global defense companies. Composhield A/S was then formed in year 2000 and has today seven patents and patent pending technologies and products. In 2007 Composhield A/S formed a joint-venture, AMTANK Armor LLC., together with American Tank & Fabricating Company, to serve the North American market. Our strategic intent is to develop tomorrows technologies for todays global market, with the main focus on strategic partnership and superior quality.'
      }
    ],

      timelines: null,
      eventsMinDistance: 60,
      timelineComponents: {
        timelineWrapper: null,
        eventsWrapper: null,
        fillingLine: null,
        timelineEvents: null,
        timelineDates: [],
        eventsMinLapse: null,
        timelineNavigation: null,
        eventsContent: null
      }
    };
  },

  mounted() {
    this.initTimeline();
  },

  methods: {
    initTimeline() {
      // Cache timeline components
      this.timelineComponents.timelineWrapper = this.$refs.timelineWrapper;
      this.timelineComponents.eventsWrapper = this.$refs.eventsWrapper;
      this.timelineComponents.fillingLine = this.$refs.fillingLine;
      this.timelineComponents.timelineEvents = this.$refs.timelineEvents;
      this.timelineComponents.timelineDates = this.parseDate(this.timelineComponents.timelineEvents);
      this.timelineComponents.eventsMinLapse = this.minLapse(this.timelineComponents.timelineDates);
      this.timelineComponents.timelineNavigation = this.$refs.timelineNavigation;
      this.timelineComponents.eventsContent = this.$refs.eventsContent;

      this.setDatePosition();
      const timelineTotWidth = this.setTimelineWidth();
      // Assuming you have a method or computed property to add the 'loaded' class
      this.timelines = 'loaded';
    },

    handlePrevClick() {
      this.updateSlide('prev');
    },

    handleNextClick() {
      this.updateSlide('next');
    },

    translateTimeline(value, totWidth) {
      const eventsWrapper = this.timelineComponents.eventsWrapper;
      value = Math.max(value, 0); // only negative translate value
      value = Math.min(value, totWidth); // do not translate more than timeline width
      this.setTransformValue(eventsWrapper, 'translateX', `${value}px`);
      // update navigation arrows visibility
      if (value === 0) {
        this.timelineComponents.timelineNavigation.querySelector('.prev').classList.add('inactive');
      } else {
        this.timelineComponents.timelineNavigation.querySelector('.prev').classList.remove('inactive');
      }
      if (value === totWidth) {
        this.timelineComponents.timelineNavigation.querySelector('.next').classList.add('inactive');
      } else {
        this.timelineComponents.timelineNavigation.querySelector('.next').classList.remove('inactive');
      }
    },

    updateFilling(selectedEvent, filling, totWidth) {
      const eventStyle = window.getComputedStyle(selectedEvent);
      const eventLeft = parseFloat(eventStyle.left) + parseFloat(eventStyle.width) / 2;
      const scaleValue = eventLeft / totWidth;
      this.setTransformValue(filling, 'scaleX', scaleValue);
    },

    setDatePosition() {
      this.timelineComponents.timelineDates.forEach((date, i) => {
        const distance = this.daydiff(this.timelineComponents.timelineDates[0], date);
        const distanceNorm = Math.round(distance / this.timelineComponents.eventsMinLapse) + 2;
        this.timelineComponents.timelineEvents[i].style.left = `${distanceNorm * this.eventsMinDistance}px`;
      });
    },

    setTimelineWidth() {
      const timeSpan = this.daydiff(this.timelineComponents.timelineDates[0], this.timelineComponents.timelineDates[this.timelineComponents.timelineDates.length - 1]);
      const timeSpanNorm = Math.round(timeSpan / this.timelineComponents.eventsMinLapse) + 4;
      const totalWidth = timeSpanNorm * this.eventsMinDistance;
      this.timelineComponents.eventsWrapper.style.width = `${totalWidth}px`;
      this.updateFilling(this.timelineComponents.timelineEvents[0], this.timelineComponents.fillingLine, totalWidth);
      return totalWidth;
    },

    updateSlide(direction) {
      const timelineTotWidth = this.setTimelineWidth();
      const translateValue = this.getTranslateValue(this.timelineComponents.eventsWrapper);
      const wrapperWidth = parseFloat(this.timelineComponents.timelineWrapper.style.width);

      if (direction === 'next') {
        this.translateTimeline(translateValue - wrapperWidth + this.eventsMinDistance, wrapperWidth - timelineTotWidth);
      } else {
        this.translateTimeline(translateValue + wrapperWidth - this.eventsMinDistance);
      }
    },

    // ... other methods ...

    formatDate(date) {
      const dateObj = new Date(date);
      return dateObj.getFullYear().toString();
    },

    parseDate(events) {
      return events.map(event => {
        const dateComp = event.dataset.date.split('/');
        return new Date(dateComp[2], dateComp[1] - 1, dateComp[0]);
      });
    },

    daydiff(first, second) {
      return Math.round((second - first) / (1000 * 60 * 60 * 24)); // Difference in days
    },

    minLapse(dates) {
      const dateDistances = dates.slice(1).map((date, i) => this.daydiff(dates[i], date));
      return Math.min(...dateDistances);
    },

    getTranslateValue(timeline) {
      const timelineStyle = window.getComputedStyle(timeline);
      const timelineTranslate = timelineStyle.transform || timelineStyle.webkitTransform || timelineStyle.mozTransform;
      const match = /matrix\(\d, \d, \d, \d, (-?\d+\.?\d*), \d\)/.exec(timelineTranslate);
      return match ? parseFloat(match[1]) : 0;
    },

    setTransformValue(element, property, value) {
      element.style.transform = `${property}(${value})`;
      element.style.webkitTransform = `${property}(${value})`;
      element.style.mozTransform = `${property}(${value})`;
      element.style.msTransform = `${property}(${value})`;
      element.style.oTransform = `${property}(${value})`;
    }
  }
};
</script>

<style scoped>
/* -------------------------------- 

Primary style

-------------------------------- */
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro);
*, *::after, *::before {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family: "Source Sans Pro", sans-serif;
  color: #383838;
  background-color: #f8f8f8;
}

a {
  color: #7b9d6f;
  text-decoration: none;
}

/* -------------------------------- 

Main Components 

-------------------------------- */
.cd-horizontal-timeline {
  opacity: 0;
  margin: 2em auto;
  -webkit-transition: opacity 0.2s;
  -moz-transition: opacity 0.2s;
  transition: opacity 0.2s;
}
.cd-horizontal-timeline::before {
  /* never visible - this is used in jQuery to check the current MQ */
  content: 'mobile';
  display: none;
}
.cd-horizontal-timeline.loaded {
  /* show the timeline after events position has been set (using JavaScript) */
  opacity: 1;
}
.cd-horizontal-timeline .timeline {
  position: relative;
  height: 100px;
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
}
.cd-horizontal-timeline .events-wrapper {
  position: relative;
  height: 100%;
  margin: 0 40px;
  overflow: hidden;
}
.cd-horizontal-timeline .events-wrapper::after, .cd-horizontal-timeline .events-wrapper::before {
  /* these are used to create a shadow effect at the sides of the timeline */
  content: '';
  position: absolute;
  z-index: 2;
  top: 0;
  height: 100%;
  width: 20px;
}
.cd-horizontal-timeline .events-wrapper::before {
  left: 0;
  background-image: -webkit-linear-gradient( left , #f8f8f8, rgba(248, 248, 248, 0));
  background-image: linear-gradient(to right, #f8f8f8, rgba(248, 248, 248, 0));
}
.cd-horizontal-timeline .events-wrapper::after {
  right: 0;
  background-image: -webkit-linear-gradient( right , #f8f8f8, rgba(248, 248, 248, 0));
  background-image: linear-gradient(to left, #f8f8f8, rgba(248, 248, 248, 0));
}
.cd-horizontal-timeline .events {
  /* this is the grey line/timeline */
  position: absolute;
  z-index: 1;
  left: 0;
  top: 49px;
  height: 2px;
  /* width will be set using JavaScript */
  background: #dfdfdf;
  -webkit-transition: -webkit-transform 0.4s;
  -moz-transition: -moz-transform 0.4s;
  transition: transform 0.4s;
}
.cd-horizontal-timeline .filling-line {
  /* this is used to create the green line filling the timeline */
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #7b9d6f;
  -webkit-transform: scaleX(0);
  -moz-transform: scaleX(0);
  -ms-transform: scaleX(0);
  -o-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -ms-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
  -webkit-transition: -webkit-transform 0.3s;
  -moz-transition: -moz-transform 0.3s;
  transition: transform 0.3s;
}
.cd-horizontal-timeline .events a {
  position: absolute;
  bottom: 0;
  z-index: 2;
  text-align: center;
  font-size: 1.3rem;
  padding-bottom: 15px;
  color: #383838;
  /* fix bug on Safari - text flickering while timeline translates */
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
}
.cd-horizontal-timeline .events a::after {
  /* this is used to create the event spot */
  content: '';
  position: absolute;
  left: 50%;
  right: auto;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
  bottom: -5px;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  border: 2px solid #dfdfdf;
  background-color: #f8f8f8;
  -webkit-transition: background-color 0.3s, border-color 0.3s;
  -moz-transition: background-color 0.3s, border-color 0.3s;
  transition: background-color 0.3s, border-color 0.3s;
}
.no-touch .cd-horizontal-timeline .events a:hover::after {
  background-color: #7b9d6f;
  border-color: #7b9d6f;
}
.cd-horizontal-timeline .events a.selected {
  pointer-events: none;
}
.cd-horizontal-timeline .events a.selected::after {
  background-color: #7b9d6f;
  border-color: #7b9d6f;
}
.cd-horizontal-timeline .events a.older-event::after {
  border-color: #7b9d6f;
}
@media only screen and (min-width: 1100px) {
  .cd-horizontal-timeline {
    margin: 6em auto;
  }
  .cd-horizontal-timeline::before {
    /* never visible - this is used in jQuery to check the current MQ */
    content: 'desktop';
  }
}

.cd-timeline-navigation a {
  /* these are the left/right arrows to navigate the timeline */
  position: absolute;
  z-index: 1;
  top: 50%;
  bottom: auto;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  height: 34px;
  width: 34px;
  border-radius: 50%;
  border: 2px solid #dfdfdf;
  /* replace text with an icon */
  overflow: hidden;
  color: transparent;
  text-indent: 100%;
  white-space: nowrap;
  -webkit-transition: border-color 0.3s;
  -moz-transition: border-color 0.3s;
  transition: border-color 0.3s;
}
.cd-timeline-navigation a::after {
  /* arrow icon */
  content: '';
  position: absolute;
  height: 16px;
  width: 16px;
  left: 50%;
  top: 50%;
  bottom: auto;
  right: auto;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  -o-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  background: url(../img/cd-arrow.svg) no-repeat 0 0;
}
.cd-timeline-navigation a.prev {
  left: 0;
  -webkit-transform: translateY(-50%) rotate(180deg);
  -moz-transform: translateY(-50%) rotate(180deg);
  -ms-transform: translateY(-50%) rotate(180deg);
  -o-transform: translateY(-50%) rotate(180deg);
  transform: translateY(-50%) rotate(180deg);
}
.cd-timeline-navigation a.next {
  right: 0;
}
.no-touch .cd-timeline-navigation a:hover {
  border-color: #7b9d6f;
}
.cd-timeline-navigation a.inactive {
  cursor: not-allowed;
}
.cd-timeline-navigation a.inactive::after {
  background-position: 0 -16px;
}
.no-touch .cd-timeline-navigation a.inactive:hover {
  border-color: #dfdfdf;
}

.cd-horizontal-timeline .events-content {
  position: relative;
  width: 100%;
  margin: 2em 0;
  overflow: hidden;
  -webkit-transition: height 0.4s;
  -moz-transition: height 0.4s;
  transition: height 0.4s;
}
.cd-horizontal-timeline .events-content li {
  position: absolute;
  z-index: 1;
  width: 100%;
  left: 0;
  top: 0;
  -webkit-transform: translateX(-100%);
  -moz-transform: translateX(-100%);
  -ms-transform: translateX(-100%);
  -o-transform: translateX(-100%);
  transform: translateX(-100%);
  padding: 0 5%;
  opacity: 0;
  -webkit-animation-duration: 0.4s;
  -moz-animation-duration: 0.4s;
  animation-duration: 0.4s;
  -webkit-animation-timing-function: ease-in-out;
  -moz-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
}
.cd-horizontal-timeline .events-content li.selected {
  /* visible event content */
  position: relative;
  z-index: 2;
  opacity: 1;
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  -ms-transform: translateX(0);
  -o-transform: translateX(0);
  transform: translateX(0);
}
.cd-horizontal-timeline .events-content li.enter-right, .cd-horizontal-timeline .events-content li.leave-right {
  -webkit-animation-name: cd-enter-right;
  -moz-animation-name: cd-enter-right;
  animation-name: cd-enter-right;
}
.cd-horizontal-timeline .events-content li.enter-left, .cd-horizontal-timeline .events-content li.leave-left {
  -webkit-animation-name: cd-enter-left;
  -moz-animation-name: cd-enter-left;
  animation-name: cd-enter-left;
}
.cd-horizontal-timeline .events-content li.leave-right, .cd-horizontal-timeline .events-content li.leave-left {
  -webkit-animation-direction: reverse;
  -moz-animation-direction: reverse;
  animation-direction: reverse;
}
.cd-horizontal-timeline .events-content li > * {
  max-width: 800px;
  margin: 0 auto;
}
.cd-horizontal-timeline .events-content h2 {
  font-weight: bold;
  font-size: 2.6rem;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  line-height: 1.2;
}
.cd-horizontal-timeline .events-content em {
  display: block;
  font-style: italic;
  margin: 10px auto;
}
.cd-horizontal-timeline .events-content em::before {
  content: '- ';
}
.cd-horizontal-timeline .events-content p {
  font-size: 1.4rem;
  color: #959595;
}
.cd-horizontal-timeline .events-content em, .cd-horizontal-timeline .events-content p {
  line-height: 1.6;
}
@media only screen and (min-width: 768px) {
  .cd-horizontal-timeline .events-content h2 {
    font-size: 7rem;
  }
  .cd-horizontal-timeline .events-content em {
    font-size: 2rem;
  }
  .cd-horizontal-timeline .events-content p {
    font-size: 1.8rem;
  }
}

@-webkit-keyframes cd-enter-right {
  0% {
    opacity: 0;
    -webkit-transform: translateX(100%);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0%);
  }
}
@-moz-keyframes cd-enter-right {
  0% {
    opacity: 0;
    -moz-transform: translateX(100%);
  }
  100% {
    opacity: 1;
    -moz-transform: translateX(0%);
  }
}
@keyframes cd-enter-right {
  0% {
    opacity: 0;
    -webkit-transform: translateX(100%);
    -moz-transform: translateX(100%);
    -ms-transform: translateX(100%);
    -o-transform: translateX(100%);
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -ms-transform: translateX(0%);
    -o-transform: translateX(0%);
    transform: translateX(0%);
  }
}
@-webkit-keyframes cd-enter-left {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0%);
  }
}
@-moz-keyframes cd-enter-left {
  0% {
    opacity: 0;
    -moz-transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    -moz-transform: translateX(0%);
  }
}
@keyframes cd-enter-left {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -ms-transform: translateX(0%);
    -o-transform: translateX(0%);
    transform: translateX(0%);
  }
}

</style>