import { ReactElement, ReactNode } from 'react'

type PropsWithChildren<P> = P & { children?: ReactNode }

export type RFC<P = {}> = {
  (props: P): ReactElement | null
  displayName?: string
}

export type RFCC<P> = RFC<PropsWithChildren<P>>
