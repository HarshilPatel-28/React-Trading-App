import { AutoComplete } from "../components/AutoComplete"
import { StockList } from "../components/StockList"
import REACTLOGO from "../img/logo.png"
import { Footer } from "../components/Footer"
export const StockOverviewPage=()=>{

    return <div>
       
            <img className="logo" src={REACTLOGO}  />
       
        <AutoComplete/>
        <StockList/>
        <Footer/>

    </div>
}