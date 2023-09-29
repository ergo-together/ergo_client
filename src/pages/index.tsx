import Image from 'next/image'

import { useAppSelector } from '@/hooks'


export default function Home() {

  const user = useAppSelector(state => state.user)

  return (
    <div
      className=''
    ><div>
        fdsaf {user.name}
      </div>
    </div>
  )
}
