export const loginData: {
  username: string;
  password: string;
} = {
  username: "gunduzhazal@outlook.com",
  password: "Asdfasdf123",
};
export const titlesData: {
  firstTitle: any;
  secondTitle: any;
  thirdTitle: any;
  homePageTitle: any;
} = {
  firstTitle: /Goodreads | Meet your next favorite book/,
  secondTitle: /Sign in/,
  thirdTitle: /Goodreads Sign in/,
  homePageTitle: /Recent updates | Goodreads/,
};
export const baseData: { url: string } = {
  url: "https://www.goodreads.com/",
};

export const searchData: { searchedBook: string; searchResultTitle: any } = {
  searchedBook: "Notes From Underground",
  searchResultTitle: /Search results for \"Notes From Underground\"/,
};
export const otherData: {generalUpdateText: string, profileUrl: string } = {
  generalUpdateText: "I love books!",
  profileUrl: "https://www.goodreads.com/user/show/175589037-hazal",
};
