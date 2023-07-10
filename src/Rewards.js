import './Rewards.scss'
import MainRewards from "./components/Rewards/MainRewards";
import Navigation from "./components/Navigation";

function Rewards() {
    return (
        <div className="rewards">
            <nav>
                <Navigation />
            </nav>

            <main>
                <MainRewards />
            </main>

        </div>
    )
}

export default Rewards