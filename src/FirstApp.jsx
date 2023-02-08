import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {

    return (
        <>
            <div data-testid="test-title">{title}</div>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: 'Mamoncito, te falto el titulo',
    subTitle: 'Recuerda poner el titulo amiguito(a)',
    name: 'Falto tu nombre wey'
}