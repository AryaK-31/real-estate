import Card from '../../components/card/Card'
import Filter from '../../components/filter/Filter'
import Map from '../../components/map/Map'
import { listData } from '../../lib/listData'
import './listPage.scss'

const listPage = () => {

    const data = listData

    return (
        <div className='listPage'>
            <div className="listContainer">
                <Filter />
                <div className="wrapper">
                    {
                        data.map((item) => (
                            <Card key={item.id} item={item} />
                        ))
                    }
                </div>

            </div>
            <div className="mapContainer">
                <Map items={data} />
            </div>
        </div>
    )
}

export default listPage
