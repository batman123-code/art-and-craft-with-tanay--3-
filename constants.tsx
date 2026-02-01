
import React from 'react';
import { ArtClass, GalleryItem, Testimonial, YouTubeVideo } from './types';

export const COLORS = {
  primary: '#FF6B6B', // Marigold Red-Orange
  secondary: '#4ECDC4', // Deep Teal
  accent1: '#FFD700', // Marigold Yellow
  accent2: '#9B59B6', // Royal Purple
  accent3: '#E67E22', // Saffron
  background: '#FDFBF7', // Cream Parchment
  text: '#2C3E50'
};

export const ART_CLASSES: ArtClass[] = [
  {
    id: '1',
    title: 'Indian Folk Art Mastery',
    description: 'Explore the rich heritage of Madhubani, Warli, and Pattachitra styles.',
    price: '₹2,500/mo',
    image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800&auto=format&fit=crop',
    category: 'Painting'
  },
  {
    id: '2',
    title: 'Water Color Landscapes',
    description: 'Capture the beauty of rural Bengal and urban Kolkata in fluid strokes.',
    price: '₹3,000/mo',
    image: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?q=80&w=800&auto=format&fit=crop',
    category: 'Painting'
  },
  {
    id: '3',
    title: 'Pencil Sketching',
    description: 'Master the art of shading, anatomy, and realistic portraiture.',
    price: '₹2,000/mo',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop',
    category: 'Sketching'
  },
  {
    id: '4',
    title: 'Eco-Friendly Crafts',
    description: 'Create beautiful home decor using traditional Indian clay and recycled materials.',
    price: '₹1,800/mo',
    image: 'https://images.unsplash.com/photo-1459908676235-d5f02a50184b?q=80&w=800&auto=format&fit=crop',
    category: 'Craft'
  }
];

export const GALLERY: GalleryItem[] = [
  { id: '1', url: 'https://picsum.photos/seed/kolkata1/600/800', title: 'Howrah Bridge at Dusk', artist: 'Rohan, Age 12' },
  { id: '2', url: 'https://picsum.photos/seed/kolkata2/800/600', title: 'Durga Puja Sketches', artist: 'Ishita, Age 10' },
  { id: '3', url: 'https://picsum.photos/seed/kolkata3/600/600', title: 'Terracotta Patterns', artist: 'Aryan, Age 15' },
  { id: '4', url: 'https://picsum.photos/seed/kolkata4/800/1000', title: 'The Rickshaw Wallah', artist: 'Sanya, Age 9' },
  { id: '5', url: 'https://picsum.photos/seed/kolkata5/700/500', title: 'Temple Architecture', artist: 'Tanay, Instructor' },
  { id: '6', url: 'https://picsum.photos/seed/kolkata6/500/700', title: 'Floral Mandalas', artist: 'Meera, Age 14' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ananya Chatterjee',
    role: 'Parent from Kolkata',
    text: 'Tanay is a brilliant mentor. He connects with the students using local examples that make art so much more relatable.',
    avatar: 'https://i.pravatar.cc/150?u=ananya'
  },
  {
    id: '2',
    name: 'Rahul Sen',
    role: 'Art Enthusiast',
    text: 'Best art classes in Kolkata! The traditional folk art techniques I learned here are priceless.',
    avatar: 'https://i.pravatar.cc/150?u=rahul'
  }
];

export const BrushStrokeSVG = ({ color = '#FF6B6B', className = '' }: { color?: string, className?: string }) => (
  <svg viewBox="0 0 200 40" className={className} preserveAspectRatio="none">
    <path
      d="M10,20 Q50,5 90,20 T190,20"
      fill="none"
      stroke={color}
      strokeWidth="8"
      strokeLinecap="round"
      strokeDasharray="200"
      strokeDashoffset="200"
    >
      <animate attributeName="stroke-dashoffset" from="200" to="0" dur="1.5s" fill="freeze" />
    </path>
  </svg>
);

export const PaintSplatterSVG = ({ color = '#4ECDC4', className = '' }: { color?: string, className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path
      fill={color}
      d="M50 15c-1.7 0-3.3.4-4.8 1.1-2.1-4.7-6.9-8-12.4-8-7.6 0-13.8 6.2-13.8 13.8 0 1.2.2 2.4.5 3.5C11.9 27.2 6 34.1 6 42.2c0 10.4 8.4 18.8 18.8 18.8 1.4 0 2.8-.2 4.1-.5 3.3 5.4 9.2 8.9 15.9 8.9 5 0 9.6-2 13-5.3 3 5.5 8.9 9.3 15.6 9.3 10 0 18.1-8.1 18.1-18.1 0-2.8-.6-5.4-1.8-7.8 4.7-2.6 7.9-7.6 7.9-13.4 0-8.4-6.8-15.2-15.2-15.2-1.3 0-2.6.2-3.8.5-3.3-5.4-9.3-9-16-9-2.5 0-4.8.5-7 1.4-1.6-4-5.5-6.8-10.1-6.8z"
    />
  </svg>
);

// New Mandala Decorative Element
export const MandalaSVG = ({ color = '#FFE66D', className = '' }: { color?: string, className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} opacity="0.1">
    <circle cx="50" cy="50" r="45" fill="none" stroke={color} strokeWidth="0.5" />
    <circle cx="50" cy="50" r="35" fill="none" stroke={color} strokeWidth="0.5" />
    {[...Array(12)].map((_, i) => (
      <path 
        key={i} 
        d="M50 10 Q60 25 50 40 Q40 25 50 10" 
        fill="none" 
        stroke={color} 
        strokeWidth="0.5" 
        transform={`rotate(${i * 30} 50 50)`}
      />
    ))}
  </svg>
);
