import React from 'react';

/**
 * App
 *
 * Simple react js fetch example
 */


class App extends React.Component {

    /**
     * constructor
     *
     * @object  @props  parent props
     * @object  @state  component state
     */
    constructor(props) {

        super(props);
        //this.change = this.change.bind(this);
        this.state = {
            items: [],
            isLoaded: false,
            page: 1,
        }

    }
    // refreshPage() {
    //   this.setState({page: 2});
    //   App.componentDidMount();
    //   // window.location.reload(false);
    // }
    

    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
    change() {
        // console.log(i)
        if (this.state.page == 1) {
          this.setState({
            page : 2
          })
        }
        if (this.state.page == 2) {
          this.setState({
            page : 1
          })
        }
        
        fetch('https://reqres.in/api/users?page='+this.state.page)
        .then(res => res.json())
        .then(json => {
            this.setState({
                items: json.data,
                isLoaded: true,
            })
        }).catch((err) => {
            console.log(err);
        });
    }
    componentDidMount() {
        fetch('https://reqres.in/api/users?page='+this.state.page)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json.data,
                    isLoaded: true,
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    /**
     * render
     *
     * Render UI
     */
    render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        
        return (
            <div className="App">
              List of users in page
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            Name: {item.first_name}  {item.last_name}  
                            <br></br>
                            Email: {item.email}
                            <hr></hr>
                        </li>
                    ))}
                </ul>
                <button onClick = {this.change.bind(this)}> Next </button>


            </div>
        );

    }

}

export default App;