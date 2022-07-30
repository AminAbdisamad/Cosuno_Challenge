import { companies } from "../../utils/db";

export const CompanyQuery = {
  company: (parent: any, args: any) => {
    const company = companies.find((c) => c.id === args.id);
    return company;
  },
  companies: (_parent: any, { searchTerm }: { searchTerm: string }) => {
    console.log({ searchTerm });

    if (searchTerm === "") return companies;
    const searchedTerm = companies.filter((c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return searchedTerm;
  },

  getCompanyByCategory: (_parent, { category }) => {
    const filterByCategory = companies.filter((c) => c.category === category);
    return filterByCategory;
  },
};
