export const Footer=()=>{
    var today = new Date();
    return (

        <footer>
             <div className="container">
                <div className="footer-content">
           <h5>Trading App - {today.getFullYear()} <b> Created By : Harshil Patel</b></h5>
      

            </div>
            </div>
    
            
        </footer>
    )
}