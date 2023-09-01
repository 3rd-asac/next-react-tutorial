import { useContext } from 'react'
import { ModalDispatchContext } from '@auth/context/context'

interface openModalParam {
  text: string
}

interface ItemCheckProps {
  id: React.RefObject<HTMLInputElement | null>
  pwd: React.RefObject<HTMLInputElement | null>
  handleOpen: (text: string) => void
}

export const handleItemCheck = (props: ItemCheckProps) => {
  const { id, pwd, handleOpen } = props

  if (id.current !== null && pwd.current !== null) {
    if (id.current.value === '') {
      id.current.focus()
      // 모달창이 열리도록하는 dispatch를 수행할 수 있을듯?
      // dispatch({ type: 'open', text: '이메일을 작성해주세요.', isOpen: true })
      handleOpen('이메일을 작성해주세요.')
      return false
    } else if (pwd.current.value === '') {
      pwd.current.focus()
      //dispatch({ type: 'open', text: '비밀번호를 작성해주세요.', isOpen: true })
      handleOpen('비밀번호를 작성해주세요.')
      return false
    }
    if (id.current.value !== '') {
      const emailForm = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-.]+$/
      if (!emailForm.test(id.current.value)) {
        id.current.focus()
        id.current.value = ''
        handleOpen('이메일을 형식을 맞춰주세요')
        return false
      }
    }
    if (pwd.current.value !== '') {
      const pwdForm =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#$(^)])[A-Za-z\d@$!%*?&#$(^)]{8,}$/
      if (!pwdForm.test(pwd.current.value)) {
        pwd.current.focus()
        pwd.current.value = ''
        handleOpen('비밀번호 형식을 맞춰주세요')
        return false
      } else {
        console.log(id.current.value)
        console.log(pwd.current.value)
        return true
      }
    }
  }
}
