import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const AppQueryClientProvider = ({ children }) => {
 const queryClient = new QueryClient();

 return (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
 );
};

export default AppQueryClientProvider;
