import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Band from "./band"
import BandDetail from "./bandDetail";
import Table from 'react-bootstrap/Table';
import { FormattedMessage } from "react-intl";

const { useEffect, useState } = require("react");

function Bands () {
    const [Bands, setBands] = useState([]);
    const params = useParams();
    const [selectedBand, setSelectedBand] = useState([]);

    const clickDetail = (Band) => {
        setSelectedBand(Band);
    }

    useEffect(() => {
        const URL = "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json"
        fetch(URL).then(data => data.json()).then(data => {
            setBands(data);
        })
    }, [selectedBand]);

    return(
        <Container>
            <Row style={{ backgroundColor: '#A6C8CD'}}>
                <h1 style={{textAlign: 'center'}}><FormattedMessage id = "title"/></h1>
            </Row>
            <br></br>
            <Row>
                <Col md={8}>
                    <Table style={{textAlign: 'center'}}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th><FormattedMessage id = "name"></FormattedMessage></th>
                                <th><FormattedMessage id = "country"></FormattedMessage></th>
                                <th><FormattedMessage id = "genre"></FormattedMessage></th>
                                <th><FormattedMessage id = "foundation_year"></FormattedMessage></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Bands?.map((band, i) => 
                                <Band band={band} key={band.id} index={i} onPress={clickDetail} />
                            )}
                        </tbody>
                    </Table>
                </Col>
                <Col md="auto"><BandDetail Band={selectedBand}/></Col>
            </Row>
        </Container>
    )
}

export default Bands;