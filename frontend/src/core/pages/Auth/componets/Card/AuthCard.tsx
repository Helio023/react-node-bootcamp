import './styles.scss'

type Props = {
    title: string;
    children: React.ReactNode
}

const AuthCard = ({title, children} : Props) => {
    return (
        <div className='auth-card'>
            <h1 className='auth-card-title'>{title}</h1>

            <div className="auth-card-form">
                {children}
            </div>
        </div>
    )
}

export default AuthCard
