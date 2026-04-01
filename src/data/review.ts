export const reviews = [
  {
    name: "Ananya Sharma",
    location: "Kolkata",
    text: "Kiran Family Salon And Spa gave me an amazing experience. The staff were friendly, the ambiance was calming, and the service was top-notch.",
    avatarImage: "https://avatars.githubusercontent.com/u/97165289",
  },
  {
    name: "Anuska Roy",
    location: "Kolkata",
    text: "Had a really good experience at Kiran Family Salon And Spa. The staff were friendly and made sure I was comfortable throughout. The service was professional, and they paid attention to small details, which I really appreciated.",
    avatarImage: "",
  },
  {
    name: "Rahul Banerjee",
    location: "Kolkata",
    text: "Truly relaxing and professional service. I felt refreshed and rejuvenated after my visit.",
  },
] satisfies {
  name: string;
  location: string;
  text: string;
  avatarImage?: string;
}[];
