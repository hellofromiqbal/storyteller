import React from 'react';
import {NextUIProvider} from "@nextui-org/system";

type NextUiProviderProps = {
  children: React.ReactNode;
};

export default function NextUiProvider({ children }: NextUiProviderProps) {
  return (
    <NextUIProvider>{children}</NextUIProvider>
  )
}
