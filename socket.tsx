'use client'
import React, { createContext, useContext } from "react";
import { io, Socket } from "socket.io-client";
interface SocketContextInterface {
    socket:Socket | null
}
const SocketContext = createContext<SocketContextInterface>({ socket: null })
export const useSocket =()=> useContext(SocketContext)
export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
    const socket = io(`${process.env.NEXT_PUBLIC_APP_ENDPOINT}`);
    return (
        <SocketContext.Provider value={{socket}}>
{children}
        </SocketContext.Provider>
    )
}


