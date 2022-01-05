import './styles.scss'

type Props = {
    text: string
}
const AuthButton = ({text} : Props) => {
    return (
        <button type='submit' className='auth-btn'>{text}</button>
    )
}

export default AuthButton
