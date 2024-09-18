'use client'

import React from 'react';

import { SessionProvider } from 'next-auth/react';
import { createContext } from 'react';

{/* Added createContext and 'use client because of Runtime Error: React Context is unavailable in Server Components (SessionProvider causes this error because it cannot be rendered on the server-side) */}

const Provider = ({ children, session }) => {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}

export default Provider