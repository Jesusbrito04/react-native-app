import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepositories = () => {
  const { data, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
  });
  return { data, loading };
};

export default useRepositories;
