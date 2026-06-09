export const SITE = {
  name: "Avi Sanan",
  title: "Avi Sanan, REALTOR® | Sutton Group - West Coast Realty",
  brokerage: "Sutton Group - West Coast Realty",
  role: "REALTOR® | Sales Representative",
  phone: "778-387-7001",
  phoneHref: "tel:778-387-7001",
  whatsapp:
    "https://wa.me/17783877001?text=" +
    encodeURIComponent(
      "Hi Avi, I am reviewing your Lower Mainland Capital Framework and would like to schedule a private advisory consultation.",
    ),
  instagram: "https://instagram.com/realestate.avi",
  instagramHandle: "@realestate.avi",
  linkedin: "https://linkedin.com/in/asanan",
  linkedinHandle: "linkedin.com/in/asanan",
  address: {
    street: "205 - 2607 East 49th Avenue",
    city: "Vancouver",
    region: "BC",
    postal: "V5S1J9",
    country: "CA",
  },
  nav: [
    { to: "/", label: "Home" },
    { to: "/buy", label: "Buy" },
    { to: "/sell", label: "Sell" },
    { to: "/listings", label: "Listings" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ] as const,
};
