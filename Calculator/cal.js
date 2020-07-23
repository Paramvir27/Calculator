import React,{Component} from 'react';
import './cal.css';

class Calculator extends Component
{
    constructor()
    {
        super();
        this.state = {
            value:"",
            x:React.createRef(),
        }
    }

    button = (v,id,cl) => {
        let flag;
        
        if(v=="CLR")
            flag = () => {this.clearValue()};
        else if(v=="Del")
            flag = () => {this.del()};
        else if(v=="=")
            flag = () => {this.equal()};
        else
            flag = () => {this.inputValue(v)};
        

        let a = (<>
            <button id = {id} className = {`d-flex justify-content-center 
            align-items-center w-100 ${cl}`} onClick={flag}>{v}</button>
        </>)

        return a;
    }

    equal = () => {
        let h = this.state.value;
        let k = h.replace(/x/g,"*");
        try
        {
            if(h!="")
            {
                let a = String(eval(k));
                this.setState({value:a},()=>{
                    this.state.x.current.focus();
                })
            }
              
        }
        catch(err)
        {
            alert("Invalid Expression");
            this.state.x.current.focus();
        }
    }

    del = () => {
        let h = this.state.value;
        let k;
        if(h!=undefined)
        {
            k = h.split("");
            k.pop();
            k = k.join("");
            this.setState({
                value:k,
            })
        }
    }

    inputValue = (v) =>
    {
        let h = this.state.value;
        h += v;

        let p = h.split("");
        let o = ["+","-","*","/",".","x"];
        
        let b = p[p.length-1];
        let flag = 0;
        
        if(o.indexOf(b)!= -1)
        {
             if(h.length>1)
             {
                if(o.indexOf(p[p.length-2])!=-1)
                {
                   // console.log("Same",flag);
                    
                    flag = 1;
                }
             }
        }

        if(flag!=1)
        {
            this.setState({
                value:h,
            },()=>{
                this.state.x.current.focus();
            })
        }
        else
        {
            this.state.x.current.focus();

        }
    }

    clearValue = () =>
    {
        this.setState({
            value:"",
        },()=>{
            this.state.x.current.focus();
        })
    }

    update = (event) => {
        let k = event.target.value;
        let p = k.split("");
        let o = ["+","-","*","/","."];
        
        let h = p[p.length-1];
        let flag = 0;
        
        if(o.indexOf(h)!= -1)
        {
             if(k.length>1)
             {
                if(o.indexOf(p[p.length-2])!=-1)
                {
                    //console.log("Same",flag);
                    
                    flag = 1;
                }
             }
        }
        //console.log(flag);

        let g = k[k.length-1];
        
        let n = ["1","2","3","4","5","6","7","8","9","0","+","/",".","*","-"]
        if(n.indexOf(g)!= -1 || k=="")        
        {
            if(flag!=1)
            this.setState({ 
                value:k,
            })
        }
        
    }

    press = (event) => {
        if(event.keyCode === 13)
        {
            this.equal();
        }
    }

    render()
    {
        let fh = {
            height:`100vh`,
        }



        
        return(<>
            <div className = "container" onKeyDown={this.press}>
                <div className="row d-flex align-items-center" style={fh}>
                    <div className = "col-12">                        
                        <div className="row">
                            <div className="col-12 p-0">
                                <input type = "text" spellCheck="false" ref={this.state.x} placeholder="0.00" onChange={this.update} value={this.state.value} id = "t1" className="w-100 box"/>
                            </div>
                        </div>

                        <div className="row">                            

                            <div className = "col-3 bg-info p-0">
                                {this.button("CLR","op6","opButton bg-danger text-white")}
                            </div>
                            
                            <div className = "col-6 bg-info p-0">
                                {this.button("Del","op7","opButton bg-secondary text-white")}
                            </div>
                           
                            <div className = "col-3 bg-info p-0">
                                {this.button("/","op1","opButton bg-warning")}
                            </div>    
                        </div>

                        <div className="row">
                            <div className = "col-3 bg-info p-0">
                                {this.button("7","n7","numButton bg-light")}
                            </div>
                            <div className = "col-3 bg-info p-0">
                                {this.button("8","n8","numButton bg-light")}
                            </div>
                            <div className = "col-3 bg-info p-0">
                                {this.button("9","n9","numButton bg-light")}
                            </div>
                            <div className = "col-3 bg-info p-0">
                                {this.button("x","op2","opButton  bg-warning")}
                            </div>                            
                        </div>

                        <div className="row">
                            <div className = "col-3 bg-info p-0">
                                {this.button("4","n4","numButton bg-light")}
                            </div>
                            <div className = "col-3 bg-info p-0">
                                {this.button("5","n5","numButton bg-light")}
                            </div>
                            <div className = "col-3 bg-info p-0">
                                {this.button("6","n6","numButton bg-light")}
                            </div>
                            <div className = "col-3 bg-info p-0">
                                {this.button("-","op3","opButton  bg-warning")}
                            </div>                            
                        </div>

                        <div className="row">
                            <div className = "col-3 bg-info p-0">
                                {this.button("1","n1","numButton bg-light")}
                            </div>
                            <div className = "col-3 bg-info p-0">
                                {this.button("2","n2","numButton bg-light")}
                            </div>
                            <div className = "col-3 bg-info p-0">
                                {this.button("3","n3","numButton bg-light")}
                            </div>
                            <div className = "col-3 bg-info p-0">
                                {this.button("+","op4","opButton  bg-warning")}
                            </div>                            
                        </div>

                        <div className="row">
                            <div className = "col-3 bg-info p-0">
                                {this.button("0","nz1","numButton bg-light")}
                            </div>

                            <div className = "col-3 bg-info p-0">
                                {this.button("00","nz2","numButton bg-light")}
                            </div>


                            <div className = "col-3 bg-info p-0">
                                {this.button(".","dot","numButton bg-light")}
                            </div>
                           
                            <div className = "col-3 p-0">
                                {this.button("=","op5","opButton bg-success text-white")}
                            </div>    

                            <div className="col-12 p-0">
                                <h5 className="text-secondary font-weight-light text-center">&copy; Designed By: <a href="https://paramvir27.github.io/">Paramvir Singh</a></h5>
                            </div>                  
                                                       
                        </div>
                    </div>
                </div>

            </div>
        </>)
    }

    componentDidMount()
    {
        this.state.x.current.focus();
    }
}

export default Calculator;
