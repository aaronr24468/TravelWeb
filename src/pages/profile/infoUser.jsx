export const InfomationUser = ({ data, getEarnings }) => {

    return (
        <>
            <div className="containerInfoName">
                <section className="profileContainerImage">
                    <div className="imgProfile">
                        <img src={data.image} alt="" />
                    </div>
                    <div className="infoProfile">
                        <span className='nameProfile'>{data.name}</span>
                        <span className="username">{data.username}</span>
                        {data.rol === 'user' ? (<span className='rolProfile'>Usuario</span>) : (<span className='rolProfile'>Conductor</span>)}
                    </div>
                </section>
                <section className="stripeStats">
                    <button className="earnings" onClick={getEarnings}>Mis ganancias</button>
                </section>

            </div>


        </>
    )
}