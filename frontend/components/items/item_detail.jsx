import React from 'react'


class ItemDetail extends React.Component {

    constructor(props) {
        super(props)

        this.isLoaded = this.isLoaded.bind(this)
    }



    isLoaded() {
        return (this.props.item !== undefined)
    }

    render() {

        const { item } = this.props
        console.log(item)

        return (

            <li>
                Name:
                {this.isLoaded() ? item.name : "Loading"}

                <img src={this.isLoaded() ? item.imageUrl : "" }></img>
            </li>

        )
    }
}

export default ItemDetail