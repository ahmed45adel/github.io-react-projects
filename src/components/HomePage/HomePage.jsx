import Typical from 'react-typical'

export const HomePage = () => {
    return (
        <Typical
            steps={['Hello', 1000, 'My Name is', 1000, 'Ahmed Adel', 1000]}
            loop={1}
            wrapper="h2"
        />
    )
}
