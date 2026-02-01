
export interface ArtClass {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  category: 'Painting' | 'Sketching' | 'Craft' | 'Digital';
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  artist: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface YouTubeVideo {
  id: string;
  title: string;
  thumb: string;
  views: string;
}
