export type TService = {
  id: string;
  name: string;
  logo: string;
  description: string;
  videoUrl: string;
  createdAt: string;
  updatedAt: string;
  serviceGallery: TServiceGallery[];
};

export type TServiceGallery = {
  id: string;
  serviceId: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};
