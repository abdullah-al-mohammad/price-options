import propTypes from 'prop-types'
const Link = ({route}) => {
    return (
        <li className='mr-6 px-6 bg-amber-300 py-1'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};
Link.propTypes ={
    route: propTypes.object
}
export default Link;