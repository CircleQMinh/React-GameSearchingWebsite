export default interface ICompany {
  id: number | null;
  company: {
    id: number | null;
    name: string | null;
  } | null;
}
