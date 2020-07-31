import React from 'react'


export default class DisplayListItem extends React.Component{


    static defaultProps=''

    render() {
        const { character } = this.props
        return  <h3 className='titleInLI'>{character.name}</h3>
        //  <li className='DisplayListItemLI' key={key}>
        // <h3 className='titleInLI'>{name}</h3>
        //  {clicked && <p className='contentInLI'> {<ContentInLi />}</p>}
        //    </li>
    }
}
