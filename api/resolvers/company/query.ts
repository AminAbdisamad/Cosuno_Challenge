import { companies } from "../../utils/db";

export const CompanyQuery = {
  company: (_parent, args: any) => {
    const company = companies.find((c) => c.id === args.id);
    return company;
  },
  companies: (_parent, { searchTerm }: { searchTerm: string }) => {
    if (searchTerm === "") return companies;
    const searchedTerm = companies.filter((c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return searchedTerm;
  },
};
