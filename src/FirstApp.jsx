import PropTypes from 'prop-types';

export const FirstApp = ({title,subTitle}) =>{

    return(
        <>
        <h1>{title}</h1>
            {/* <h1>{JSON.stringify(newMessage)}</h1> */}
            <p>{subTitle}</p>
        </>
    )
}

FirstApp.propTypes = {
    title:PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: 'Mamoncito, te falto el titulo',
    subTitle: 'Recuerda poner el titulo amiguito(a)'
}