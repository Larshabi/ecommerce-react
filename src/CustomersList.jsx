import React, {Component} from 'react';


class CustomersList extends Component{
    state = {
    pageTitle:"Customers", 
    customersCount:5,
    customers:[
        {id:1, name:"Lasabi Olalekan", phone:"09059642793", photo:"https://picsum.photos/id/1010/60"},
        {id:2, name:"Odejobi Israel", phone:"08155907497", photo:"https://picsum.photos/id/1011/60"},
        {id:3, name:"Okafor Chisom", phone:null, photo:"https://picsum.photos/id/1012/60"},
        {id:4, name:"Oluwaranti Toluwani", phone:"08111131334", photo:"https://picsum.photos/id/1013/60"}
    ]
    }


    render(){
        return (
            <div>
                <h4 className="border-bottom m-1 p-1">
                    {this.state.pageTitle}
                    <span className="badge bg-secondary m-2">{this.state.customersCount}</span>
                    <button className="btn btn-info" onClick={this.onRefreshClick}>Refresh</button>
                </h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Customer Photo</th>
                            <th>Customer Name</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getCustomerRow()}
                    </tbody>
                </table>
            </div>
        );
    }

    // events in react
    onRefreshClick =()=>    {
        this.setState({
            customersCount:7
        })
    }
    getPhoneToRender=(phone)=>{
        if(phone){
            return phone
        }else{
            return "No Phone"
        }
    }
    getCustomerRow=()=>{
        return(this.state.customers.map((cust, index)=>{
                        return(
                            <tr key={cust.id}>
                            <td>{cust.id}</td>
                            <td>
                                <img src={cust.photo} alt="Customer"/>
                                <div>
                                    <button className="btn btn-sm btn-secondary" onClick={()=>{this.OnChangePictureClick(cust, index)}}>Change Picture</button>
                                </div>
                            </td>
                            <td className={this.checkFirstLetter(cust.name)}>{cust.name}</td>
                            <td>{this.getPhoneToRender(cust.phone)}</td>
                        </tr>
                        );
                    }))
    }
    checkFirstLetter=(name)=>{
        if (name.startsWith("O")){
            return  "green-highlight"
        }else{
            return "red-highlight"
        }
    }
    OnChangePictureClick = (cust, index)=>{
        // console.log(cust);
        // console.log(index);

        var custArr = this.state.customers;
        custArr[index].photo ="https://picsum.photos/id/104/60"

        this.setState({customers:custArr})
    }
}

export default CustomersList;