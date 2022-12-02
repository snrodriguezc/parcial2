function Band(props) {
    return(
        <tr>
            <th>{props.index + 1}</th>
            <td><p onClick={props.onPress.bind(this, props.band)} style={{cursor: 'pointer', color:'#319CFF'}}>{props.band.name}</p></td>
            <td>{props.band.country}</td>
            <td>{props.band.genre}</td>
            <td>{props.band.foundation_year}</td>
        </tr>
    )
}

export default Band;