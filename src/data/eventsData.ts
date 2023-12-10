// eventsData.js
export interface EventItem {
  id: number;
  title: string;
  description: string;
  date: string; // Changed from year to date to include time of the year
  imageUrl?: string; // Optional placeholder for an image
  detailedDescription?: string; // Optional placeholder for detailed descriptions
}

const eventsData: EventItem[] = [
  {
    id: 1,
    title: 'Origins in Giantcode A/S',
    description: 'Composhield originated as an internal research project within Giantcode A/S.',
    date: '1996',
    imageUrl: '/composhield_logo2.png',
    detailedDescription: 'The inception of Composhield traces back to 1996, rooted in the ambitious research corridors of Giantcode A/S. It was here that a dedicated team of experts began forging the cornerstone of what would become a beacon in ballistic and blast protection technology. This period marked the genesis of a relentless pursuit of excellence, setting the stage for a legacy of innovation in composite materials.'
  },
  {
    id: 2,
    title: 'Establishment of Composhield A/S',
    description: 'The company was established as an independent entity, Composhield A/S.',
    date: '2000',
    imageUrl: '/ComposhieldEurope.jpg',
    detailedDescription: 'In the year 2000, the groundbreaking work within Giantcode A/S culminated in the birth of Composhield A/S as a standalone entity. This pivotal moment was not just about the creation of a new company; it represented the crystallization of a vision to revolutionize protective solutions. Composhield A/S embarked on its journey with a tapestry of patented technologies and a mission to intertwine tomorrows potential with todays technological tapestry.'
  },
  {
    id: 3,
    title: 'Formation of AMTANK Armor LLC',
    description: 'Composhield A/S and American Tank & Fabricating Company formed the joint venture AMTANK Armor LLC to serve the North American market.',
    date: '2007',
    imageUrl: '/AMTANKARMOR.jpg',
    detailedDescription: '2007 marked a strategic expansion as Composhield A/S joined forces with American Tank & Fabricating Company, giving rise to AMTANK Armor LLC. This joint venture was a testament to Composhields global vision and its unwavering commitment to securing lives across continents. Aimed at fortifying the North American defense landscape, AMTANK Armor LLC stood as a bridge connecting innovation with the pressing needs of a dynamic market.'
  },
  {
    id: 4,
    title: 'IDEX 2013 Presentation',
    description: 'At IDEX 2013, Composhield presented a low weight RPG protection kit based on 3D add-on armor modules.',
    date: '2013',
    imageUrl: 'path/to/image.jpg',
    detailedDescription: 'The International Defence Exhibition and Conference (IDEX) 2013 served as a global stage for Composhield A/S to unveil a cutting-edge, low-weight RPG protection kit. Showcasing 3D add-on armor modules, Composhield demonstrated its prowess in merging scientific acumen with practical application. This presentation underscored the companys role as a pioneer, adept at translating complex research into tangible products designed to protect and serve.'
  },
  
  // ... Additional events can be added here following the same structure
];
export default eventsData;
