import React, { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	let [profile, setProfile] = useState({});
	let [tokenData, setTokenData] = useState({});
	let [tokens, setTokens] = useState({});

	return (
		<AuthContext.Provider
			value={{ profile, setProfile, tokenData, setTokenData, tokens, setTokens }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => React.useContext(AuthContext);
