import { createContext, useContext, useState } from "react";

const SelectedOptionsContext = createContext();

export function SelectedOptionsProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [packageid, setPackageId] = useState();
  const [date, setDate] = useState("");
  const [customerId, setCustomerId] = useState();
  const [swari, setSwari] = useState([]);
  const [packageName, setPackageName] = useState("");
  const login = (userData) => {
    sessionStorage.setItem("isAuthenticated", "true");
    sessionStorage.setItem("userinfo", JSON.stringify(userData));
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("userinfo");
    setIsAuthenticated(false);
  };

  const packSetter = (id) => {
    setPackageId(id);
  };

  const packageSetter = (pname) => {
    setPackageName(pname);
  };

  const dateSetter = (datePassed) => {
    setDate(datePassed);
  };

  const swariSetter = (data) => {
    setSwari(data);
  };

  const customerIdSetter = (id) => {
    setCustomerId(id);
  };
  return (
    <SelectedOptionsContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        packageid,
        packSetter,
        date,
        dateSetter,
        customerId,
        customerIdSetter,
        swari,
        swariSetter,
        packageName,
        packageSetter,
      }}
    >
      {children}
    </SelectedOptionsContext.Provider>
  );
}

export function useSelectedOptions() {
  return useContext(SelectedOptionsContext);
}
