export interface GalleryImage {
  id: number;
  caption: string;
  src: string;
}

/**
 * Placeholder gallery entries. Replace `src` with real photos in
 * src/assets/images/gallery/ once available (see README).
 */
export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, caption: 'Vardhaman College of Engineering Campus', src: '/assets/images/gallery/placeholder-1.jpg' },
  { id: 2, caption: 'Mechanical Engineering Department', src: '/assets/images/gallery/placeholder-2.jpg' },
  { id: 3, caption: 'Conference Auditorium', src: '/assets/images/gallery/placeholder-3.jpg' },
  { id: 4, caption: 'Research Labs', src: '/assets/images/gallery/placeholder-4.jpg' },
  { id: 5, caption: 'Previous Technical Sessions', src: '/assets/images/gallery/placeholder-5.jpg' },
  { id: 6, caption: 'Campus Innovation Center', src: '/assets/images/gallery/placeholder-6.jpg' },
];
