import { useEffect } from "react";
import {Card} from "react-bootstrap";

function BandDetail (props) {
    console.log(props)
    return(
        <Card className= "text-black" style={{ width: '16rem', height: 'auto'}}>
            <Card.Img style={{ width: '12rem', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '1rem'}} src={props.Band?.image} alt={props.Band?.name}></Card.Img>
            <Card.Body>
                <Card.Title >{props.Band?.name}</Card.Title>
                <Card.Text>
                    {props.Band?.description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default BandDetail;