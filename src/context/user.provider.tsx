import { currentUser, CustomJwtPayload } from "@/services/login";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface IContextValue {
  user: CustomJwtPayload | null;
  loading: boolean;
  setUser: (user: CustomJwtPayload | null) => void;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const UserContext = createContext<IContextValue | undefined>(undefined);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<CustomJwtPayload | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const handleUser = async () => {
    const user = await currentUser();
    setUser(user);
    setLoading(false);
  };

  useEffect(() => {
    handleUser();
  }, [loading]);

  return (
    <UserContext.Provider value={{ user, loading, setUser, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
    const context = useContext(UserContext);
    
    if (context === undefined) {
        throw new Error("useUser must be used within a UserProvider");
    }
    
    return context;
}

export default UserProvider;