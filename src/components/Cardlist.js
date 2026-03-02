import Card from "./Card"

const Cardlist = ({robots}) =>{
    const cardComponent= robots.map(  (robot,index)=>{
        return (
            <Card key = {robot.id} robot={robot}/>
        )
    })

    return(
        <div>
            {cardComponent}
        </div>

    )


}

export default Cardlist