import React from 'react';
import { useAuth } from '../context/AuthProvider';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
	let { tokens } = useAuth();

	if (!tokens || !tokens.access_token || tokens.access_token === '') {
		// console.log(`Navigate to="/sign-in"`, { tokens });
		return <Navigate to="/sign-in" />;
	}

	return <Outlet />;
};
