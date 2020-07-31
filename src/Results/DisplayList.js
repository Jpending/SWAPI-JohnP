import React from 'react'
import DisplayListItem from './DisplayListItem'

export default class DisplayList extends React.Component {
    //static defaultProps={}

render(){
    const { results } = this.props
    //console.log(results)
    return (
        //console.log(props),
        <ul className='DisplayListUL'>
            {results && results.map((character,i) =>
                <li className='DisplayListItemLI'
                    key={i}>
                    <DisplayListItem character={character}
                    />
                </li>
            )}
        </ul>
    )

}
}
