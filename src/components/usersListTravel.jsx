import '../styles/userListTravel.css';

export const UserListTravel = ({ listNames }) => {
    console.log(listNames)
    return (
        <>
            {listNames.map((element) => {
                return (
                    <li className='ListNamesUserReservationAvailable' key={element.user_id}>
                        <img className='userImageReservationTravel' src={element.image} alt="" />
                        <span>{element.name} {element.lastname}</span>
                    </li>
                )
            })}
        </>

    )
}