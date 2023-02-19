import { type FC, type ReactNode } from 'react'
import Head from './Head'

interface IPropsRootLayoutEditor {
  children: ReactNode
}

const RootLayoutEditor: FC<IPropsRootLayoutEditor> = ({
  children
}): JSX.Element => {
  return (
    <>
      <Head title='Editor | DavWorSpace' />
      <div className={'layout-editor'}>{children}</div>
    </>
  )
}

export default RootLayoutEditor
