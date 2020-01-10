import React from 'react';
import Loader from './loader';
import List from './list';


class ApiFood extends React.Component {

    state = {
        isLoading: true,
        data: []
      };

        
    async componentDidMount() {
        this.setState({isLoading:true})
      
        try {
          
            const response = await fetch(`https://world.openfoodfacts.org/packager-code/emb-35069c/brand/sojasun.json`);
            const json = await response.json();
            this.setState({data:json,isLoading:false})
            

        } catch (err){
            console.log(err.msg);
            this.setState({isLoading:false})
            throw err
        }
    }

  
  
    render() {
      
        const {isLoading,data} = this.state;
        return (
          <>
        {
            isLoading ? <Loader/> : <List data={data} test={this.props.test}/>
          }

          </>
        );
      }
    }
  

export default ApiFood


