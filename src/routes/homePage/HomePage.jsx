import SearchBar from '../../components/searchbar/SearchBar'
import './homePage.scss'

const HomePage = () => {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className='wrapper'>
                    <h2 className='title'>Find Real Estate & Get Your Dream Place</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptates dicta ex est, similique libero dolorum, nostrum earum animi doloribus laborum explicabo cum? Eos iste delectus quis expedita. Mollitia, voluptatem.</p>
                    <SearchBar />
                    <div className='boxes'>
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Awards Gained</h2>
                        </div>
                        <div className="box">
                            <h1>2000</h1>
                            <h2>Properties Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="'../../../public/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage
